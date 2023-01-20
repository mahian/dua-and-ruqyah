import { Cog8ToothIcon, LanguageIcon, RectangleStackIcon, Squares2X2Icon, SunIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const SettingsBar = () => {
    const active = {
        color: "#1FA45B",
        borderLeft: "5px solid #1FA45B"
    }
    const [theme, setTheme] = useState('light');
    const toggleClass = " transform translate-x-8";

    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'light');
        }
    }, []);

    useEffect(() => {
        const html = document.querySelector('html');
        if (localStorage.getItem('theme') === 'dark') {
            html.classList.add('dark');
            setTheme('dark');
        } else {
            html.classList.remove('dark');
            setTheme('light');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        if (localStorage.getItem('theme') === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div>
            <div className="z-20 w-full lg:w-[277px] overflow-y-auto bg-white dark:bg-dark lg:block flex-shrink-0 rounded-xl">
                <div className="lg:py-4 text-gray-500 dark:text-gray-400">
                    <h2 className="hidden lg:block text-lg font-bold text-gray-800 dark:text-gray-200 text-center">Settings</h2>
                    <ul className="lg:mt-6 lg:p-4">
                        <li className="relative bg-gray-50 dark:bg-dark-2 dark:hover:bg-dark-3 mt-3 hover:bg-gray-100 transition-bg duration-150 rounded-lg overflow-hidden">
                            <Link href="" style={active} className="px-6 py-3 inline-flex items-center w-full text-sm font-semibold text-gray-500" to="index.html">
                                <div className='flex items-center justify-center h-10 w-10 bg-slate-100 rounded-full'>
                                    <LanguageIcon className="h-6 w-6" />
                                </div>
                                <span className="ml-4 text-base font-semibold">Language</span>
                            </Link>
                        </li>
                        <div className='flex justify-center py-5 px-2 border dark:border-dark-3 border-t-0 rounded-lg'>
                            <button className='m-2 bg-primary text-white px-6 py-1 rounded-lg'>English</button>
                            <button className='m-2 border px-6 py-1 rounded-lg'>বাংলা</button>
                        </div>

                        <li className="relative bg-gray-50 dark:bg-dark-2 dark:hover:bg-dark-3 my-3 hover:bg-gray-100 transition-bg duration-150 rounded-lg">
                            <Link href="" className="px-6 py-3 inline-flex items-center w-full text-sm font-semibold text-gray-500" to="index.html">
                                <div className='flex items-center justify-center h-10 w-10 bg-slate-100 rounded-full'>
                                    <RectangleStackIcon className="h-6 w-6" />
                                </div>
                                <span className="ml-4 text-base font-semibold">General</span>
                            </Link>
                        </li>

                        <li className="relative bg-gray-50 dark:bg-dark-2 dark:hover:bg-dark-3 my-3 hover:bg-gray-100 transition-bg duration-150 rounded-lg">
                            <Link href="" className="px-6 py-3 inline-flex items-center w-full text-sm font-semibold text-gray-500" to="index.html">
                                <div className='flex items-center justify-center h-10 w-10 bg-slate-100 rounded-full'>
                                    <Squares2X2Icon className="h-6 w-6" />
                                </div>
                                <span className="ml-4 text-base font-semibold">Font settings</span>
                            </Link>
                        </li>

                        <li className="relative bg-gray-50 dark:bg-dark-2 dark:hover:bg-dark-3 mt-3 hover:bg-gray-100 transition-bg duration-150 rounded-lg">
                            <Link href="" className="px-6 py-3 inline-flex items-center w-full text-sm font-semibold text-gray-500" to="index.html">
                                <div className='flex items-center justify-center h-10 w-10 bg-slate-100 rounded-full'>
                                    <Cog8ToothIcon className="h-6 w-6" />
                                </div>
                                <span className="ml-4 text-base font-semibold">Appearance</span>
                            </Link>
                        </li>
                        <div className='flex justify-between py-5 px-4 border dark:border-dark-3 border-t-0 rounded-lg'>
                            <p className="text-base font-bold text-gray-800 dark:text-gray-200">Dark mood :</p>
                            <div className="w-16 h-7 flex items-center dark:bg-white bg-dark-2 rounded-full p-1 cursor-pointer"
                                onClick={handleThemeSwitch}>
                                <div
                                    className={
                                        "bg-primary md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                                        (theme === "dark" && toggleClass)
                                    }><SunIcon className='text-white'/></div>
                            </div>

                        </div>
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default SettingsBar;