import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useRouter } from 'next/router'
import Link from 'next/link'

library.add(fas)

const MenuItems = ({ items }) => {
    const router = useRouter() 

    const handleMenuChange = (e) => {
        e.preventDefault();
        if(!e.target.classList.contains('has-sub')){
            router.push(e.target.href)
        }else{
            let subMenu = e.target.nextElementSibling;
            e.target.classList.toggle('is-active')
            subMenu.classList.toggle('hidden');
        }
    }

    const renderItem = (items, classes = "") => {
        let sorted = items.sort((a, b) => a.position - b.position);
        return (
            <ul className={classes != '' ? classes : ''}>
                {
                    sorted.map((item) => 
                        (
                            <li key={item.name}>
                                <Link href={item.path}>
                                    <a className={"flex items-center p-2.5 text-white hover:bg-cyan-700" 
                                        + (router.asPath == item.path ? " bg-cyan-700" : '')
                                        + (item.subMenu && item.subMenu.length > 0 ? " has-sub" : '')
                                        } 
                                        onClick={handleMenuChange}
                                        >
                                        <span className="icon mr-3 w-4">
                                            {item.icon && item.icon.length > 0 ? <FontAwesomeIcon icon={item.icon} /> : ''}
                                        </span>
                                        {item.name}
                                    </a>
                                </Link>
                                {
                                    item.subMenu && item.subMenu.length > 0 ?  renderItem(item.subMenu, 'sub-menu hidden pl-3') : ''
                                }
                            </li>
                        )
                    )
                }
            </ul>
        )
    }

    return (
        <>
            {
                renderItem(items)
            }
        </>
    )
}

export default MenuItems