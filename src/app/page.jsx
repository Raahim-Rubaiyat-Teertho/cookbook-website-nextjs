import Image from 'next/image'

import Recipes from '@/components/ui/Categories'
import Categories from '@/components/ui/Categories'
import { ModeToggle } from '@/components/ui/ModeToggle'


export default function Home() {
  return (
    <main>
      <div className="flex justify-between ">
          <div></div>
          <h1 className='text-center text-4xl font-semibold p-5'>Categories</h1>
          <ModeToggle/>
      </div>
      <Categories />
    </main>
  )
}
