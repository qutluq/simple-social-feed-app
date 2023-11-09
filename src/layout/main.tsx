import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

type PropTypes = {
  children: React.ReactNode
}

export const MainLayout = ({ children }: PropTypes) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
