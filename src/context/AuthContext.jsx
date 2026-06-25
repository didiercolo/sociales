import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { supabase } from '../supabase/client';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

// Pull the profile row for a signed-in user. Returns null if none exists yet
// (e.g. between auth sign-up and the profile insert during registration).
const fetchProfile = async (userId) => {
    const { data } = await supabase
        .from('profiles')
        .select('id, nickname, tier, tierSubject:tier_subject, score, questionsToday:questions_today')
        .eq('id', userId)
        .maybeSingle();
    return data;
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    // Monotonic guard so a slower/earlier profile fetch can't overwrite a newer one
    // (notably the SIGNED_IN fetch that runs before registration inserts the row).
    const profileSeq = useRef(0);
    const userRef = useRef(null);
    const mounted = useRef(true);

    const loadProfile = async (user) => {
        const seq = ++profileSeq.current;
        const profile = user ? await fetchProfile(user.id) : null;
        if (mounted.current && seq === profileSeq.current) setUserProfile(profile);
    };

    useEffect(() => {
        mounted.current = true;

        const applySession = async (session) => {
            const user = session?.user ?? null;
            userRef.current = user;
            if (mounted.current) setCurrentUser(user);
            await loadProfile(user);
            if (mounted.current) setLoading(false);
        };

        supabase.auth.getSession().then(({ data }) => applySession(data.session));
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            applySession(session);
        });

        return () => {
            mounted.current = false;
            subscription.unsubscribe();
        };
    }, []);

    // Re-fetch the current user's profile. Called after registration once the
    // profile row exists, so the UI reflects the logged-in state without a reload.
    const refreshProfile = () => loadProfile(userRef.current);

    const value = {
        currentUser,
        userProfile,
        loading,
        refreshProfile
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
