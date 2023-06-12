import { useState } from "react";
import "./user.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Cycleedit = () => {

  const [cm, setCm] = useState("");
  const [pm, setPm] = useState("");
  const nav = useNavigate();
  const [error, setError] = useState("");


  const handleEdit = async (e) => {
    console.log(cm);
    console.log(pm);
    e.preventDefault();
      try {
        const response = await axios.put(`http://localhost:8080/editbook?price=${pm}&cmodel=${cm}`,{cmodel: cm,
        price: pm}
         );
        console.log(cm + pm);
        console.log(cm);
        console.log(pm);
        console.log(response.data);
        if (response.data === "cycle edited") {
          alert("cycle edited");
          nav("/home");
        }
      } catch (error) {
        console.log(error);
      }
   
  };


  return (
    <div className="bodylgn1">
      <div className="bodylgn">
        <div className="containerlgn">
          <center className="lgn-font">Edit Cycle</center>
          <form onSubmit={handleEdit}>
            <div className="inputlgn">
              <span>
                <label htmlFor="password">Cycle Model</label>
              </span>
              <br />
              <input type="text" id="password" onChange={(e) => setCm(e.target.value)}  />
              <br />
            </div>
            <div className="inputlgn">
              <span>
                <label htmlFor="password">Price</label>
              </span>
              <br />
              <input type="text" id="word" onChange={(e) => setPm(e.target.value)} />
              <br />
            </div>
           
            <br />
            <div className="btnlgn">
              <center>
                <button>Update</button>
              </center>
              {error && <center>{error}</center>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cycleedit;