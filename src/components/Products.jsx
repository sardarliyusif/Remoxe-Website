import React from "react";

export const Products = () => {
  return (
    <section className="px-4 mb-[60px] sm:mb-[187px]">
      <div className="max-w-[1280px] my-0 mx-auto">
        <div className="mb-[146px] sm:mb-[120px] sm:order-1">
          <p className="text-primary text-[10px] sm:text-base font-semibold text-center">
            Products
          </p>
          <p className="font-semibold text-[15px] sm:text-[36px] my-3 sm:my-[26px]  text-center">
            Remox's Hierarchy of Treasury Needs for DAOs
          </p>
          <p className="font-semibold text-[8px] text-greylish sm:text-[18px] text-center">
            Remox's different layers of the pyramid help DAOs manage their
            treasury in one place.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row mb-[130px] sm:mb-[260px]">
          <div className="sm:w-1/2 flex flex-col justify-center sm:order-1">
            <p className="text-center sm:text-left font-semibold text-lg sm:text-[36px] mb-4">
              Payments, the base treasury needs
            </p>
            <p className="text-center sm:text-left max-w-[280px] sm:max-w-none mx-auto font-normal text-[8px] sm:text-lg text-greylish mb-[20px] sm:mb-0">
              Create a budget cycle and different budgets for your spending
              needs, run on-chain payroll with multiple currencies after
              onboarding contributors, and reimburse expenses.
            </p>
          </div>
          <div className="w-10/12 self-center sm:w-1/2">
            <img className="hidden sm:inline w-[608px]" src="/icons/budgets.svg" alt="product" />
            <img className="sm:hidden" src="/icons/budgets-mob.svg" alt="product" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mb-[130px] sm:mb-[260px]">
          <div className="sm:w-1/2 flex flex-col justify-center">
            <p className="text-center sm:text-left font-semibold text-lg sm:text-[36px] mb-4">
              Analytics, the mid treasury needs
            </p>
            <p className="text-center sm:text-left max-w-[267px] sm:max-w-none mx-auto font-normal text-[8px] sm:text-lg text-greylish mb-[20px] sm:mb-0">
              Manage multiple wallets on multiple networks, have a detailed
              insight into your organization’s financial standing, track and
              record transactions with custom labels to make it simple to do
              accounting and bookkeeping, and prepare real-time reporting for
              your community.
            </p>
          </div>
          <div className="w-10/12 self-center sm:w-1/2">
            <img className="hidden sm:inline w-[608px]" src="/icons/transactions.svg" alt="product" />
            <img className="sm:hidden" src="/icons/transactions-mob.svg" alt="product" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2 flex flex-col justify-center sm:order-1">
            <p className="text-center sm:text-left font-semibold text-lg sm:text-[36px] mb-4">
              Investments, the top treasury needs
            </p>
            <p className="text-center sm:text-left max-w-[260px] sm:max-w-none mx-auto font-normal text-[8px] sm:text-lg text-greylish mb-[20px] sm:mb-0">
              Track your DeFi investments while mitigating technical and
              economic risks through our dynamic risk assessment.
            </p>
          </div>
          <div className="w-10/12 self-center sm:w-1/2">
            <img className="hidden sm:inline w-[608px]" src="/icons/risk.svg" alt="product" />
            <img className="sm:hidden" src="/icons/risk-mob.svg" alt="product" />
          </div>
        </div>
      </div>
    </section>
  );
};
