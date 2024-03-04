import React from 'react'

const Sidebar = () => {
  return (
    <div style={{width:"19%", borderLeft:"1px solid gray", backgroundColor:"#ffffff"}}>
        <div style={{"marginLeft":"-35%",paddingTop:"20px", paddingBottom:"20px" }}  ><h1 style={{fontWeight:"700",fontSize:"28px"}}>Route 53</h1> </div>
        <hr />
        <ul style={{fontWeight:"700", marginLeft:"-35%", marginTop:"20px", fontSize:"20px"}}>
            <li>Dashboard</li>
        </ul>
        {/* <ul style={{fontWeight:"500", marginLeft:"-30px", marginTop:"8px"}}>
            <li>Hosted zones</li>
        </ul> */}
    </div>
  )
}

export default Sidebar