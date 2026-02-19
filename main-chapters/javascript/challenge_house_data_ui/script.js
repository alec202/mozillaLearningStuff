// JavaScript for challenge_house_data_ui
const streetSelect = document.getElementById("choose-street");
const bedroomSelect = document.getElementById("choose-bedrooms");
const bathroomSelect = document.getElementById("choose-bathrooms");
const form = document.querySelector("form");

const resultCount = document.getElementById("result-count");
const output = document.getElementById("output");

let houses;
function initializeStreetOptions() {
    const allStreetNames = new Set()
    for (const house of houses) {
        const streetName = house.street;
        if (!allStreetNames.has(streetName)) {
            allStreetNames.add(streetName);
            const newStreetOption = document.createElement("option");
            newStreetOption.value = streetName;
            newStreetOption.textContent = streetName;
            streetSelect.appendChild(newStreetOption);
        }
    }
}

function initializeBedroomOptions() {
    let maxBedroomSize = 1;
    for (const house of houses) {
        // loop through and update the biggest bedroom size seen so far.
        const currentBedroomNumber = house.bedrooms;
        maxBedroomSize = (maxBedroomSize > currentBedroomNumber) ? maxBedroomSize : currentBedroomNumber;
    }

    // now we know max number of bedrooms, let's create the number options available
    // using DOM manipulation.
    for (let i = 1; i <= maxBedroomSize; i++) {
        const newBedroomNumber = document.createElement("option");
        newBedroomNumber.value = i;
        newBedroomNumber.textContent = i;
        bedroomSelect.appendChild(newBedroomNumber);
    }
}

function initializeBathroomOptions() {
    let maxBathroomSize = 1;
    for (const house of houses) {
        // loop through and update the biggest bedroom size seen so far.
        const currentBathroomNumber = house.bathrooms;
        maxBathroomSize = (maxBathroomSize > currentBathroomNumber) ? maxBathroomSize : currentBathroomNumber;
    }

    // now we know max number of bathrooms, let's create the number options available
    // using DOM manipulation.
    for (let i = 1; i <= maxBathroomSize; i++) {
        const newBathroomNumber = document.createElement("option");
        newBathroomNumber.value = i;
        newBathroomNumber.textContent = i;
        bathroomSelect.appendChild(newBathroomNumber);
    }

}

function initializeForm() {
    initializeStreetOptions();
    initializeBedroomOptions();
    initializeBathroomOptions();
}

function renderHouses(e) {
    // Stop the form submitting
    e.preventDefault();
    const streetOption = streetSelect.value;
    const bedroomOption = bedroomSelect.value;
    const bathroomOption = bathroomSelect.value;
    const formattedBathroomOption = (bathroomOption === "") ? "" : Number(bathroomOption);
    const formattedBedroomOption = (bedroomOption === "") ? "" : Number(bedroomOption);

    const filteredHouses = houses.filter((house) => {
        return ((streetOption === "" || house.street === streetOption) &&
            (formattedBedroomOption === "" || house.bedrooms === formattedBedroomOption) &&
            (formattedBathroomOption === "" || house.bathrooms === formattedBathroomOption)
        )
    })


    // Add rest of code here
    resultCount.textContent = `Results returned: ${filteredHouses.length}`
    output.replaceChildren();

    /**
     * 
     * @param {houseObj} house - the current house object.
     */
    function renderHouse(house) {
        // get the total area of the rooms.
        let totalAreaOfRooms = 0;
        for (const property in house.room_sizes) {
            totalAreaOfRooms += house.room_sizes[property];
        }

        // output to UI
        const newArticle = document.createElement("article");

        const streetAddress = document.createElement("h2");
        streetAddress.textContent = `${house.house_number} ${house.street}`;
        newArticle.appendChild(streetAddress);
        
        // create the list of info displayed to user
        const houseListContainer = document.createElement("ul");

        const bedroomInfoListItem = document.createElement("li");
        bedroomInfoListItem.textContent = `🛏️ Bedrooms: ${house.bedrooms}`;
        houseListContainer.appendChild(bedroomInfoListItem);

        const bathroomInfoListItem = document.createElement("li");
        bathroomInfoListItem.textContent = `🛀 Bathrooms: ${house.bathrooms}`;
        houseListContainer.appendChild(bathroomInfoListItem);

        const roomAreaInfoListItem = document.createElement("li");
        roomAreaInfoListItem.textContent = `Room area: ${totalAreaOfRooms}m²`
        houseListContainer.appendChild(roomAreaInfoListItem);

        const housePriceInfoListItem = document.createElement("li");
        housePriceInfoListItem.textContent = `Price: £${house.price}`
        houseListContainer.appendChild(housePriceInfoListItem);

        // add the unordered list to the article
        newArticle.appendChild(houseListContainer);

        // add the article for this individual house to the output section
        output.appendChild(newArticle);

    }

    for (const house of filteredHouses) {
        renderHouse(house);
    }
}

// Add a submit listener to the <form> element
form.addEventListener("submit", renderHouses);

// Call fetchHouseData() to initialize the app
fetchHouseData();

async function fetchHouseData() {
    const url = "https://mdn.github.io/shared-assets/misc/houses.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        // houses is an array of house objects.
        houses = result;
        initializeForm();

    } catch (error) {
        console.error(error.message);
    }
}
