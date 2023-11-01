
fetch('contacts.json')
.then(response => response.json())
.then(data => {
    var table = document.getElementById('contactsTable');
    for (var i = 0; i < Object.keys(data.SURNAME).length; i++) {
        var row = table.insertRow(-1);
        
        var cellTitle = row.insertCell(-1);
        cellTitle.innerHTML = data.TITLE[i];
        
        var cellFirstName = row.insertCell(-1);
        cellFirstName.innerHTML = data.FIRSTNAME[i];
        
        var cellSurname = row.insertCell(-1);
        cellSurname.innerHTML = data.SURNAME[i];
        
        var cellJobTitle = row.insertCell(-1);
        cellJobTitle.innerHTML = data.JOBTITLE[i];
        
        var cellExtension = row.insertCell(-1);
        cellExtension.innerHTML = data.EXTENSION[i];
        
        var cellEmail = row.insertCell(-1);
        cellEmail.innerHTML = data["E-MAIL ADDRESS"][i] ? data["E-MAIL ADDRESS"][i] : 'N/A';
        
        var cellInstitute = row.insertCell(-1);
        cellInstitute.innerHTML = data.INSTITUTE[i];
        
        var cellUpdate = row.insertCell(-1);
        var dateUpdate = new Date(data.UPDATE[i]);
        cellUpdate.innerHTML = dateUpdate.toDateString();
    }
})
.catch(error => console.error('Error:', error));