import React, { useState } from 'react'
import { Outlet, RouterProvider } from 'react-router'
import vector from '../assets/Vector.svg'
import { router } from '../router.jsx'

function Layout() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Shop', href: '#' },
    { name: 'Stories', href: '#' },
    { name: 'About', href: '#' }
  ];

  return (
    <div className='flex flex-col h-screen'>
      <header>
        <nav className='flex items-center justify-between p-6 lg:px-32 bg-black text-white text-lg'>
          <div className='flex'>
            <a href="" className='font-bold tracking-widest'>
              <span>ecom</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            >
              <span className="sr-only">Open main menu</span>
              <div>|||</div>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 px-12">
            {navigation.map((item) => (
                <a key={item.name} href={item.href}>
                  {item.name}
                </a>
            ))}
          </div>
          <div className='hidden lg:flex'>
            <input type="text" placeholder='Search' className='rounded-full px-4  ' />
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5">
            <a href="#" className='flex gap-2'>
              <img src={vector} alt="" color='black' /> 0
            </a>
            <a href="#">
              Login
            </a>
          </div>
        </nav>
      </header>
      <div className='flex-1 overflow-auto'>
        <RouterProvider router={router}>
          <Outlet />
        </RouterProvider>
      </div>
    </div>
  )
}

export default Layout
