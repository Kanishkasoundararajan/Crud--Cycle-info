import { useState } from "react";
import "./user.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Acycle = () => {

  const [cm,setCm] = useState("");
  const [pm,setPm] = useState("");
  const navigate = useNavigate();


  const handleCycle = async (e) =>{
    e.preventDefault();
      const data={
        cmodel:cm,
        price:pm
      };
      try{
        const response = await axios.post("http://localhost:8080/regg",data);
        console.log(response.data);
        alert("cycle added successfully");
        navigate("/home");
      }
      catch(error){
        console.groupCollapsed(error);
      }
  }

  return (
    <div class="bodylgn1">
      <div class="bodylgn">
        <div class="containerlgn">
          <center class="lgn-font">Add Cycle</center>
          <form onSubmit={handleCycle}>
            <div class="inputlgn">
              <span>
                <label for="username">Cycle Model</label>
              </span>
              <br></br>
              <input type="text" id="username" onChange={(e)=>{setCm(e.target.value)}}></input>
            </div>
            <div class="inputlgn">
              <span>
                <label for="password">Price</label>
              </span>
              <br></br>
              <input type="text" id="password" onChange={(e)=>{setPm(e.target.value)}}></input>
              <br></br>
            </div>
            <div class="btnlgn">
              <center>
                  <button>Add</button>
              </center>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Acycle;