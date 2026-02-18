import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="app-container">
            <header className="main-header">
                <div className="container">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <h1>🌍 Estudios Sociales</h1>
                        <p>5to Grado - Costa Rica y Geografía</p>
                    </Link>
                </div>
            </header>

            <main className="container">
                <Outlet />
            </main>

            <footer className="main-footer">
                <div className="container">
                    <p>&copy; 2024 Estudios Sociales para Niños</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
