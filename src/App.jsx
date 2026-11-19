
import { useEffect, useState } from 'react'
import { Search, Bell, CalendarDays } from 'lucide-react'

import Sidebar from './components/Sidebar'
import SummaryCard from './components/SummaryCard'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {
  const [transactions, setTransactions] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('transactions')) || []
    } catch {
      return []
    }
  })

  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  const totalIncome = transactions
    .filter(item => item.type === 'income')
    .reduce((sum, item) => sum + item.amount, 0)

  const totalExpenses = transactions
    .filter(item => item.type === 'expense')
    .reduce((sum, item) => sum + item.amount, 0)

  const balance = totalIncome - totalExpenses

  function addTransaction(transaction) {
    setTransactions(prev => [transaction, ...prev])
  }

  function deleteTransaction(id) {
    setTransactions(prev => prev.filter(item => item.id !== id))
  }

  const filteredTransactions = transactions.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen md:flex bg-slate-50">

      <Sidebar />

      <main id="dashboard" className="flex-1 min-w-0 p-4 md:p-8">

        {/* Header */}
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Dashboard
            </h1>
            <p className="text-slate-500 mt-2">
              Welcome back! Here's your financial overview.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-white p-3 rounded-xl shadow-sm hover:bg-blue-50 transition">
              <Bell size={21} className="text-slate-600" />
            </button>

            <div className="bg-blue-600 text-white w-11 h-11 rounded-full flex items-center justify-center font-bold">
              ET
            </div>
          </div>

        </header>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <CalendarDays size={18} />
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>

        {/* Summary */}
        <div id="summary" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">

          <SummaryCard
            title="Total Balance"
            amount={balance}
            color="text-blue-600"
            icon="💰"
          />

          <SummaryCard
            title="Total Income"
            amount={totalIncome}
            color="text-green-600"
            icon="📈"
          />

          <SummaryCard
            title="Total Expenses"
            amount={totalExpenses}
            color="text-red-600"
            icon="📉"
          />

        </div>

        {/* Search and Form */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          <div>
            <TransactionForm onAdd={addTransaction} />
          </div>

          <div className="xl:col-span-2">

            <div className="relative mb-5">
              <Search
                className="absolute left-4 top-3.5 text-slate-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search transactions..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <TransactionList
              transactions={filteredTransactions}
              onDelete={deleteTransaction}
            />

          </div>

        </div>

        <footer className="text-center text-slate-400 text-sm mt-10">
          © 2026 ExpenseTrack. Manage your money wisely.
        </footer>

      </main>
    </div>
  )
}

export default App
