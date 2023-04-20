import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div>
        <p>Question 6. What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term? </p>
         <br></br>
         <p> I think one of the most common problems would be the deployment of their application and using integrations that can be used with next.js and with Vercel. With common problems, I would kindly point them to the documentation or create public documentation so that they're available for similar issues. For short-term problems, I would give them step-by-step information so that the issue can be resolved quickly. For long-term problems, I would get on a call with the customer to get all the details I need to fully understand the issue so we can find the quickest and best solution for them. </p>
         <br></br>
        <a href="https://vercel-questions.vercel.app/"> <h1>Click to go back to HOME </h1> </a>
      </div>
      
    </main>
  )
}
