import React, { useState } from "react";
import Login from "./Login";
import PropTypes from "prop-types";

function Auth() {
  return (
    <>
      <Tabs>
        <div label='Login'>
          <Login />
        </div>
        <div label='Register'></div>
      </Tabs>
    </>
  );
}

export default Auth;

function Tabs({ children }) {
  Tabs.propsType = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  const [activeTab, setActiveTab] = useState("Login");

  return (
    <>
      <div className='max-w-md m-auto mt-5 shadow-lg'>
        <ul className='flex'>
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                label={label}
                key={label}
                onClick={(e) => setActiveTab(e)}
              />
            );
          })}
        </ul>
        <div className='border-l border-r border-b border-purple-800'>
          {children.map((child) => {
            if(child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    </>
  );
}

function Tab({ onClick, activeTab, label }) {
  Tab.propsType = {
    onClick: PropTypes.func.isRequired,
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  return (
    <li
      className={`flex-1 text-center py-3 font-bold cursor-pointer ${
        activeTab === label
          ? "text-purple-900 border-r border-t border-l border-purple-800"
          : "bg-purple-800 text-white"
      }`}
      onClick={(e) => onClick(label)}
    >
      {label}
    </li>
  );
}
