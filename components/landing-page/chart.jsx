"use client";

import { Undo } from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%" className={"relative "}>
      <div className="absolute top-1/3 left-[40%] flex items-center text-xl text-white">
        <Undo className="h-6 w-6 mt-5 -rotate-90" />
        <span>We started here</span>{" "}
      </div>
      {/* <AreaChart
        width={500}
        height={400}
        data={productSales}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip content={<CustomTooltip />} />
        <Legend /> */}

      {/* <Area
          type="monotone"
          dataKey="product1"
          stroke="#2563eb"
          fill="#3b82f6"
          stackId="1"
        /> */}

      {/* <Area
          type="monotone"
          dataKey="product2"
          stroke="#7c3aed"
          fill="#8b5cf6"
          stackId="1"
        />
      </AreaChart> */}
      <AreaChart
        width={"100%"}
        height={"100%"}
        data={data}
        // padding={{ left: 20, bottom: 20 }}
        // margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f3f3f3" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#f3f3f3" stopOpacity={0} />
          </linearGradient>
          {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f3f3f3" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#f3f3f3" stopOpacity={0} />
          </linearGradient> */}
        </defs>
        <XAxis
          tick={{ fill: "white" }}
          tickLine={{ stroke: "white" }}
          dataKey="name"
        />
        <YAxis tick={{ fill: "white" }} tickLine={{ stroke: "white" }} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {/* <CustomTooltip /> */}
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#f3f3f3"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        {/* <Area
          type="monotone"
          dataKey="pv"
          stroke="#f3f3f3"
          fillOpacity={1}
          fill="url(#colorPv)"
        /> */}
      </AreaChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Product 1:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Product 2:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default AreaChartComponent;
