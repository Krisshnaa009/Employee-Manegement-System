import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
        
        <div className='rounded-2xl p-6 bg-blue-500/10 border border-blue-500/20 relative overflow-hidden group hover:bg-blue-500/20 transition-colors duration-300'>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-400/30 transition-colors"></div>
            <div className="relative z-10">
                <h3 className='text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2 flex items-center gap-2'>
                    <span>🆕</span> New Tasks
                </h3>
                <h2 className='text-4xl font-bold text-white'>{data.taskCounts.newTask}</h2>
            </div>
        </div>

        <div className='rounded-2xl p-6 bg-amber-500/10 border border-amber-500/20 relative overflow-hidden group hover:bg-amber-500/20 transition-colors duration-300'>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-400/30 transition-colors"></div>
            <div className="relative z-10">
                <h3 className='text-sm font-semibold text-amber-400 uppercase tracking-wide mb-2 flex items-center gap-2'>
                    <span>⚡</span> Active Tasks
                </h3>
                <h2 className='text-4xl font-bold text-white'>{data.taskCounts.active}</h2>
            </div>
        </div>

        <div className='rounded-2xl p-6 bg-emerald-500/10 border border-emerald-500/20 relative overflow-hidden group hover:bg-emerald-500/20 transition-colors duration-300'>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-400/30 transition-colors"></div>
            <div className="relative z-10">
                <h3 className='text-sm font-semibold text-emerald-400 uppercase tracking-wide mb-2 flex items-center gap-2'>
                    <span>✅</span> Completed
                </h3>
                <h2 className='text-4xl font-bold text-white'>{data.taskCounts.completed}</h2>
            </div>
        </div>

        <div className='rounded-2xl p-6 bg-rose-500/10 border border-rose-500/20 relative overflow-hidden group hover:bg-rose-500/20 transition-colors duration-300'>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-rose-500/20 rounded-full blur-2xl group-hover:bg-rose-400/30 transition-colors"></div>
            <div className="relative z-10">
                <h3 className='text-sm font-semibold text-rose-400 uppercase tracking-wide mb-2 flex items-center gap-2'>
                    <span>❌</span> Failed
                </h3>
                <h2 className='text-4xl font-bold text-white'>{data.taskCounts.failed}</h2>
            </div>
        </div>

    </div>
  )
}

export default TaskListNumbers