'use client'
import Image from 'next/image'
import { useState } from 'react'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [saveEmailChecked, setSaveEmailChecked] = useState(false)

  return (
    <div className="flex w-72 flex-col items-center rounded-md bg-white p-5">
      <div className="flex flex-col items-center gap-3">
        <Image src="/assets/logo.png" alt="Logo" width={64} height={64} />
        <span className="text-lg font-semibold tracking-wide">
          Sign in to SF World
        </span>

        <form
          className="flex flex-col justify-start gap-2"
          onSubmit={handleSignIn}
        >
          <div className="text-[var(--color-text-secondary)]">
            <input
              autoComplete="current-email"
              value={email}
              onChange={(e) => {
                setEmail(() => e.target.value)
              }}
              className="min-w-[150px] grow rounded-md border-[0.5px] border-blue-300/30 bg-slate-300/30 py-2 pl-2 text-sm text-[var(--color-text-primary)]"
              type="text"
              placeholder={'Type your email...'}
            />
          </div>
          <div className="text-[var(--color-text-secondary)]">
            <input
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(() => e.target.value)
              }}
              className="min-w-[150px] grow rounded-md border-[0.5px] border-blue-300/30 bg-slate-300/30 py-2 pl-2 text-sm text-[var(--color-text-primary)]"
              type="password"
              placeholder={'Type your password...'}
            />
          </div>
          <label
            htmlFor="saveEmailCheckbox"
            className="flex flex-row items-center gap-1 pl-1 text-sm text-[var(--color-text-secondary)]"
          >
            <input
              autoComplete="current-email-checkbox"
              id="saveEmailCheckbox"
              checked={saveEmailChecked}
              onChange={(e) => {
                e.preventDefault()
                setSaveEmailChecked(() => !saveEmailChecked)
              }}
              type="checkbox"
            />
            save user
          </label>

          <button
            type="submit"
            className="rounded-md border bg-blue-700 p-1 text-white hover:bg-blue-600"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
