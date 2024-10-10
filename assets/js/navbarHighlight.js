document.addEventListener("DOMContentLoaded", function () {
    // Tải nội dung từ navigation.html và chèn vào vị trí mong muốn
    fetch('partials/navigation.html')
        .then(response => response.text())
        .then(data => {
            // Chèn nội dung của navigation.html ngay sau thẻ <body> mở
            const body = document.querySelector('body');
            body.insertAdjacentHTML('afterbegin', data);

            // Sau khi chèn nội dung, đánh dấu trang hiện tại
            const currentLocation = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentLocation) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        });
});
