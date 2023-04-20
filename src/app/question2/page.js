import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div>
        <p>Question 2. Describe how you solved a challenge that one of your previous support teams faced. How did you determine your solution was successful? </p>
         <br></br>
         <p> A memorable challenge where I had ownership was providing a solution that solved load-balancing by monitoring services within 2 application servers, using Python. The client had two application servers, where if either of the 5 services fail on server A, then server A would trigger an alert event to the load balancer forcing the services to use server B, and vice versa. 
<br></br>
<br></br>
The solution I created was a Python script that constantly tailed the rolling logs of all 5 services, identifying hard errors or successes which would then output an up or down string in an API, that was pulled by the load balancer every 5-10 seconds. 
<br></br>
<br></br>
I considered this solution successful when it was used by the client in their PROD environment and was pushed to the Development team as a new feature request that would be part of the Product. 
</p>
<br></br>
        <a href="https://vercel-questions.vercel.app/"> <h1>Click to go back to HOME </h1> </a>
        
      </div>

      
    </main>
  )
}
