const SideNav = ({ sideNavList: list}) => {
    return (
        <nav className="sidebar__nav">
            <ul>
                <li>
                    <a href="" className="flex items-center p-2.5 text-white bg-cyan-700">
                        <span className="icon"></span>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="" className="flex items-center p-2.5 text-white hover:bg-cyan-700">
                        <span className="icon"></span>
                        Users
                    </a>
                </li>
                <li>
                    <a href="" className="flex items-center p-2.5 text-white hover:bg-cyan-700">
                        <span className="icon"></span>
                        Roles
                    </a>
                </li>
                <li>
                    <a href="" className="flex items-center p-2.5 text-white hover:bg-cyan-700">
                        <span className="icon"></span>
                        Permissions
                    </a>
                </li>
                <li>
                    <a href="" className="flex items-center p-2.5 text-white hover:bg-cyan-700">
                        <span className="icon"></span>
                        Products
                    </a>
                    <ul>
                        <li>
                            <a href=""></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default SideNav