$(document).ready(() => {
        
    // $('#findHelp').click(() => {

    //     $('#results').empty();

    //     const catigory = document.getElementById('select').value;

    //     fetch(`http://localhost:3000/user/quick?subject=${catigory.toLowerCase()}`).then(data => {
    //         return data.json();
    //     }).then(res => {

    //         if(res) {

    //             // Code Here
    //             res.forEach(obj => {
    //                 $('#results').append(`<p><b>${obj.firstName}</b> helps in <b>${obj.subject}</b>, contact - <b>${obj.email}</b></p>`)
    //             })

    //         } else {

    //             $('#results').append('<h4>No One Was Found</h4>')

    //         }

    //     })

    // })


    $('#search').click(() => {
        $('#results').empty();
        const catigory = document.getElementById('select').value;

        if(catigory === 'Art') {
            $('#results').append(`
            <h3>
            Art
            </h3>
    <select>
      <option>Drawing 1</option>
      <option>Drawing 2</option>
      <option>Drawing 3</option>
      <option>Drawing 4</option>
      <option>Painting 1</option>
      <option>Painting 2</option>
      <option>Painting 3</option>
      <option>Painting 4</option>
      <option>Ceramics 1</option>
      <option>Ceramics 2</option>
      <option>Ceramics 3</option>
      <option>Ceramics 4</option>
      <option>Jewelry/Metals 1</option>
      <option>Jewelry/Metals 2</option>
      <option>Jewelry/Metals 3</option>
      <option>Jewelry/Metals 4</option>
      <option>Photography 1</option>
      <option>Photography 2</option>
      <option>Photography 3</option>
      <option>Photography 4</option>
      <option>Film And Video Arts 1</option>
      <option>Film And Video Arts 2</option>
      <option>Digital Art 1</option>
      <option>Digital Art 2</option>
      <option>Digital Art 3</option>
      <option>Digital Art 4</option>
      <option>Sculpture 1</option>
      <option>Sculpture 2</option>
      <option>*AP art History</option>
      <option>*AP Studio Art 2D</option>
      <option>*AP Studio Art 2D Design</option>
      <option>*AP Studio Art 3D</option>
      <option>Adapted Art and Design Leaders</option>
    </select>
    `)
        }

        if(catigory === 'Buisness') {
            
        }

    })


})