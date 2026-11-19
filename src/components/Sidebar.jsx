
import {
  LayoutDashboard,
  Wallet,
  Receipt,
  Settings,
  CircleDollarSign
} from 'lucide-react'

function Sidebar() {
  return (
    <aside className="bg-slate-950 text-white w-full md:w-64 md:min-h-screen p-6">

      <div className="flex items-center gap-3 mb-10">
        <div className="bg-blue-600 p-3 rounded-xl">
          <CircleDollarSign size={26} />
        </div>
        <h1 className="text-xl font-bold">
          Expense<span className="text-blue-400">Track</span>
        </h1>
      </div>

      <p className="text-slate-500 text-xs font-bold uppercase mb-4">
        Menu
      </p>

      <nav className="space-y-3">
        <a href="#dashboard"
          className="flex items-center gap-3 bg-blue-600 p-3 rounded-xl font-semibold">
          <LayoutDashboard size={20} />
          Dashboard
        </a>

        <a href="#transactions"
          className="flex items-center gap-3 p-3 rounded-xl text-slate-300 hover:bg-slate-800 transition">
          <Receipt size={20} />
          Transactions
        </a>

        <a href="#summary"
          className="flex items-center gap-3 p-3 rounded-xl text-slate-300 hover:bg-slate-800 transition">
          <Wallet size={20} />
          My Wallet
        </a>

        <a href="#settings"
          className="flex items-center gap-3 p-3 rounded-xl text-slate-300 hover:bg-slate-800 transition">
          <Settings size={20} />
          Settings
        </a>
      </nav>

      <div className="mt-12 bg-slate-900 p-4 rounded-xl">
        <p className="text-sm text-slate-400">Money management</p>
        <p className="font-semibold mt-2">Track your money wisely!</p>
      </div>

    </aside>
  )
}

export default Sidebar
