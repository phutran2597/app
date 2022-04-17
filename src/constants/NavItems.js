import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import BadgeIcon from '@mui/icons-material/Badge';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

const NavItems = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        position: 1,
        parent: 0,
        icon: <HomeIcon/>,
    },
    {
        path: '/users',
        name: 'Users',
        position: 2,
        parent: 0,
        icon: <GroupIcon/>,
    },
    {
        path: '/roles',
        name: 'Roles',
        position: 3,
        parent: 0,
        icon: <AccessibilityIcon/>
    },
    {
        path: '/permissions',
        name: 'Permissions',
        position: 4,
        parent: 0,
        icon: <BadgeIcon/>
    },
    {
        path: '/products',
        name: 'Products',
        position: 5,
        parent: 0,
        child: true,
        icon: <LocalFloristIcon/>,
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

export default NavItems