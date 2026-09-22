import React from 'react';
import Banner from '../../components/shared/banner/Banner';
import Users from '../../components/homepage/AllUsers';
import Summary from '../../components/homepage/Summary';
import AllUsers from '../../components/homepage/AllUsers';


const Homepage = () => {
    return (
        <div className='mt-8'>
            <Banner/>
            <Summary/>
            <AllUsers/>
        </div>
    );
};

export default Homepage;