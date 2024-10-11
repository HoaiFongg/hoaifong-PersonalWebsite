// Khởi tạo EmailJS
(function () {
    emailjs.init("yfBDjKwQxwQeXHzT8"); // Thay YOUR_USER_ID bằng User ID từ EmailJS
})();

// Xử lý form liên hệ
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    emailjs.sendForm('service_contact', 'template_qhe0qaf', this)
        .then(function () {
            alert("Your message has been sent!");
        }, function (error) {
            alert("Failed to send message: " + JSON.stringify(error));
        });
});

