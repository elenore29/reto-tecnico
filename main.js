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

var map
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
const locationAddress = document.getElementsByClassName('location'); 

const printData = (newData) => {
    summary.innerHTML = ""; 
    newData.forEach(element => {
        const result = 
        `<div class="element-box">
            <div class="restaurant">${element.name}
                <p>Rating: ${element.rating}</p>
            </div>
            <div class="info">
                <p>Dirección:<p>
                <p>${element.address.state}</p>
                <p>${element.address.city}</p>
                <p>${element.address.street}</p>
                <button id="${element.id}" class="location">Ver en el mapa</button>
            </div>
            <div class="info">
                <p>Telefono: ${element.contact.phone}</p>
                <p>E-mail: <a href="mailto:${element.contact.email}">${element.contact.email}<a></p>
                <button class="link-web"> 
                <a class="link-web" href="${element.contact.site}" target="_blank">Sitio web</a>
                </button>
            </div>
        </div>`;
        summary.insertAdjacentHTML("beforeend", result);

      
});
for(let i = 0; locationAddress.length; i++){
    locationAddress[i].addEventListener('click', () => {
        newData.forEach(element => {
        
            if(locationAddress[i].id == element.id){
                map = new google.maps.Map(document.getElementById('map'), {
                    center: {
                        lat: element.address.location.lat,
                        lng: element.address.location.lng
                    },
                    zoom: 16,
                });
                
            var marker = new google.maps.Marker({
                position: {
                    lat: element.address.location.lat,
                    lng: element.address.location.lng
                },
                map: map
            });  
            }
        })
       
       
    }); 
};
};

const search = document.getElementById('search'); 
search.addEventListener('keyup', ()=>{
    let name = search.value;
    const newData = JSON.parse(localStorage.getItem('data'));
    let filtered = window.data.filterByName(newData, name); 
    if (name == "") {
        printData(newData);
      } else {
        printData(filtered);
      }
})

const ratingDes = document.getElementById('rating-des');

ratingDes.addEventListener('click', () => {
    const newData = JSON.parse(localStorage.getItem('data'));
    let sorter = window.data.sortByRating(newData, -1);
    printData(sorter); 
}); 

const ratingAsc = document.getElementById('rating-asc');

ratingAsc.addEventListener('click', () => {
    const newData = JSON.parse(localStorage.getItem('data'));
    let sorter = window.data.sortByRating(newData, 1);
    printData(sorter); 
}); 


const abcDes = document.getElementById('abc-des');

abcDes.addEventListener('click', () => {
    const newData = JSON.parse(localStorage.getItem('data'));
    printData(newData); 
}); 

const abcAsc = document.getElementById('abc-asc');

abcAsc.addEventListener('click', () => {
    const newData = JSON.parse(localStorage.getItem('data'));
    let sorter = window.data.sortByName(newData, -1);
    printData(sorter); 
})