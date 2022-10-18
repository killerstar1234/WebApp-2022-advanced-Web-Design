// $(document).ready(() => {
    
//     $('body').append('<hr>')
    
//     $('#view').click(() => {

//         $('#results').empty();

//         fetch('http://localhost:3000/api/listOfTeachers').then(data => {
//             return data.json();
//         }).then(res => {

//             res[0].forEach(obj => {
                
//                  $("#results").append(`<div id="${obj.teacherEmail}" ><h3>${obj.teacherName} - ${obj.teacherEmail}</h3></div>`);

//             })

//             res[1].forEach(obj => {
//                 $("div[id='"+obj.teacherEmail+"']").append(`<ul><li><p>${obj.subject}</p></li><ul>`)
//             })


//         })

//     })


// })