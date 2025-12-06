import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">MyProperties</div>
      <nav className="space-x-4">
        <button className="px-3 py-1 rounded bg-blue-500 text-white">Sign In</button>
        <button className="px-3 py-1 rounded border border-blue-500 text-blue-500">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;

