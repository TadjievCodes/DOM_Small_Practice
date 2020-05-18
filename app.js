const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");

const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('.addItemButton');
//const removeItemButton = document.querySelector('.removeItemButton');

// To select the children elements of it
const lis = listUl.children;

const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = "lightskyblue";
lastListItem.style.backgroundColor = "lightsteelblue";


//const listItems = document.getElementsByTagName('li'); //[0] If we wanted target only the first element 'li'[0] would be sufficient like I did at first
// Now I wanna create a For Loop so that we actually target all the li items
//for (let index = 0; index < listItems.length; index += 1) {
// Here I'm accessing each item of the listItems through looping n not repeat I made it equal to a variable listItem
//  let listItem = listItems[index];
//event.target.textContent = event.target.textContent.toUpperCase();


//main function fot attaching buttons
function attachListItemButtons(li) {


    let up = document.createElement('button');
    up.className = "up";
    up.textContent = "Up";
    li.appendChild(up);

    let down = document.createElement('button');
    down.className = "down";
    down.textContent = "Down";
    li.appendChild(down);

    let remove = document.createElement('button');
    remove.className = "remove";
    remove.textContent = "Remove";
    li.appendChild(remove);

}

// Looping through elements to attach the buttons
for (let i = 0; i < lis.length; i += 1) {

    attachListItemButtons(lis[i]);

}

/* It could be done with this CSS line to hide the unused up and down buttons
.list li:first-child button.up, .list li:last-child button.down {
    visibility: hidden;
}
*/
// but I tried to hide it with JS code

// So another technique that I like even better (and not possible with CSS) is to disable the unusable buttons but leave them visible...
document.querySelector(".list li:first-child button.up").disabled = true;
document.querySelector(".list li:last-child button.down").disabled = true;




// We're creating a callback function here via the arrow function
listUl.addEventListener('click', (event) => {

    if (event.target.tagName === 'BUTTON') {
        //nested another if
        if (event.target.className === "remove") {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        } // inside if

        // another if for up statement
        if (event.target.className === "up") {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;

            if (prevLi) {
                // and then we'll call insertbefore passing in the list item to move and previous item reference
                ul.insertBefore(li, prevLi);
            }
        } // inside if

        // another if for down statement
        if (event.target.className === "down") {
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;

            if (nextLi) {
                // and then we'll call insertbefore passing in the list item to move and previous item reference
                ul.insertBefore(nextLi, li);
            }
        } // inside if


    } //outer main if closing tag
}); // end of the function with an addEventListener


// Here we're creating a callback function for the opposite purpose on mouseout to return to lowercase letters
/*
listDiv.addEventListener('mouseout', (event) => {

    if (event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toLowerCase();
    }
});
*/


/* Example handler to test the code
document.addEventListener('click', (event) => {

    console.log(event.target);
});
*/

//} // loop closing bracket



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

    //calling the function to generate or add the Dynamic generated buttons
    attachListItemButtons(li);

    ul.appendChild(li);
    //The bug was on line 35 as we add the item to unordered list through .appendChild and we should mention li as the
    //variable was li and always insert variables targeted without quotes "" '' as it would cause an error
    addItemInput.value = " ";
});


// to remove the item just uncommented here as trying new things and exercises
/*
removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});
*/