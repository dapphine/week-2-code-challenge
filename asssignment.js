 // Grab elements
 const addButton = document.getElementById('add-button');
 const clearButton = document.getElementById('clear-button');
 const darkModeToggle = document.getElementById('dark-mode-toggle');
 const lightModeToggle = document.getElementById('light-mode-toggle');
 const shoppingList = document.getElementById('shopping-list');
 const itemInput = document.getElementById('item-input');

 // Add item to the shopping list
 addButton.addEventListener('click', () => {
   const itemText = itemInput.value.trim();
   if (itemText !== '') {
     const li = document.createElement('li');
     li.textContent = itemText;

     // Add delete button to the list item
     const deleteButton = document.createElement('button');
     deleteButton.textContent = 'Delete';
     deleteButton.classList.add('delete-button');
     deleteButton.addEventListener('click', () => {
       li.remove();
     });

     li.appendChild(deleteButton);
     shoppingList.appendChild(li);

     // Clear input field
     itemInput.value = '';
   }
 });

 // Clear the shopping list
 clearButton.addEventListener('click', () => {
   shoppingList.innerHTML = '';
 });

 // Switch to dark mode
 darkModeToggle.addEventListener('click', () => {
   document.body.style.backgroundColor = '#343a40';
   document.body.style.color = 'white';
 });

 // Switch to light mode
 lightModeToggle.addEventListener('click', () => {
   document.body.style.backgroundColor = '#f4f4f4';
   document.body.style.color = '#333';
 });