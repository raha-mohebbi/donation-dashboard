import TotalDonations from "./TotalDonations";
import TopDonator from "./TopDonator";
import DonationsToday from "./DonationsToday";
import TopDonators from "./TopDonators";
import DonationTrends from "./DonationTrends";


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
    <TopDonator />
  </div>

  <div className="top-donators col-span-1 md:col-span-3">
   <TopDonators />
  </div>
  <div className="donation-trends recent-activities col-span-1 md:col-span-3">
<DonationTrends />
</div>
</div>
  );
};

export default Dashboard;