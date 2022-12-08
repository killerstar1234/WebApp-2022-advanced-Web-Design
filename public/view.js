

function givePerms() {
    $('#res').empty();

let listOfEmail = [];

const emails = document.querySelectorAll('input[name="email"]:checked');

        $('#res').append("Added to database");


emails.forEach(email => {
    fetch(`http://localhost:3000/admin/givePerms?arr=${email.value}`, {
        method: 'GET'
    }).catch(err => {
        if(err) {
            console.log('err');
        }
    })

})



}

function takePerms() {
// Take Perms function
$('#res').empty();
    const emails = document.querySelectorAll('input[name="teacher"]:checked');
$('#res').append('Deleted From Database')

    emails.forEach(email => {
        fetch(`http://localhost:3000/admin/takePerms?email=${email.value}`).catch(err => {
            if(err) {
                console.log(err);
            }
        })
    })

}