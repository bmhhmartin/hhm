"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import myLogo from "../images/logored.png";


const Header =()=>{

    const pathName = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const menuActive =()=>{
        setMenuOpen(!menuOpen);
    }

    const menuClose =()=>{
        setMenuOpen(false);
    }



    return (
        <>
            <header className="desktopMenu">
                <div className="logoPart">
                    <Link href="/">
                        <h2>
                            <Image src={myLogo} width={50} height={41} alt="mylogo"></Image>
                            Martin
                        </h2>
                    </Link>
                </div>
                <div className="mainMenu">
                    <ul>
                        <li><Link href="/" className={pathName == "/" ? 'active' : ''}>Home</Link></li>
                        <li><Link href="/about" className={pathName == "/about" ? 'active' : ''}>About</Link></li>
                        <li><Link href="/portfolio" className={pathName == "/portfolio" ? 'active' : ''}>Portfolio</Link></li>
                        <li><Link href="/pricing" className={pathName == "/pricing" ? 'active' : ''}>Pricing</Link></li>
                        <li><Link href="/skills" className={pathName == "/skills" ? 'active' : ''}>Skills</Link></li>
                        <li><Link href="/contact" className={pathName == "/contact" ? 'active' : ''}>Contact</Link></li>
                    </ul>
                </div>
            </header>
            {/* Mobile menu starts */}
            <div className="mobileMenu">
                <div className="logoPart">
                    <h2><Image src={myLogo} width={50} height={41} alt="mylogo"></Image>Martin</h2>
                    <button onClick={menuActive}><FaBars/></button>
                </div>
                <div className={menuOpen? 'mainMenu active' : 'mainMenu'}>
                    <ul>
                        <li><Link href="/" onClick={menuClose} className={pathName == "/" ? 'active' : ''}>Home</Link></li>
                        <li><Link href="/about" onClick={menuClose} className={pathName == "/about" ? 'active' : ''}>About</Link></li>
                        <li><Link href="/portfolio" onClick={menuClose} className={pathName == "/portfolio" ? 'active' : ''}>Portfolio</Link></li>
                        <li><Link href="/pricing" onClick={menuClose} className={pathName == "/pricing" ? 'active' : ''}>Pricing</Link></li>
                        <li><Link href="/skills" onClick={menuClose} className={pathName == "/skills" ? 'active' : ''}>Skills</Link></li>
                        <li><Link href="/contact" onClick={menuClose} className={pathName == "/contact" ? 'active' : ''}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;