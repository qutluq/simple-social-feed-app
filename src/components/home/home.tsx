import { Login } from '@/components/login'
import { NewsFeed } from '@/components/news'

export const Home = () => {
  return (
    <div className="flex w-full flex-row justify-center gap-5">
      <NewsFeed />
      <Login />
    </div>
  )
}
