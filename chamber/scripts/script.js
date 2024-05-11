document.addEventListener("DOMContentLoaded", function() {
    // LastModified
    var lastModifiedSpan = document.getElementById("lastModified");
    var lastModified = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModified.toLocaleString();
});

const apiKey = '589eb38416d3410ba6d212507240405';

//Weather
fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Tulsa&aqi=no`)
    .then(response => response.json())
    .then(data => {
        const temperature = data.current.temp_f;
        const weatherDescription = data.current.condition.text;
        const weatherIconUrl = data.current.condition.icon; 

        const temperatureElement = document.querySelector('.temperature');
        const descriptionElement = document.querySelector('.description');
        const weatherIconElement = document.querySelector('.weather-icon');
        
        temperatureElement.textContent = temperature;
        descriptionElement.textContent = weatherDescription;
        weatherIconElement.src = weatherIconUrl;
    });

function toggleMenu() {
    var mobileMenu = document.querySelector(".mobile-menu .menu");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
}
//Calendar
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
});
//Lazyfunction
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll(".lazy-image");

    function fadeInImages() {
        lazyImages.forEach(function(img) {
            const rect = img.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const threshold = rect.height * 0.2; 
            if (rect.top <= windowHeight && rect.bottom >= threshold) {
                img.style.opacity = 1; 
            } else {
                img.style.opacity = 0;
            }
        });
    }

    fadeInImages();
    window.addEventListener("scroll", fadeInImages);
});
//Sidebar
document.addEventListener("DOMContentLoaded", function() {
    var lastVisit = localStorage.getItem("lastVisit");
    console.log("Last visit:", lastVisit); 
    
    if (lastVisit) {
        lastVisit = parseInt(lastVisit); 
        
        var currentTime = Date.now(); 
        console.log("Current time:", currentTime); 
        
        var differenceInMilliseconds = currentTime - lastVisit;
        var differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)); 
        console.log("Difference in days:", differenceInDays); 

        var sidebarMessage = "";
        if (differenceInDays === 0) {
            sidebarMessage = "Back so soon! Awesome!";
        } else if (differenceInDays === 1) {
            sidebarMessage = "You last visited 1 day ago.";
        } else {
            sidebarMessage = "You last visited " + differenceInDays + " days ago.";
        }
    } else {
        var currentTime = Date.now();
        sidebarMessage = "Welcome! Let us know if you have any questions.";
    }
    
    var sidebarContent = document.querySelector(".sidebar-content");
    sidebarContent.textContent = sidebarMessage;

    localStorage.setItem("lastVisit", currentTime.toString()); 
});


      
    
    
   