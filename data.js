window.data = {
    filterByName: (arr, name) => {
        const filteringName = arr.filter(element => (element.name.toLowerCase().match(name.toLowerCase())));
        return filteringName;
    },
    sortByRating: (arr, order) => {
         const sortRating = arr.sort((a, b) => {
            if(a.rating > b.rating){
                return 1*order; 
            } else if(b.rating > a.rating) {
                return -1*order; 
            } else {
                return 0; 
            }
        });
        return sortRating; 
    },
    sortByName: (arr, order) => {
        const sortName = arr.sort((a, b) => {
            if(a.name > b.name){
                return 1*order; 
            }
            else if(b.name > a.name) {
                return -1*order;
            } else {
                return 0; 
            }
        })
        return sortName; 
    },
    find: (arr) =>{
        arr.forEach(element => {
            console.log(element.id)
        });
    }
}