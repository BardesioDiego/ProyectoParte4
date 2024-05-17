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


//search

// Function to handle the search
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle the search
    function searchPlace() {
      const input = document.getElementById('search').value.toLowerCase();
      const resultDiv = document.getElementById('search-results');
      
      // Clear previous results
      resultDiv.innerHTML = '';
  
      // Fetch data from the JSON file
      fetch('travel_recomendation_api.json')
        .then(response => response.json())
        .then(data => {
          const temple = data.temples.find(item => item.name.toLowerCase() === input);
          const beach = data.beaches.find(item => item.name.toLowerCase() === input);
  
          if (temple) {
            resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
            resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="${temple.name}">`;
            resultDiv.innerHTML += `<p>${temple.description}</p>`;
          } else if (beach) {
            resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
            resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="${beach.name}">`;
            resultDiv.innerHTML += `<p>${beach.description}</p>`;
          } else {
            resultDiv.innerHTML = 'Place not found.';
          }
        })
        .catch(error => {
          console.error('Error:', error);
          resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
    }
  
    // Add event listener to the search button
    const btnSearch = document.getElementById('btnSearch');
    btnSearch.addEventListener('click', searchPlace);
  });
  