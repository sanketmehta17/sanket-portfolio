const jobs = [
    {
        id: 1,
        Title: 'Software Developer',
        Company: 'Charm Diamond Centres',
        Location: 'Halifax, NS, Canada',
        FromDate: 'October 2022',
        ToDate: 'Present',
        Description: [
            'Developed a Dashboard for business analytics, revamped from its older version, allowing more visibility, interaction, control, and 100% data accuracy and consistency',
            'Established a centralized data lake for storing and managing essential data, ensuring data reliability',
            'Implemented role-based authentication and user management, allowing fine-grained control over access to reports on the Dashboard.',
            'Automated and scheduled the monthly process of downloading data from the Stripe dashboard eventually aiding in the analysis, with the help of Stripe API, achieving significant time savings.',
            'Troubleshooted the bugs and supported the continuous development and testing for the pre-existent applications leveraging a good understanding of the business domain.',
            'Created a static website using GoDaddy for a service-based business, achieving an 86% increase in the business presence',
            'Created XML to HTML transformations using XSLT templates, to generate PDF documents, improving customer service'
        ],
        Technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AJAX', 'BootStrap', 'ASP.NET', 'C#', 'SQL Server', 'REST', 'MVC', '.NET Core', 'XSLT', 'XSL'],
    },
    {
        id: 2,
        Title: 'Junior Programmer Intern',
        Company: 'Charm Diamond Centres',
        Location: 'Halifax, NS, Canada',
        FromDate: 'May 2022',
        ToDate: 'Aug 2022',
        Description: [
            'Developed a web application for Repair Tracking replacing the current system, achieved 100% adaptability and consistency',
            'Enhanced user experience with a responsive and user-friendly interface using Bootstrap changing the overall look and feel of the interface.'
        ],
        Technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AJAX', 'BootStrap', 'ASP.NET', 'C#', 'SQL Server', 'REST'],
      },
      {
        id: 3,
        Title: 'Software Developer Intern',
        Company: 'E-Core Agile Security Pvt. Ltd.',
        Location: 'Ahmedabad, Gujarat, India',
        FromDate: 'July 2020',
        ToDate: 'March 2021',
        Description: [
            'Created a web application for astrology services for a client, providing 100% results match and a seamless flow of each module',
            'Utilized third-party APIs using REST improving the results of match making module'
        ],
        Technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AJAX', 'BootStrap', 'PHP', 'Laravel', 'MySQL', 'REST', 'MVC'],
      },
  ]
  export default function WorkExperience() {
    return (
      <div className="bg-white py-8 sm:py-8" id="WorkExperience">
        <div className="bg-red-300 rounded-3xl mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 pt-6 sm:text-4xl">Work Experience</h2>
          </div>
          <div className="mx-auto mt-6 max-w-2xl gap-x-8 gap-y-6 border-t border-gray-200 pt-6 sm:mt-4 sm:pt-16 lg:mx-0 lg:max-w-none flex flex-row">
          <div className="">
            <article key={jobs[0].id} className="flex max-w-xl flex-col">              
              <div className="group relative">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {jobs[0].Title}
                </h3>
                <div className="flex flex-row mt-4 justify-between text-gray-500 text-xs">
                  <div className="">
                    {jobs[0].FromDate} - {jobs[0].ToDate}
                  </div>
                  <div className="">
                    {jobs[0].Location}
                  </div>
                </div>
                <ul className="list-disc mt-4">
                  {jobs[0].Description.map(duty => (
                      <li className="mt-2 text-sm text-left leading-6 text-gray-600">
                          {duty}
                      </li>
                  ))}
                </ul>
              </div>
              
            </article>
          </div>
          <div className="flex flex-col">
            {jobs.map((job) => (
              <div className={(job == jobs[jobs.length - 1]) ? "mt-10" : "mt-0"}>
                {job != jobs[0] && (
                    <article key={job.id} className="flex max-w-xl flex-col">
                      <div className="group relative">
                        <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <span className="absolute inset-0" />
                            {job.Title}
                        </h3>
                        <div className="flex flex-row mt-4 justify-between text-gray-500 text-xs">
                          <div className="">
                            {job.FromDate} - {job.ToDate}
                          </div>
                          <div className="">
                            {job.Location}
                          </div>
                        </div>
                        <ul className="list-disc mt-4">
                          {job.Description.map(duty => (
                              <li className="mt-2 text-sm text-left leading-6 text-gray-600">
                                  {duty}
                              </li>
                          ))}
                        </ul>
                      </div>                      
                    </article>
                )}
              </div>
              
            ))}
          </div>
            
          </div>
        </div>
      </div>
    )
  }
  