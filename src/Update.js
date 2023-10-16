import { useState,useEffect,useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Update(){

const loc=useLocation();
const [rno,setRno] = useState("");
const [name,setName] = useState("");
const [marks,setMarks] = useState("");

const rRno = useRef();

const hRno = (event) => {setRno(event.target.value);}
const hName = (event) => {setName(event.target.value);}
const hMarks = (event) => {setMarks(event.target.value);}

useEffect( () => {
setRno(loc.state.i);
setName(loc.state.n);
setMarks(loc.state.m);
},[]);

const save = (event) => {
event.preventDefault();
let data = {rno,name,marks};
let urladd = "http://localhost:9000/modify";
axios.put(urladd,data)
.then(res=>{
alert("Record updated");
setRno("");
setName("");
setMarks("");
})
.catch(err=> console.log(err));

}


return(
<>
<h1>Update Student</h1>
<form onSubmit={save} >
<input type="number" placeholder={rno} onChange={hRno} value={rno} disabled={true}/><br/><br/>
<input type="text" placeholder="Enter Name " onChange={hName} value={name} /><br/><br/>
<input type="number" placeholder="Enter marks " onChange={hMarks} value={marks} /><br/><br/>
<input type="submit" value="Save" /><br/><br/>
</form>
<h2></h2>
</>
);


}