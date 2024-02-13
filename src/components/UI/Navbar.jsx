export default function Navbar({ links }) {
    return (
        <div className="tabs">
            <ul>
                {links.map((link) => link)}
            </ul>
        </div>
    )
}