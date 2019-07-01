const url = './data_melp.json';
fetch(url)
    .then(response => response.json())
    .then(json => {
        const data2 = json.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            } else {
                return -1
            }
        }); 
        localStorage.setItem('data', JSON.stringify(data2));
        printData(data2);
    })
    .catch(err => (err))

var map; 
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 19.442486911665654,
            lng: -99.12383325991955
        },
        zoom: 12,
    });
    
var marker = new google.maps.Marker({
    position: {
        lat: 19.442486911665654,
        lng: -99.12383325991955
    },
    map: map
});  
};


const summary = document.getElementById('summary');

const printData = (newData) => {
    summary.innerHTML = ""; 
    newData.forEach(element => {
    const result = `<div class="element-box">
    <div class="restaurant">${element.name}</div>
    <div class="info">
    <p>${element.address.state}</p>
    <p>${element.address.city}</p>
    <p>Rating: ${element.rating}</p>
    </div>
    </div>`;
    summary.insertAdjacentHTML("beforeend", result);
});
}

const search = document.getElementById('search'); 
search.addEventListener('keyup', ()=>{
    let name = search.value;
    const newData = JSON.parse(localStorage.getItem('data'));
    let filtered = window.data.filterByName(newData, name); 
    console.log(filtered); 
    if (name == "") {
        console.log('algo')
        printData(newData);
      } else {
          console.log('otra cosa')
        printData(filtered);
      }
    console.log(name);
})
