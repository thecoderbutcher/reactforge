'use client';
import Image from "next/image";
import { useState } from "react";
import { BsXLg, BsList } from "react-icons/bs";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleMenu = () => setOpen(!open)
    

    const navitems = [
        {title:'Home', link:'/'},
        {title:'Landing', link:'/landing'},
        {title:'Dashboard', link:'/'},
        {title:'Aplicaciones', link:'/'},
        {title:'Pagos', link:'/'},
        {title:'Contacto', link:'/'},
    ]
    return (
        <nav className="fixed w-full lg:inset-auto lg:w-full">
            <div className="flex flex-row items-center justify-center gap-2 py-2 lg:hidden bg-secondary-foreground/50">
                <Image src="/logo.png" alt="logo" width={100} height={100} className="w-8 object-cover"/>
                <span className="text-xl font-bold bg-gradient-to-t from-accent to-primary bg-clip-text text-transparent uppercase">React Forge</span>
            </div>
            <button
                className={`lg:hidden fixed right-4 top-4 z-50 text-3xl ${open ? 'text-primary' : 'text-white p-1 rounded-lg'}`}
                onClick={handleMenu}
            >
                {open ? <BsXLg /> : <BsList />}
            </button>
            <div className={`fixed inset-0 bg-secondary-foreground/70 z-40 transition-transform transform ${open?'translate-x-0':'translate-x-full'} 
                            lg:flex lg:relative lg:bg-secondary-foreground/20 lg:h-auto lg:items-center lg:justify-around lg:translate-x-0 lg:p-2`}>
                <div className="flex flex-row items-center justify-center gap-2 py-2">
                    <Image src="/logo.png" alt="logo" width={100} height={100} className="w-8 object-cover"/>
                    <span className="text-xl font-bold bg-gradient-to-t from-accent to-primary bg-clip-text text-transparent uppercase">React Forge</span>
                </div>
                <ul className="flex flex-col items-center justify-center h-full gap-4 text-3xl text-secondary lg:flex-row lg:space-x-2 lg:text-lg lg:justify-end lg:items-end">
                    {navitems.map((item, index) => (
                        <li key={index} className="hover:text-primary">
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar