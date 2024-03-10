import React from "react";
import AOS from 'aos';

const projects = [
    // {
    //   id: 1,
    //   title: 'COVID19 Contact Tracer',
    //   href: 'https://github.com/sanketmehta17/COVID19_ContactTracer',
    //   description:
    //     'This is a console-based Java application to trace the COVID positive contacts; a scale-down version of government’s contact tracing application using various software development tactics and testing and debugging for the efficiency.',
    //   technologies: ['Java'],
    //   },
    {
        id: 1,
        title: 'Database Prototype',
        href: 'https://github.com/sanketmehta17/DatabasePrototype',
        description:
          'This is a lightweight database management system built as a console-based Java application. It includes various modules such as query parsing, query executing and identification of database queries such as DML, DDL, and also SQL dump and ERD generation.',
        technologies: ['Java'],
      },
      {
        id: 2,
        title: 'Hospital Management System',
        href: 'https://github.com/sanketmehta17/HospitalManagementSystem',
        description:
          'This is a console-based Java application performing features such as medical history (paperless document storage at one place), appointment, laboratory management, user management, vaccination, information on nearby camps, insurance policies, blood bank, billing, pharmacy and feedback for doctors. It also included few services keeping in mind current pandemic situation for COVID such as request for beds, plasma and ventilators. ',
        technologies: ['Java'],
      },
      {
        id: 3,
        title: 'Safe Deposit',
        href: 'https://github.com/sanketmehta17/SafeDeposit_Frontend',
        description:
          'This is a serverless project using backend as a service, to make a multi-cloud model providing services for multi-factor authentication, message passing, image matching using machine learning, withdrawal and report generation.',
        technologies: ['ReactJS', 'NodeJS', 'GCP', 'AWS'],
      },
      {
          id: 4,
          title: 'E-Bookstore',
          href: 'https://github.com/sanketmehta17/E-Bookstore/tree/sanket_ushangbhai_mehta',
          description:
            'A python flask application to the AWS Elastic Beanstalk which allowed users to use the services such as buy, rent, donate, search and request a book and email notifications were sent to the user using various cloud services such as SNS, Lambda, Cognito and DynamoDB.',        
          technologies: ['AWS', 'Python'],
      },
      {
        id: 5,
        title: 'Money Manager',
        href: 'https://github.com/sanketmehta17/MoneyManager',
        description:
          'Money Manager is an application built for Android OS and aims to help users have a better look at their current financial situation and manage their cashflow. There are two target users for this design: personal user and small business user, with the option to change between profiles. The application design is implemented using the MVC architectural pattern.',        
        technologies: ['Android', 'Java', 'Kotlin'],
      },
      {
        id: 6,
        title: 'Portfolio',
        href: 'https://github.com/sanketmehta17/sanket-portfolio',
        description:
          'This is a portfolio web application built using Tailwind CSS, ReactJS and NodeJS for front-end and back-end. It also uses Amazon Web Services(AWS) for its RDS database instance for storing testimonial information.',        
        technologies: ['ReactJS', 'NodeJS', 'Tailwind CSS', "AWS"],
      },
  ]
  
  const techColor = [
    {
      technology: 'Java',
      color: 'bg-gray-500'
    },
    {
      technology: 'ReactJS',
      color: 'bg-blue-700'
    },
    {
      technology: 'NodeJS',
      color: 'bg-blue-400'
    },
    {
      technology: 'GCP',
      color: 'bg-gray-400'
    },
    {
      technology: 'AWS',
      color: 'bg-pink-400'
    },
    {
      technology: 'Python',
      color: 'bg-red-400'
    },
    {
      technology: 'Kotlin',
      color: 'bg-sky-400'
    },
    {
      technology: 'Android',
      color: 'bg-sky-800'
    },
    {
      technology: 'Tailwind CSS',
      color: 'bg-indigo-800'
    },
]

 function getTechColor(technology){
    return techColor.filter((tech) => (technology == tech.technology))[0].color;
 }

  export default function Projects() {
    
    React.useEffect(() => {
      AOS.init({
          duration: 1000,
      });
    }, []);

    return (
      <div className="bg-white py-8 px-8 sm:py-8" id="Projects" data-aos="fade-in" data-aos-duration="1800">
        <div className="bg-gray-200 rounded-3xl mx-auto max-w-screen-2xl sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-6 pb-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl uppercase font-light tracking-tight py-4 text-gray-900 sm:text-4xl">Projects</h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 border-t border-gray-900 pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.id} className="flex max-w-2xl flex-col transition ease-in-out duration-300 hover:translate-y-1 hover:scale-100">
                <div className="group relative">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a target="_blank" href={project.href} className="text-black hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-base text-justify leading-6 text-gray-600">{project.description}</p>
                </div>
                <div className="flex gap-2 mt-2">
                  {project.technologies.map((technology, index) => (
                    <div key={index}>
                        <span className={getTechColor(technology) + " text-white text-base font-extralight me-2 px-2.5 py-0.5 rounded"}>{technology}</span>
                    </div>
                  ))}
                </div>
              </article>              
            ))}
          </div>
        </div>
      </div>
    )
  }
  