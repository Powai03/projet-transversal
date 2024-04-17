// Get all the articles on the page
const articles = document.querySelectorAll('article');

// Add click event listener to each article
articles.forEach(article => {
    article.addEventListener('click', () => {
        // Add "active" class to the clicked article
        article.classList.toggle('actif');
    });
});