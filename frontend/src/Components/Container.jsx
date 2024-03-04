import React from 'react'
import { VscChevronRight } from "react-icons/vsc";
import Content from './Content';

const Container = () => {
  return (
    <div style={{width:"81%" , backgroundColor:"#f2f3f3", fontSize:"18px"}}>
        <div style={{display:"flex",padding:"5px 25px", fontWeight:"500", justifyContent:"start", alignItems:"center",}}>
        <div style={{padding:"10px", fontSize:"18px", textDecoration:"underline", color:'Blue'}} > <a  href="/">Route 53</a> </div>
        <div><VscChevronRight style={{fontSize:"25px",}} /></div>
        <h2>Dashboard</h2>
        </div>
        <div style={{padding:"2px 25px", display:"flex", gap:"10px",fontWeight:"600" }}>
            <h1 style={{fontSize:"30px"}}>Route 53 Dashboard</h1><span style={{color:"blue", fontWeight:"600", marginTop:"12px"}}>Info</span>
        </div>
        <div style={{width:"95.5%",margin:"auto", marginRight:"50px" ,backgroundColor:"#ffffff", boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px", height:"380px", display:"grid", gridTemplateColumns:"repeat(2,1fr)", marginTop:"20px"}}>
            <Content />
        </div>
    </div>
  )
}

export default Container