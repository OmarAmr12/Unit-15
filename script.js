// Redirects user to booking page
function goBooking() {
    window.location.href = "booking.html";
}
// Validates booking form input
function validateForm() {
    let name = document.getElementById("name").value;

    if (name == "") {
        alert("Please complete all fields");
    } else {
        alert("Booking confirmed!");
    }
}
// Increases text size for accessibilit
function increaseText() {
    document.body.style.fontSize = "20px";
}
// Decreases text size for accessibility
function decreaseText() {
    document.body.style.fontSize = "14px";
}
