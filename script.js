// Select elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new option
function addOption() {
  const optionText = inputBox.value.trim(); // Get the input value and remove extra spaces

  if (optionText === "") {
    alert("Please enter an option!");
    return;
  }

  // Create a new list item with a radio button
  const li = document.createElement("li");
  li.innerHTML = `
    <input type="radio" name="option" value="${optionText}" />
    <span class="option-text">${optionText}</span>
    <button class="delete-btn" onclick="deleteOption(this)">&#10005;</button>
  `;

  // Append the new option to the list
  listContainer.appendChild(li);

  // Clear the input box
  inputBox.value = "";
}

// Function to delete an option
function deleteOption(button) {
  const optionItem = button.parentElement; // Get the parent <li> of the button
  optionItem.remove(); // Remove the option from the list
}

// Function to submit the selected answer
function submitAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (!selectedOption) {
    alert("Please select an option before submitting!");
    return;
  }

  const answer = selectedOption.value;
  alert(`You selected: ${answer}`);
}
