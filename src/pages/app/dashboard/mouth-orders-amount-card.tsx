import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthOrdersAmount } from '@/api/get-month-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export function MouthOrdersAmountCard() {
  const { data: mouthOrdersAmount } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ['metrics', 'month-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {mouthOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {mouthOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {mouthOrdersAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{mouthOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {mouthOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
