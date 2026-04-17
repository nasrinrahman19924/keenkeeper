"use client";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { getTimeline } from "@/utils/timelineStore";

export default function Stats() {
  const data = getTimeline();

  const count = {
    Call: 0,
    Text: 0,
    Video: 0
  };

  data.forEach(d => count[d.type]++);

  const chartData = Object.keys(count).map(k => ({
    name: k,
    value: count[k]
  }));

  const COLORS = ["#22c55e", "#3b82f6", "#f59e0b"];

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Friendship Analytics</h1>

      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          dataKey="value"
          outerRadius={120}
          innerRadius={70}   
          paddingAngle={5}   
        >
          {chartData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}