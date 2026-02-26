const TopDonator = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4 hover:shadow-lg transition w-full min-w-[220px]">
      
      <h3 className="text-gray-500 text-sm">Top Donator</h3>

      <div className="flex justify-between items-center flex-wrap">
        <p className="text-3xl font-bold text-green-600">$24,580</p>
        <h4 className="text-gray-400 text-xs whitespace-nowrap">Updated 1 day ago</h4>
      </div>

      <p className="text-gray-400 text-xs">
        <span className="text-xs text-green-600 px-2 mr-2 py-1 rounded-lg">
          +12%
        </span>
        Alice Smith
      </p>

    </div>
  );
};

export default TopDonator;