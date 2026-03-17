import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { currentUser, userProfile } = useAuth();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/');
    };


    const scrollToGrados = (e) => {
        e.preventDefault();
        if (location.pathname === '/sociales') {
            const element = document.getElementById('grados');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/sociales');
            // The scroll will be handled by useEffect in Home.jsx
            window.scrollTo(0, 0);
            // We set a small timeout to allow Home to mount
            setTimeout(() => {
                const element = document.getElementById('grados');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <div className="app-wrapper">
            <header className="main-header">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <span className="logo-icon">🎓</span>
                        <h1>EduPortal CR</h1>
                    </Link>
                    <nav>
                        <ul className="nav-links">
                            <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                            {currentUser && userProfile ? (
                                <>
                                    <li className="nav-user-info">
                                        <span className="nav-nickname">👾 {userProfile.nickname}</span>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout} className="nav-logout-btn">Salir</button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/login">Ingresar</Link></li>
                                    <li><Link to="/registro" className="nav-register-btn">Registrarse</Link></li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="main-footer" style={{ background: 'var(--bg-dark)', color: 'white', padding: '4rem 0', marginTop: '4rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                        <div>
                            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Social Studies Portal</h3>
                            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>Transformando la educación con aventuras interactivas y material de apoyo premium.</p>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Enlaces Rápidos</h4>
                            <ul style={{ listStyle: 'none', opacity: 0.7, fontSize: '0.9rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link></li>
                                <li style={{ marginBottom: '0.5rem' }}><Link to="/sobre-nosotros" style={{ color: 'white', textDecoration: 'none' }}>Sobre Nosotros</Link></li>
                                <li style={{ marginBottom: '0.5rem' }}><a href="#grados" onClick={scrollToGrados} style={{ color: 'white', textDecoration: 'none' }}>Grados</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Contacto</h4>
                            <a 
                                href="https://wa.me/50660326413" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    gap: '0.5rem', 
                                    background: '#25D366', 
                                    color: 'white', 
                                    padding: '0.6rem 1.2rem', 
                                    borderRadius: 'var(--radius-md)', 
                                    textDecoration: 'none',
                                    fontWeight: '700',
                                    fontSize: '0.9rem',
                                    transition: 'var(--transition)'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <span>💬 ¡Escríbenos por WhatsApp!</span>
                            </a>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
                        <p>&copy; {new Date().getFullYear()} Social Studies Portal. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
