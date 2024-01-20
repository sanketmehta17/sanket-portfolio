const posts = [
    {
      id: 1,
      title: 'COVID19 Contact Tracer',
      href: 'https://github.com/sanketmehta17/COVID19_ContactTracer',
      description:
        'This is a console-based Java application to trace the COVID positive contacts; a scale-down version of government’s contact tracing application using various software development tactics and testing and debugging for the efficiency.',
    },
    {
        id: 2,
        title: 'Database Prototype',
        href: 'https://github.com/sanketmehta17/DatabasePrototype',
        description:
          'This is a lightweight database management system built as a console-based Java application. It includes various modules such as query parsing, query executing and identification of database queries such as DML, DDL, and also SQL dump and ERD generation.',
      },
      {
        id: 3,
        title: 'Hospital Management System',
        href: 'https://github.com/sanketmehta17/HospitalManagementSystem',
        description:
          'This is a console-based Java application performing features such as medical history (paperless document storage at one place), appointment, laboratory management, user management, vaccination, information on nearby camps, insurance policies, blood bank, billing, pharmacy and feedback for doctors. It also included few services keeping in mind current pandemic situation for COVID such as request for beds, plasma and ventilators. ',
      },
      {
        id: 4,
        title: 'Safe Deposit',
        href: 'https://github.com/sanketmehta17/SafeDeposit_Frontend',
        description:
          'This is a serverless project using backend as a service, to make a multi-cloud model providing services for multi-factor authentication, message passing, image matching using machine learning, withdrawal and report generation.',
      },
      {
          id: 5,
          title: 'E-Bookstore',
          href: 'https://github.com/sanketmehta17/E-Bookstore/tree/sanket_ushangbhai_mehta',
          description:
            'A python flask application to the AWS Elastic Beanstalk which allowed users to use the services such as buy, rent, donate, search and request a book and email notifications were sent to the user using various cloud services such as SNS, Lambda, Cognito and DynamoDB.',        },
    // More posts...
  ]
  
  export default function Projects() {
    return (
      <div className="bg-white py-8 sm:py-8" id="Projects">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
          </div>
          <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 border-t border-gray-200 pt-6 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start transition ease-in-out duration-300 hover:translate-y-1 hover:scale-110">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a target="_blank" href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm text-left leading-6 text-gray-600">{post.description}</p>
                </div>
                
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  