import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

library.add(fas)

const MenuItems = ({ items, classes}) => {
    const router = useRouter() 
    const [active, setActive] = useState(false)

    // const handleSubMenu = (e) => {
    //     e.preventDefault();
    //     let subMenu = e.target.parentNode.nextElementSibling;
    //     e.target.classList.toggle('is-active')
    //     subMenu.classList.toggle('hidden');
    // }

    const handleToggleMenu = () => {
        setActive(!active);
        console.log(active)
    }

    const sortedMenu = items.sort((a, b) => a.position - b.position);

    return (
        <ul>
            {
                sortedMenu.map(item => {
                    return (
                        <li key={item.name}>
                            <Link href={item.path}>
                                <a className={"flex items-center p-2.5 text-white hover:bg-cyan-700" +  (router.asPath == item.path ? " bg-cyan-700" : '')}>
                                    <span className="icon mr-3 w-4">
                                        {item.icon && item.icon.length > 0 ? <FontAwesomeIcon icon={item.icon} /> : ''}
                                    </span>
                                    {item.name}
                                </a>
                            </Link>
                            { item.subMenu && item.subMenu.length > 0 ? <button className='menu-toggle' onClick={handleToggleMenu}></button> : '' }
                            {
                                item.subMenu && item.subMenu.length > 0 ? (active ? <MenuItems items={item.subMenu} /> : '') : ''
                            }                           
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MenuItems