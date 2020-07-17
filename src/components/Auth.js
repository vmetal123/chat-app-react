import React, { useState } from "react";
import Login from "./Login";
import AUTH from '../config/Constants';
import PropTypes from "prop-types";

function Auth() {
  const [activeTab, setActiveTab] = useState(AUTH.LOGIN);

  return (
    <>
      <Tabs>
        <Tab activeTab={activeTab} label={AUTH.LOGIN} onClick={setActiveTab}>
          <Login buttonText={AUTH.LOGIN} />
        </Tab>
        <Tab activeTab={activeTab} label={AUTH.REGISTER} onClick={setActiveTab}>
          <Login buttonText={AUTH.REGISTER} />
        </Tab>
      </Tabs>
    </>
  );
}

export default Auth;

function Tabs({ children }) {
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
        <div className='border-l border-r border-b border-purple-900'>
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
          ? "text-purple-900 border-r border-t border-l border-purple-900"
          : "bg-purple-900 text-white border-b border-purple-900"
      }`}
      onClick={(e) => onClick(label)}
    >
      {label}
    </li>
  );
}
