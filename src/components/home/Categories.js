import Link from 'next/link';
import React from 'react';

const Categories = () => {
    const categoriesData = [
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
        {
            name: "Dua's Importance",
            icon: "assets/categories-icons/salat.png",
            subcategory: 7,
            totalDuas: 15,
        },
    ]
    return (
        <div className='mt-5'>
            <div className='flex items-center justify-between'>
                <h2><strong>Categories Of Dua :</strong></h2>
                <Link href="">{"More categories >>"}</Link>
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-4 mt-5'>
                {
                    categoriesData.map(category => <div className='flex bg-white dark:bg-dark dark:text-white transition-all md:hover:scale-105 hover:shadow-lg md:cursor-pointer rounded-lg p-3 items-center justify-between flex-wrap'>
                        <div className='flex'>
                            <div className='bg-gray-100 h-16 w-16 flex items-center justify-center rounded-lg'>
                                <img src={category.icon} alt="" />
                            </div>
                            <div className='ml-5'>
                                <p className='font-semibold'>{category.name}</p>
                                <p>Subcategory: {category.subcategory}</p>
                            </div>
                        </div>
                        <div className='pl-2 border-l-gray-200 border-l-2 text-center flex flex-col items-center justify-center'>
                            <span className='font-semibold '>{category.totalDuas}</span> Duas
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default Categories;