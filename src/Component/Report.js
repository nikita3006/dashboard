import React from "react";
import dollar from '../Asset/dollar.png'

function Report (props){
    // console.log(props.reports)
    return(
        <div className="report-card">
        <div className={`${props.reports.color} report-img`}>
                <img src={props.reports.image} alt='dollar' className="report-image"/>      
            </div>
            <div>
                <h6 className="report-title">{props.reports.title}</h6>
                <h4>{props.reports.amount}</h4>
                <span>{props.reports.sign === '+ve' ? <span className="temp"><svg  className='positive'xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 1 24 24"><path fill="currentColor" d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z"/></svg><p className="positive">{props.reports.percent} </p>this month</span> : <span className="temp"><svg className='negative' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 1 24 24"><path fill="currentColor" d="M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4Z"/></svg><p className="negative">{props.reports.percent}</p>this month</span>}</span>
            </div>
        </div>
    )
}
export default Report;