'use client'

import Link from 'next/link'

export const EmailConfirmation = () => {
  return (
    <div className="flex h-96 w-full flex-col items-center justify-start gap-3 text-xl">
      <span className="pt-3">
        Confirmation link was sent to your email. Please follow the instructions
        in it to finish registration process.
      </span>
      <Link href={'/'} className="text-blue-700">
        Back to homepage
      </Link>
    </div>
  )
}
