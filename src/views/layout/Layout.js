import Logo from "../../components/Logo";
import MenuItems from "../../components/MenuItems";
import Sidebar from "../../components/Sidebar";
import SideNavbar from "../../components/SideNavbar";
import NavItems from "../../constants/NavItems";
import UserInfo from "../../components/UserInfo";
import Icon from "../../components/Icon";

const Layout = ({ children }) => {

    return (
        <div className="flex c-column">
            <Sidebar>
                <Logo />
                <SideNavbar>
                    <MenuItems items={NavItems} />
                </SideNavbar>
            </Sidebar>
            <div className="content h-screen w-5/6 bg-cyan-50 p-5">
                <div className="flex justify-between">
                    <div className="c-breadcrumb flex text-gray-400">
                        <a href="">Home</a>
                        <span className="separator">></span>
                        <span>Dashboard</span>
                    </div>

                    <div className="flex c-control">
                        <Icon icon="fa-solid fa-bell" />
                        <Icon icon="fa-solid fa-user" />
                        <Icon icon="fa-solid fa-gear" />
                        <UserInfo name="Username" avatar="/images/logo.png" />
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Layout