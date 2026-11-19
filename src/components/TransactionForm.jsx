
function TransactionForm({ onAdd }) {
  function handleSubmit(e) {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    const transaction = {
      id: crypto.randomUUID(),
      title: data.get('title').trim(),
      amount: Number(data.get('amount')),
      type: data.get('type'),
      category: data.get('category'),
      date: data.get('date'),
    }

    if (!transaction.title || transaction.amount <= 0 || !transaction.date) {
      alert('Please enter valid details')
      return
    }

    onAdd(transaction)
    form.reset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
    >
      <h2 className="text-xl font-bold mb-2">
        Add Transaction
      </h2>

      <p className="text-sm text-slate-500 mb-6">
        Record your income or expenses.
      </p>

      <div className="space-y-4">

        <div>
          <label className="block text-sm font-semibold mb-2">
            Transaction Name
          </label>
          <input
            name="title"
            placeholder="e.g. Shopping"
            required
            className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Amount (RWF)
          </label>
          <input
            name="amount"
            type="number"
            min="1"
            step="1"
            placeholder="Enter amount"
            required
            className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Transaction Type
          </label>
          <select
            name="type"
            className="w-full p-3 border border-slate-200 rounded-xl bg-white"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Category
          </label>
          <select
            name="category"
            className="w-full p-3 border border-slate-200 rounded-xl bg-white"
          >
            <option>Food</option>
            <option>Transport</option>
            <option>Education</option>
            <option>Shopping</option>
            <option>Salary</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Date
          </label>
          <input
            name="date"
            type="date"
            required
            defaultValue={new Date().toISOString().slice(0, 10)}
            className="w-full p-3 border border-slate-200 rounded-xl"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-xl transition duration-300 shadow-md shadow-blue-100"
        >
          + Add Transaction
        </button>

      </div>
    </form>
  )
}

export default TransactionForm
