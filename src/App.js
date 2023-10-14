import './Main.css'
import User from './Component/User'
import DashboardContainer from './Component/DashboardContainer';
import Reports from './Asset/Reports';
import Report from './Component/Report';
import {HiOutlineKey } from 'react-icons/hi';
import {IoCubeOutline} from 'react-icons/io5';
import {BsPerson} from 'react-icons/bs';
import {PiWalletLight} from 'react-icons/pi';
import {BiSolidOffer}  from 'react-icons/bi';
import {MdOutlineLiveHelp}  from 'react-icons/md';
import {FaGreaterThan} from 'react-icons/fa';
import { useState } from 'react';
function App() {

 const[menu, setMenu] = useState(false)

  const menuHandler= () =>{
    setMenu(!menu);
    // console.log("click")
  }

  return (
    <main className='main'>
      <section className={menu=== false ? 'dashboard-menu' : 'dashboard-menu toggle'}  onClick={menuHandler}>
        <div className='dashboard-menu-content'>
          <div className='dashboard-menu-header'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 .845l9.66 5.578v11.154L12 23.155l-9.66-5.578V6.423L12 .845Zm0 2.31L4.34 7.577v8.846L12 20.845l7.66-4.422V7.577L12 3.155ZM12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0Z"/></svg>
            <h1>Dashboard</h1>     
          </div>
              <ul className='dashboard-list'>
                <li className='list'>
                  <span className='list-span'><HiOutlineKey className='border'/>Dashboard</span>
                </li>
                <li className='list'>
                  <span className='list-span'><IoCubeOutline className='border'/>Product</span>
                  <FaGreaterThan />
                </li>
                <li className='list'>
                  <span className='list-span'><BsPerson className='border'/>Customer </span>
                  <FaGreaterThan/>
                </li>
                <li className='list'>
                  <span className='list-span'><PiWalletLight/>Income</span>
                  <FaGreaterThan/>
                </li>
                <li className='list'>
                  <span className='list-span'><BiSolidOffer/>Promote </span>
                  <FaGreaterThan/>
                </li>
                <li className='list'>
                  <span className='list-span'><MdOutlineLiveHelp/>Help</span>
                  <FaGreaterThan/>
                </li>
              </ul>
        </div>
      </section>
      <section className='dashboard-content'>
        <User menu={menuHandler}/>
        <DashboardContainer>
          {Reports.map((value) => (
            <Report reports={value} key={value.title} />
            
          ))}
        </DashboardContainer>
      </section>
    </main>
  );
}

export default App;
