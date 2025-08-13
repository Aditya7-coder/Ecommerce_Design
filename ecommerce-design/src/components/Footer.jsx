import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      <p>&copy; {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
      <p className="text-sm mt-1">Made with ❤️ by Aditya</p>
    </footer>
  );
}
