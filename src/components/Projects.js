import websiteImg1 from '../assets/ecommerce-websites.jpg'
import websiteImg2 from '../assets/food-ecommerce.jpg'
import websiteImg3 from '../assets/website-blog.jpg'

export default function Projects(){
      
    const config = {
        projects : [
            {
                image: websiteImg1,
                description:'A Ecommerce Website. Built with MERN Stack',
                link:'',
            },
            {
                image:websiteImg2,
                description:'Food Ecommerce website like Swiggy. Built with Angular & .Net',
                link:'',
            },
            {
                image:websiteImg3,
                description:'Blog website . Built with Next JS and MongoDB',
                link:'',
            },
        ]
    }

    return <section id='project' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-1/2" >
           <div className="flex  flex-col px-10 py-5">
              <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
                Projects
              </h1>
              <p>
                These are some of my best project. I have built these with React,
                MERN and vanilla CSS. Check them out.
              </p>
           </div>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5 '>
            {config.projects.map((project) => (
                 <div className='relative'>
                <img className='h-[200px] w-[500px]' src={project.image} />
                <div className='project-desc'>                
                    <p className='text-center px-5 py-5'>{project.description}</p>
                    <div className='flex justify-center'>
                       <a className='btn' href="{project.link}">view projects</a>
                    </div>
                </div>
            </div> 
            ))}
          
        </div>
        </div>
    </section>
}