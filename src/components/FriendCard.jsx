import Link from "next/link";

export default function FriendCard({ friend }) {
  const statusColor = {
    "overdue": "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-600",
    "on-track": "bg-green-100 text-green-600"
  };
  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
        <img src={friend.picture} className="w-12 h-12 rounded-full" />
        <h2 className="font-semibold mt-2">{friend.name}</h2>
        <span
          className={`text-xs px-3 py-1 rounded-full ${statusColor[friend.status]}`}
        >
          {friend.status}
        </span>
        <p className="text-sm text-gray-500">
          {friend.days_since_contact} days ago
        </p>
      </div>
    </Link>
  );
}