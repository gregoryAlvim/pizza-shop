import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MouthCanceledOrdersAmountCard } from './mouth-canceled-orders-amount-card'
import { MouthOrdersAmountCard } from './mouth-orders-amount-card'
import { MouthRevenueCard } from './mouth-revenue-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MouthRevenueCard />
          <MouthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MouthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9  gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
