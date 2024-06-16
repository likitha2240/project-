// dish-script.js
document.addEventListener('DOMContentLoaded', () => {
    const addDishButton = document.getElementById('add-dish-btn');
    const dishInput = document.getElementById('new-dish');
    const dishList = document.getElementById('dish-list');

    addDishButton.addEventListener('click', () => {
        const dishText = dishInput.value.trim();
        if (dishText !== '') {
            addDishItem(dishText);
            dishInput.value = '';
        }
    });

    dishInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const dishText = dishInput.value.trim();
            if (dishText !== '') {
                addDishItem(dishText);
                dishInput.value = '';
            }
        }
    });

    function addDishItem(dishText) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = dishText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-dish-btn');
        deleteButton.addEventListener('click', () => {
            dishList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(deleteButton);
        dishList.appendChild(li);
    }
});
