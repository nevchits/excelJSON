function filterTable() {
    var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("searchInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("contactsTable");
          tr = table.getElementsByTagName("tr");
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1]; // Get the second column (First Name)
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }       
          }
  }
  
  function createSipLink(extension) {
    return extension ? `<a href="sip:${extension}">${extension}</a>` : 'N/A';
  }
  
  function createMailtoLink(email) {
    return email ? `<a href="mailto:${email}">${email}</a>` : 'N/A';
  }
  
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  function editRow(i) {
    // This function will be called when the "Edit" button is clicked.
    // You can add code here to update the modal's content based on the row's data,
    // and then display the modal.
    
    document.getElementById("modalText").innerHTML = "Editing row " + i;
    
    modal.style.display = "block";
  }
  
  function hideRow(i) {
    // This function will be called when the "Hide" button is clicked.
    
    var table = document.getElementById('contactsTable');
    
    table.rows[i+1].style.display = 'none'; // i+1 because table header is also a row
  }
  
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
                cellExtension.innerHTML = createSipLink(data.EXTENSION[i]);
                
                var cellEmail = row.insertCell(-1);
                cellEmail.innerHTML = createMailtoLink(data["E-MAIL ADDRESS"][i]);
                
                var cellInstitute = row.insertCell(-1);
                cellInstitute.innerHTML = data.INSTITUTE[i];
                
                var cellUpdate = row.insertCell(-1);
                var dateUpdate = new Date(data.UPDATE[i]);
                cellUpdate.innerHTML = dateUpdate.toDateString();
          
          var cellActions = row.insertCell(-1);
          cellActions.innerHTML = '<button onclick="editRow(' + i + ')">Edit</button>' +
                                  '<button onclick="hideRow(' + i + ')">Hide</button>';
      }
  })
  .catch(error => console.error('Error:', error));
  