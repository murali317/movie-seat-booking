
let movie = document.querySelector('.movie-container');
let container = document.querySelector('.container');
let seats = document.querySelectorAll('.row >.seat:not(.occupied)')
let selectedMovie = document.getElementById('movie');
let count = document.getElementById('count');
let total = document.getElementById('total');

function updateselcou(){
    let ticketPrice = selectedMovie.value;
    let selectedSeats = document.querySelectorAll('.row > .seat.selected');

    let selectedInd = [...selectedSeats].map(function (item){
        return [...seats].indexOf(item);
    });
    console.log(selectedInd);

    localStorage.setItem('selectedSeats', JSON.stringify(selectedInd));
    console.log(localStorage.getItem('selectedSeats'));

    let selectedSeatslen = selectedSeats.length;
    count.innerText = selectedSeatslen;
    total.innerText = selectedSeatslen * ticketPrice;
}

function populateUI (){
    const selectedSeats2 = JSON.parse(localStorage.getItem('selectedSeats', ))
    console.log(selectedSeats2);
    if (selectedSeats2 !== null && selectedSeats2.length>0){
        seats.forEach((seat, index) => {
            if (selectedSeats2.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        })
    }
    // if (selectedSeats.)
}

populateUI()

function setMovieData(movieInd, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieInd);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

selectedMovie.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateselcou()
})

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !(e.target.classList.contains('occupied'))){
        e.target.classList.toggle('selected');
        updateselcou();
    }
})

// initial count and total
updateselcou()










