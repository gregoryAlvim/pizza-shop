import { api } from '@/lib/axios'

interface AproveOrderParams {
  orderId: string
}

export async function aproveOrder({ orderId }: AproveOrderParams) {
  await api.patch(`/orders/${orderId}/approve`)
}
