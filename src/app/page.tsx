import Image from "next/image";
import { Playfair } from "next/font/google";
import Beach from './Beach.jpg';
import CoolMerlin from './CoolMerlin.png'
const poppins = Playfair({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
    <main className={poppins.className}>
       <section className="relative flex items-center justify-center h-screen w-full">
     <div className="absolute inset-0 z-0">
          <div className="w-full h-full blur-lg ">
            <Image
              src={Beach}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
      </div>
      <div className="relative z-10 text-center text-neutral-900 overscroll-x-none font-black ">
        <div className="animate-bounce ">          
          <h1 className="text-6xl bg-gradient-to-r from-yellow-200 via-emerald-200 to-indigo-400 inline-block text-transparent bg-clip-text">Merlin is on <p className="italic">"holiday."</p></h1>
          
      </div>
          <Image src={CoolMerlin} alt="Background Image"/>
          <h1 className="text-3xl ">Check back after summer!</h1>
        </div>
        
        </section>    
    </main>

    </>
  );
}
