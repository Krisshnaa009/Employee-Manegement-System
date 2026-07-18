import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext)

    // newStatus is one of: 'accept' | 'complete' | 'failed'
    const updateTaskStatus = (taskIdx, newStatus) => {
        if (!userData) return

        const updated = userData.map((emp) => {
            if (emp.id !== data.id) return emp

            const tasks = emp.tasks.map((task, idx) => {
                if (idx !== taskIdx) return task

                const nextTask = { ...task, newTask: false, active: false, completed: false, failed: false }
                if (newStatus === 'accept') nextTask.active = true
                if (newStatus === 'complete') nextTask.completed = true
                if (newStatus === 'failed') nextTask.failed = true
                return nextTask
            })

            const taskCounts = {
                newTask: tasks.filter((t) => t.newTask).length,
                active: tasks.filter((t) => t.active).length,
                completed: tasks.filter((t) => t.completed).length,
                failed: tasks.filter((t) => t.failed).length,
            }

            return { ...emp, tasks, taskCounts }
        })

        setUserData(updated)
    }

    return (
        <div className='mt-10'>
            <h2 className='text-xl font-bold text-slate-100 mb-6'>Your Task Board</h2>
            {/* Custom scrollbar styling added via utility class and smooth scrolling */}
            <div 
                id='tasklist' 
                className='flex items-stretch justify-start gap-6 flex-nowrap w-full overflow-x-auto pb-8 pt-2 px-2 -mx-2 snap-x snap-mandatory'
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#334155 transparent' }}
            >
                {data.tasks.map((elem, idx) => {
                    if (elem.active) {
                        return (
                            <div className="snap-center shrink-0 w-[320px] md:w-[400px] transition-transform hover:-translate-y-2 duration-300" key={idx}>
                                <AcceptTask
                                    data={elem}
                                    onComplete={() => updateTaskStatus(idx, 'complete')}
                                    onFailed={() => updateTaskStatus(idx, 'failed')}
                                />
                            </div>
                        )
                    }
                    if (elem.newTask) {
                        return (
                            <div className="snap-center shrink-0 w-[320px] md:w-[400px] transition-transform hover:-translate-y-2 duration-300" key={idx}>
                                <NewTask data={elem} onAccept={() => updateTaskStatus(idx, 'accept')} />
                            </div>
                        )
                    }
                    if (elem.completed) {
                        return (
                            <div className="snap-center shrink-0 w-[320px] md:w-[400px] transition-transform hover:-translate-y-2 duration-300" key={idx}>
                                <CompleteTask data={elem} />
                            </div>
                        )
                    }
                    if (elem.failed) {
                        return (
                            <div className="snap-center shrink-0 w-[320px] md:w-[400px] transition-transform hover:-translate-y-2 duration-300" key={idx}>
                                <FailedTask data={elem} />
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default TaskList