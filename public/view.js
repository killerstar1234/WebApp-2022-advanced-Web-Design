

function givePerms() {

let listOfEmail = [];

const emails = document.querySelectorAll('input[name="email"]:checked');



emails.forEach(email => {
    $('#res').empty();
    fetch(`http://localhost:3000/admin/givePerms?arr=${email.value}`, {
        method: 'GET'
    }).then(() => {

        // The Returned Method from the server, if any
        $('#res').append("Added");

    }).catch(err => {
        if(err) {
            console.log(err);
        }
    })

})



}

function takePerms() {
// Take Perms function

}