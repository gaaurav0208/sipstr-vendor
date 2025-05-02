import React from 'react';
import PrimaryText from '../PrimaryText';
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';

const PercentageChange = ({ value }) => {
  const isPositive = value > 0;
  return (
    <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
      {isPositive ? (
        <MdArrowUpward className="text-xl" />
      ) : (
        <MdArrowDownward className="text-xl" />
      )}
      <span className="ml-1">{isPositive ? `+${value}%` : `${value}%`} from yesterday</span>
    </div>
  );
};

const DashboardHeader = () => {
  return (
    <div className="flex justify-between space-x-6 p-6">
      {/* Today's Orders Box */}
      <div className="bg-[#FFF7ED] p-6 rounded-lg w-1/2">
        <h2 className="text-[#565F6B] text-2xl mb-4">Today's Orders</h2>
        <div className="flex justify-between items-center">
          <PrimaryText weight="700" size="2xl">120</PrimaryText>
          <PercentageChange value={10} />
        </div>
      </div>

      {/* Revenue Box */}
      <div className="bg-[#FFF7ED] p-6 rounded-lg w-1/2">
        <h2 className="text-[#565F6B] text-2xl mb-4">Revenue</h2>
        <div className="flex justify-between items-center">
          <PrimaryText weight="700" size="2xl">$123,456</PrimaryText>
          <PercentageChange value={-15} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
