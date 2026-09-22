import React, { useContext } from "react";
import UserCard from "./UserCard";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { LuArchive } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import UserProvider, { UserContext } from "../../context/UserProvider";




const DetailsCard = ({user}) => {
    const {handleAction} = useContext(UserContext);

    
  return (
    <div className="w-3/4 mx-auto grid grid-cols-3 mt-10">
        <div className="space-y-4">
            <div className="text-center" >
                <UserCard user={user}/>
            </div>
            <button className="w-full flex items-center gap-2 justify-center">
                <HiOutlineBellSnooze />
                Snooze 2 weeks
            </button>
            <button className="w-full flex items-center gap-2 justify-center">
                <LuArchive />
                Archive
            </button>
            <button className="w-full flex items-center gap-2 justify-center text-red-500">
                <MdDelete />
                Delete
            </button>

        </div>
        <div className="col-span-2 space-y-4 p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                    <h1 className="font-bold text-green-950">{user.days_since_contact}</h1>
                    <p>Days Since Contact</p>
                </div>
                <div>
                    <h1 className="text-green-950 font-bold">10</h1>
                    <p>Goal (Days)</p>
                </div>
                <div>
                    <h1 className="text-green-950 font-bold">{user.next_due_date}</h1>
                    <p>Next Due</p>
                </div>
            </div>
            <div>
                <div className="flex justify-between">
                    <h1 className="text-green-950 font-bold">Relationship Goal</h1>
                    <button>Edit</button>
                </div>
                <p>Connect every 30 days</p>
            </div>
            <div className="space-y-5">
                <h1 className="text-green-950 font-bold">Quick Check-In</h1>
                <div className="grid grid-cols-3 gap-4">
                    <button onClick={()=>handleAction(user,"call") } className="flex flex-col items-center gap-1 btn btn-outline">
                        <FiPhoneCall />
                        Call
                    </button>
                    <button onClick={()=>handleAction(user,"text") } className="flex flex-col items-center gap-1 btn btn-outline ">
                        <IoMdText />
                        Text
                   </button>
                   <button onClick={()=>handleAction(user,"video") } className="flex flex-col items-center gap-1 btn btn-outline">
                       <FaVideo />
                       Video
                   </button>
                </div>
            </div>
            

        </div>
    </div>
  );
};

export default DetailsCard;
