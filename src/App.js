import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios'

function App() {

const [ID, setID]= useState('')
const[Name, setName] = useState('')
const[Document, setDocument] = useState('')
const Submit =()=>{
   Axios.post("http://localhost:3002/api/insert" , {
     ID: ID,
      Name: Name, 
      Document: Document
    }).then(()=>{
      alert("sucessfull Insert")
    });
};

  return (<>
    <div className="head"><h2>Rannlab Technology</h2></div>

    <div className="input">
    <input type="text" className="form-control1" placeholder="ID *" onChange={(e)=>{setID(e.target.value)}} />
    <input type="text" className="form-control2" placeholder="Name *" onChange={(e)=>{setName(e.target.value)}} />
    <input type="text" className="form-control3" placeholder="Document *" onChange={(e)=>{setDocument(e.target.value)}} />
    <button onClick={Submit} className="btnRegister">Submit</button>

    </div>
    </>
  );
}

export default App;
