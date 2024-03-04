import React from 'react'

const Sidebar = () => {
  return (
    <div style={{width:"19%", border:"1px solid black"}}>
        <div style={{"padding":"20px", }}  ><h1 style={{fontWeight:"700",fontSize:"22px"}}>Route 53</h1> </div>
        <hr />
        <ul style={{fontWeight:"700", marginLeft:"-30px", marginTop:"20px"}}>
            <li>Dashboard</li>
        </ul>
        {/* <ul style={{fontWeight:"500", marginLeft:"-30px", marginTop:"8px"}}>
            <li>Hosted zones</li>
        </ul> */}
    </div>
  )
}

export default Sidebar