/* 
Activity: Contact manager
*/

// TODO: Complete the program

var Person = {
    firstName: "",
    lastName: ""
};

var personArray = [];
var contactListItem = $("#contactList");

// Prints every contact added on page and in console 
function listContacts () {
    if(personArray.length == 0) {
        
        //Clears #contactList
        contactListItem.empty();
        console.clear();

        console.log("There are no contacts");
        contactListItem.append (
            '<div class = "d-block my-4 p-4 border rounded shadow-sm">' +
            '<h4> There are no contacts added </h4>'
        )
    }
    else {
        
        //Clears #contactList
        contactListItem.empty();

        //Prints every Object as contact
        for(i = 0; i < personArray.length; i++) {
            console.log("Last Name: " + personArray[i].lastName + ", First Name: " + personArray[i].firstName);
            contactListItem.append (
                '<div class = "d-block my-4 p-4 border rounded shadow-sm">' +
                '<h4>' + personArray[i].firstName + ' ' + personArray[i].lastName+ '</h4>'
            )
        }
    }
}

//Adds new Contact and prints info in console
function addContact () {
    var firstName = $("#contactFirstName").val();
    var lastName = $("#contactLastName").val();
    var thisPerson = Object.create(Person);
    thisPerson.firstName = firstName;
    thisPerson.lastName = lastName;
    personArray.push(thisPerson);
    
    // Add contact right after input

    /*contactListItem.prepend (
        '<div class = "d-block my-4 p-4 border rounded shadow-sm">' +
        '<h4>' + firstName + ' ' + lastName+ '</h4>'
    )*/

    // Logs input in console
    console.log("Last Name: " + lastName + ", First Name: " + firstName);
    
}

//Clears console, page list and array
function quit() {
    console.clear();
    contactListItem.empty()
    personArray = [];
}

//Reset Form
function formReset () {
    $("#contactFirstName").val('');
    $("#contactLastName").val('');
}
