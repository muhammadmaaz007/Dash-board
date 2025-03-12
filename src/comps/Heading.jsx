import React from 'react'

const Heading = () => {

  const currentTime = new Date().toLocaleTimeString();

  return (

    <div className=" flex justify-between p-6">
    <div className="flex gap-2">
      <h1 className=" font-light text-3xl ">DashBoard</h1>
      <h1 className="text-3xl font-light">I</h1>
    </div>
    <div className=" bg-blue-400 rounded-lg px-2 py-4">{currentTime}</div>
  </div>
  )
}

export default Heading