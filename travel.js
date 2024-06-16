// travel.js
document.addEventListener('DOMContentLoaded', () => {
    const destinations = [
        {
            name: 'Bali',
            category: 'beach',
            description: 'A beautiful island in Indonesia known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.',
            bestTime: 'April to October',
            attractions: 'Uluwatu Temple, Seminyak, Mount Batur'
        },
        {
            name: 'Swiss Alps',
            category: 'mountain',
            description: 'A major mountain range in Switzerland, known for its skiing, hiking, and stunning scenery.',
            bestTime: 'June to August and December to March',
            attractions: 'Matterhorn, Jungfrau, Eiger'
        },
        {
            name: 'Paris',
            category: 'city',
            description: 'The capital city of France, known for its art, fashion, gastronomy, and culture.',
            bestTime: 'April to June and October to early November',
            attractions: 'Eiffel Tower, Louvre Museum, Notre-Dame Cathedral'
        },
        
    ];

    const destinationList = document.getElementById('destination-list');
    const categoryFilter = document.getElementById('category-filter');

    function displayDestinations(filteredDestinations) {
        destinationList.innerHTML = '';
        filteredDestinations.forEach(destination => {
            const destinationDiv = document.createElement('div');
            destinationDiv.classList.add('destination');
            destinationDiv.innerHTML = `<strong>${destination.name}</strong>`;
            destinationDiv.addEventListener('click', () => {
                showDetails(destination);
            });
            destinationList.appendChild(destinationDiv);
        });
    }

    function showDetails(destination) {
        const existingDetails = document.querySelector('.destination-details');
        if (existingDetails) {
            existingDetails.remove();
        }
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('destination-details');
        detailsDiv.innerHTML = `
            <h2>${destination.name}</h2>
            <p><strong>Description:</strong> ${destination.description}</p>
            <p><strong>Best Time to Visit:</strong> ${destination.bestTime}</p>
            <p><strong>Attractions:</strong> ${destination.attractions}</p>
        `;
        destinationList.appendChild(detailsDiv);
    }

    categoryFilter.addEventListener('change', () => {
        const selectedCategory = categoryFilter.value;
        if (selectedCategory === 'all') {
            displayDestinations(destinations);
        } else {
            const filteredDestinations = destinations.filter(destination => destination.category === selectedCategory);
            displayDestinations(filteredDestinations);
        }
    });

    // Initial display of all destinations
    displayDestinations(destinations);
});
