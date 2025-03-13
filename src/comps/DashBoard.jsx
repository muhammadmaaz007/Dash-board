import React from 'react';
import BasicPie from './Pie';
import PrimarySearchAppBar from "./Navbar";
import GridDemo from "./Line";
import { Stack } from "@mui/material";
import CompositionExample from "./Gauge";
import BasicBars from "./Bar";
import Heading from "./Heading";
import SideBar from "./SideBar";

const DashBoard = () => {
  return (
    <div>

      <Stack direction={"row"} width={"full"} justifyContent={"center"} padding={"20px"} gap={"30px"}>
        <div className="flex">
          <SideBar />
          <div className="flex-1 p-4">
          </div>
        </div>

        <Stack direction={"column"} width={"100%"}>
          <Stack direction={"row"} width={"full"} justifyContent={"space-evenly"} marginTop={"2rem"}>
            <Stack sx={{ backgroundColor: 'lightblue', width: 500, height: 300, boxShadow: 5, borderRadius: 2 }}>
              <h1 className="text-center font-bold text-xl">Traffic Report</h1>
              <BasicPie />
            </Stack>
            <Stack sx={{ backgroundColor: 'lightblue', width: 500, height: 300, boxShadow: 5, borderRadius: 2, alignItems: "center" }}>
              <h1 className="text-center font-bold text-xl">Revenue Report</h1>
              <CompositionExample />
            </Stack>
          </Stack>

          <Stack direction={"row"} width={"full"} justifyContent={"space-evenly"} marginTop={"5rem"}>
            <Stack sx={{ backgroundColor: 'lightblue', width: 500, height: 300, boxShadow: 5, borderRadius: 2 }}>
              <h1 className="text-center font-bold text-xl">Zone Report</h1>
              <GridDemo />
            </Stack>
            <Stack sx={{ backgroundColor: 'lightblue', width: 500, height: 300, boxShadow: 5, borderRadius: 2 }}>
              <h1 className="text-center font-bold text-xl">Everyday Report</h1>
              <BasicBars />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default DashBoard;
