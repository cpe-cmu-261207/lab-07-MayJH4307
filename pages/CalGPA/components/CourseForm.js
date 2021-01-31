import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useReducer, useState } from "react";
import { sample } from "..";

const CourseForm = () => {
  const addCourse = useContext(sample)
  const [state,dispatch] = useReducer((prevstate,action) => {
    switch(action.type){
      case 'setname' :
        return {...prevstate,name : action.value}
      case 'setgrd' :
        return {...prevstate,grd : action.value}
      case 'setcrd' :
        return {...prevstate,crd : action.value}
      default : throw new Error();
    }
  },{name:"",grd:"A",crd:"1"})

  return (
    <div id="form">
       <form onSubmit ={
          e => {e.preventDefault();
           addCourse(state)
           document.getElementById('in').value =''
           }}>
             <table  style={{margin: "auto"}}>
               <tr>
                  <td>
                  CREDIT : 
                  <select className = "bg-blue-100 rounded-3xl p-1  hover:bg-red-200" onChange = { e =>
                  dispatch({type : 'setcrd',value : e.currentTarget.value})
                  }>
                  {CREDITS.map(item => {
                    return <option value={item}>{item}</option>
                  })}
                </select>     
                  </td>
                  <td>
                  GRADE : 
                  <select className = "bg-blue-100 rounded-3xl p-1  hover:bg-red-200" onChange = { e => 
                  dispatch({type : 'setgrd',value : e.currentTarget.value})
                  }>
                  {GRADES.map(item => {
                    return <option value={item.name}>{item.name}</option>
                  })}
                </select>    
                  </td>
                  <td>
                  ID :
                  <input id="in" type="text" onChange = { e =>
                  dispatch({type : 'setname',value : e.currentTarget.value})
                  }/>
                  </td>
                  <td><button className = "bg-red-500 rounded-3xl p-1  hover:bg-red-200" type="submit">+</button></td> 
                  </tr>
             </table>
       </form>
    </div>
  );
};

export default CourseForm;