// Create a div container for the buttons
// Create four buttons for the different sodas with individual IDs and cost
// Create a total div to store totals
// The buttons must add a cost when clicked
// There must be a place to update total cost of items clicked
// Assign a total that equals 0 to total up each button click

//1 

const vendingButtons = document.querySelectorAll('#vendingItems button');
const total = document.getElementById('totalcost');
const totalNumber = Number(total.getAttribute("data-cost"));
let newTotal = 0;

Array.from(vendingButtons).forEach(function(vendingButton) {
    vendingButton.addEventListener("click", function(e) {
    const itemPrice = Number(vendingButton.getAttribute("data-cost"));
    newTotal += itemPrice;
    total.innerText = `Total: $${newTotal}`;
    });
});

// 2 

// 3