
// 1. JavaScript Basics & Setup
console.log("Welcome to the Community Portal");
window.addEventListener("load", () => {
  alert("Page is fully loaded!");
});

// 2. Syntax, Data Types, and Operators
const EVENT_CATEGORIES = ["workshop", "seminar", "conference", "music", "art", "food"];
let events = [
  { id: 1, name: "Yoga Day", date: "2025-06-21", seats: 30, category: "workshop", image: "1.jpg" },
  { id: 2, name: "Ganesh Utsav", date: "2025-08-30", seats: 0, category: "seminar", image: "2.jpg" },
  { id: 3, name: "Art Exhibition", date: "2025-07-15", seats: 15, category: "art", image: "3.jpg" },
  { id: 4, name: "Book Fair", date: "2025-09-10", seats: 20, category: "seminar", image: "4.jpg" },
  { id: 5, name: "Food Fair", date: "2025-10-05", seats: 10, category: "food", image: "5.jpg" },
  { id: 6, name: "Music Festival", date: "2025-11-20", seats: 50, category: "music", image: "6.jpg" }
];

// 3. Conditionals, Loops, and Error Handling
function isUpcoming(event) {
  return new Date(event.date) > new Date() && event.seats > 0;
}
function displayEvents(eventList = events) {
  const table = document.querySelector("#events tbody");
  table.innerHTML = ""; // Clear existing
  let row1 = document.createElement("tr");
  let row2 = document.createElement("tr");
  eventList.forEach(event => {
    if (isUpcoming(event)) {
      // Image cell
      let tdImg = document.createElement("td");
      let img = document.createElement("img");
      img.src = event.image;
      img.alt = event.name;
      img.title = event.name;
      tdImg.appendChild(img);
      row1.appendChild(tdImg);

      // Name + Register button cell
      let tdName = document.createElement("td");
      let p = document.createElement("p");
      p.innerText = event.name;
      // Register Button
      let btn = document.createElement("button");
      btn.innerText = "Register";
      btn.className = "registerBtn";
      btn.onclick = () => {
        try {
          registerUser(event.id);
        } catch (err) {
          alert("Registration failed: " + err.message);
        }
      };
      tdName.appendChild(p);
      tdName.appendChild(btn);
      row2.appendChild(tdName);
    }
  });
  table.appendChild(row1);
  table.appendChild(row2);
}

// 4. Functions, Scope, Closures, Higher-Order Functions
function addEvent(event) {
  events.push(event);
  displayEvents();
}
function filterEventsByCategory(category, callback) {
  let filtered = events.filter(e => e.category === category && isUpcoming(e));
  if (callback) callback(filtered);
}
function makeCategoryRegistrationCounter() {
  const registrations = {};
  return function(category) {
    registrations[category] = (registrations[category] || 0) + 1;
    return registrations[category];
  };
}
const countCategoryRegistration = makeCategoryRegistrationCounter();

// 5. Objects and Prototypes
function Event(name, date, seats, category, image) {
  this.id = events.length + 1;
  this.name = name;
  this.date = date;
  this.seats = seats;
  this.category = category;
  this.image = image || "default.jpg";
}
Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};
// Example: List keys and values
events.forEach(ev => {
  Object.entries(ev).forEach(([k, v]) => { /* console.log(`${k}: ${v}`); */ });
});

// 6. Arrays and Methods
function addMusicEvent() {
  let newEvent = new Event("Jazz Night", "2025-12-01", 40, "music", "7.jpg");
  events.push(newEvent);
  displayEvents();
}
function showOnlyMusicEvents() {
  let musicEvents = events.filter(e => e.category === "music" && isUpcoming(e));
  displayEvents(musicEvents);
}
function formatEventCards() {
  return events.map(e => `${e.category.charAt(0).toUpperCase() + e.category.slice(1)}: ${e.name}`);
}

// 7. DOM Manipulation
function updateEventSeats(eventId, seats) {
  let event = events.find(e => e.id === eventId);
  if (event) {
    event.seats = seats;
    displayEvents();
  }
}

// 8. Event Handling
// Already used in displayEvents() for Register buttons
document.getElementById("eventType").onchange = function(e) {
  filterEventsByCategory(e.target.value, displayEvents);
};
document.addEventListener("keydown", function(e) {
  if (e.key === "Enter" && document.activeElement.id === "name") {
    document.getElementById("eventForm").requestSubmit();
  }
});

// 9. Async JS, Promises, Async/Await
async function fetchEventsFromAPI() {
  showLoadingSpinner(true);
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // Mock endpoint
    let data = await response.json();
    // Simulate adding a fetched event
    addEvent(new Event("Fetched Event", "2025-07-01", 25, "workshop", "fetched.jpg"));
  } catch (err) {
    alert("Failed to fetch events");
  } finally {
    showLoadingSpinner(false);
  }
}
function showLoadingSpinner(show) {
  let spinner = document.getElementById("loadingSpinner");
  if (!spinner) {
    spinner = document.createElement("div");
    spinner.id = "loadingSpinner";
    spinner.innerText = "Loading...";
    spinner.style.position = "fixed";
    spinner.style.top = "50%";
    spinner.style.left = "50%";
    spinner.style.background = "#fff";
    spinner.style.padding = "1em";
    spinner.style.zIndex = "999";
    document.body.appendChild(spinner);
  }
  spinner.style.display = show ? "block" : "none";
}

// 10. Modern JavaScript Features
const cloneEvents = () => [...events];
function showEventDetails({ name, date, seats }) {
  alert(`Event: ${name}\nDate: ${date}\nSeats: ${seats}`);
}

// 11. Working with Forms
document.getElementById('eventForm').onsubmit = async function(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const date = form.elements["date"].value;
  const eventType = form.elements["eventType"].value;
  const message = form.elements["message"].value;

  // Validation
  let error = "";
  if (!name) error += "Name required. ";
  if (!email || !email.includes("@")) error += "Valid email required. ";
  if (!date) error += "Date required. ";
  if (!eventType) error += "Event type required. ";
  document.getElementById('confirmationMessage').innerText = error;
  if (error) return;

  // 12. AJAX & Fetch API
  document.getElementById('confirmationMessage').innerText = "Submitting...";
  setTimeout(async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ name, email, date, eventType, message }),
        headers: { "Content-Type": "application/json" }
      });
      if (res.ok) {
        document.getElementById('confirmationMessage').innerText = "Thank you for registering!";
      } else {
        document.getElementById('confirmationMessage').innerText = "Registration failed.";
      }
    } catch (err) {
      document.getElementById('confirmationMessage').innerText = "Error connecting to server.";
    }
  }, 1200);
};

// 13. Debugging and Testing
function debugRegistration(formData) {
  console.log("Submitting registration:", formData);
}

// 14. jQuery and JS Frameworks
// If jQuery is loaded, demonstrate simple usage
if (typeof $ !== "undefined") {
  $("#eventForm input[type=submit]").click(function() {
    alert("jQuery: Register button clicked!");
  });
  // Fade in/out example
  $(".news-article").fadeIn(1000).fadeOut(1000).fadeIn(1000);
  // Benefit of frameworks (React/Vue): Component-based UI, easier state management, reactivity, better scalability.
}

// --- Extra: Initial Render ---
displayEvents();

// --- Helper: Register User ---
function registerUser(eventId) {
  let event = events.find(e => e.id === eventId);
  if (!event) throw new Error("Event not found");
  if (!isUpcoming(event)) throw new Error("Event not available");
  if (event.seats <= 0) throw new Error("No seats left");
  event.seats--;
  countCategoryRegistration(event.category);
  displayEvents();
  alert(`Registered for ${event.name}! Seats left: ${event.seats}`);
}

// --- Feedback Character Counter (already in HTML inline, but for completeness) ---
document.getElementById('feedbackTextarea').oninput = function() {
  document.getElementById('charCount').innerText = "Characters: " + this.value.length;
};

// --- Video Ready Function (already in HTML inline, but for completeness) ---
document.getElementById('promoVideo').oncanplay = function() {
  alert("Video ready to play");
};

// --- Geolocation (already in HTML inline, but for completeness) ---
document.getElementById('findEvents').onclick = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};
function showPosition(position) {
  alert("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
}
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}
