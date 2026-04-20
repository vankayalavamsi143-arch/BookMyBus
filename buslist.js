const busData = [
  { name: "SRS Travels", type: "AC Sleeper", departure: "06:00 AM", arrival: "10:30 AM", price: 450 },
  { name: "KPN Travels", type: "Non-AC Seater", departure: "07:30 AM", arrival: "11:45 AM", price: 420 },
  { name: "Orange Tours", type: "AC Sleeper", departure: "09:00 AM", arrival: "01:15 PM", price: 490 },
  { name: "YBM Travels", type: "AC Sleeper", departure: "10:15 AM", arrival: "02:30 PM", price: 510 },
  { name: "Parveen Travels", type: "Non-AC Sleeper", departure: "11:45 AM", arrival: "04:00 PM", price: 440 },
  { name: "ABT Express", type: "AC Seater", departure: "01:00 PM", arrival: "05:15 PM", price: 470 },
  { name: "Vivegam Travels", type: "AC Sleeper", departure: "02:30 PM", arrival: "06:45 PM", price: 499 },
  { name: "Krish Travels", type: "AC Sleeper", departure: "04:00 PM", arrival: "08:15 PM", price: 540 },
  { name: "Kallada Travels", type: "AC Seater", departure: "05:15 PM", arrival: "09:30 PM", price: 460 },
  { name: "Arthi Travels", type: "Non-AC Sleeper", departure: "06:30 PM", arrival: "10:45 PM", price: 430 },
  { name: "National Travels", type: "AC Sleeper", departure: "08:00 PM", arrival: "12:30 AM", price: 550 },
  { name: "Greenline Travels", type: "AC Seater", departure: "09:30 PM", arrival: "01:45 AM", price: 480 },
  { name: "Sangita Travels", type: "Non-AC Seater", departure: "10:00 PM", arrival: "03:00 AM", price: 400 },
  { name: "RKK Travels", type: "AC Sleeper", departure: "11:00 PM", arrival: "04:00 AM", price: 520 }
];

const urlParams = new URLSearchParams(window.location.search);
const from = urlParams.get("from") || "Chennai";
const to = urlParams.get("to") || "Bangalore";
const date = urlParams.get("date") || new Date().toISOString().split('T')[0];

document.getElementById("route-subheading").textContent = `Showing buses from ${from} → ${to} on ${date}`;

const container = document.getElementById("busCardsContainer");

function renderBuses(filterType = null) {
  container.innerHTML = "";

  const filtered = busData.filter(bus => {
    if (!filterType) return true;
    if (filterType === "AC") return bus.type.includes("AC");
    if (filterType === "Sleeper") return bus.type.includes("Sleeper");
    if (filterType === "Seater") return bus.type.includes("Seater");
    return true;
  });

  filtered.forEach(bus => {
    const card = document.createElement("div");
    card.className = "bus-card";
    card.innerHTML = `
      <div class="bus-info">
        <h3>${bus.name}</h3>
        <p><i class="fa-solid fa-bus"></i> ${bus.type}</p>
        <p><i class="fa-regular fa-clock"></i> ${bus.departure} → ${bus.arrival}</p>
      </div>
      <div class="bus-actions">
        <h4>₹${bus.price}</h4>
        <a href="seat.html"><button>View Seats</button></a>
      </div>
    `;
    container.appendChild(card);
  });
}

renderBuses();

document.getElementById("acFilter").addEventListener("change", (e) => {
  renderBuses(e.target.checked ? "AC" : null);
});
document.getElementById("sleeperFilter").addEventListener("change", (e) => {
  renderBuses(e.target.checked ? "Sleeper" : null);
});
document.getElementById("seaterFilter").addEventListener("change", (e) => {
  renderBuses(e.target.checked ? "Seater" : null);
});
