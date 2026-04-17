import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <ToastContainer position="top-right" autoClose={2000}/>
        <Footer/>
      </body>
    </html>
  );
}