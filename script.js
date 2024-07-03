document.getElementById('advanced-search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const allWords = document.getElementById('allWords').value;
    const exactPhrase = document.getElementById('exactPhrase').value;
    const anyWords = document.getElementById('anyWords').value;
    const noneWords = document.getElementById('noneWords').value;

    const query = [
        allWords ? `allWords=${encodeURIComponent(allWords)}` : '',
        exactPhrase ? `exactPhrase=${encodeURIComponent(exactPhrase)}` : '',
        anyWords ? `anyWords=${encodeURIComponent(anyWords)}` : '',
        noneWords ? `noneWords=${encodeURIComponent(noneWords)}` : ''
    ].filter(Boolean).join('&');

    alert('Search query: ' + query);
    // Simulate a search operation
    console.log('Search query:', query);
});
