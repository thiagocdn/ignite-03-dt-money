import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { TransactionContext } from '../../contexts/transaction-context'
import { SearchForm } from './components/search-form'
import {
  PriceHightlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const { transactions } = useContext(TransactionContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="40%">{transaction.description}</td>
                <td>
                  <PriceHightlight variant={transaction.type}>
                    R$ {transaction.price}
                  </PriceHightlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.created_at}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
