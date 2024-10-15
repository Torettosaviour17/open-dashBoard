import React from 'react'
import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lb/consts/navigation'
import { Link } from 'react-router-dom'


// const linkClassees = 'flex item-center gap-2 font-light px-3 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
  return (
    <div>
      <div className='flex flex-col h-screen bg-neutral-900 p-3 w-60 text-white'>
        <div className='flex items-center gap-2 px-1 py-3'>
          <FcBullish fontSize={24} />
          <span className='text-neutral-100 text-lg'>OpenShop</span>
        </div>
        <div className="flex-1 ">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>
        <div>buttom part </div>
      </div>
    </div>
  );
}

function SidebarLink({ item }){
  return (
    <Link to={item.path}>
      <span className='text-xl'>{item.icon}</span>
      <span>{item.label}</span>
    </Link>
  );
}