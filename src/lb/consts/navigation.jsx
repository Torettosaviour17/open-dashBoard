import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
  } from 'react-icons/hi';
  
  export const DASHBOARD_SIDEBAR_LINKS = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      path: '/',
      icon: <HiOutlineViewGrid />
    },
    {
      key: 'products',
      label: 'Products',
      path: '/products',
      icon: <HiOutlineCube />
    },
    {
      key: 'orders',
      label: 'Orders',
      path: '/orders',
      icon: <HiOutlineShoppingCart />
    },
    {
      key: 'customers',
      label: 'Customers',
      path: '/customers',
      icon: <HiOutlineUsers />
    },
    {
      key: 'documents',
      label: 'Documents',
      path: '/documents',
      icon: <HiOutlineDocumentText />
    },
    {
      key: 'annotations',
      label: 'Annotations',
      path: '/annotations',
      icon: <HiOutlineAnnotation />
    },
  ]
export const DASHBOARD_SIDEBAR_BOTTOM_LINKS =[
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <HiOutlineCog />
  },
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <HiOutlineQuestionMarkCircle />
  }
]
   