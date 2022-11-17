
const newFormHandler = async (e) => {
    e.preventDefault();

    let species = document.getElementById("fish-input").value.trim();
    let date = document.getElementById("date").value.trim();
    let length = document.getElementById("fish-length").value.trim();
    let weight = document.getElementById("fish-weight").value.trim();
    let location = document.getElementById("fish-location").value.trim();

    if(species && date && length && weight && location){
        const response = await fetch("/api/catches", {
            method: 'POST',
            body: JSON.stringify({ species, date, length, weight, location }),
            headers: {'Content-Type': 'application/json'},
        })
        if (response.ok){
            console.log(species, date, length, weight, location);
        } else {
            alert(response.statusText);
        }
    }

}

let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", newFormHandler);

// Functions and variables to display the modal.
let overlay = document.getElementById("overlay");
let closeBtn = document.getElementById("close-btn");
let addBtn = document.getElementById("modal-btn");

function displayOverlay (){
    overlay.style.display = "block";
}
addBtn.addEventListener("click", displayOverlay);

function hideOverlay (){
    overlay.style.display = "none";
}

closeBtn.addEventListener("click", hideOverlay);
