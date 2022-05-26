// fetch data
fetch('https://data.cityofnewyork.us/resource/cwy2-px8b.json')
.then(response => response.json())
.then(users => {
    console.log(users);
})

.catch(err => console.log(err))


const manhattan = document.getElementById('manhattan')
const brooklyn = document.getElementById('brooklyn')
const queens = document.getElementById('queens')
const statenisland = document.getElementById('staten-island')
const bronx = document.getElementById('bronx')

manhattan.addEventListener('click', () => )
brooklyn.addEventListener('click', () => )
queens.addEventListener('click', () => )
statenisland.addEventListener('click', () => )
bronx.addEventListener('click', () => )

