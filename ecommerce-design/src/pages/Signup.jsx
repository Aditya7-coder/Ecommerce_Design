import React from "react";
import { motion } from "framer-motion";

export default function Signup() {
  return (
    <motion.div 
      className="flex justify-center items-center h-[80vh] bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Register</h2>
        <input type="text" placeholder="Full Name" className="w-full mb-4 px-4 py-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-4 px-4 py-2 border rounded" />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Register</button>
      </div>
    </motion.div>
  );
}
