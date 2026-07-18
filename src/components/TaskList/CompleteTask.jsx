import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-full w-[310px] p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col justify-between shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-200'>
      <div>
        <div className='flex justify-between items-center'>
          <span className='bg-slate-800 text-slate-400 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700/50'>
            {data.category}
          </span>
          <span className='text-slate-500 text-xs font-medium'>{data.taskDate}</span>
        </div>
        <h2 className='mt-5 text-xl font-bold text-slate-300 line-through tracking-tight leading-snug'>{data.taskTitle}</h2>
        <p className='text-sm mt-3 text-slate-500 leading-relaxed font-normal line-clamp-4'>
          {data.taskDescription}
        </p>
      </div>
      <div className='mt-8'>
        <div className='w-full bg-slate-800/50 border border-slate-700/30 text-slate-400 text-center font-medium py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2'>
          <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          Completed
        </div>
      </div>
    </div>
  )
}

export default CompleteTask