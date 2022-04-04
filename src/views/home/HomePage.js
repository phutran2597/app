import { useRouter } from "next/router";
import Logo from "../../assets/images/logo.png";
import MenuItems from "../../components/MenuItems";
import SideNavbar from "../../components/SideNavbar";

const HomePage = () => {
    const menuItems = [
        {
            path: '/home',
            name: 'Dashboard',
            position: 1,
            parent: 0,
            icon: 'fa-solid fa-house',
        },
        {
            path: '/users',
            name: 'Users',
            position: 3,
            parent: 0,
            icon: 'fa-solid fa-house'
        },
        {
            path: '/roles',
            name: 'Roles',
            position: 2,
            parent: 0,
            icon: 'fa-solid fa-house'
        },
        {
            path: '/permissions',
            name: 'Permissions',
            position: 4,
            parent: 0,
            icon: 'fa-solid fa-house'
        },
        {
            path: '/products',
            name: 'Products',
            position: 5,
            parent: 0,
            child: true,
            icon: 'fa-solid fa-house',
            subMenu: [
                {
    
                    path: '/products/1',
                    name: 'Product 1',
                    position: 1,
                    icon: '',
                    subMenu: [
                        {
            
                            path: '/products/1/1',
                            name: 'Product 1.1',
                            position: 1,
                            icon: ''
                        }
                    ]
                }
            ]
        }
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
                        <SideNavbar>
                            <MenuItems items={menuItems} />
                        </SideNavbar>
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