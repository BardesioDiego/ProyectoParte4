
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
    const travel_recommendations_api ={
        "countries": [
          {
            "id": 1,
            "name": "Australia",
            "cities": [
              {
                "name": "Sydney, Australia",
                "imageUrl": "enter_your_image_for_sydney.jpg",
                "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
              },
              {
                "name": "Melbourne, Australia",
                "imageUrl": "enter_your_image_for_melbourne.jpg",
                "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
              }
            ]
          },
          {
            "id": 2,
            "name": "Japan",
            "cities": [
              {
                "name": "Tokyo, Japan",
                "imageUrl": "enter_your_image_for_tokyo.jpg",
                "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
              },
              {
                "name": "Kyoto, Japan",
                "imageUrl": "enter_your_image_for_kyoto.jpg",
                "description": "Known for its historic temples, gardens, and traditional tea houses."
              }
            ]
          },
          {
            "id": 3,
            "name": "Brazil",
            "cities": [
              {
                "name": "Rio de Janeiro, Brazil",
                "imageUrl": "enter_your_image_for_rio.jpg",
                "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
              },
              {
                "name": "São Paulo, Brazil",
                "imageUrl": "enter_your_image_for_sao-paulo.jpg",
                "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
              }
            ]
          }
        ],
        "temples": [
          {
            "id": 1,
            "name": "Angkor Wat, Cambodia",
            "imageUrl": "enter_your_image_for_angkor-wat.jpg",
            "description": "A UNESCO World Heritage site and the largest religious monument in the world."
          },
          {
            "id": 2,
            "name": "Taj Mahal, India",
            "imageUrl": "enter_your_image_for_taj-mahal.jpg",
            "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
          }
        ],
        "beaches": [
          {
            "id": 1,
            "name": "Bora Bora, French Polynesia",
            "imageUrl": "enter_your_image_for_bora-bora.jpg",
            "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
          },
          {
            "id": 2,
            "name": "Copacabana Beach, Brazil",
            "imageUrl": "enter_your_image_for_copacabana.jpg",
            "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
          }
        ]
      }
    ;
    // Function to handle the search
    function searchPlace() {
      const input = document.getElementById('search').value.toLowerCase();
      const resultDiv = document.getElementById('search-results');
      
      // Clear previous results
      resultDiv.innerHTML = '';
      
         const searchResults = travel_recommendations_api[input];
         if(searchResults){
            let resultsHTML = "<div>";
            searchResults.forEach((result)=>{
                resultsHTML += `<div><h2>${result.name}</h2>`;
                resultsHTML += `<img src="${result.imageUrl}" alt="${result.name}">`;
                resultsHTML += `<p>${result.description}</p></div>`;
            });
            resultsHTML += "</div>";
            resultDiv.innerHTML = resultsHTML
         }else{
            resultDiv.innerHTML = 'Place not found.';
         }
    }
  
    // Add event listener to the search button
    const btnSearch = document.getElementById('btnSearch');
    btnSearch.addEventListener('click', searchPlace);
  });
  