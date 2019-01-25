function display(){
    fetch('http://localhost:5955/user/display')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames =>{
var entryName = "<tr><th>No.</th> <th>Date</th> <th>Country</th> <th>Name</th> <th>Website</th> <th>Contact</th> <th>Features</th> <th>Courses</th> <th>Age Group</th> <th>Accept</th><th>Rejected</th></tr>"
  entryName += userNames.map(data=>`<tr>
  <td>${data.id}</td> 
  <td>${data.datesubmitted}</td>
    <td> ${data.country}</td>
    <td>${data.organisationame}</td>
    <td> ${data.website}</td>
    <td> ${data.personscontactemail}</td>
    <td> ${data.features}</td> 
    <td> ${data.coursesoffered}</td>  
    <td> ${data.agegroups}</td>
    <td><button class="acceptButton" onclick="UpdateApprove(${data.id})">Accept</button> </td>
    <td> <button class="rejectButton" onclick="UpdateReject(${data.id})">Reject</button><br></td></tr>`).join('')
document.getElementById("entry").innerHTML = entryName;

});
}

function pending(){
    fetch('http://localhost:5955/user/pending')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames =>{
    var entryName = "<tr><th>No.</th> <th>Date</th> <th>Country</th> <th>Name</th> <th>Website</th> <th>Contact</th> <th>Features</th> <th>Courses</th> <th>Age Group</th> <th>Accept</th><th>Rejected</th></tr>"
    entryName += userNames.map(data=>`<tr>
     <td>${data.id}</td>
     <td>${data.datesubmitted}</td>
      <td> ${data.country}</td>
      <td>${data.organisationame}</td>
      <td> ${data.website}</td>
      <td> ${data.personscontactemail}</td>
      <td> ${data.features}</td> 
      <td> ${data.coursesoffered}</td>  
      <td> ${data.agegroups}</td> 
  <td> <button class="acceptButton" onclick="UpdateApprove(${data.id})">Accept</button></td>
  <td> <button class="rejectButton" onclick="UpdateReject(${data.id})">Reject</button><br><td></tr>`).join('')
document.getElementById("entry").innerHTML = entryName;
});
}

function approved(){
    fetch('http://localhost:5955/user/approved')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames =>{
    var entryName = "<tr><th>No.</th> <th>Date</th> <th>Country</th> <th>Name</th> <th>Website</th> <th>Contact</th> <th>Features</th> <th>Courses</th> <th>Age Group</th> <th>Rejected</th></tr>"
    entryName += userNames.map(data=>`<tr> 
    <td>${data.id}</td>
    <td>${data.datesubmitted}</td>
      <td> ${data.country}</td>
      <td>${data.organisationame}</td>
      <td> ${data.website}</td>
      <td> ${data.personscontactemail}</td>
      <td> ${data.features}</td> 
      <td> ${data.coursesoffered}</td>  
      <td> ${data.agegroups}</td>  
  <td> <button class="rejectButton" onclick="UpdateReject(${data.id}) ">Reject</button><br></td></tr>`).join('')
   document.getElementById("entry").innerHTML = entryName;
});
}

function rejected(){
    fetch('http://localhost:5955/user/rejected')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => {
    var entryName = "<tr><th>No.</th> <th>Date</th> <th>Country</th> <th>Name</th> <th>Website</th> <th>Contact</th> <th>Features</th> <th>Courses</th> <th>Age Group</th> <th>Accept</th></tr>"
    entryName += userNames.map(data=>`<tr> 
    <td>${data.id}</td>
    <td>${data.datesubmitted}</td>
      <td> ${data.country}</td>
      <td>${data.organisationame}</td>
      <td> ${data.website}</td>
      <td> ${data.personscontactemail}</td>
      <td> ${data.features}</td> 
      <td> ${data.coursesoffered}</td>  
      <td> ${data.agegroups}</td> 
    <td><button class="acceptButton" onclick="UpdateApprove(${data.id})">Accept</button>  <br></td></tr>`).join('')
  document.getElementById("entry").innerHTML = entryName;
});
}



function UpdateApprove(id){
    const myPost = { };
        myPost.id = id;
        const options = {
        method: 'POST',
        body: JSON.stringify(myPost),
        headers: {
            'Content-Type': 'application/json'
        }
        };

        fetch('http://localhost:5955/user/UpdateApprove', options)
        .then(res => res.json())
        .then(res => console.log(res));
        alert();
}


function UpdateReject(id){
    const myPost = { };
        myPost.id = id;
        const options = {
        method: 'POST',
        body: JSON.stringify(myPost),
        headers: {
            'Content-Type': 'application/json'
        }
        };

        fetch('http://localhost:5955/user/UpdateReject', options)
        .then(res => res.json())
        .then(res => console.log(res));
        alert();
}

function Refresh(){
    fetch('http://localhost:5955/user/update')
    .then(res => res.json())
    .then(res => res.map(user => user))
    alert();
    refreshPage();
}

function refreshPage(){
    window.location.reload();
    return false;
} 