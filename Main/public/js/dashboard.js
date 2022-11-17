// dom elements
let submitFishBtn = document.getElementById('submit-fish-btn');

// function to store inputed data
const newCatchHandler = async (e) => {
    let species = document.getElementById('fish-select').value.trim();
    let length = document.getElementById('fish-length').value.trim();
    let weight = document.getElementById('fish-weight').value.trim();
    let lat = document.getElementById('latbox').value.trim();
    let lng = document.getElementById('lngbox').value.trim();

    e.preventDefault();

    if (species && length && weight && lat && lng) {
    const response = await fetch('/api/catches', {
        method: 'POST',
        body: JSON.stringify({ species, length, weight, lat, lng }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
    }
};
// function to get the catch data stored and display it on the page
const getCatchData = async (e) => {
    e.preventDefault();
    const response = await fetch ('/api/catches',{
        method: 'GET',
        body: JSON.stringify({ species, length, weight, lat, lng }),
        headers: { 'Content-Type': 'application/json' },
    })

}



submitFishBtn.addEventListener('click', newCatchHandler);


