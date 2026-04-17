"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaChartPie, FaClock } from "react-icons/fa";

export default function Navbar() {
  const path = usePathname();

  const navItem = (href, label, Icon) => (
    <Link href={href} className={`flex items-center gap-2 ${
      path === href ? "text-green-600 font-bold" : ""
    }`}>
      <Icon /> {label}
    </Link>
  );

  return (
    <div className="flex justify-between p-4 shadow">
      <h1 className="text-3xl font-bold">Keen<span className="text-green-700">Keeper</span></h1>
      <div className="flex gap-6">
        {navItem("/", "Home", FaHome)}
        {navItem("/timeline", "Timeline", FaClock)}
        {navItem("/stats", "Stats", FaChartPie)}
      </div>
    </div>
  );
}