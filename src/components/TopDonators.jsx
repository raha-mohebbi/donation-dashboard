import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const colors = ["#16a34a", "#22c55e", "#4ade80", "#86efac", "#15803d"];

const data = [
  { donor: "Ali", amount: 3200 },
  { donor: "Sara", amount: 2800 },
  { donor: "Reza", amount: 2500 },
  { donor: "Neda", amount: 2100 },
  { donor: "Arman", amount: 1800 },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { x, y, width, height, index, isActive } = props;
  const color = colors[index % colors.length];

  return (
    <path
      d={getPath(x, y, width, height)}
      fill={color}
      stroke={color}
      strokeWidth={isActive ? 4 : 0}
      style={{ transition: "all 0.3s ease" }}
    />
  );
};

const TopDonators = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-4">Top Donators</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="donor" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="amount"
            shape={<TriangleBar />}
            animationDuration={1000}
            animationEasing="ease-out"
          >
            <LabelList position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopDonators;
