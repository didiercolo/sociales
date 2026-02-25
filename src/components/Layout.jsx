import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToGrados = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            const element = document.getElementById('grados');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
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
                        <span className="logo-icon">🌍</span>
                        <h1>Social Studies Portal</h1>
                    </Link>
                    <nav>
                        <ul className="nav-links">
                            <li><Link to="/">Inicio</Link></li>
                            <li><a href="#grados" onClick={scrollToGrados}>Cursos</a></li>
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
                                <li style={{ marginBottom: '0.5rem' }}><a href="#grados" onClick={scrollToGrados} style={{ color: 'white', textDecoration: 'none' }}>Grados</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Contacto</h4>
                            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>¿Tienes dudas? ¡Escríbenos!</p>
                            <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>soporte@socialesportal.com</p>
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
