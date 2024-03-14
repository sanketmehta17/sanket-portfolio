import React from "react";
import AOS from 'aos';

const projects = [
    {
      id: 1,
      title: 'Executive Dashboard',
      description:
        'This project aims to create a centralized platform tailored for executives and decision-makers, consolidating data from multiple departments and systems to present a real-time overview of the company\'s performance. Beyond delivering essential metrics, the dashboard integrates additional functionalities, providing a comprehensive tool for decision-makers to access critical information and streamline various processes within the organization. In addition, it uses a centralized data lake that is specifically designed to serve as a unified data source, ensuring data integrity and consistency across the organization.',
      technologies: ['ASP.NET', 'HTML5', 'CSS3', 'Javascript', 'C#', 'Bootstrap', 'XSLT'],
    },
    {
      id: 2,
      title: 'Store Dashboard',
      description:
        'This project, developed with .NET Core and featuring TailwindCSS for an enhanced user experience, is tailored for store employees. This dashboard provides a user-centric interface with key performance metrics crucial for assessing both individual and overall store performance. It goes beyond mere visualization, incorporating small applications to streamline day-to-day tasks, empowering employees to make informed decisions and contribute to operational efficiency. With a focus on usability and functionality, it aims to optimize the work experience for store employees while facilitating a deeper understanding of store metrics for improved decision-making.',
      technologies: ['.NET Core', 'HTML5', 'Javascript', 'C#', 'XSLT', 'Tailwind CSS', 'MVC'],
    },
    {
      id: 3,
      title: 'Authenticator',
      description:
        'This project is a comprehensive authentication system developed to manage employee login functionality. Built using .NET Web API, it incorporates a complex user entity system accommodating various user types and unique configurations for each user per application. The project utilizes ReactJS and Tailwind CSS for the user interface, establishing seamless communication with the API. This full login solution not only enables standard login, password reset, and sign-up functionalities for employees but also delegates application configurations to the backend API, ensuring a robust and customizable authentication experience.',
      technologies: ['.NET Web API', 'ReactJS', 'Javascript', 'C#', 'Tailwind CSS', 'LINQ'],
    },
    {
      id: 4,
      title: 'Repair Tracker',
      description:
        'This is a customer-facing web application designed for efficient repair tracking, management, and invoicing. Utilizing Bootstrap for an enhanced user experience, the application is integral to store employees\' workflow. It seamlessly handles large-scale image storage for repairs, employing an Repair Expiration Identification System to dispose expired images and maintain storage efficiency. Integrated with a Windows service for customer communication, the app also incorporates QR code functionality to uniquely identify repairs, facilitating streamlined processes through easy scan. Overall, it is a comprehensive solution that combines user-friendly design with intricate features for effective repair management and customer communication.',
        technologies: ['ASP.NET', 'HTML5', 'CSS3', 'Javascript', 'C#', 'Bootstrap'],
    },
    {
      id: 5,
      title: 'Image Library',
      description:
        'This is a scheduled console application designed to run daily, tasked with retrieving new SKU images absent from the existing image library. Functioning as an automated process, it fetches images from an online source and preserves the original versions. Additionally, the application resizes the images to various dimensions to cater to different use cases, ensuring adaptability and efficiency in managing the image library.',
        technologies: ['C#'],
    },
    {
      id: 6,
      title: 'COVID19 Contact Tracer',
      href: 'https://github.com/sanketmehta17/COVID19_ContactTracer',
      description:
        'This is a console-based Java application to trace the COVID positive contacts; a scale-down version of government’s contact tracing application using various software development tactics and testing and debugging for the efficiency.',
      technologies: ['Java'],
    },
    {
      id: 7,
      title: 'Database Prototype',
      href: 'https://github.com/sanketmehta17/DatabasePrototype',
      description:
        'This is a lightweight database management system implemented as a Java console application. It encompasses diverse modules, including query parsing, query execution, and identification of database queries like DML (Data Manipulation Language) and DDL (Data Definition Language). Additionally, the system supports SQL dump functionality and Entity-Relationship Diagram (ERD) generation, providing a versatile solution for managing and interacting with databases in a console-based environment.',
      technologies: ['Java'],
    },
    {
      id: 8,
      title: 'Hospital Management System',
      href: 'https://github.com/sanketmehta17/HospitalManagementSystem',
      description:
        'This is a Java-based console application that offers a range of features to enhance healthcare management. It facilitates paperless storage of medical histories, appointment scheduling, laboratory management, user administration, vaccination records, information on nearby health camps, insurance policies, blood bank management, billing, pharmacy services, and feedback for doctors. Notably, the system addresses pandemic-related needs by incorporating features for requesting beds, plasma, and ventilators during the current COVID situation, providing a comprehensive and adaptable solution for hospital operations.',
      technologies: ['Java'],
    },
    {
      id: 9,
      title: 'Safe Deposit',
      href: 'https://github.com/sanketmehta17/SafeDeposit_Frontend',
      description:
        'The is a serverless system utilizing backend as a service (BaaS) with a multi-cloud model. It offers services such as multi-factor authentication, message passing, machine learning-based image matching, withdrawal functionality, and report generation. By leveraging a serverless architecture and integrating with multiple cloud providers, the project aims to provide a secure and versatile solution for authentication, communication, and transaction processes within a streamlined and efficient framework.',
      technologies: ['ReactJS', 'NodeJS', 'GCP', 'AWS'],
    },
    {
      id: 10,
      title: 'E-Bookstore',
      href: 'https://github.com/sanketmehta17/E-Bookstore/tree/sanket_ushangbhai_mehta',
      description:
        'This is a Python Flask application deployed on AWS Elastic Beanstalk, offering users a range of services including purchasing, renting, donating, searching, and requesting books. The system incorporates various AWS cloud services such as SNS, Lambda, Cognito, and DynamoDB to handle email notifications and manage user interactions, providing a seamless and scalable platform for e-book transactions and requests.',        
      technologies: ['AWS', 'Python'],
    },
    {
      id: 11,
      title: 'Money Manager',
      href: 'https://github.com/sanketmehta17/MoneyManager',
      description:
        'This is an Android application designed to offer users a comprehensive view of their financial status and aid in cashflow management. Catering to both personal and small business users, the app allows seamless switching between profiles. It employs the MVC architectural pattern for effective design implementation, providing a user-friendly platform to enhance financial awareness and facilitate efficient cashflow management.',        
      technologies: ['Android', 'Java', 'Kotlin'],
    },
    {
      id: 12,
      title: 'Portfolio',
      href: 'https://github.com/sanketmehta17/sanket-portfolio',
      description:
        'The portfolio project is a web application constructed with Tailwind CSS, ReactJS, and NodeJS for both front-end and back-end functionalities. Leveraging Amazon Web Services (AWS), the project utilizes an RDS database instance to store testimonial information. Through this technology stack and AWS integration, the portfolio presents a platform for showcasing professional work and testimonials.',        
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
    {
      technology: 'ASP.NET',
      color: 'bg-rose-500'
    },
    {
      technology: '.NET Core',
      color: 'bg-rose-300'
    },
    {
      technology: '.NET Web API',
      color: 'bg-fuchsia-700'
    },
    {
      technology: 'C#',
      color: 'bg-fuchsia-400'
    },
    {
      technology: 'HTML5',
      color: 'bg-cyan-400'
    },
    {
      technology: 'CSS3',
      color: 'bg-cyan-800'
    },
    {
      technology: 'LINQ',
      color: 'bg-teal-400'
    },
    {
      technology: 'Javascript',
      color: 'bg-teal-800'
    },
    {
      technology: 'MVC',
      color: 'bg-amber-800'
    },
    {
      technology: 'XSLT',
      color: 'bg-amber-300'
    },
    {
      technology: 'Bootstrap',
      color: 'bg-emerald-300'
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
                    <div className="text-black hover:text-gray-600 inline-flex">
                      {project.title}
                      {project.href && 
                        <a className="ml-2 my-auto text-neutral-800 dark:text-neutral-800 hover:text-neutral-600 hover:cursor-pointer" href={project.href} target='_blank'>
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="currentColor"
                              viewBox="0 0 24 24">
                              <path
                              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      }                      
                    </div>
                  </h3>
                  <p className="mt-1 text-base text-justify leading-6 text-gray-600">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
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
  