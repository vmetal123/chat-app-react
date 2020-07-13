import React, { useState } from "react";
import Login from "./Login";
import PropTypes from "prop-types";

function Auth() {
  const [activeTab, setActiveTab] = useState("Login");

  return (
    <>
      <Tabs>
        <Tab activeTab={activeTab} label='Login' onClick={setActiveTab}>
          <Login buttonText='Login' />
        </Tab>
        <Tab activeTab={activeTab} label='Register' onClick={setActiveTab}>
          <Login buttonText='Register' />
        </Tab>
      </Tabs>
    </>
  );
}

export default Auth;

function Tabs({ children, label, activeTab }) {
  Tabs.propsType = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  return (
    <>
      <div className='max-w-md m-auto mt-5 shadow-lg'>
        <ul className='flex'>
          {children.map((child) => {
            return child;
          })}
        </ul>
        <div className='border-l border-r border-b border-purple-800'>
          {children.map((child) => {
            const { label, activeTab } = child.props;
            if (label !== activeTab) return undefined;
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
          : "bg-purple-600 text-white border-b border-purple-800"
      }`}
      onClick={(e) => onClick(label)}
    >
      {label}
    </li>
  );
}
