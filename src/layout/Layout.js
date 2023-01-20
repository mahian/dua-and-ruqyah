import { Header } from '@/components/Header';
import SettingsBar from '@/components/SettingsBar';
import SideBar from '@/components/SideBar';
import React from 'react'

const Layout = ({ children }) => (
    <div>
        <div className='bg-gray-100 dark:bg-dark-2 dark:text-white lg:p-5'>
            <div className='flex'>
                <SideBar />
                <div className='w-full'>
                    <Header />
                    <div>
                        <div className='flex justify-between'>
                            <div className='px-5 pb-24 w-full lg:h-[88vh] lg:overflow-y-auto no-scrollbar'>
                                {children}
                            </div>
                            <div className='hidden 2xl:block'>
                                <SettingsBar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Layout;