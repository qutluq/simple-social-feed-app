'use client'

import { useEffect, useState } from 'react'

import { getAllUsers, getUsersPosts } from '@/backend/api-client'

import type { News, User } from '@/types'

export const Home = () => {
  const [users, setUsers] = useState<User[]>([])
  const [feed, setFeed] = useState<News[]>([])

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        if (!response) return
        setUsers(() => response)
      })
      .catch((error) => {
        console.error(`Users fetch failed: ${error}`)
      })

    getUsersPosts(1)
      .then((response) => {
        if (!response) return
        setFeed(() => response)
      })
      .catch((error) => {
        console.error(`User's news feed fetch failed: ${error}`)
      })
  }, [])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-lg font-bold">
      {feed.map((news) => (
        <div key={news.id}>{news.title}</div>
      ))}
    </div>
  )
}
