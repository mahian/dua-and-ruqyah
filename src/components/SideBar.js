import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, BookmarkIcon, BookOpenIcon, ChatBubbleLeftRightIcon, HomeIcon, LightBulbIcon, Squares2X2Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideBar = () => {
    const [bigSideBar, setBigSideBar] = useState(true);
    const [bigBottomBar, setBigBottomBar] = useState(false);
    const active = {
        color: "#1FA45B",
        borderLeft: "5px solid #1FA45B"
    }
    const activeOnMobile = {
        color: "#1FA45B",
    }
    const handleSideBar = () => {
        bigSideBar ? setBigSideBar(!bigSideBar) : setBigSideBar(true);
    }
    const handleBottomBar = () => {
        bigBottomBar ? setBigBottomBar(!bigBottomBar) : setBigBottomBar(true);
    }
    const navMenus = [
        {
            name: "Home",
            route: "/",
            icon: <HomeIcon className="h-6 w-6" />,
        },
        {
            name: "All Duas",
            route: "All Duas",
            icon: <Squares2X2Icon className="h-6 w-6" />,
        },
        {
            name: "Memories",
            route: "Memories",
            icon: <LightBulbIcon className="h-6 w-6" />,
        },
        {
            name: "Bookmark",
            route: "bookmark",
            icon: <BookmarkIcon className="h-6 w-6" />,
        },
        {
            name: "Ruqyah",
            route: "ruqyah",
            icon: <HomeIcon className="h-6 w-6" />,
        },
        {
            name: "Dua Q&A",
            route: "q&a",
            icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
        },
        {
            name: "Books",
            route: "books",
            icon: <BookOpenIcon className="h-6 w-6" />,
        },
    ]
    const router = useRouter();
    console.log(router.pathname);
    return (
        <div>
            <div className='relative hidden lg:block'>
                <button onClick={handleSideBar} className={`${bigSideBar ? "invisible" : "visible"} transition-all bg-primary hover:opacity-80 z-20 text-white font-bold p-2 rounded-lg absolute -right-3 top-5`}>
                    {bigSideBar ? <ArrowLeftIcon className='h-4' /> :
                        <ArrowRightIcon className='h-4' />}
                </button>
                <aside className={`${bigSideBar ? "w-[277px]" : "w-[100px]"} relative z-10 overflow-y-auto bg-white dark:bg-dark flex-shrink-0 rounded-xl transition-all ease-in-out`}>
                    <div className="py-4 text-gray-500 dark:text-gray-400">
                        <div className='flex flex-col items-center'>
                            <Link href=""><img className='w-[73px] h-[73px]' src="assets/logo.png" alt="" /></Link>
                            <Link href="" className={`${bigSideBar ? "block" : "hidden"} text-lg font-bold text-gray-800 -mt-2 dark:text-gray-200`} to="#">Dua & Ruqyah</Link>
                            <span className={`${bigSideBar ? "block" : "hidden"} text-sm`}>App Version: 1.1</span>
                        </div>
                        <ul className="mt-6 p-4">
                            {
                                navMenus.map(menu => <li className="relative bg-gray-50 dark:bg-dark-2 dark:hover:bg-dark-3 my-3 hover:bg-gray-100 transition-bg duration-150 rounded-lg overflow-hidden">
                                    <Link href={menu.route}
                                        style={router.pathname === menu.route ? active : undefined}
                                        className={`${bigSideBar ? "px-6" : "px-3"} py-3 inline-flex items-center w-full text-sm font-semibold text-gray-500`}>
                                        <div className='flex items-center justify-center h-10 w-10 bg-slate-100 rounded-full'>
                                            {menu.icon}
                                        </div>
                                        <span className={`ml-4 text-base font-semibold ${bigSideBar ? "block" : "hidden"}`}>{menu.name}</span>
                                    </Link>
                                </li>
                                )}
                        </ul>
                        <div className="px-6 my-6 text-center">
                            <button className={`flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary`}>
                                <span className={`${bigSideBar ? "block" : "hidden"}`}>I want To Support</span>
                                <img className='ml-2' src="assets/donate-heart.png" alt="" />
                            </button>
                            <div className='mt-5'>
                                <p className={`${bigSideBar ? "block" : "hidden"}`}>Download Apps:</p>
                                <div className='flex justify-center flex-wrap'>
                                    <img className='m-2' src="assets/apple.png" alt="" />
                                    <img className='m-2' src="assets/android.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </aside >
            </div>
            {/* mobile bottom bar */}
            <div className='lg:hidden '>
                <div className='fixed bottom-0 z-10 bg-white dark:bg-dark rounded-t-3xl w-full bottom-bar dark:bottom-bar-dark'>
                    <ul className={`p-2 ${!bigBottomBar ? "h-[78px]" : "h-auto"} flex justify-between flex-wrap items-center `}>
                        {
                            navMenus.map(menu => <li>
                                <Link href={menu.route}
                                    style={router.pathname === menu.route ? activeOnMobile : undefined}
                                    className="px-6 py-3 inline-flex items-center w-full text-sm font-semibold text-gray-500">
                                    <div className='flex items-center justify-center h-10 w-10 bg-slate-100 rounded-full'>
                                        {menu.icon}
                                    </div>
                                </Link>
                            </li>
                            )}
                    </ul>
                    <div className='flex sm:hidden w-full justify-center'>
                        <button onClick={handleBottomBar} className='h-[3px] w-20 bg-gray-300 mx-auto mb-2'></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SideBar;