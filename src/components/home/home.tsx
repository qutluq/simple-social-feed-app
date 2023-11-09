'use client'

import { useEffect, useState } from 'react'

import { getAllUsers } from '@/backend/api-client'

import type { User } from '@/types'

export const Home = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        if (!response) return
        const usersRaw = response.map((user) => ({
          ...user,
          created_at: new Date(user.created_at),
        })) as User[]
        setUsers(() => usersRaw)
      })
      .catch((error) => {
        console.error(`Users fetch failed: ${error}`)
      })
  }, [])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-9xl font-bold">
      {users.map((user) => (
        <div key={user.id}>{user.firstname}</div>
      ))}
    </div>
  )
}
