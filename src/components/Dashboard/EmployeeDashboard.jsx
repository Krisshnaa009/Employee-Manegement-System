import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='min-h-screen w-full bg-slate-950 text-slate-100 p-6 md:p-10 font-sans selection:bg-indigo-500/30'>
        <div className='max-w-7xl mx-auto space-y-8'>
            <Header changeUser={props.changeUser} data={props.data} firstName={props.data?.firstName}/>
            <TaskListNumbers data={props.data} />
            <TaskList data={props.data} />
        </div>
    </div>
  )
}

export default EmployeeDashboard