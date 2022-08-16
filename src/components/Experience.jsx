import React from 'react'
import logo from '../assets/JavaScript-logo.png'
const Experience = () => {
  const list = [
    {
        id:1,
        src: logo,
        name: "Java Script",
    },
    {
        id:2,
        src: logo,
        name: "Java Script",
    },
    {
        id:3,
        src: logo,
        name: "Java Script",
    },
    {
        id:4,
        src: logo,
        name: "Java Script",
    },
    {
        id:5,
        src: logo,
        name: "Java Script",
    },
    {
        id:6,
        src: logo,
        name: "Java Script",
    }
  ]
    return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen p-7'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white '>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8'>
            {list.map(({id,src,name})=>(
            
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center justify-center'>
                    <img src={src} alt={name} className='mt-5 w-1/2'/>
                
                <p className=''>{name}</p>
                </div>
            ))
            }
            </div>
        </div>
    </div>
  )
}

export default Experience