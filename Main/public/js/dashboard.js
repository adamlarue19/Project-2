const newFormHandler = async (e) => {
    e.preventDefault();

    let species = document.getElementById("fish-input").value.trim();
    let date = document.getElementById("date").value.trim();
    let length = document.getElementById("fish-length").value.trim();
    let weight = document.getElementById("fish-weight").value.trim();
    let lat = document.getElementById('latbox').value.trim();
    let lng = document.getElementById('lngbox').value.trim();

    if(species && date && length && weight && lat && lng){
        const response = await fetch("/api/catches", {
            method: 'POST',
            body: JSON.stringify({ species, date, length, weight, lat, lng }),
            headers: {'Content-Type': 'application/json'},
        })
        if (response.ok){
            document.location.replace('/dashboard');
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
