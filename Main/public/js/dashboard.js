// dom elements
let submitFishBtn = document.getElementById('submit-fish-btn');

// function to store inputed data
const newFishHandler = async (e) => {
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

submitFishBtn.addEventListener('click', newFishHandler);


