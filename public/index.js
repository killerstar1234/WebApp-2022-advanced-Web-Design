$(document).ready(() => {
        
    $('#findHelp').click(() => {

        $('#results').empty();

        const catigory = document.getElementById('select').value;

        fetch(`http://localhost:3000/user/quick?subject=${catigory.toLowerCase()}`).then(data => {
            return data.json();
        }).then(res => {

            if(res) {

                // Code Here
                res.forEach(obj => {
                    $('#results').append(`<p><b>${obj.firstName}</b> helps in <b>${obj.subject}</b>, contact - <b>${obj.email}</b></p>`)
                })

            } else {

                $('#results').append('<h4>No One Was Found</h4>')

            }

        })

    })


})