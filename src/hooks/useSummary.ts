import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../contexts/transaction-context'

export function useSummary() {
  const transactions = useContextSelector(
    TransactionContext,
    (context) => context.transactions,
  )

  const summary = useMemo(
    () =>
      transactions.reduce(
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
      ),
    [transactions],
  )

  return summary
}
