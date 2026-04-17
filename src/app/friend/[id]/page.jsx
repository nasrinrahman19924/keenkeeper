"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { addTimeline } from "@/utils/timelineStore";
import { toast } from "react-toastify";

export default function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("https://keenkeeper.onrender.com/data/friends.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(f => f.id == id);
        setFriend(found);
      });
  }, [id]);

  const handleAction = (type) => {
    addTimeline({
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString()
    });

    toast.success(`${type} added!`);
  };

  if (!friend) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="  p-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {/* 🔥 LEFT PROFILE CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">

          <img
            src={friend.picture}
            className="w-20 h-20 rounded-full mx-auto"
          />

          <h2 className="text-lg font-semibold mt-3">{friend.name}</h2>

          <span className="inline-block mt-2 text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
            {friend.status}
          </span>

          <p className="text-sm text-gray-500 mt-3">{friend.bio}</p>

          <div className="mt-4 text-sm text-gray-500">
            📧 {friend.email}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 mt-5">
            <button className="border rounded-lg py-2">⏰ Snooze 2 Weeks</button>
            <button className="border rounded-lg py-2">📦 Archive</button>
            <button className="border rounded-lg py-2 text-red-500">🗑️ Delete</button>
          </div>
        </div>

        {/* 🔥 RIGHT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {/* ✅ Stats Cards */}
          <div className="grid grid-cols-3 gap-4">

            <div className="bg-white p-4 rounded-xl border text-center">
              <p className="text-sm text-gray-500">Days since Contact</p>
              <h2 className="text-xl font-semibold">{friend.days_since_contact}</h2>
            </div>

            <div className="bg-white p-4 rounded-xl border text-center">
              <p className="text-sm text-gray-500">Goal (days)</p>
              <h2 className="text-xl font-semibold">{friend.goal}</h2>
            </div>

            <div className="bg-white p-4 rounded-xl border text-center">
              <p className="text-sm text-gray-500">Next Due</p>
              <h2 className="text-sm font-semibold">{friend.next_due_date}</h2>
            </div>

          </div>

          {/* ✅ Relationship Goal */}
          <div className="bg-white p-5 rounded-xl border flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Relationship Goal</p>
              <h3 className="font-semibold">Connect every {friend.goal} days</h3>
            </div>

            <button className="border px-3 py-1 rounded-lg text-sm">
              Edit
            </button>
          </div>

          {/* ✅ Quick Check-In */}
          <div className="bg-white p-5 rounded-xl border">
            <h3 className="font-semibold mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">

              <button onClick={() => handleAction("Call")} className="border p-3 rounded-lg flex flex-col items-center">
                📞
                <span className="text-sm mt-1">Call</span>
              </button>

              <button onClick={() => handleAction("Text")} className="border p-3 rounded-lg flex flex-col items-center">
                💬
                <span className="text-sm mt-1">Text</span>
              </button>

              <button onClick={() => handleAction("Video")} className="border p-3 rounded-lg flex flex-col items-center">
                🎥
                <span className="text-sm mt-1">Video</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

        