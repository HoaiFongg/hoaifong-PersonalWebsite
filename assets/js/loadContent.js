// Hàm để tải nội dung HTML từ một tệp
function loadHTML(elementId, file) {
    return fetch(file)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Tải header và footer
Promise.all([
    loadHTML('nav', 'partials/navigation.html'),
    loadHTML('footer', 'partials/footer.html')
]).then(() => {
    document.body.classList.remove('hidden'); // Hiện nội dung sau khi tải xong
});
