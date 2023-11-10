'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from '@/types/database.types'

type SignUpUser = {
  email: string
  password: string
}

const emptyUser: SignUpUser = {
  email: '',
  password: '',
}

export const SignUp = () => {
  const [userData, setUserData] = useState<SignUpUser>(emptyUser)
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const handleSignUp = async (e) => {
    e.preventDefault()
    await supabase.auth.signUp({
      ...userData,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })

    router.push('/email-confirmation')
  }

  return (
    <div className="flex w-screen flex-col items-center pb-5">
      <span className="py-5 text-2xl">Sing Up Form</span>

      <form
        className="flex flex-col items-center gap-3"
        onSubmit={handleSignUp}
      >
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

        <div className="flex w-[640px] flex-row justify-end">
          <button
            type="submit"
            className="w-[480px] rounded-md border bg-blue-700 p-1 text-white hover:bg-blue-600"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}
