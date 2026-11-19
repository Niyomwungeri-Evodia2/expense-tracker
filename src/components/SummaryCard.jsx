
function SummaryCard({ title, amount, color, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition duration-300">

      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-500 text-sm font-medium">
            {title}
          </p>

          <h2 className={`text-2xl md:text-3xl font-bold mt-3 ${color}`}>
            {amount.toLocaleString('en-US')} RWF
          </h2>
        </div>

        <div className="bg-slate-100 p-4 rounded-2xl text-2xl">
          {icon}
        </div>
      </div>

      <p className="text-xs text-slate-400 mt-5">
        Updated automatically
      </p>

    </div>
  )
}

export default SummaryCard
