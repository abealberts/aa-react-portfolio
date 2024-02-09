export default function Navbar({ links }) {
    return (
        <div className="tabs is-centered">
            <ul>
                {links.map((link) => link)}
            </ul>
        </div>
    )
}