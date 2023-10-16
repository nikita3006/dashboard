import React from "react";

function User(props) {
  // const hamburgerHandler = () =>{
  //     console.log('hamburger')
  // }
  return (
    <div className="user">
      <div className="user-name">
        <span className="dashboard-hamburger" onClick={props.menu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 17h18M3 12h18M3 7h18"
            />
          </svg>
        </span>
        <h1>Hello Nikita👋,</h1>
      </div>
      <div className="search-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
        >
          <path
            fill="#808080"
            d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
          />
        </svg>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}
export default User;
