import React from 'react';

function DashboardContainer (props){

    return(
        <div className='dashboard-container'>
            {props.children}
        </div>
    )
}
export default DashboardContainer;