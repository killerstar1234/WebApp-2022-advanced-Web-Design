

function givePerms() {

let listOfEmail = [];

const emails = document.querySelectorAll('input[name="email"]:checked');



emails.forEach(email => {

    fetch(`http://localhost:3000/admin/givePerms?arr=${email.value}`, {
        method: 'GET'
    }).then((req) => {



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