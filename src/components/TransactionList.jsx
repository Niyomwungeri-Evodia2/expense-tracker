
import { Trash2, TrendingUp, TrendingDown } from 'lucide-react'

function TransactionList({ transactions, onDelete }) {
  return (
    <div id="transactions" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">Recent Transactions</h2>
          <p className="text-sm text-slate-500 mt-1">
            Your financial activity
          </p>
        </div>
        <span className="bg-blue-50 text-blue-600 px-3 py-2 rounded-lg text-sm">
          {transactions.length} Records
        </span>
      </div>

      {transactions.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">💳</div>
          <p className="font-semibold text-slate-600">
            No transactions yet
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Add your first transaction to get started.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {transactions.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition"
            >
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${
                  item.type === 'income'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                }`}>
                  {item.type === 'income'
                    ? <TrendingUp size={21} />
                    : <TrendingDown size={21} />
                  }
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {item.category} · {item.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`font-bold text-sm ${
                  item.type === 'income'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}>
                  {item.type === 'income' ? '+' : '-'}
                  {item.amount.toLocaleString()} RWF
                </span>

                <button
                  onClick={() => onDelete(item.id)}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                  title="Delete transaction"
                  aria-label={`Delete ${item.title}`}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TransactionList
