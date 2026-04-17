"use client";

import { useEffect, useState } from "react";
import FriendCard from "@/components/FriendCard";
import Loader from "@/components/Loader";

export default function Home() {
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    fetch("/data/friends.json")
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  if (!friends) return <Loader />;

  return (
    <div className="p-6">

      {/* 🔥 Banner Section */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-semibold">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 mt-2">
          Stay connected with people who matter most
        </p>

        <button className="mt-5 bg-green-600 text-white px-4 py-2 rounded-lg">
          ➕ Add Friend
        </button>
      </div>
  
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">

        {/* Total Friends */}
        <div className="bg-white p-4 rounded-xl shadow-sm border text-center">
          <p className="text-sm text-gray-500">Total Friends</p>
          <h2 className="text-xl font-semibold mt-1">
            {friends.length}
          </h2>
        </div>

        {/* Overdue */}
        <div className="bg-white p-4 rounded-xl shadow-sm border text-center">
          <p className="text-sm text-gray-500">Overdue</p>
          <h2 className="text-xl font-semibold mt-1 text-red-500">
            {friends.filter(f => f.status === "overdue").length}
          </h2>
        </div>

        {/* On Track */}
        <div className="bg-white p-4 rounded-xl shadow-sm border text-center">
          <p className="text-sm text-gray-500">On Track</p>
          <h2 className="text-xl font-semibold mt-1 text-green-500">
            {friends.filter(f => f.status === "on-track").length}
          </h2>
        </div>

        {/* Almost Due */}
        <div className="bg-white p-4 rounded-xl shadow-sm border text-center">
          <p className="text-sm text-gray-500">Almost Due</p>
          <h2 className="text-xl font-semibold mt-1 text-yellow-500">
            {friends.filter(f => f.status === "almost due").length}
          </h2>
        </div>

      </div>

      {/* 🔥 Friends Grid */}
      <div className="grid md:grid-cols-4 gap-4">
        {friends.map(friend => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>

    </div>
  );
}