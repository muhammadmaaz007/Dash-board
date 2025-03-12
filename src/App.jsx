import React from "react";
import Pie from "./comps/Pie";
import PrimarySearchAppBar from "./comps/Navbar";
import GridDemo from "./comps/Line";
import { Menu, Stack } from "@mui/material";
import CompositionExample from "./Gauge";
import BasicBars from "./comps/Bar";
import Heading from "./comps/Heading";
import SideBar from "./comps/SideBar";

function App() {
  return (
    <>
      <div>

        <PrimarySearchAppBar />
        <Heading/>
       <Stack direction={"row"} width={"full"}  justifyContent={"center"} padding={"20px"} gap={"30px"}>
        <SideBar/>

        <Stack direction={"column"} width={"100%"}>

        <Stack direction={"row"} width={"full"}  justifyContent={"space-evenly"} marginTop={"2rem"}>

         <Stack sx={{ backgroundColor: 'lightblue', width : 500 , height : 300 ,boxShadow: 5 , borderRadius: 2}}>
          <h1 className=" text-center font-bold text-xl">Traffic Report</h1>
         <Pie />
         </Stack>
         <Stack sx={{ backgroundColor: 'lightblue', width : 500 , height : 300, boxShadow: 5 , borderRadius: 2, alignItems: "center"}}>
         <h1 className=" text-center font-bold text-xl">Revenue Report</h1>
          <CompositionExample />
          </Stack>
        </Stack>
        <Stack direction={"row"} width={"full"}  justifyContent={"space-evenly"} marginTop={"5rem"}>
        <Stack sx={{ backgroundColor: 'lightblue', width : 500 , height : 300, boxShadow: 5 , borderRadius: 2}}>
         <h1 className=" text-center font-bold text-xl">Zone Report</h1>
         <GridDemo />
          </Stack>
          <Stack sx={{ backgroundColor: 'lightblue', width : 500 , height : 300, boxShadow: 5 , borderRadius: 2}}>
         <h1 className=" text-center font-bold text-xl">Everyday Report</h1>
         <BasicBars />
          </Stack>


        </Stack>

        </Stack>

        </Stack>

      </div>
    </>
  );
}

export default App;
