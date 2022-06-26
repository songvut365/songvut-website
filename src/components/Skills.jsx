import React from 'react'
import { skills } from '../data';
import Fade from 'react-reveal/Fade';

export default function Skills() {
  return (
    <div className='pb-2'>
      <Fade>
      <h1 className='text-4xl font-semibold text-yellow-300'>SKILLS</h1>

      <div className="hs-accordion-group my-4" data-hs-accordion-always-open>
        { skills.map(skill => (
          <div className="hs-accordion border -mt-px first:rounded-t-lg last:rounded-b-lg bg-neutral-800  border-zinc-600" id="hs-bordered-heading-two" key={skill.name}>
            <Fade>
            <button className="hs-accordion-toggle inline-flex items-center gap-x-3 w-full font-semibold text-left text-lg transition py-4 px-5  hs-accordion-active:text-yellow-500 text-white hover:text-zinc-400" aria-controls="hs-basic-bordered-collapse-two">
              {skill.name}
            </button>

            {skill.name === "Language Proficiency" ? (
              <div id="hs-basic-bordered-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-two">
                <div className="pb-4 px-5 flex text-center justify-center flex-wrap gap-8 box-border">
                  {skill.details.map(detail=> (
                    <div key={detail.name}>
                      <span className={"mb-1 inline-flex items-center justify-center h-[3rem] w-[3rem] " + detail.color}>
                        <span className="text-lg font-medium text-white leading-none">{detail.short}</span>
                      </span>
                      <p className='text-sm font-semibold'>{detail.name} : {detail.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div id="hs-basic-bordered-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-two">
                <div className="pb-4 px-5 flex text-center justify-center flex-wrap gap-8 box-border">
                  {skill.details.map(detail=> (
                    <div key={detail.name}>
                      <img src={detail.image} className="h-16" />
                      <p className='text-sm font-semibold'>{detail.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            </Fade>
          </div>
        ))}
        
      </div>
      </Fade>
    </div>
  )
}
