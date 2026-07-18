import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className='bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl shadow-slate-900/50'>
        <div className='mb-6'>
            <h2 className='text-xl font-bold text-slate-100'>Team Overview</h2>
            <p className='text-sm text-slate-400 mt-1'>Current task distribution across all employees.</p>
        </div>

        {/* Table Header */}
        <div className='bg-slate-950/50 border border-slate-800 py-3 px-5 flex justify-between rounded-xl mb-4 hidden md:flex'>
            <h2 className='text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/5'>Employee Name</h2>
            <h3 className='text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/5 text-center'>New Task</h3>
            <h5 className='text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/5 text-center'>Active</h5>
            <h5 className='text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/5 text-center'>Completed</h5>
            <h5 className='text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/5 text-center'>Failed</h5>
        </div>

        {/* Table Body */}
        <div className='space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar'>
            {userData.map(function(elem, idx){
                return (
                <div key={idx} className='bg-slate-800/30 hover:bg-slate-800/80 border border-slate-700/50 hover:border-slate-600 transition-all duration-200 py-4 px-5 flex flex-col md:flex-row items-center justify-between rounded-xl gap-4 md:gap-0'>
                    <h2 className='text-base font-semibold text-slate-200 w-full md:w-1/5 flex items-center gap-3'>
                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs border border-indigo-500/30">
                            {elem.firstName.charAt(0)}
                        </div>
                        {elem.firstName}
                    </h2>
                    
                    <div className="w-full md:w-4/5 flex justify-between">
                        <div className='w-1/4 flex justify-center'>
                            <span className='inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm'>
                                {elem.taskCounts.newTask}
                            </span>
                        </div>
                        <div className='w-1/4 flex justify-center'>
                            <span className='inline-flex items-center justify-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-medium text-sm'>
                                {elem.taskCounts.active}
                            </span>
                        </div>
                        <div className='w-1/4 flex justify-center'>
                            <span className='inline-flex items-center justify-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-sm'>
                                {elem.taskCounts.completed}
                            </span>
                        </div>
                        <div className='w-1/4 flex justify-center'>
                            <span className='inline-flex items-center justify-center px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-medium text-sm'>
                                {elem.taskCounts.failed}
                            </span>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default AllTask