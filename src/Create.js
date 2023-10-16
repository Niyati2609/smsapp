import { useState } from "react";
import axios from "axios";

export default function Create(){
const [rno,setRno] = useState("");
const [name,setName] = useState("");
const [marks,setMarks] = useState("");

const hRno = (event) => {setRno(event.target.value);}
const hName = (event) => {setName(event.target.value);}
const hMarks = (event) => {setMarks(event.target.value);}

const save = (event) => {
event.preventDefault();
let data = {rno,name,marks};
let urladd = "http://localhost:9000/save";
axios.post(urladd,data)
.then(res=>{
if(res.data.insertedId==rno){
alert("Record created");
setRno("");
setName("");
setMarks("");
}
else{
alert(" already exists" );
setRno("");
setName("");
setMarks("");
}
})
.catch(err=> console.log(err));

}


return(
<>
<h1>Create Student</h1>
<form onSubmit={save} >
<input type="number" placeholder="Enter Roll no. " onChange={hRno} value={rno} /><br/><br/>
<input type="text" placeholder="Enter Name " onChange={hName} value={name} /><br/><br/>
<input type="number" placeholder="Enter marks " onChange={hMarks} value={marks} /><br/><br/>
<input type="submit" value="Save" /><br/><br/>
</form>
<h2></h2>
</>
);


}