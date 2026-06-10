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
            document.getElementById('grados')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/sociales');
            window.scrollTo(0, 0);
            setTimeout(() => {
                document.getElementById('grados')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <div className="app-wrapper">
            <header className="main-header">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <div className="logo-icon">🎓</div>
                        <h1>EduPortal CR</h1>
                    </Link>

                    <nav>
                        <ul className="nav-links">
                            <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                            <li><Link to="/scoreboard">🏆 Ranking</Link></li>
                            <li><Link to="/prueba-mep">📋 Prueba MEP</Link></li>
                            {currentUser && userProfile ? (
                                <>
                                    <li>
                                        <span className="nav-nickname">
                                            {userProfile.nickname}
                                        </span>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout} className="nav-logout-btn">
                                            Salir
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/login">Ingresar</Link></li>
                                    <li>
                                        <Link to="/registro" className="nav-register-btn">
                                            Registrarse
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="main-footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <h3>EduPortal CR</h3>
                            <p>
                                Transformando la educación con contenido interactivo y
                                material de apoyo premium para estudiantes de 6to Grado de Costa Rica.
                            </p>
                        </div>

                        <div className="footer-col">
                            <h4>Navegación</h4>
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                                <li><a href="#grados" onClick={scrollToGrados}>Grados</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Contacto</h4>
                            <ul>
                                <li>
                                    <a
                                        href="https://wa.me/50660326413"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-whatsapp"
                                        style={{ marginTop: '.25rem' }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.407 3.481 2.239 2.24 3.477 5.228 3.475 8.411-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.664zm6.25-3.313c1.552.92 3.117 1.403 4.839 1.404h.01c5.444 0 9.873-4.429 9.875-9.875.001-2.639-1.027-5.122-2.895-6.991-1.868-1.868-4.353-2.896-6.993-2.897-5.447 0-9.875 4.426-9.877 9.874-.001 1.832.501 3.615 1.454 5.168l-1.012 3.693 3.793-.997zm11.332-6.85c-.321-.161-1.902-.938-2.198-1.045-.297-.108-.512-.161-.727.161-.215.321-.834 1.045-1.022 1.26-.188.215-.376.242-.697.081-.321-.161-1.357-.501-2.585-1.595-.955-.852-1.6-1.904-1.787-2.226-.188-.321-.02-.494.14-.654.144-.143.321-.376.482-.563.161-.188.215-.321.321-.536.108-.215.053-.402-.027-.563-.081-.161-.727-1.751-1.012-2.435-.278-.668-.56-.577-.773-.588-.2-.01-.429-.012-.658-.012-.229 0-.603.085-.92.428-.316.344-1.206 1.181-1.206 2.879 0 1.699 1.236 3.342 1.407 3.57.172.229 2.43 3.712 5.887 5.202.822.354 1.464.566 1.965.725.825.263 1.577.225 2.171.137.663-.099 1.902-.777 2.171-1.527.27-.75.27-1.393.189-1.527-.081-.132-.297-.213-.618-.374z" />
                                        </svg>
                                        WhatsApp
                                    </a>
                                </li>
                                <li style={{ color: 'rgba(255,255,255,.5)', fontSize: '.85rem', marginTop: '.25rem' }}>
                                    6032-6413
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} EduPortal CR — Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
