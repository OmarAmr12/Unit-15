function goBooking() {
    window.location.href = "booking.html";
}

function validateForm() {
    let name = document.getElementById("name").value;

    if (name == "") {
        alert("Please complete all fields");
    } else {
        alert("Booking confirmed!");
    }
}
