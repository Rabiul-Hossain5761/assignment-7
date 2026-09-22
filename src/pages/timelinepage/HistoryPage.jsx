import React, { useContext } from 'react';
import UserProvider, { UserContext } from '../../context/UserProvider';
import HistoryCard from '../../components/ui/HistoryCard';

const HistoryPage = () => {
    const {storedHistory,setStoreHistory} = useContext(UserContext);
    return (
        
        <div className='space-y-2 mt-5'>
            {
                storedHistory.map((history)=>{
                    console.log(history);
                    return(

                        <HistoryCard history={history}/>
                   )
                })
            }
            
            
        </div>
    );
};

export default HistoryPage;