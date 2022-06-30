import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

import { db } from '../main';
import { collection, getDocs, query, orderBy } from "firebase/firestore";

import ProjectCard from './ProjectCard';

export default function Project() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    let allProjects = [];
    const q = query(collection(db, "projects"), orderBy("id"))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      allProjects.push(doc.data())
    })

    setProjects(allProjects);
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className='py-4'>
      <Fade>

      <h1 className='text-3xl font-semibold text-yellow-300 mb-4'>PROJECTS</h1>
      
      {projects.length > 0 
      ? <div className='md:grid md:justify-center lg:grid-cols-2  gap-4'>
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      : <div className='md:grid md:justify-center lg:grid-cols-2  gap-4'>
          <ProjectCard />
          <ProjectCard />
        </div>
      }
      
      <div className='text-center mt-8'>
        <a href="https://github.com/songvut365" target="_blank"
          className='my-4 uppercase font-semibold text-yellow-300 border border-zinc-600 py-3 px-5 rounded-md shadow-md
          hover:border-zinc-700 active:bg-neutral-800 active:text-zinc-200'>
          more projects
        </a>
      </div>
      </Fade>
    </div>
  )
}
