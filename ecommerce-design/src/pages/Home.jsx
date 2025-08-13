import React from "react";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const products = [
    { 
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", 
      title: "Casual Sneakers", 
      price: 1499 
    },
    { 
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D", 
      title: "Cotton T-Shirt", 
      price: 799 
    },
    { 
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D", 
      title: "Smart Watch", 
      price: 2499 
    },
    { 
      image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVhdGhlciUyMGJhY2twYWNrfGVufDB8fDB8fHww", 
      title: "Leather Backpack", 
      price: 1999 
    },
    { 
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGVuaW0lMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D", 
      title: "Denim Jacket", 
      price: 2499 
    },
    { 
      image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww", 
      title: "Wireless Headphones", 
      price: 2999 
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-20 px-6 text-center overflow-hidden">
        <motion.h1 
          className="text-5xl font-bold drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Upgrade Your Style Today
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Discover the latest trends in fashion & accessories
        </motion.p>
        <motion.button 
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Shop Now
        </motion.button>
      </section>

      {/* Products Section */}
      <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <ProductCard key={i} {...p}/>
        ))}
      </section>

      <Footer />
    </>
  );
}
