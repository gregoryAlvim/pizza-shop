import { api } from '@/lib/axios'

export interface AproveOrderParams {
  orderId: string
}

export async function aproveOrder({ orderId }: AproveOrderParams) {
  await api.patch(`/orders/${orderId}/approve`)
}
