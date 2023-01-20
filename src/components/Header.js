import { AdjustmentsVerticalIcon, Cog6ToothIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MenuDrawer from './MenuDrawer';
import SettingsBar from './SettingsBar';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDrop, setOpenDrop] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 50) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function openDropDown() {
        if (openDrop) {
            setOpenDrop(false)
        } else {
            setOpenDrop(true)
        }
    }
    return (
        <div className='w-full sticky top-0 z-10 sm:bg-white lg:bg-gray-100 dark:sm:bg-dark-2'>
            <div className={`bg-black h-5 opacity-25 sm:hidden ${isSticky? "hidden": "block"}`}></div>
            <header className={`${isSticky? "bg-white dark:bg-dark shadow-md text-black": ""} py-4 dark:text-white sm:text-black`}>
                <div className="flex items-center justify-between h-full px-6 mx-auto dark:text-gray-50">
                    <button onClick={() => setIsOpen(true)} className="p-1 mr-5 -ml-1 rounded-md sm:hidden focus:outline-none focus:shadow-outline-purple" aria-label="Menu">
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div className='hidden lg:block'>
                        <h2 className='text-2xl font-semibold'>Home page</h2>
                        <p>welcome to our website</p>
                    </div>
                    <div className='flex items-center lg:hidden'>
                        <Link href=""><img className='w-[73px] h-[73px] hidden sm:block' src="assets/logo.png" alt="" /></Link>
                        <Link href="" className="text-lg font-bold text-gray-800 ml-2 dark:text-gray-200" to="#">Dua & Ruqyah</Link>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className="justify-center hidden md:flex">
                            <form className="flex items-center">
                                <label for="search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <MagnifyingGlassIcon className='h-5 w-5' />
                                    </div>
                                    <input type="text" id='search' className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search by Dua Name" required />
                                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <AdjustmentsVerticalIcon className='w-5 h-5 text-black' />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <MagnifyingGlassIcon onClick={() => setIsOpen(true)} className='h-5 w-5 md:hidden mr-6' />
                        <QuestionMarkCircleIcon className='w-6 h-6 text-primary ml-6 hidden md:block' />
                        <Cog6ToothIcon onClick={() => setIsOpen(true)} className='h-6 w-6 hidden sm:block 2xl:hidden mx-6 text-primary' />
                        <div className="relative ml-3 items-center hidden sm:flex">
                            <h3 className='font-semibold text-base mr-3 hidden xl:block'>Mahian ahmad</h3>
                            <div className='flex items-center'>
                                <button onClick={openDropDown} type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-10 w-10 rounded-full" src="https://media.licdn.com/dms/image/C4D03AQG85mHpcNqOBw/profile-displayphoto-shrink_400_400/0/1655575541400?e=1679529600&v=beta&t=XFDQpO4kQ9y1dzTw9vwblXRpCegnpHxAkrDccFFT91o" alt="" />
                                </button>
                                <img className='h-2 ml-2' src="assets/polygon.png" alt="" />
                            </div>
                            <div className={!openDrop ? "hidden" : "absolute right-0 top-10 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                <Link href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</Link>
                                <Link href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</Link>
                                <Link href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</Link>
                            </div>
                        </div>
                    </div>
                </div >
            </header >
            <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div>
                    <div className='flex items-center lg:hidden'>
                        <Link href=""><img className='w-[73px] h-[73px] sm:block' src="assets/logo.png" alt="" /></Link>
                        <Link href="" className="text-lg font-bold text-gray-800 ml-2 dark:text-gray-200">Dua & Ruqyah</Link>
                    </div>
                    <button onClick={()=> setIsOpen(false)} type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close menu</span>
                    </button>
                </div>
                <div className='px-4'>

                    <div className='flex flex-col items-center'>
                        <img className="h-10 w-10 rounded-full" src="https://media.licdn.com/dms/image/C4D03AQG85mHpcNqOBw/profile-displayphoto-shrink_400_400/0/1655575541400?e=1679529600&v=beta&t=XFDQpO4kQ9y1dzTw9vwblXRpCegnpHxAkrDccFFT91o" alt="" />
                        <h3 className='font-semibold text-2xl'>Mahian ahmad</h3>
                    </div>

                    <div className="justify-center md:flex mt-4">
                        <form className="flex items-center">
                            <label for="search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <MagnifyingGlassIcon className='h-5 w-5' />
                                </div>
                                <input type="text" id='search' className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search by Dua Name" required />
                                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <AdjustmentsVerticalIcon className='w-5 h-5 text-black' />
                                </button>
                            </div>
                        </form>
                    </div>
                    <SettingsBar />
                </div>
            </MenuDrawer>
        </div >
    );
};