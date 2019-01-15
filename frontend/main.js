function display(){
    fetch('http://localhost:5955/user/pending')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML = userNames.map(data=>`${data.datesubmitted} ${data.country} ${data.organisationemail} ${data.organisationame} ${data.feature} ${data.feature}<br>`).join(''));
} 