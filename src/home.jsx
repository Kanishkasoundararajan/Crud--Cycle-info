import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Cycle = () => {

  const [cycledetails, setCycledetails] = useState([]);

  useEffect(() => {
    loadCycleDetails();
  }, []);
  const loadCycleDetails = async () => {
    const result = await axios.get("http://localhost:8080/getcycle");
    setCycledetails(result.data);
    console.log(result.data);
  }

  const deleteCycle = async (e) => {
    const sno = e.target.value;
    await axios.delete("http://localhost:8080/dltcycle/"+ sno);
    loadCycleDetails();
  }

  return (
    <div className="adm-bdy">
      <div className="adm-nav">
      <Link className="n-link" to="/addcycle">
          <button>Add Cycle</button>
        </Link>
        <Link className="n-link" to="/editcycle">
          <button>Edit Cycle</button>
        </Link>
        <Link className="n-link" to="/home1">
          <button>Home</button>
        </Link>
      </div>
      <div className="adm-table1">
        <div className="adm-table">
          <table>
            <tbody>
              <tr>
                <td className="m-head" colSpan="7">CYCLE DETAILS</td>
              </tr>
              <tr>
                <th>S.No</th>
                <th>Cycle Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
              {
                cycledetails && cycledetails.map((cycle, index) => (
                  <tr key={index}>
                     <td>{index + 1}</td> 
                    <td>{cycle.cmodel}</td>
                    <td>{cycle.price}</td> 
        
                    <td><button value={cycle.sno} onClick={(e) => deleteCycle(e)} className="adm-delbtn" title="Delete">Delete</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cycle;