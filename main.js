document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(
      ".content_1, .content_2, .content_3, .content_4"
    );
    window.onload = function() {
        alert("Chào mừng bạn đến với Ngũ Đại Lão Tinh Đà Nẵng")
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); 
          } else {
            entry.target.classList.remove("visible"); 
          }
        });
      },
      { threshold: 0.1 }
    ); 

    elements.forEach((element) => {
      observer.observe(element);
    });
  });
