import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div>
        <p>Question 5. Imagine a customer writes in, requesting help with the following question. Write a first response for triaging this case and helping them solve the issue.  </p>
         <br></br>
         <p>"Hi there, <br></br>
            I keep getting a build error from Vercel saying that “/vercel/path0/dist/routes-manifest.json” couldn’t be found. Can you help me debug this?? I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. Your docs aren’t helpful."</p>
         <br></br>
         Hello,
         <br></br><br></br>
Thank you for sharing the error information, from what I understand, this can be caused the .next folder whether it's present or contains the correct files.
<br></br><br></br>
First, we’ll need to look at your package.json file and troubleshoot if the “next” dependency is on the correct version, ( "next": "13.3.0" ). Also, please check if the .next folder is available within the application’s top folder. 
<br></br><br></br>
Please let me know what you find and if there are any new build errors. 

<br></br>
        <a href="https://vercel-questions.vercel.app/"> <h1>Click to go back to HOME </h1> </a>
      </div>

      
    </main>
  )
}
