import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen w-full bg-slate-950 text-slate-100 p-6 md:p-10 font-sans selection:bg-indigo-500/30'>
            <div className='max-w-7xl mx-auto space-y-8'>
                <Header changeUser={props.changeUser} firstName={props.firstName} />
                <CreateTask />
                <AllTask />
            </div>
        </div>
    )
}

export default AdminDashboard