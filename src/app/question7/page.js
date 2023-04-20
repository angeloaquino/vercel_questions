import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div>
        <p>Question 7. How could we improve or alter this familiarization exercise? </p>
         <br></br>
         <p> Overall, I was very excited to start on this assessment and get back into react.js. My react.js was pretty rusty since my previous job didnt use those skills, but I am happy to read the documentation and get far enough into it to complete the assessment. For an improvement, I’d like to see a sample or final product so I could asses if I’m going in the right direction. Other than that, the documentation was great and I enjoyed this exercise. </p>
         <br></br>
        <a href="https://vercel-questions.vercel.app/"> <h1>Click to go back to HOME </h1> </a>
      </div>

      
    </main>
  )
}
