import React from 'react';

const Menu = () => {
    const menusData = [
        {
            name: 'Last read',
            icon: 'assets/history-icons/watch.png',
            iconBg: '#F8F3FF',
        },
        {
            name: 'Blog',
            icon: 'assets/history-icons/blogger.png',
            iconBg: '#FFF8EA',
        },
        {
            name: 'Ruqyah',
            icon: 'assets/history-icons/medicine.png',
            iconBg: '#FFF1FA',
        },
        {
            name: 'Dua Q&A',
            icon: 'assets/history-icons/chat.png',
            iconBg: '#F2F8FF',
        },
        {
            name: 'Book',
            icon: 'assets/history-icons/book.png',
            iconBg: '#E3FFFE',
        },
        {
            name: 'Dua audio',
            icon: 'assets/history-icons/audio-book.png',
            iconBg: '#F0F4FD',
        },
    ]
    return (
        <div className='relative -mt-14 bg-white dark:bg-dark dark:sm:bg-transparent sm:bg-transparent grid grid-cols-3 sm:gap-x-6 sm:gap-y-4 sm:mt-5 rounded-xl overflow-hidden sm:overflow-visible'>
            {
                menusData.map(menu => <div className='sm:flex text-center items-center bg-white dark:bg-dark dark:text-white transition-all md:hover:scale-105 hover:shadow-lg md:cursor-pointer sm:rounded-lg lg:p-3 p-2'>
                <div style={{backgroundColor: menu.iconBg}} className={`h-11 w-11 mx-auto sm:mx-0 lg:h-16 lg:w-16 flex items-center justify-center rounded-lg`}>
                    <img src={menu.icon} alt="" />
                </div>
                <p className='font-semibold lg:ml-5 sm:ml-3'>{menu.name}</p>
            </div>)
            }
        </div>
    );
};

export default Menu;