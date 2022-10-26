$(document).ready(() => {

    $('#search').click(() => {
        $('#results').empty();
        const catigory = document.getElementById('select').value;

        if(catigory === 'Art') {
            $('#results').append(`
            <h3>
            Art
            </h3>
    <select id='subject'>
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
    <button id = 'findHelp' onclick = 'findHelp()'>Find Help</button>
    `)
        }

    if(catigory === 'Buisness') {
    
        $('#results').append(`
        <h3>
        Buisness
        </h3>
        <select id='subject'>
          <option>Introduction to Business</option>
          <option>Tech Edge</option>
          <option>Accounting 1</option>
          <option>*Honors College Accounting</option>
          <option>Marketing</option>
          <option>Advertising</option>
          <option>Business Law</option>
          <option>International Business</option>
          <option>Computer Programming 1</option>
          <option>Computer Programming 2</option>
          <opiton>game Design</opiton>
          <option>Quant. Literacy w Statistics</option>
          <option>*Honors Precalculus</option>
          <option>*AP Calculus AB</option>
          <option>*AP Caluclus BC</option>
          <option>*Multivariable Calculus</option>
          <option>*Differential Equations</option>
          <option>*AP Statistics</option>
          <option>Web Page Design</option>
          <option>Advanced Web Page Design</option>
          <option>*AP Computer Science A</option>
          <option>*Software Engineering 1</option>
          <option>*Software Engineering 2</option>
          <option>Consumer Economics</option>
        </select>
        <button id = 'findHelp' onclick = 'findHelp()'>Find Help</button>

    `)

    }

    if(catigory === 'Music') {
        $('#results').append(`
        <h3>
    Music
    </h3>
    <select id='subject'>
      <option>Band</option>
      <option>Intermediate Band</option>
      <option>Intermediate/Advanced Band</option>
      <option>Advanced Band</option>
      <option>Intro to Orchesta</option>
      <option>Intermediate Orchesta</option>
      <option>Inter/Advanced Orchestra</option>
      <option>Advanced Orchestra</option>
      <option>Advanced Female Choir</option>
      <option>Introduction to Mixed Choir</option>
      <option>Intermediate Mixed Choir</option>
      <option>Adcanved Mixed Choir</option>
      <option>*AP Music Theory</option>
      <option>Music Production 1</option>
      <option>Music Production 2</option>
      <option>*Fine Arts Capstone</option>
    </select>
    <button id = 'findHelp' onclick = 'findHelp()'>Find Help</button>

        `)
    }

    if(catigory === 'Physical Eduction') {
        $('#results').append(`
        <h3>
        Physical Eduction
        </h3>
        <select id='subject'>
          <option>PE 1</option>
          <option>PE 2</option>
          <option>PE Leadership</option>
          <option>CompetitiveTeam Sports</option>
          <option>Studio Fitness Mind and Body</option>
          <option>Self Defense</option>
          <option>Lifetime Activies and Fitness</option>
          <option>Adventure 1</option>
          <option>Adventure 2</option>
          <option>Strength and Performace</option>
          <option>Senior Wellness</option>
          <option>PE fitness</option>
          <option>PE Leader Training</option>
          <option>PE Leader</option>
          <option>Sports Medicine 1</option>
          <option>Sports Medicine 2</option>
          <option>Lifeguard Training</option>
          <option>Adapted PE Leaders</option>
        </select>
        <button id = 'findHelp' onclick = 'findHelp()'>Find Help</button>

        `)
    }

    if(catigory === 'Communication Arts') {
        $('#results').append(`
        <h3>
        Communication Arts
        </h3>
        <select id='subject'>
          <option>English 1</option>
          <option>*Honors English 1</option>
          <option>English 2</option>
          <option>*Honors English 2</option>
          <option>English 2 - Journalism</option>
          <option>*Honors English 2 - Journalism</option>
          <option>Journalism</option>
          <option>Speech Communication</option>
          <option>English 3</option>
          <option>*Honors English 3</option>
          <option>American Studies</option>
          <option>*AP Language and Comp</option>
          <option>Writing Styles and Forms</option>
          <option>Senior Rhetoric</option>
          <option>*Honors Senior Rhetoric</option>
          <option>Creative Writing</option>
          <option>20th Century Literature</option>
          <option>*English Literature</option>
          <option>Traitons in Communications</option>
          <option>*Themes in Western Lit and Art</option>
          <option>Special ATopics in Literature</option>
          <option>World Literature</option>
          <option>*AP Literature and Comp</option>
          <option>Advanced Speech</option>
          <option>Mass Media</option>
          <option>Film as Literature</option>
          <option>Newspaper Production</option>
          <option>Academic Reading</option>
        </select>
        <button id = 'findHelp' onclick = 'findHelp()'>Find Help</button>

        `)
    }

    if(catigory === 'Science') {
        $('#results').append(`
        <h3>Science</h3>
    <select id='subject'>
      <option>Food Science</option>
      <option>Veterinary Science</option>
      <option>Principles of Biology/Chemistry</option>
      <option>Chemistry</option>
      <option>*Honors Chemistry</option>
      <option>Biology</option>
      <option>*Honors Biology</option>
      <option>Physics</option>
      <option>*AP Physics 1</option>
      <option>Anatomy and Phyisology</option>
      <option>*Biotechnology</option>
      <option>Earth Science</option>
      <option>*AP Biology</option>
      <option>*AP Chemistry</option>
      <option>*AP Physics C</option>
      <option>Research and Design</option>
    </select>
    <button id = 'findHelp' onclick = 'findHelp()'>Find Help</button>

        `)
    }

    if(catigory === 'Social Studies') {
        $('#results').append(`
        <h3>Social Studies</h3>
        <select id='subject'>
          <option>World Cultures</option>
          <option>Comparative Religions</option>
          <option>*AP Human Geography</option>
          <option>World History</option>
          <option>20th Century History</option>
          <option>*AP World History</option>
          <option>*AP European History</option>
          <option>* Humanities 1</option>
          <option>* Humanities 2</option>
          <option>*Military History</option>
          <option>US History</option>
          <option>*AP US History</option>
          <option>American Studies</option>
          <option>American Goverment</option>
          <option>*AP US Goverment/Politics</option>
          <option>*AP Comparative Gov/Politics</option>
          <option>Legal Issues in Amer Society</option>
          <option>Culinary Arts and Nutrition 1</option>
          <option>Culinary Arts and Nutrition 2</option>
          <option>Culinary Arts and Nutrition 3</option>
          <option>Senoir Foods</option>
          <option>Interior Design</option>
          <option>Human Growth and Develop</option>
          <option>Into to Teaching</option>
        </select>
        <button id = 'findHelp' onclick = 'findHelp()'>Find Help</button>

        `)
    }

    if(catigory === 'Tech and Engineering Education') {
        $('#results').append(`
        <h3>Tech and Engineering Education</h3>
        <select id='subject'>
          <option>Plant Science</option>
          <option>Food Science</option>
          <option>Compainion Animal Science</option>
          <option>Graphics 1</option>
          <option>Graphics 2</option>
          <option>Graphics 3</option>
          <option>Electronics</option>
          <option>Info Tech Systems 1</option>
          <option>Info Tech Systems 2</option>
          <option>Woodshop Elements</option>
          <option>Woodshop Students</option>
          <option>Geo in Constuction</option>
          <option>Drafting Studio 1</option>
          <option>Drafting Studio 2</option>
          <option>Engineering Design Studio</option>
          <option>Research and Design</option>
          <option>Auto Engineering</option>
        </select>
        <button id = 'findHelp' onclick = 'findHelp()'>Find Help</button>


        `)
    }

    })

})

function findHelp() {

    const catigory = document.getElementById('subject').value;

    $('#subjectResults').empty();
    $('#subjectResults').append('<h3>Loading...</h3>')


    fetch(`http://localhost:3000/user/quick?subject=${catigory.toLowerCase()}`).then(data => {
        return data.json();
    }).then(res => {
        $('#subjectResults').empty();
        if(res) {

            // Code Here
            res.forEach(obj => {
                $('#subjectResults').append(`<p><b>${obj.firstName}</b> helps in <b>${obj.subject}</b>, contact - <b>${obj.email}</b></p>`)
            })

        } else {
            $('#subjectResults').empty();
            $('#subjectResults').append('<h4>No One Was Found</h4>')

        }

    })

}