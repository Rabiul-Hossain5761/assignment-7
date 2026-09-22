import React from 'react';
import { FaPlus } from "react-icons/fa6";


const Banner = () => {
    return (
        <div className='container mx-auto text-center space-y-4 '>
            <h1 className=' text-4xl font-bold'>Friends to keep close in your life</h1>
            <p>Your personal shelf of meaningful connections Browse, tend, and nurture the <br/>
                relationships that matter most.
            </p>
            <button className='mx-auto text-center flex gap-2 items-center p-2 rounded-2xl text-white bg-[#244F3F]'>
                <FaPlus size={16} />
                Add a Friend
            </button>
        </div>
    );
};

export default Banner;