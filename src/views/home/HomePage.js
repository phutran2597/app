import { useRouter } from "next/router";
import Logo from "../../assets/images/logo.png";
import SideNav from "../../components/SideNav";

const HomePage = () => {
    const sideNavList = [
        {
            id: 1,
            icon: '',
            path: '/home',
            name: 'Dashboard',
            position: 1,
            parent: 0
        },
        {
            id: 2,
            icon: '',
            path: '/users',
            name: 'Users',
            position: 1,
            parent: 0
        },
        {
            id: 3,
            icon: '',
            path: '/roles',
            name: 'Roles',
            position: 1,
            parent: 0
        },
        {
            id: 4,
            icon: '',
            path: '/permissions',
            name: 'Permissions',
            position: 1,
            parent: 0
        },
        {
            id: 5,
            icon: '',
            path: '/products',
            name: 'Products',
            position: 1,
            parent: 0
        },
        {
            id: 6,
            icon: '',
            path: '/products/1',
            name: 'Product 1',
            position: 1,
            parent: 5
        },
    ]

    return (
        <div>
            <div className="flex c-column">
                <div className="sidebar h-screen w-1/6 bg-cyan-900">
                    <div className="sidebar__inner">
                        <h1 className="logo">
                            <a href="/">
                                <img src={Logo.src} alt="" />
                            </a>
                        </h1>
                        <SideNav list={ sideNavList }/>
                    </div>
                </div>
                <div className="content h-screen w-5/6">
                    <div className="flex">
                        <ul className="c-breadcrumb d-flex">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Dashboard</a>
                            </li>
                        </ul>
                        <div className="flex c-control">
                            <a href="" className="c-icon"><img src="" alt="" /></a>
                            <a href="" className="c-icon"><img src="" alt="" /></a>
                            <a href="" className="c-icon"><img src="" alt="" /></a>
                            <div className="c-user flex">
                                <div className="c-user__ava">
                                    <img src="" alt="" />
                                </div>
                                <div className="c-user__name">Username</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage