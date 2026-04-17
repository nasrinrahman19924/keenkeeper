"use client";
import { getTimeline } from "@/utils/timelineStore";
import { useState } from "react";
import { FaPhone, FaComment, FaVideo } from "react-icons/fa";

export default function Timeline() {
  const [filter, setFilter] = useState("all");
  const data = getTimeline();


  const getIcon = (type) => {
    if (type === "Call") return <FaPhone />;
    if (type === "Text") return <FaComment />;
    if (type === "Video") return <FaVideo />;
  };

  const filteredData = filter === "all"
    ? data
    : data.filter(item => item.type === filter);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Timeline</h1>



      {/* 🔥 Filter Buttons */}
      <div className="flex gap-3 mb-6">
        {["all", "Call", "Text", "Video"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1.5 rounded-full text-sm border transition
              ${filter === type
                ? "bg-green-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Timeline List */}
      {filteredData.length === 0 ? (
        <p className="text-gray-500">No activity found</p>
      ) : (
        filteredData.map((item, i) => (
          <div key={i} className="flex gap-4 mb-4">

            <div className="text-green-600 mt-1">
              {getIcon(item.type)}
            </div>

            {/* Dot */}
            <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>

            {/* Card */}
            <div className="bg-white p-4 rounded-xl shadow-sm border w-full">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h3 className="font-medium">{item.title}</h3>
            </div>

          </div>
        ))
      )}

    </div>
  );
}