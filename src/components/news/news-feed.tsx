'use client'

import { useEffect, useState } from 'react'

import { getUsersPosts } from '@/backend/api-client'

import type { News } from '@/types'

const newsFeedEmpty = [
  {
    id: 1,
    author_id: 1,
    body: 'No news available',
    title: 'Something went wrong',
    date: new Date(),
    created_at: new Date(),
  },
] as News[]

export const NewsFeed = () => {
  // const [users, setUsers] = useState<User[]>([])
  const [feed, setFeed] = useState<News[] | undefined>()

  useEffect(() => {
    // getAllUsers()
    //   .then((response) => {
    //     if (!response) return
    //     setUsers(() => response)
    //   })
    //   .catch((error) => {
    //     console.error(`Users fetch failed: ${error}`)
    //   })

    getUsersPosts(1)
      .then((response) => {
        if (!response) {
          setFeed(newsFeedEmpty)
          return
        }
        setFeed(() => response)
      })
      .catch((error) => {
        console.error(`User's news feed fetch failed: ${error}`)
      })
  }, [])

  return (
    <div className="flex h-96 w-[500px] flex-col items-center justify-center rounded-xl bg-white text-lg font-bold">
      {!feed
        ? 'Loading...'
        : feed.map((news) => <div key={news.id}>{news.title}</div>)}
    </div>
  )
}
