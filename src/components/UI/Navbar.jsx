export default function Nav({ links }) {
    return (
        <div className="tabs">
            <ul>
                {links.map((link) => link)}
            </ul>
        </div>
    )
}