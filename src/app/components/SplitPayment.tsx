import React, { useState } from 'react';
import { calculateSharedCost, Split } from '@/app/utils/calculateSharedCost';
import { saveSplit } from '@/app/utils/db';
import SplitInput from '@/app/components/SplitInput';
import Card from '@/app/components/Card';

interface SplitPaymentProps {
  onNewSplit: (newSplit: Split) => void;
}

const SplitPayment: React.FC<SplitPaymentProps> = ({ onNewSplit }) => {
  const [total, setTotal] = useState('0');
  const [person1, setPerson1] = useState('0');
  const [person2, setPerson2] = useState('0');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { updatedPerson1, updatedPerson2, sharedCost } = calculateSharedCost(
      total,
      person1,
      person2,
    );
    const newSplit: Split = {
      total: parseFloat(total),
      person1: updatedPerson1,
      person2: updatedPerson2,
      sharedCost,
    };
    await saveSplit(newSplit);
    onNewSplit(newSplit);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <SplitInput
          label="Total"
          placeholder="Total amount"
          value={total}
          onChange={e => setTotal(e.target.value)}
        />
        <SplitInput
          label="Thomas"
          placeholder="Person 1 amount"
          value={person1}
          onChange={e => setPerson1(e.target.value)}
        />
        <SplitInput
          label="Lucas"
          placeholder="Person 2 amount"
          value={person2}
          onChange={e => setPerson2(e.target.value)}
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Calculate
        </button>
      </form>
    </Card>
  );
};

export default SplitPayment;
