import React from 'react'

const NewTask = ({ data, onAccept }) => {
  return (
    <div className='flex-shrink-0 h-full w-[310px] p-6 bg-slate-900 border border-emerald-500/30 rounded-2xl flex flex-col justify-between shadow-lg shadow-emerald-950/20'>
      <div>
        <div className='flex justify-between items-center'>
          <span className='bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/20'>
            {data.category}
          </span>
          <span className='text-slate-400 text-xs font-medium'>{data.taskDate}</span>
        </div>
        <h2 className='mt-5 text-xl font-bold text-slate-100 tracking-tight leading-snug'>{data.taskTitle}</h2>
        <p className='text-sm mt-3 text-slate-400 leading-relaxed font-normal line-clamp-4'>
          {data.taskDescription}
        </p>
      </div>
      <div className='mt-8'>
        <button
          onClick={onAccept}
          className='w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold py-2.5 px-4 rounded-xl text-sm transition-all duration-200 shadow-md shadow-emerald-500/10 active:scale-[0.98]'
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask