import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        const taskData = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false }
        setNewTask(taskData)

        const data = [...userData] // Create a copy to trigger re-render

        data.forEach(function (elem) {
            if (asignTo === elem.firstName) {
                elem.tasks.push(taskData)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className='bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl shadow-slate-900/50 relative overflow-hidden'>
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"></div>

            <div className='mb-6'>
                <h2 className='text-xl font-bold text-slate-100'>Create New Task</h2>
                <p className='text-sm text-slate-400 mt-1'>Assign responsibilities and track progress.</p>
            </div>

            <form onSubmit={submitHandler} className='grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10'>
                <div className='space-y-5'>
                    <div>
                        <label className='block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2'>Task Title</label>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='w-full bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-600' 
                            type="text" 
                            placeholder='e.g., Make a UI design'
                            required
                        />
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div>
                            <label className='block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2'>Date</label>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                className='w-full bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all color-scheme-dark' 
                                type="date" 
                                required
                            />
                        </div>
                        <div>
                            <label className='block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2'>Assign To</label>
                            <input
                                value={asignTo}
                                onChange={(e) => setAsignTo(e.target.value)}
                                className='w-full bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-600' 
                                type="text" 
                                placeholder='Employee name' 
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className='block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2'>Category</label>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='w-full bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-600' 
                            type="text" 
                            placeholder='e.g., Design, Dev, Marketing' 
                            required
                        />
                    </div>
                </div>

                <div className='flex flex-col h-full'>
                    <label className='block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2'>Description</label>
                    <textarea 
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)} 
                        className='w-full flex-1 min-h-[150px] bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-600 resize-none mb-5' 
                        placeholder="Provide detailed instructions..."
                        required
                    ></textarea>
                    
                    <button className='w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 active:scale-[0.98]'>
                        Deploy Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask