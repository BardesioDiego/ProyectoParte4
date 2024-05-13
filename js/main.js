(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

const destinations = [
    { name: "Playa del Carmen", category: "playa" },
    { name: "Tulum", category: "playa" },
    { name: "Cancún", category: "playa" },
    { name: "Chichen Itza", category: "templo" },
    { name: "Tikal", category: "templo" },
    { name: "Angkor Wat", category: "templo" }
];

// Función para mostrar resultados de búsqueda
function displayResults(results) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No se encontraron resultados.</p>";
    } else {
        const ul = document.createElement("ul");
        results.forEach(result => {
            const li = document.createElement("li");
            li.textContent = result.name;
            ul.appendChild(li);
        });
        resultsContainer.appendChild(ul);
    }
}

// Función para realizar la búsqueda
function searchDestinations(query, category) {
    const filteredResults = destinations.filter(destination => {
        const nameMatches = destination.name.toLowerCase().includes(query.toLowerCase());
        const categoryMatches = category === "" || destination.category === category;
        return nameMatches && categoryMatches;
    });
    displayResults(filteredResults);
}

// Event listener para el envío del formulario
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput").value;
    const categorySelect = document.getElementById("categorySelect").value;
    searchDestinations(searchInput, categorySelect);
});

// Mostrar todos los destinos al cargar la página
displayResults(destinations);