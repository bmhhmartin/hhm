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
        console.log('click');
    }

    return (
        <>
            <header className="desktopMenu">
                <div className="logoPart">
                    <Link href="#">
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
                        <li><Link href="/" className={pathName == "/" ? 'active' : ''}>Home</Link></li>
                        <li><Link href="/about" className={pathName == "/about" ? 'active' : ''}>About</Link></li>
                        <li><Link href="/portfolio" className={pathName == "/portfolio" ? 'active' : ''}>Portfolio</Link></li>
                        <li><Link href="/skills" className={pathName == "/skills" ? 'active' : ''}>Skills</Link></li>
                        <li><Link href="/contact" className={pathName == "/contact" ? 'active' : ''}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;