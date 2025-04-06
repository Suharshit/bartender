import React from 'react';
import Image from 'next/image';
import { Github,  } from 'lucide-react';
import Link from 'next/link';

const developers = [
  {
    id: 1,
    name: 'Suharshit Singh',
    role: '12306340',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'],
    image: '/team/alex.jpg',
    social: {
      github: 'https://github.com/Suharshit',
    }
  },
  {
    id: 2,
    name: 'Davinder Singh',
    role: '12324257',
    skills: ['React', 'CSS/SCSS', 'Animation', 'Accessibility', 'Figma'],
    image: '/team/sarah.jpg',
    social: {
      github: 'https://github.com/Davindersingh12345',
    }
  },
  {
    id: 3,
    name: 'Jerome Philip John',
    role: '12321851',
    skills: ['Node.js', 'MongoDB', 'GraphQL', 'Docker', 'Security'],
    image: '/team/miguel.jpg',
    social: {
      github: 'https://github.com/jerome784',
    }
  }
];

const page = () => {
    return (
        <div className="">
          <main className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-white mb-4">Project Team</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center items-center flex justify-center">
                    Project Github Link: 
                    <Link href={'https://github.com/Suharshit/bartender'} className=''>
                        <button className='mt-2 pl-5 cursor-pointer'>
                            <Github size={45} className='bg-white px-2 py-2 rounded-full'/>
                        </button>
                    </Link>
                </p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {developers.map((dev) => (
                <div 
                  key={dev.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
                >
                  <div className="h-64 relative">
                    <Image 
                      src={dev.image} 
                      alt={dev.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                      priority
                    />
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900">{dev.name}</h2>
                    <p className="text-indigo-600 font-medium mb-4">{dev.role}</p>
                    
                    {/* <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {dev.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div> */}
                    
                    <div className="flex justify-center space-x-4 border-t pt-4">
                      <Link
                        href={dev.social.github}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <Github size={24} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      );
}

export default page