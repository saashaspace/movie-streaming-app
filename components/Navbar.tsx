"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "@mui/icons-material";

export default function Navbar() {
    const [search, setSearch] = useState<string>("");
    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

    const [isScrolled, setIsScrolled] = useState<boolean>(false);

   
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    

    return (
        <div className='navbar'  >
            <Link href="/">
                <img src="/assets/logo.png" alt="logo" />
            </Link>

            <div className='nav-links'>
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/my-lists" className="nav-link">My Lists</Link>
            </div>

            <div className="nav-right">
                <div className="search">
                    <input type="text" placeholder="Search a movie.." className="input-search" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <Search className="icon" />
                </div>

                <img src="/assets/profile_icon.jpg" alt="profile" className="profile" onClick={() => setDropdownMenu(!dropdownMenu)} />

                {dropdownMenu && (
                    <div className="dropdown-menu">
                        <Link href="/">Home</Link>
                        <Link href="/my-lists">My Lists</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
