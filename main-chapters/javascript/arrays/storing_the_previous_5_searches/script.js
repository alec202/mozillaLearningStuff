// JavaScript for storing_the_previous_5_searches
const list = document.querySelector(".output ul");
const searchInput = document.querySelector(".output input");
const searchBtn = document.querySelector(".output button");

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.addEventListener("click", () => {
    // we will only allow a term to be entered if the search input isn't empty
    if (searchInput.value !== "") {
        // Part 1
        myHistory.unshift(searchInput.value);
        

        // empty the list so that we don't display duplicate entries
        // the display is regenerated every time a search term is entered.
        list.textContent = "";

        // loop through the array, and display all the search terms in the list
        for (const itemText of myHistory) {
            const listItem = document.createElement("li");
            listItem.textContent = itemText;
            list.appendChild(listItem);
        }

        // If the array length is 5 or more, remove the oldest search term
        if (myHistory.length >= MAX_HISTORY) {
            // Part 2
            myHistory.pop();
        }

        // empty the search input and focus it, ready for the next term to be entered
        searchInput.value = "";
        searchInput.focus();
    }
});
