import React from 'react';
import { Split } from '@/app/utils/calculateSharedCost';

interface PreviousSplitsProps {
  splits: Split[];
}

const PreviousSplits: React.FC<PreviousSplitsProps> = ({ splits }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Previous Splits</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Total</th>
            <th className="border border-gray-300 p-2">Thomas</th>
            <th className="border border-gray-300 p-2">Lucas</th>
            <th className="border border-gray-300 p-2">Shared Cost</th>
          </tr>
        </thead>
        <tbody>
          {splits.reverse().map((split, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{split.total.toFixed(2)}</td>
              <td className="border border-gray-300 p-2">{split.person1.toFixed(2)}</td>
              <td className="border border-gray-300 p-2">{split.person2.toFixed(2)}</td>
              <td className="border border-gray-300 p-2">{split.sharedCost.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreviousSplits;
