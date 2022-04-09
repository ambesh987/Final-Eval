import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Employee = () => {
  let Div =styled.div`
  margin-top:10px;
  // border:1px solid blue;
  border-radius:2%;
  background-color:lavender;
  width:25%;
  margin-left:35%;
  padding:50px;
  // height:150px;
  // margin:auto;
  display:flex;
  justify-content:center;
  gap:10px;


  `
  let P=styled.p`
  font-size:25px;
  color:blue;`
  let [dataArray, setDataArray] = React.useState([]);
  React.useEffect(() => {
    getData();
  }, []);
  function getData() {
    fetch(`http://localhost:3004/Employee`)
      .then((res) => res.json())
      .then((res) => setDataArray(res))

      .catch((err) => console.log(err));
  }
  var showData = "";
  var displayData = (arr) => {
    showData = arr.map((old) => {
      return (
        <>
        <Div key={old.id}>
            <div>Employee-Id: {old.id}</div><br />
          <div>Name: {old.name}</div> <br />
          <div>Age: {old.age}</div> <br />
          <div> Gender: {old.gender}</div>
          <div>Department: {old.department}</div>
          <div> Salary: {old.salary}</div>
          
          <br />
          
        </Div>
        <Link to="/Employee/id"> <button>View Details</button></Link> 
        &nbsp;
        <button>Edit Details</button>
        </>
      );
    });
  };
  displayData(dataArray);
  return (
    <>
    
    <div>{showData}</div>
    </>
  )
}

export default Employee