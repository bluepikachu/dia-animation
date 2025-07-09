import './App.css'
import { Search, Mic, ChevronDown, Plus } from 'lucide-react'

function App() {

  return (
    <div className="h-screen bg-neutral-50 flex items-center justify-center overflow-hidden select-none">
      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/logo_dia.svg"
            alt="Dia Logo"
            className="w-10 h-10 logo-transition"
            style={{
              filter: 'brightness(0) saturate(100%) invert(88%) sepia(1%) saturate(1%) hue-rotate(314deg) brightness(95%) contrast(96%)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(52%) sepia(15%) saturate(1234%) hue-rotate(225deg) brightness(91%) contrast(89%)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(88%) sepia(1%) saturate(1%) hue-rotate(314deg) brightness(95%) contrast(96%)'
            }}
          />
        </div>

        {/* Search Box */}
        <div
          className="border border-neutral-100 custom-shadow transition-shadow rounded-3xl bg-white flex flex-col"
          style={{
            width: '640px',
            height: '112px'
          }}
        >
          {/* Input */}
          <div className="flex items-center pl-4 pr-3 flex-1">
            <Search className="w-4 h-4 text-neutral-400 mr-3" />
            <input
              type="text"
              className="flex-1 outline-none text-neutral-700 text-base"
              placeholder="Search the web…"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pl-4 pr-3 flex-1">
            <div className="flex items-center gap-2 group">
              <div className="transition-colors duration-200">
                <Plus className="w-4 h-4 text-neutral-300 group-hover:text-neutral-400 transition-colors duration-200" />
              </div>
              <span className="text-base text-neutral-300 group-hover:text-neutral-400 transition-colors duration-200 select-none">Add tabs or files</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 transition-colors duration-200 group">
                <Mic className="w-5 h-5 text-neutral-300 group-hover:text-neutral-400 transition-colors duration-200" />
              </div>
              <div className="p-1.5 transition-colors duration-200 bg-neutral-100 hover:bg-neutral-200 rounded-full">
                <ChevronDown className="w-5 h-5 text-neutral-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
