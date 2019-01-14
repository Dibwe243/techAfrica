function display(){
    fetch('http://localhost:5955/user/display')
    .then(res => res.json())
    .then(res => res.map(user => user))
.then(userNames => document.getElementById("entry").innerHTML = userNames.map(data=>`${data.DateSubmitted} ${data.Country} ${data.OrganisationEmail} ${data.OrganisationName}<br>`).join(''));
}