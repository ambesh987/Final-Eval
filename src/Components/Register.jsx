import React, { useState } from "react";



const Register = () => {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "",
  });
  let handleChange = (e) => {
    let { value, name } = e.target;
    setData((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };
  const [showLogin, setShowLogin] = useState(true);
  function GetResponse() {
    fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        res.message == "Registration Success" &&
          alert("Sucessfull") &&
          navigator("/login");
      });
  }

  return (
    <div>
      <h3>Register</h3>
      <input
        name="name"
        type="text"
        value={data.name}
        placeholder="Enter Name"
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        name="email"
        type="email"
        value={data.email}
        placeholder="Enter Email"
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        name="mobile"
        type="text"
        value={data.mobile}
        placeholder="Enter Phone no."
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        name="username"
        type="text"
        value={data.username}
        placeholder="Enter UserName"
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        name="password"
        type="password"
        value={data.password}
        placeholder="Enter Password"
        onChange={handleChange}
      />
      <br />
      <br />
     
      <button onClick={GetResponse}>Register</button>
    </div>
  );
};
export default Register;