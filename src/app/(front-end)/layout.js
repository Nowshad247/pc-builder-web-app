import React from "react";

import Footer from "../components/Footer";
import { MainNav } from "../components/MainNav";

export default function layout({ children }) {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white shadow">
        <MainNav />
      </div>
      <main className="">{children}</main>

      <footer className="bg-gray-800 text-white">
        <Footer />
      </footer>
    </div>
  );
}
