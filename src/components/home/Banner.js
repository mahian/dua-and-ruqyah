import React from 'react';

const Banner = () => {
    return (
        <div className='banner sm:mt-5 lg:mt-0 bg-primary relative flex flex-col items-center sm:justify-center h-[235px] px-4 rounded-xl overflow-hidden'>
            <div className='text-white font-semibold text-center mt-24 sm:mt-0'>
                <p className='text-xl'>“ O Allah! grant us a good outcome on all of our affairs and save us from the disgrace of this world and the punishment of ht Hereafter. ”</p>
                <p className='mt-3'>{"[Jami’ as-Sagir: 1450]"}</p>
            </div>
        </div>
    );
};

export default Banner;