import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionContext } from '../../contexts/transaction-context'

export function Summary() {
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

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ {summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ {summary.outcome}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFFFFF" />
        </header>
        <strong>R$ {summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
