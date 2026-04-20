const cities = [
  "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem",
  "Erode", "Tirunelveli", "Tiruppur", "Thoothukudi", "Vellore",
  "Karur", "Rajapalayam", "Aruppukottai", "Nagercoil", "Tanjore", "Kumbakonam", "Dindigul",
  "Namakkal", "Cuddalore", "Theni", "Virudhunagar", "Sivakasi",
  "Hyderabad", "Secunderabad", "Vijayawada", "Visakhapatnam", "Guntur",
  "Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum",
  "Mumbai", "Pune", "Nagpur", "Nashik", "Thane",
  "Delhi", "Noida", "Gurgaon", "Ghaziabad", "Faridabad",
  "Kolkata", "Howrah", "Asansol", "Durgapur", "Siliguri",
  "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar",
  "Jaipur", "Udaipur", "Jodhpur", "Kota", "Ajmer",
  "Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain",
  "Lucknow", "Kanpur", "Varanasi", "Agra", "Prayagraj",
  "Patna", "Gaya", "Muzaffarpur", "Ranchi", "Jamshedpur",
  "Bhubaneswar", "Cuttack", "Puri", "Raipur", "Bilaspur",
  "Chandigarh", "Shimla", "Dehradun", "Goa", "Pondicherry",
  "Kanyakumari", "Ooty", "Kodaikanal", "Rameswaram"
];

function showSuggestions(inputId, suggestionBoxId) {
  const inputElem = document.getElementById(inputId);
  const suggestionBox = document.getElementById(suggestionBoxId);
  const inputValue = inputElem.value.trim().toLowerCase();

  suggestionBox.innerHTML = '';

  if (inputValue.length === 0) return;

  const filteredCities = cities
    .filter(city => city.toLowerCase().startsWith(inputValue))
    .slice(0, 5); // Limit to 5 suggestions

  filteredCities.forEach(city => {
    const li = document.createElement('div');
    li.className = 'suggestion-item';
    li.textContent = city;
    li.onclick = () => {
      inputElem.value = city;
      suggestionBox.innerHTML = '';
    };
    suggestionBox.appendChild(li);
  });
}

function searchBus() {
  const from = document.getElementById("fromCity").value.trim();
  const to = document.getElementById("toCity").value.trim();
  const date = document.getElementById("journeyDate").value;

  if (!from || !to || !date) {
    alert("Please fill all the fields!");
    return;
  }

  // Redirect with parameters
  const query = `from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`;
  window.location.href = `buslist.html?${query}`;
}

