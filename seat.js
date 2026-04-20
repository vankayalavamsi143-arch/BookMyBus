const layout = document.getElementById('seatLayout');

const totalSeats = 24;
const bookedSeats = [2, 5, 13, 17]; // Example booked

for (let i = 1; i <= totalSeats; i++) {
  const seat = document.createElement('div');
  seat.classList.add('seat');
  if (bookedSeats.includes(i)) {
    seat.classList.add('booked');
  } else {
    seat.classList.add('available');
    seat.onclick = () => {
      seat.classList.toggle('selected');
    };
  }
  layout.appendChild(seat);
}

function proceedToBooking() {
  const selected = document.querySelectorAll('.seat.selected');
  if (selected.length === 0) {
    alert("Please select at least one seat.");
    return;
  }
  alert(`✅ ${selected.length} seat(s) selected! Proceeding...`);
  window.location.href = "booking.html"; // or next step page
}
