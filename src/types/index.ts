export type User = {
  id: number
  about: string
  created_at: Date
  email: string
  firstname: string
  image: string
  lastname: string
  password: string
  username: string
}

export type News = {
  id: number
  author_id: number
  body: string
  created_at: Date
  date: Date
  title: string
}
