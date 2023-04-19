import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div>
        <p>Question 3. How would you compare Next.js with another framework? Feel free to compare with a framework of your choice. </p>
         <br></br>
         <p> React.js is the framework I learned at coding bootcamp (UCLA extension), and from what I understand, Next.js is a framework built on top of React.js with better features for quick deployment. </p>
        
      </div>

      
    </main>
  )
}
