import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, LogIn, UserPlus } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-indigo-500 transition">ShopEase</Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-blue-500 transition">Home</Link>
        <Link to="/login" className="flex items-center gap-1 hover:text-blue-500 transition"><LogIn size={20}/>Login</Link>
        <Link to="/signup" className="flex items-center gap-1 hover:text-blue-500 transition"><UserPlus size={20}/>Register</Link>
        <ShoppingCart size={22} className="cursor-pointer hover:text-blue-500 transition"/>
      </div>
    </motion.nav>
  );
}
