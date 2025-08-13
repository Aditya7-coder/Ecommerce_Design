import React from "react";
import { motion } from "framer-motion";

export default function ProductCard({ image, title, price }) {
  return (
    <motion.div 
      className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-blue-600 font-bold mt-2">₹{price}</p>
      </div>
    </motion.div>
  );
}
