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
      brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
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
      brandLogo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
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
      brandLogo: "https://images.seeklogo.com/logo-png/15/1/apple-logo-png_seeklogo-158010.png",
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
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
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
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxggIt5CPQqUxKi3eW4QhNIKv5eH5LdhRwMA&s",
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
