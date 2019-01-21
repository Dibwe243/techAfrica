function display(){
    fetch('http://localhost:5955/user/display')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames =>{
var entryName = "<tr><th>Date Submitted</th> <th>Country</th> <th>Organisation</th> <th>Accept</th><th>Rejected</th></tr>"
  entryName += userNames.map(data=>`<tr> <td>${data.datesubmitted}</td>
    <td> ${data.country}</td>
    ${data.organisationemail}
    <td> ${data.organisationame}</td> ${data.id}
    <td><button class="accept" onclick="UpdateApprove(${data.id})">Accept</button> </td>
    <td> <button class="reject" onclick="UpdateReject(${data.id})">Reject</button><br></td></tr>`).join('')
document.getElementById("entry").innerHTML = entryName;

});
}

function pending(){
    fetch('http://localhost:5955/user/pending')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames =>{
  var entryName ="<tr><th>Date Submitted</th> <th>Country</th> <th>Organisation</th> <th>Accept</th><th>Rejected</th></tr>"
entryName += userNames.map(data=>`<tr><td>${data.datesubmitted}</td>
  <td> ${data.country}</td>
  ${data.organisationemail}
  <td> ${data.organisationame}</td>${data.id}
  <td> <button onclick="UpdateApprove(${data.id})">Accept</button></td>
  <td> <button onclick="UpdateReject(${data.id})">Reject</button><br><td></tr>`).join('')
document.getElementById("entry").innerHTML = entryName;
});
}

function approved(){
    fetch('http://localhost:5955/user/approved')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames =>{
  var entryName = "<tr><th>Date Submitted</th> <th>Country</th> <th>Organisation</th> <th>Reject</th></tr>"
entryName += userNames.map(data=>`<tr><td>${data.datesubmitted} </td>
  <td>${data.country}</td>
  ${data.organisationemail}
  <td>${data.organisationame} </td>

  <td> <button onclick="UpdateReject(${data.id})">Reject</button><br></td></tr>`).join('')
   document.getElementById("entry").innerHTML = entryName;
});
}

function rejected(){
    fetch('http://localhost:5955/user/rejected')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => {
var entryName = "<tr><th>Date Submitted</th> <th>Country</th> <th>Organisation</th> <th>Accept</th></tr>"
entryName += userNames.map(data=>`<tr><td>${data.datesubmitted} </td>
  <td>${data.country}</td>
   ${data.organisationemail}
   <td>${data.organisationame}</td>
    <td><button onclick="UpdateApprove(${data.id})">Accept</button>  <br></td></tr>`).join('')
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
}
