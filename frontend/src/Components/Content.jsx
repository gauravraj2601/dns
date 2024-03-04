import React from 'react'

const Content = () => {
    let content=[
        {manag:"DNS management",
         desc:"A hosted zone tells Route 53 how to respond to DNS queries for a domain such as example.com.",
         button:"Create hosted zone"
        },
        {manag:"Traffic management",
         desc:"A visual tool that lets you easily create policies for multiple endpoints in complex configurations.",
         button:"Create policy"
        },
        {manag:"Availability monitoring",
         desc:"Health checks monitor your applications and web resources, and direct DNS queries to healthy resources.",
         button:"Create health check"
        },
        {manag:"Domain registration",
         desc:"A domain is the name, such as example.com, that your users use to access your application.",
         button:"Register domain"
        },
        
    ]
  return (
    <>
    {content.map((el,ind)=>(
        <div key={ind} style={{width:"100%", height:"150px", display:'flex', flexDirection:"column", justifyContent:"space-between",padding:"40px"}}>
        <div style={{fontSize:"25px", fontWeight:"600", marginTop:"-30px"}}><h1>{el.manag}</h1></div>
        <div style={{fontWeight:"500"}}><p>{el.desc}</p></div>
        <div style={{fontSize:"20px", fontWeight:"bold", border:"1px solid black", width:"218px", margin:"auto", padding:"3px 0px 4px 0px", marginTop:"15px"}}> <button style={{fontWeight:"500"}} >{el.button}</button> </div>
    </div >
    ))}
    </>
    
  )
}

export default Content