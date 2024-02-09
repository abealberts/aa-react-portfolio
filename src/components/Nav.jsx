import { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {

    const [active, setActive] = useState('about');

    const setTab = (e) => {
        setActive(e);
    }

    return (
        <Navbar
            links={
                [
                    <li
                    className={active === 'about' ? 'is-active' : ''}
                    onClick={() => setTab('about')}>
                        <Link key={1} to="/">About Me</Link>
                    </li>,

                    <li
                    className={active === 'projects' ? 'is-active' : ''}
                    onClick={() => setTab('projects')}>
                        <Link key={2} to="/projects">Projects</Link>
                    </li>,

                    <li
                    className={active === 'contact' ? 'is-active' : ''}
                    onClick={() => setTab('contact')}>
                        <Link key={3} to="/contact">Contact</Link>
                    </li>,

                    <li
                    className={active === 'resume' ? 'is-active' : ''}
                    onClick={() => setTab('resume')}>
                        <Link key={4} to="/resume">Resume</Link>
                    </li>
                ]
            }
        />
    );
}