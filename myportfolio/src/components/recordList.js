import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.record.email}</td>
   <td>{props.record.password}</td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/user/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
//  // This method will delete a record
//  async function deleteRecord(id) {
//    await fetch(`http://localhost:5000/${id}`, {
//      method: "DELETE"
//    });
 
//    const newRecords = records.filter((el) => el._id !== id);
//    setRecords(newRecords);
//  }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Email</th>
           <th>Password</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}

