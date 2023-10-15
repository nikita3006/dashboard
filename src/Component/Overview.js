import React from 'react'
import '../Component/Overview.css';
import {AiOutlineDown} from 'react-icons/ai';

function Overview (){
    return(
        <div className='mid-content'>
            <div className='overview'>
                <section className='overview-title'>
                    <span className='overview-paragraph'>
                        <h4>Overview</h4>
                        <p>Montly Earning</p>
                    </span>
                   <span className='overview-quarter'>Quarterly<AiOutlineDown/></span>
                </section>
                <section className='overview-graph-body'>
                    <div className='graph-body'>
                        <div className='graph jan'></div>
                        <span>jan</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph feb'></div>
                        <span>feb</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph mar'></div>
                        <span>mar</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph apr'></div>
                        <span>apr</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph may'></div>
                        <span>may</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph jun'></div>
                        <span>jun</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph jul'></div>
                        <span>jul</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph aug'></div>
                        <span>aug</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph sep'></div>
                        <span>sep</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph oct'></div>
                        <span>oct</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph nov'></div>
                        <span>nov</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph dec'></div>
                        <span>dec</span>
                    </div>
                </section>
            </div>
            <div className='customers'>
            <section className='customers-title'>
                    <span className='customers-paragraph'>
                        <h4>Customers</h4>
                        <p>Customers that buy product</p>
                    </span>
                </section>
                <section className='customers-graph-body'>
                    <div className='customers-graph'>
                    </div>

                </section>
            </div>
        </div>
    )
}
export default Overview;