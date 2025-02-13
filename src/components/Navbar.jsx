import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#bc59e1] p-3 flex items-center justify-center shadow-lg z-50">
      <div className="absolute left-4">
        <img src="/image.png" alt="SC Management Logo" className="w-12 h-auto" />
      </div>
      <h1 className="text-2xl font-bold text-black">SC Management System</h1>
    </nav>
  );
}

export default Navbar;
