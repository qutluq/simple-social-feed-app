'use client'
import type { User } from '@/types'
import { createClient } from '@supabase/supabase-js'

import type { SupabaseClient } from '@supabase/supabase-js'

class SupabaseSingleton {
  private static instance: SupabaseSingleton | null = null
  public supabase: SupabaseClient

  private constructor() {
    // Create the Supabase client instance if it doesn't exist
    this.supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )
  }

  public static getInstance(): SupabaseClient {
    if (!SupabaseSingleton.instance) {
      SupabaseSingleton.instance = new SupabaseSingleton()
    }

    return SupabaseSingleton.instance.supabase
  }
}

export const getAllUsers = async () => {
  try {
    // Create a single supabase client for interacting with database
    const supabase = SupabaseSingleton.getInstance()

    const { data: users, error } = await supabase.from('user').select('*')

    if (error) {
      console.error(`Can not fetch users: ${error}`)
      return []
    }

    const usersInitalized = users.map((user) => ({
      ...user,
      created_at: new Date(user.created_at),
    })) as User[]

    return usersInitalized
  } catch (error) {
    console.error(`Can not fetch users: ${error}`)
  }
}
