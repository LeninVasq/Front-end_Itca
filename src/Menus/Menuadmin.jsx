import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Usamos Link y Outlet
import {
    Home,
    Users,
    Library,
    History,
    Clock,
    ThumbsUp,
    Search,
    Grid,
    Bell,
    User,
    Disc2Icon,
} from 'lucide-react';

const Layout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 border-r bg-white">
                <div className="m-3">
                    <img
                        src="https://www.itca.edu.sv/wp-content/themes/elaniin-itca/images/logoColor.png"
                        alt="ITCA Logo"
                        className="w-full"
                    />
                </div>
                <div className="p-4">
                    <div className="flex items-center space-x-2 font-bold text-xl text-red-600 mb-6">
                        <span>MENU DE ADMIN</span>
                    </div>
                    <nav className="space-y-2">
                        <NavItem to="/" icon={<Home className="w-4 h-4" />} text="Inicio" />
                        <NavItem to="register-form" icon={<Users className="w-4 h-4" />} text="Agregar usuarios" />
                        <div className="pt-4"></div>
                        <NavItem to="categoria_recetas" icon={<Library className="w-4 h-4" />} text="Recetas" />
                        <NavItem to="/menu" icon={<Disc2Icon className="w-4 h-4" />} text="Platos" />
                        <div className="pt-4"></div>
                        <NavItem to="/history" icon={<History className="w-4 h-4" />} text="Historial de reservas" />
                        <NavItem to="/watch-later" icon={<Clock className="w-4 h-4" />} text="Ver después" />
                        <NavItem to="/liked-videos" icon={<ThumbsUp className="w-4 h-4" />} text="Videos que te gustan" />
                    </nav>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1">
                <header className="flex items-center justify-between p-4 border-b">
                    <div className="w-96">
                        <div className="relative">
                            <input
                                type="search"
                                placeholder="Buscar"
                                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                            />
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <HeaderButton icon={<Grid className="h-4 w-4" />} />
                        <HeaderButton icon={<Bell className="h-4 w-4" />} />
                        <HeaderButton icon={<User className="h-4 w-4" />} />
                    </div>
                </header>

                {/* Aquí se renderiza el contenido dinámico */}
                <main className="p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

// Componente NavItem para los enlaces
const NavItem = ({ to, icon, text }) => (
    <Link
        to={to}
        className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm"
    >
        {icon}
        <span>{text}</span>
    </Link>
);

// Botón del header
const HeaderButton = ({ icon }) => (
    <button className="p-2 rounded-full hover:bg-gray-100">
        {icon}
    </button>
);

export default Layout;
