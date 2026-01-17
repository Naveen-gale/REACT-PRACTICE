import { CloudCog } from 'lucide-react'
import React from 'react'

const Heder = (data) => {
  console.log(data)
  return (
    <div className="flex items-center justify-between ">
  <h1 className="text-lg text-white-700 leading-tight">
    Hello,
    <br />
    <span className="text-2xl font-bold text-red-500">{data.name}</span>
  </h1>

  <button className="bg-red-500   text-white  rounded-lg font-semibold hover:bg-red-600 transition-all cursor-pointer ... duration-200 h-10 w-20">
    Log Out
  </button>
</div>

  )
}

export default Heder
