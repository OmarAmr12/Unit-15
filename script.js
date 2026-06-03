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
function increaseText() {
    document.body.style.fontSize = "20px";
}

function decreaseText() {
    document.body.style.fontSize = "14px";
}
