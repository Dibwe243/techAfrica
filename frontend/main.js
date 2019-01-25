//admin page
function display(){
    fetch('http://localhost:5955/user/display')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML =
userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail}
  ${data.organisationame} ${data.feature} ${data.feature} ${data.id}
   <button onclick="UpdateApprove(${data.id})">Accept</button>
   <button onclick="UpdateReject(${data.id})">Reject</button><br>`).join(''));
}


function pending(){
    fetch('http://localhost:5955/user/pending')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML =
userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail}
   ${data.organisationame} ${data.feature} ${data.feature}
    <button onclick="UpdateApprove(${data.id})">Accept</button>
     <button onclick="UpdateReject(${data.id})">Reject</button><br>`).join(''));
}

function approved(){
    fetch('http://localhost:5955/user/approved')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML =
userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail}
  ${data.organisationame} ${data.feature} ${data.feature}
  <button onclick="UpdateReject(${data.id})">Reject</button><br>`).join(''));
}

function rejected(){
    fetch('http://localhost:5955/user/rejected')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML =
userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail}
  ${data.organisationame} ${data.feature} ${data.feature}
  <button onclick="UpdateApprove(${data.id})">Accept</button>  <br>`).join(''));
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// public page
function viewAll(){
    fetch('http://localhost:5955/user/approved')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML =
userNames.map(data => `<li onclick= 'displayData("${data._id}")'>
<button id="" class="accordion text-uppercase">
<i class="fa fa-angle-double-down icon" style="color:white;"></i>${data.organisationame}</button>
<span class="organisationData" id='${data._id}'>
<p>Organisation: ${data.organisationame}</p>
<p>Country: ${data.country}</p>
<p>Courses: ${data.coursesoffered}</p>
<p>Type: ${data.features} </p>
<p>Contact: ${data.organisationemail}</p>
<p>Website: <a href="${data.website}" target="_blank">visit website</a></p> </span></li>`).join(''));
}

function country(country){
  const myPost = { };
  myPost.country = country;
  const options = {
    method: 'POST',
    body: JSON.stringify(myPost),
    headers: {
      'Content-Type': 'application/json'
    }
  };

    fetch('http://localhost:5955/user/country', options)
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML =
userNames.map(data => `<li onclick= 'displayData("${data._id}")'>
<button id="" class="accordion text-uppercase">
<i class="fa fa-angle-double-down icon" style="color:white;"></i>${data.organisationame}</button>
<span class="organisationData" id='${data._id}'>
<p>Organisation: ${data.organisationame}</p>
<p>Country: ${data.country}</p>
<p>Courses: ${data.coursesoffered}</p>
<p>Type: ${data.features} </p>
<p>Contact: ${data.organisationemail}</p>
<p>Website: <a href="${data.website}" target="_blank">visit website</a></p> </span></li>`).join(''));
}

function displayCountry(){
    fetch('http://localhost:5955/user/display')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => {
   var myCountries = [];
   for(var i=0; i<userNames.length; i++){
     if (!myCountries.includes(userNames[i].country) ){
       myCountries.push(userNames[i].country);
     }
   }
    document.getElementById("countries").innerHTML =
    `<li ><button class="btn btn-default btn-info" onclick='viewAll()'>View all</button></li> `+ myCountries.map(data=>`<li >
      <button class="btn btn-default btn-info" onclick='country("${data}")'>${data}</button></li>`).join('');
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
