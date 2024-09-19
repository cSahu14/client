"use client"
import { Menu } from "lucide-react"


const Sidebar = () => {
  return (
    <div>
        <div className="flex justify-between md:justify-normal gap-3 items-center mt-8">
            <div>Logo</div>
            <h1 className="font-extrabold text-2xl">CSSTOCKS</h1>
            <button className="md:hidden px-3 py-3 bg-gray-100 hover:bg-blue-100 cursor-pointer rounded-full" onClick={() => {}}>
                <Menu className="w-4 h-4" />
            </button>
        </div>
        {/* Links */}
        <div className="flex-grow mt-8">
            {/* Links */}
        </div>
        {/* Footer */}
        <div>
            <p className="text-center text-xs text-gray-500">&copy; 2024 CS</p>
        </div>
    </div>
  )
}

export default Sidebar