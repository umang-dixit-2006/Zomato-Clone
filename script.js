// script.js

// Simulated animation on input focus
document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.querySelector('main input');

    inputBox.addEventListener('focus', () => {
        inputBox.style.backgroundColor = "#fff5f5";
    });

    inputBox.addEventListener('blur', () => {
        inputBox.style.backgroundColor = "#fff";
    });
});

// Simulated user interaction animation
document.querySelectorAll('.logo ul li a').forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = "scale(1.05)";
            link.style.transition = "transform 0.2s";
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = "scale(1)";
        });
    })
    // Delivery card search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.hero-section input[placeholder^="Search"]');
    const cards = document.querySelectorAll('.delivery-card');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const filter = this.value.toLowerCase();
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(filter) ? '' : 'none';
            });
        });
    }
});
// ...existing code...

// Delivery card and section card search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.hero-section input[placeholder^="Search"]');
    const deliveryCards = document.querySelectorAll('.delivery-card');
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    const diningCards = document.querySelectorAll('.dining-card');
    const clubCards = document.querySelectorAll('.club-card');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const filter = this.value.toLowerCase();

            // Filter delivery cards
            deliveryCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(filter) ? '' : 'none';
            });

            // Filter order online cards
            restaurantCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(filter) ? '' : 'none';
            });

            // Filter dining out cards
            diningCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(filter) ? '' : 'none';
            });

            // Filter nightlife & clubs cards
            clubCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(filter) ? '' : 'none';
            });
        });
    }
});
