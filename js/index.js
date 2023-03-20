
// Html for coding reference 

/* <main>
<div class="input-box">
    <label for="input-list">What do you want to buy today?</label>
    <input id="input-list" type="text" name="input-list" placeholder="Your item here..." value="">
    <input id= "btn-add" type="button" name="btn-add" value="Add to list">
</div>
<div class="dynamic-content"></div>
<hr class="divider">
</main> */

// Save the reference to text-field into a variable. | <input type="text">
let userInput = document.getElementById("input-list");
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
let btn = document.getElementById("btn-add");
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let list = document.getElementById("dynamic-list");
// Save the reference to paragraph for feedback | <p class="feedback"></p>
let feedback = document.querySelector(".feedback");

// Start function addItem.
function addItem (){
    // Create list-item and store output in a variable.
    output = document.createElement("li");
    // Check if user entered the value in input text-field.
    if (userInput.value.length > 0) {
    // If so:
       // Use textContent property on created list-item
       // and assign it with the value of the text written in the text-field
       output.textContent = userInput.value;
       // Append list item to unordered list.
       list.appendChild(output);
       // Clear a feedback-message.
       feedback.remove();
       // Clear the text-field.
       userInput.value= "";
       // Put the cursor back to text-field  
    // End if. 
    // Otherwise:
    // Print the message nothing entered in the paragraph "feedback"
    } else {
        feedback.innerText = "Nothing entered!";
    };
    // End otherwise.
// End function addItem.
};
// Register your function addItem for click event on button.
btn.addEventListener("click", addItem);