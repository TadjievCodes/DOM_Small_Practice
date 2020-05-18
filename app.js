const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");

const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('.addItemButton');
const removeItemButton = document.querySelector('.removeItemButton');
const listItems = document.getElementsByTagName('li'); //[0] If we wanted target only the first element 'li'[0] would be sufficient like I did at first


// Now I wanna create a For Loop so that we actually target all the li items
for (let index = 0; index < listItems.length; index += 1) {
    // Here I'm accessing each item of the listItems through looping n not repeat I made it equal to a variable listItem
    let listItem = listItems[index];
    // We're creating a callback function here via the arrow function
    listItem.addEventListener('mouseover', () => {
        listItem.textContent = listItem.textContent.toUpperCase();
    });

    // Here we're creating a callback function for the opposite purpose on mouseout to return to lowercase letters
    listItem.addEventListener('mouseout', () => {
        listItem.textContent = listItem.textContent.toLowerCase();
    });

} // loop closing bracket



toggleList.addEventListener("click", () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = "Hidelist";
        listDiv.style.display = "block";
    } else {

        toggleList.textContent = "Show List";
        listDiv.style.display = "none";
    }

});

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = " ";
});


addItemButton.addEventListener('click', () => {
    // We access the first item through [0] brackets notation as ul has few items( Kinda like array acecessing)                             
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    //The bug was on line 35 as we add the item to unordered list through .appendChild and we should mention li as the
    //variable was li and always insert variables targeted without quotes "" '' as it would cause an error
    addItemInput.value = " ";
});




removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});