function display(){
    fetch('http://localhost:5955/user/display')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML = userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail} ${data.organisationame} ${data.feature} ${data.feature} ${data.id} <button onclick="UpdateApprove(${data.id})">Accept</button>  <button onclick="UpdateReject(${data.id})">Reject</button><br>`).join(''));
}


function pending(){
    fetch('http://localhost:5955/user/pending')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML = userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail} ${data.organisationame} ${data.feature} ${data.feature} <button onclick="UpdateApprove(${data.id})">Accept</button>  <button onclick="UpdateReject(${data.id})">Reject</button><br>`).join(''));
}

function approved(){
    fetch('http://localhost:5955/user/approved')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML = userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail} ${data.organisationame} ${data.feature} ${data.feature} <button onclick="UpdateReject(${data.id})">Reject</button><br>`).join(''));
}

function rejected(){
    fetch('http://localhost:5955/user/rejected')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML = userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail} ${data.organisationame} ${data.feature} ${data.feature} <button onclick="UpdateApprove(${data.id})">Accept</button>  <br>`).join(''));
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// public page
function viewAll(){
    fetch('http://localhost:5955/user/approved')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML = userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail} ${data.organisationame} ${data.feature} ${data.feature} <br>`).join(''));
}

function southafrica(){
    fetch('http://localhost:5955/user/southafrica')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML = userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail} ${data.organisationame} ${data.feature} ${data.feature} <br>`).join(''));
}

function nigeria(){
    fetch('http://localhost:5955/user/nigeria')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML = userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail} ${data.organisationame} ${data.feature} ${data.feature} <br>`).join(''));
}

function rwanda(){
    fetch('http://localhost:5955/user/rwanda')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML = userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail} ${data.organisationame} ${data.feature} ${data.feature} <br>`).join(''));
}

function ghana(){
    fetch('http://localhost:5955/user/ghana')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML = userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail} ${data.organisationame} ${data.feature} ${data.feature} <br>`).join(''));
}

function malawi(){
    fetch('http://localhost:5955/user/malawi')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML = userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail} ${data.organisationame} ${data.feature} ${data.feature} <br>`).join(''));
}

function mauritius(){
    fetch('http://localhost:5955/user/mauritius')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML = userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail} ${data.organisationame} ${data.feature} ${data.feature} <br>`).join(''));
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
