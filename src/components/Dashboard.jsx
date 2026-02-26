import TotalDonations from "./TotalDonations";
import TopDonators from "./TopDonator";
import DonationsToday from "./DonationsToday";

const Dashboard = () => {
  return (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 p-5">
  <div className="col-span-1">
    <TotalDonations />
  </div>
  <div className="col-span-1">
    <DonationsToday />
  </div>
  <div className="col-span-1">
    <TopDonators />
  </div>
</div>
  );
};

export default Dashboard;