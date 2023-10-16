import React from 'react'
import '../Component/Overview.css';
import {AiOutlineDown} from 'react-icons/ai';
import Chart from 'react-google-charts';

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
                        <span>Jan</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph feb'></div>
                        <span>Feb</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph mar'></div>
                        <span>Mar</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph apr'></div>
                        <span>Apr</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph may'></div>
                        <span>May</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph jun'></div>
                        <span>Jun</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph jul'></div>
                        <span>Jul</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph aug'></div>
                        <span>Aug</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph sep'></div>
                        <span>Sep</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph oct'></div>
                        <span>Oct</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph nov'></div>
                        <span>Nov</span>
                    </div>
                    <div className='graph-body'>
                        <div className='graph dec'></div>
                        <span>Dec</span>
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
                    {/* <div className='customers-graph'>
                        <div className='customers-graph-top'>
                            <span>
                            <h3>65%</h3>
                            <p> Total New Customers</p>
                            </span>
                        </div>
                    </div> */}
                     <Chart/>
                </section>
            </div>
        </div>
    )
}
export default Overview;