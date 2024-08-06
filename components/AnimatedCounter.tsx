"use client";

import { formatAmount } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full total-balance-amount flex-center ">
      <CountUp
        end={amount}
        decimals={2}
        prefix="$"
        onEnd={() => formatAmount(amount)}
      />
    </div>
  );
};

export default AnimatedCounter;
