import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div>
        <p>Question 4. When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel? </p>
         <br></br>

         <p> Edge functions are used to run applications with the fastest runtime based on the location of the user of those applications. I believe this means that the application can easily execute at certain cloud locations where the user would get the best performance. 
         <br></br>
         <br></br>
          Serverless functions are used within the applications git repo, they’re functions that can handle different events and can be scaled up or down within the cloud. 
          <br></br>
          <br></br>
          Edge middleware is code that executes before an application is processed, I believe this can be used to personalize an application to the user’s needs. For example, when shopping online it can display their previous searches or interests. 
          </p>
          <br></br>
        <a href="https://vercel-questions.vercel.app/"> <h1>Click to go back to HOME </h1> </a>
      </div>

      
    </main>
  )
}
