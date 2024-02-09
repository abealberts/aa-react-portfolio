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
                    onClick={() => setTab('about')}
                    key={1}>
                        <Link to="/">About Me</Link>
                    </li>,

                    <li
                    className={active === 'projects' ? 'is-active' : ''}
                    onClick={() => setTab('projects')}
                    key={2}>
                        <Link to="/projects">Projects</Link>
                    </li>,

                    <li
                    className={active === 'contact' ? 'is-active' : ''}
                    onClick={() => setTab('contact')}
                    key={3}>
                        <Link to="/contact">Contact</Link>
                    </li>,

                    <li
                    className={active === 'resume' ? 'is-active' : ''}
                    onClick={() => setTab('resume')}
                    key={4}>
                        <Link to="/resume">Resume</Link>
                    </li>
                ]
            }
        />
    );
}