document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(
      ".content_1, .content_2, .content_3, .content_4"
    );
    window.onload = function() {
        alert("Chào mừng bạn đến với Ngũ Đại Lão Tin Đà Nẵng")
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Thêm class .visible khi xuất hiện
          } else {
            entry.target.classList.remove("visible"); // Xóa class .visible khi ra khỏi viewport
          }
        });
      },
      { threshold: 0.1 }
    ); // 0.1 nghĩa là phần tử chỉ cần 10% xuất hiện trong viewport là kích hoạt

    elements.forEach((element) => {
      observer.observe(element);
    });
  });