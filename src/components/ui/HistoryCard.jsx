import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { IoMdText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";

const HistoryCard = ({history}) => {
    return (
        <div className='w-3/4 mx-auto border p-5 flex items-center gap-2 rounded-md bg-amber-200'>
            {
                history.action === "call"?<FiPhoneCall />:history.action === "text"?<IoMdText />:<FaVideo />
            }
            <div>
                <h1><span className='font-bold text-green-950'>{history.action}</span> with {history.name}</h1>
                <p>{history.next_due_date}</p>
            </div>

            
        </div>
    );
};

export default HistoryCard;