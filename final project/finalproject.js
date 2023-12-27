document.addEventListener('DOMContentLoaded', function() {
    const seatsContainer = document.getElementById('seats-container');
    const totalRows = 5;
    const seatsPerRow = 10;

    function initializeSeats() {
        for (let i = 1; i <= totalRows; i++) {
            for (let j = 1; j <= seatsPerRow; j++) {
                const seat = document.createElement('div');
                seat.classList.add('seat');
                seat.setAttribute('data-row', i);
                seat.setAttribute('data-seat', j);
                seatsContainer.appendChild(seat);
            }
        }
    }

    initializeSeats();

    function bookSeat() {
        const selectedSeat = document.querySelector('.seat:not(.booked)');
        if (selectedSeat) {
            selectedSeat.classList.add('booked');
            alert('Seat booked successfully!');
        } else {
            alert('All seats are booked. Please try again later.');
        }
    }

    seatsContainer.addEventListener('click', function(event) {
        const clickedSeat = event.target;
        if (clickedSeat.classList.contains('seat') && !clickedSeat.classList.contains('booked')) {
            clickedSeat.classList.toggle('selected');
        }
    });
});
