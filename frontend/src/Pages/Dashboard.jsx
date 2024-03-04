import React from 'react'
import Sidebar from '../Components/Sidebar'
import Container from '../Components/Container'

const Dashboard = () => {
  return (
    <div style={{display:"flex", height:"100vh"}}>
        <Sidebar />
        <Container />
    </div>
  )
}

export default Dashboard