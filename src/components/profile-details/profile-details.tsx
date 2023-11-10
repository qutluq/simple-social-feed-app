'use client'
import { useState } from 'react'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import type { User } from '@/types'
import type { Database } from '@/types/database.types'
type UserData = Omit<User, 'id' | 'created_at'>

const emptyUser: UserData = {
  about: '',
  email: '',
  firstname: '',
  image: '',
  lastname: '',
  password: '',
  username: '',
}

export const ProfileDetails = () => {
  const [userData, setUserData] = useState<UserData>(emptyUser)
  const supabase = createClientComponentClient<Database>()
  const [userAuth, setUserAuth] = useState<{ status: boolean } | undefined>()

  /**
   * TODO: Get user authentication status and set userAuth.status flag
   */

  if (!userAuth) {
    return (
      <div className="flex w-full flex-row justify-center text-lg ">
        Loading...
      </div>
    )
  }

  if (!userAuth.status) {
    return (
      <div className="flex w-full flex-row justify-center text-lg font-bold">
        Authentication access violated
      </div>
    )
  }

  const handleSave = async (e) => {
    e.preventDefault()
  }

  return (
    <div className="flex w-screen flex-col items-center pb-5">
      <span className="py-5 text-2xl">Profile Details</span>

      <form className="flex flex-col items-center gap-3" onSubmit={handleSave}>
        <div className="flex w-[640px] flex-row">
          <label
            className="flex w-40 items-center justify-start"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            id="email"
            autoComplete="current-email"
            value={userData.email}
            onChange={(e) => {
              setUserData((data) => ({ ...data, email: e.target.value }))
            }}
            className="min-w-[150px] grow rounded-md border-[0.5px] border-blue-300/30 bg-slate-300/30 py-2 pl-2 text-sm text-[var(--color-text-primary)]"
            type="text"
            placeholder={'Type your email...'}
            disabled
          />
        </div>

        <div className="flex w-[640px] flex-row">
          <label
            className="flex w-40 items-center justify-start"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            id="username"
            autoComplete="current-username"
            value={userData.username}
            onChange={(e) => {
              setUserData((data) => ({ ...data, username: e.target.value }))
            }}
            className="min-w-[150px] grow rounded-md border-[0.5px] border-blue-300/30 bg-slate-300/30 py-2 pl-2 text-sm text-[var(--color-text-primary)]"
            type="text"
            placeholder={'Type your username...'}
          />
        </div>

        <div className="flex w-[640px] flex-row">
          <label
            className="flex w-40 items-center justify-start"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            id="password"
            autoComplete="current-password"
            value={userData.password}
            onChange={(e) => {
              setUserData((data) => ({ ...data, password: e.target.value }))
            }}
            className="min-w-[150px] grow rounded-md border-[0.5px] border-blue-300/30 bg-slate-300/30 py-2 pl-2 text-sm text-[var(--color-text-primary)]"
            type="password"
            placeholder={'Type your password...'}
          />
        </div>

        <div className="flex w-[640px] flex-row">
          <label
            className="flex w-40 items-center justify-start"
            htmlFor="firstname"
          >
            First name:
          </label>
          <input
            id="firstname"
            autoComplete="current-firstname"
            value={userData.firstname}
            onChange={(e) => {
              setUserData((data) => ({ ...data, firstname: e.target.value }))
            }}
            className="min-w-[150px] grow rounded-md border-[0.5px] border-blue-300/30 bg-slate-300/30 py-2 pl-2 text-sm text-[var(--color-text-primary)]"
            type="text"
            placeholder={'Type your first name...'}
          />
        </div>

        <div className="flex w-[640px] flex-row">
          <label
            className="flex w-40 items-center justify-start"
            htmlFor="lastname"
          >
            Last name:
          </label>
          <input
            id="lastname"
            autoComplete="current-lastname"
            value={userData.lastname}
            onChange={(e) => {
              setUserData((data) => ({ ...data, lastname: e.target.value }))
            }}
            className="min-w-[150px] grow rounded-md border-[0.5px] border-blue-300/30 bg-slate-300/30 py-2 pl-2 text-sm text-[var(--color-text-primary)]"
            type="text"
            placeholder={'Type your last name...'}
          />
        </div>

        <div className="flex w-[640px] flex-row items-start">
          <label
            className="flex w-40 items-center justify-start"
            htmlFor="about"
          >
            About:
          </label>
          <textarea
            id="about"
            autoComplete="current-about"
            className="h-32 min-w-[150px] grow rounded-md border-[0.5px] border-blue-300/30 bg-slate-300/30 py-2 pl-2 text-sm text-[var(--color-text-primary)]"
            onChange={(e) => {
              setUserData((data) => ({ ...data, about: e.target.value }))
            }}
            value={userData.about}
            placeholder={'Tell the world about yourself...'}
          />
        </div>

        <div className="flex w-[640px] flex-row">
          <label
            className="flex w-40 items-center justify-start"
            htmlFor="image"
          >
            Image URL:
          </label>
          <input
            id="image"
            autoComplete="current-image"
            value={userData.image}
            onChange={(e) => {
              setUserData((data) => ({ ...data, image: e.target.value }))
            }}
            className="min-w-[150px] grow rounded-md border-[0.5px] border-blue-300/30 bg-slate-300/30 py-2 pl-2 text-sm text-[var(--color-text-primary)]"
            type="text"
            placeholder={'Type your image URL...'}
          />
        </div>

        <div className="flex w-[640px] flex-row justify-end">
          <button
            type="submit"
            className="w-[480px] rounded-md border bg-blue-700 p-1 text-white hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
