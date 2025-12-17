import React from 'react'
import Card from './components/card'


const App = () => {

  const jobOpenings = [
    {
      id: 1,
      company: "Amazon",
      brandLogo: "https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png",
      title: "Senior UI/UX Designer",
      employmentType: "Part-Time",
      level: "Senior Level",
      posted: "5 days ago",
      salary: "$120/hr",
      location: "Mumbai, India",
      applyText: "Apply Now"
    },
    {
      id: 2,
      company: "Google",
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      title: "Frontend Developer",
      employmentType: "Full-Time",
      level: "Mid Level",
      posted: "2 days ago",
      salary: "$95/hr",
      location: "Bangalore, India",
      applyText: "Apply Now"
    },
    {
      id: 3,
      company: "Microsoft",
      brandLogo: "https://www.logo.wine/a/logo/Microsoft_Store/Microsoft_Store-Logo.wine.svg",
      title: "Product Designer",
      employmentType: "Full-Time",
      level: "Senior Level",
      posted: "1 week ago",
      salary: "$110/hr",
      location: "Hyderabad, India",
      applyText: "Apply Now"
    },
    {
      id: 4,
      company: "Netflix",
      brandLogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
      title: "UX Researcher",
      employmentType: "Contract",
      level: "Senior Level",
      posted: "3 days ago",
      salary: "$130/hr",
      location: "Remote",
      applyText: "Apply Now"
    },
    {
      id: 5,
      company: "Meta",
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy3ZqxYhMdW3qa__685iJWJwGQGhV4VCivoQ&s",
      title: "UI Designer",
      employmentType: "Part-Time",
      level: "Junior Level",
      posted: "4 days ago",
      salary: "$60/hr",
      location: "Remote",
      applyText: "Apply Now"
    },
    {
      id: 6,
      company: "Apple",
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      title: "Human Interface Designer",
      employmentType: "Full-Time",
      level: "Senior Level",
      posted: "6 days ago",
      salary: "$125/hr",
      location: "Pune, India",
      applyText: "Apply Now"
    },
    {
      id: 7,
      company: "Adobe",
      brandLogo: "https://static.cdnlogo.com/logos/a/90/adobe.png",
      title: "UX Engineer",
      employmentType: "Full-Time",
      level: "Mid Level",
      posted: "1 day ago",
      salary: "$105/hr",
      location: "Noida, India",
      applyText: "Apply Now"
    },
    {
      id: 8,
      company: "Spotify",
      brandLogo: "https://s3-alpha.figma.com/hub/file/2734964093/9f5edc36-eb4d-414a-8447-10514f2bc224-cover.png",
      title: "Interaction Designer",
      employmentType: "Contract",
      level: "Mid Level",
      posted: "2 weeks ago",
      salary: "$90/hr",
      location: "Remote",
      applyText: "Apply Now"
    },
    {
      id: 9,
      company: "Flipkart",
      brandLogo: "https://www.citypng.com/public/uploads/preview/flipkart-logo-icon-hd-png-701751694706828v1habfry9b.png",
      title: "UX/UI Designer",
      employmentType: "Full-Time",
      level: "Mid Level",
      posted: "3 days ago",
      salary: "$70/hr",
      location: "Bangalore, India",
      applyText: "Apply Now"
    },
    {
      id: 10,
      company: "Zomato",
      brandLogo: "https://www.citypng.com/public/uploads/preview/zomato-round-logo-icon-701751694968327lvye6zxamg.png",
      title: "Product UX Designer",
      employmentType: "Full-Time",
      level: "Senior Level",
      posted: "5 days ago",
      salary: "$85/hr",
      location: "Gurgaon, India",
      applyText: "Apply Now"
    }
  ];
  
  return (
    <div className='parent'>
      {
        jobOpenings.map((job) => {
          return <Card 
          company={job.company} 
          brandLogo={job.brandLogo}
          title={job.title}
          employmentType={job.employmentType}
          level={job.level}
          posted={job.posted}
          salary={job.salary}
          location={job.location}
          applyText={job.applyText}
          key={job.id} 
          job={job} />
        })
      }
    
      
    </div>
  )
}

export default App
