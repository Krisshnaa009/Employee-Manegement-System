import React from 'react'

const Header = (props) => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl backdrop-blur-md shadow-lg shadow-slate-900/20'>
        <div>
            <h1 className='text-lg font-medium text-slate-400'>Welcome back,</h1>
            <h2 className='text-3xl md:text-4xl font-bold mt-1'>
                <span className='bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent'>
                    {props.firstName || 'Admin'}
                </span> 👋
            </h2>
        </div>
        <button 
            onClick={logOutUser} 
            className='bg-rose-500/10 text-rose-500 border border-rose-500/20 hover:bg-rose-500 hover:text-white transition-all duration-300 font-medium px-6 py-2.5 rounded-xl shadow-sm hover:shadow-rose-500/25'
        >
            Log Out
        </button>
    </div>
  )
}

export default Header