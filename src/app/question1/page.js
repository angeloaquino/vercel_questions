import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div>
        <p>Question 1. What do you want to learn or do more of at work? </p>
         <br></br>
        <p>I have a love and need for solving unsolvable problems. Working with the customer's innate need to find a resolution, is truly where I learn and sum up my metrics as an engineer. With Vercel, I'd get to continue learning about web development and get into the nitty gritty of how applications for different entities work. I find that exciting and worthwhile as a customer experience engineer. </p>        
      <br></br>
        <a href="https://vercel-questions.vercel.app/"> <h1>Click to go back to HOME </h1> </a>
      </div>
      
    </main>
  )
}
