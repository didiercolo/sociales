import { useState, useEffect } from 'react';
import { supabase } from '../supabase/client';

// Subscribes to the single denormalized scoreboard row and keeps `topUsers`
// live via Supabase Realtime (replaces the old Firestore onSnapshot).
export function useScoreboard() {
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const apply = (row) => {
      if (active) {
        setTopUsers(row?.top_users || []);
        setLoading(false);
      }
    };

    supabase
      .from('scoreboard')
      .select('top_users')
      .eq('id', 'scoreboard')
      .maybeSingle()
      .then(({ data }) => apply(data));

    const channel = supabase
      .channel('scoreboard')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'scoreboard' },
        (payload) => apply(payload.new),
      )
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return { topUsers, loading };
}
