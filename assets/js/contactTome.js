// Import thư viện EmailJS từ CDN
const emailjsScript = document.createElement("script");
emailjsScript.src = "https://cdn.emailjs.com/dist/email.min.js";
document.head.appendChild(emailjsScript);

// Khởi tạo EmailJS sau khi script đã được tải
emailjsScript.onload = function () {
    emailjs.init("yfBDjKwQxwQeXHzT8"); // Thay YOUR_USER_ID bằng User ID từ EmailJS
};

// Giả lập xử lý form liên hệ sau khi EmailJS đã sẵn sàng
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn việc gửi form mặc định

    // Gửi thông tin từ form qua EmailJS
    emailjs.sendForm('service_contact', 'template_qhe0qaf', this)
        .then(function () {
            alert('Your message has been sent!');
        }, function (error) {
            alert('Failed to send message. Please try again later.');
        });
});
