import Hero from '@/components/Hero'
import SelectedWork from '@/components/SelectedWork'
import Leadership from '@/components/Leadership'
import Writing from '@/components/Writing'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <Leadership />
      <Writing />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
