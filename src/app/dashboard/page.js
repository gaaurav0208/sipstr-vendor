import DashboardHeader from '../components/dashboard/DashboardHeader';
import Tabs from '../components/dashboard/Tabs';
import PrimaryText from '../components/PrimaryText';

export default function Dashboard() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <PrimaryText size='2xl' weight='700'>Dashboard</PrimaryText>
            <DashboardHeader />
            <Tabs />
        </div>
    );
}
