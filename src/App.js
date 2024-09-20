import Home from "./Home";
import Car from "./car";
import Plane from "./plane";
import { useState } from "react";



const App = () =>{
  const mains = [1,2,3,4];
  const [currentMain,setCurrentMain]=useState(3);
  const handleMainClick =(main)=>{
    setCurrentMain(main);
  };
  const MainContent = ({main})=>{
    switch (main){
      case 1:
        return <Home></Home>;
      case 2:
        return <Car></Car>;
      case 3:
        return <Plane></Plane>;
      default:
        return null;
    }
  }
  return (
    <div className="app">
      {mains.map((main)=>(
        <button onClick={()=>{
          handleMainClick(main);
        }}
        className={currentMain == main ?"active-btn":"inactive-btn"} 
        >Main {main}</button>
      ))}
      <MainContent main={currentMain}></MainContent>
      <style jsx>{`
      .app{
      text-align: center;
      }
      // button{
          
      //     }
        // .active-btn{
        // background-color:skyblue;
        // border-radius:20px;
        // box-shadow:5px 5px rgba(0,0,0,0.3);
        // padding:10px 20px;
        // margin:10px;
        // font-size:15px;
        // color:white;
        // border:none;
        // border-redius:5px;
        // cursor:pointer;
        // transition:background-color 0.3s;
        // }
        // .inactive-btn{
        // background-color:darkblue;
        // border-radius:20px;
        //   box-shadow:5px 5px rgba(0,0,0,0.3);
        //   padding:10px 20px;
        //   margin:10px;
        //   font-size:15px;
        //   color:white;
        //   border:none;
        //   border-redius:5px;
        //   cursor:pointer;
        //   transition:background-color 0.3s;
        // }
        // .lp{
        // background-color:brown;
        //         border-radius:20px;
        //         box-shadow:5px 5px rgba(0,0,0,0.3);
        //         padding:10px 20px;
        //         margin:5px;
        //         font-size:15px;
        //         color:white;
        //         border:none;
        //         cursor:pointer;
        //         transition:background-color 0.3s;
        // }
      `}

      </style>
      <p>{currentMain}</p>
    </div>
  );
};
export default App;
