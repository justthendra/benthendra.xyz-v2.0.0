import Head from 'next/head';
import Image from 'next/image';
import hasan from '../img/hasan.png'

export default function About() {

  return (
    <>
    <Head>
    <title>About | Thendra</title>
    </Head>
       <div className="max-w-7xl mt-[100px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
                <div>
                    <h1 className="text-5xl font-bold text-gray-300">Who Am <span className="relative whitespace-nowrap text-primary">I</span>?</h1>
                    <p className="text-2xl mt-10 text-gray-300">
                    Hi, I&apos;m Thendra. I am 17 years old. I am a 3rd year high school student. 
			        I have been dealing with software for about 5 years. I started with node.js, 
		        	developed Discord Bot and made my biggest improvement with the latest FiveM script. 
			        Software has been and continues to be my biggest hobby to date. 
			        I&apos;m still improving myself.
                    </p>
                    
                </div>
                <div className="relative flex-shrink-0">
                  <Image src={hasan} style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />
                  <div className=" absolute w-[256px] h-[256px] top-0 right-0 border-4 rounded-full lg:rounded-lg border-primary bg-gradient-to-t from-primary" />
                </div>
            </div>
        </div>
    </>
  )
}