// fetch data
fetch('https://data.cityofnewyork.us/resource/cwy2-px8b.json')
.then(response => response.json())
.then(users => {
    console.log(users);
})

.catch(err => console.log(err))