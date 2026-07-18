import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        // Only seed default data the first time the app ever runs.
        // Seeding unconditionally would wipe out task updates on every refresh.
        const existing = getLocalStorage()
        if (!existing.employees) {
            setLocalStorage()
        }
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])

    // Whenever userData changes (e.g. an employee accepts/completes/fails a task),
    // persist it so admin and employee views stay in sync and survive refresh.
    useEffect(() => {
        if (userData) {
            localStorage.setItem('employees', JSON.stringify(userData))
        }
    }, [userData])
    

    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider