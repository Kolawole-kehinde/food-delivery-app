import React from 'react'
import { useAuth } from '../../hooks/useAuth'

export const Dashboard = () => {
    const {user} = useAuth();
  return (
    <div className="px-4 py-2 text-gray-700 font-semibold">
    Welcome to your Dashboard, {user.name || 'User'}!
  </div>
  )
}
