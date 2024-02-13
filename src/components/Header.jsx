import Nav from './Nav';

export default function Header() {
    return (
        <div className='container mb-4'>
            <div className='navbar'>
                <div className="navbar-brand">
                    <figure className="image is-64x64 p-2">
                        <img src="../header-logo.svg" height="64" width="64"/>
                    </figure>
                    <p className='navbar-item'><strong>Abe Alberts /</strong>/ Fullstack Web Developer</p>
                </div>
            </div>
            <Nav />
        </div>

    );
}