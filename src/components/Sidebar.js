const Sidebar = ({children}) => {
    return (
        <div className="sidebar h-screen w-1/6 bg-cyan-900">
            <div className="sidebar__inner">{children}</div>
        </div>
    )
}

export default Sidebar