import React from 'react'

const AcceptTask = ({ data, onComplete, onFailed }) => {
  return (
    <div className='flex-shrink-0 h-full w-[310px] p-6 bg-slate-900 border border-indigo-500/30 rounded-2xl flex flex-col justify-between shadow-lg shadow-indigo-950/20'>
      <div>
        <div className='flex justify-between items-center'>
          <span className='bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/20'>
            {data.category}
          </span>
          <span className='text-slate-400 text-xs font-medium'>{data.taskDate}</span>
        </div>
        <h2 className='mt-5 text-xl font-bold text-slate-100 tracking-tight leading-snug'>{data.taskTitle}</h2>
        <p className='text-sm mt-3 text-slate-400 leading-relaxed font-normal line-clamp-4'>
          {data.taskDescription}
        </p>
      </div>
      <div className='flex gap-3 mt-8'>
        <button
          onClick={onComplete}
          className='flex-1 bg-slate-800 hover:bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold py-2.5 px-3 rounded-xl text-xs transition-all duration-200 active:scale-[0.98]'
        >
          Complete
        </button>
        <button
          onClick={onFailed}
          className='flex-1 bg-slate-800 hover:bg-rose-500/10 text-rose-400 border border-rose-500/20 font-semibold py-2.5 px-3 rounded-xl text-xs transition-all duration-200 active:scale-[0.98]'
        >
          Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask