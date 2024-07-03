document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const googleSearchBtn = document.querySelector('.google-search-btn');
    const feelingLuckyBtn = document.querySelector('.feeling-lucky-btn');
    const lensIcon = document.getElementById('lens-icon');
    const lensUploadContainer = document.getElementById('lens-upload-container');
    const lensSearchBtn = document.getElementById('lens-search-btn');
    const lensCloseBtn = document.getElementById('lens-close');
    const lensInput = document.querySelector('.lens-input');

    function searchGoogle(query) {
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }

    function feelingLucky(query) {
        if (query) {
            window.location.href = `https://www.google.com/search?btnI=I&q=${encodeURIComponent(query)}`;
        }
    }

    googleSearchBtn.addEventListener('click', function() {
        searchGoogle(searchInput.value);
    });

    feelingLuckyBtn.addEventListener('click', function() {
        feelingLucky(searchInput.value);
    });

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchGoogle(searchInput.value);
        }
    });

    lensIcon.addEventListener('click', function() {
        lensUploadContainer.classList.toggle('active');
    });

    lensSearchBtn.addEventListener('click', function() {
        if (lensInput.value) {
            console.log(`Searching for image: ${lensInput.value}`);
            // Implement your logic to handle the pasted image link here
        }
    });

    lensCloseBtn.addEventListener('click', function() {
        lensUploadContainer.classList.remove('active');
    });
});
