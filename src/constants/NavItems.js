const NavItems = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        position: 1,
        parent: 0,
        icon: 'fa-solid fa-house',
    },
    {
        path: '/users',
        name: 'Users',
        position: 2,
        parent: 0,
        icon: 'fa-solid fa-house'
    },
    {
        path: '/roles',
        name: 'Roles',
        position: 3,
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

export default NavItems