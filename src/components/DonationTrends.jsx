import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Mon", total: 400 },
  { date: "Tue", total: 700 },
  { date: "Wed", total: 500 },
  { date: "Thu", total: 900 },
  { date: "Fri", total: 1200 },
  { date: "Sat", total: 800 },
  { date: "Sun", total: 1400 },
];

const DonationTrends = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-4">Donation Trends</h2>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorDonations" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="total"
            stroke="#22c55e"
            fill="url(#colorDonations)"
            animationDuration={1200}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonationTrends;
