import { useState, useEffect, React, Component } from "react";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Leave from "./components/Leave";
import CardContainer from "./components/CardContainer";
function App() {
  const [subData, setSubData] = useState([]);
  function click(object) {
    setSubData((prev) => {
      return [...prev, object];
    });
  }

  let headCondition = true;
  let redSubs = [];
  subData.map((item) => {
    const percent = (item.classesAttended / item.totalClasses) * 100;
    const roundedPercent = parseFloat(percent).toFixed(2);
    if (roundedPercent < 75) {
      headCondition = false;
      redSubs.push(item);
    }
  });

  console.log(subData);

    const [index, setIndex] = useState("");

    function deleteHandler(id) {
      setIndex(() => subData.findIndex((obj) => obj.id == id));
      console.log(index);
      // console.log(subData.splice(index, 1));
  //     setSubData(()=>{

  // subData.splice(index, 1)});
    }

  return (
    <div className="w-[100%]  h-[100vh]  ">
      <Navbar onClk={click} />
      {subData.length === 0 ? (
        ""
      ) : (
        <div className="my-8 flex justify-between items-center">
          <Heading condition={headCondition} redSubs={redSubs} />
          <Leave />
        </div>
      )}
      <div className="flex justify-center mt-20 mx-7 ">
        <CardContainer delete={deleteHandler} subData={subData} />
      </div>
    </div>
  );
}

export default App;
