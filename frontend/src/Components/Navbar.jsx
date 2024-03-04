import React from "react";
import image1 from "./Assets/image1.png";
import image2 from "./Assets/image2.png";
import image3 from "./Assets/image3.png";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#232f3e",
        justifyContent: "space-between",
      }}
    >
      <div style={{width:"50%", display: "flex", alignItems: "center", gap: "10px" }}>
        <div>
          <img src={image2} alt="logo1" />
        </div>
        <div style={{ height: "30px", border: "1px solid #585F69 " }}></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color: "white",
          }}
        >
          <div>
            <img src={image1} alt="logo" />
          </div>
          <div>
            <h4>Services</h4>
          </div>
        </div>
        <Box width={"60%"} margin="-10px 10px" >
          <InputGroup borderColor="gray" borderWidth="1px" borderRadius="md" color={"white"}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray" />
            </InputLeftElement>
            <Input
              type="search"
              placeholder="Search"
              onChange={() => console.log("Serach")}
            />
          </InputGroup>
        </Box>
      </div>
      {/* / */}
      <div
        style={{ display: "flex", alignItems: "center", paddingRight: "10px" }}
      >
        <div>
          <img src={image3} alt="logo1" />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div>
            <select
              style={{
                backgroundColor: "#232f3e",
                color: "white",
                padding: "5px",
              }}
            >
              <option value="">Global</option>
            </select>
          </div>
          <div style={{ height: "25px", border: "0.5px solid #585F69 " }}></div>
          <div style={{ color: "white" }}>
            <h4>User Login</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
