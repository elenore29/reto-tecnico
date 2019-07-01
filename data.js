window.data = {
    filterByName: (arr, name) => {
        const filteringName = arr.filter(element => (element.name.toLowerCase().match(name.toLowerCase())));
        return filteringName;
    }
}