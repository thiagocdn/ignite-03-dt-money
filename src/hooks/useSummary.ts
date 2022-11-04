import { useContext } from 'react'
import { TransactionContext } from '../contexts/transaction-context'

export function useSummary() {
  const { transactions } = useContext(TransactionContext)

  const summary = transactions.reduce(
    (previousObject, currentTransaction) => {
      if (currentTransaction.type === 'income')
        previousObject.income += currentTransaction.price

      if (currentTransaction.type === 'outcome')
        previousObject.outcome += currentTransaction.price

      previousObject.total = previousObject.income - previousObject.outcome

      return previousObject
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
