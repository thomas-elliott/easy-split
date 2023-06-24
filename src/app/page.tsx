'use client';

import React, { useState, useEffect } from 'react';
import SplitPayment from '@/app/components/SplitPayment';
import PreviousSplits from '@/app/components/PreviousSplits';
import { getSplits } from '@/app/utils/db';
import { Split } from '@/app/utils/calculateSharedCost';

export default function Page() {
  const [splits, setSplits] = useState<Split[]>([]);

  useEffect(() => {
    async function fetchSplits() {
      const savedSplits = await getSplits();
      setSplits(savedSplits);
    }
    fetchSplits();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Easy Split</h1>
      <SplitPayment onNewSplit={(newSplit) => setSplits([...splits, newSplit])} />
      <PreviousSplits splits={splits} />
    </div>
  );
};

