const url = './data_melp.json';
fetch(url)
.then(response => response.json())

.then(json => {
const data = json;
data.forEach(element => {
    const dataRestaurants = element;
    console.log(dataRestaurants)
});
})
.catch(err => (err))


