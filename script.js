// ===== OFFERS FROM GOOGLE SHEET =====
const sheetURL = "https://opensheet.elk.sh/1bxBxVy_2-1vWj36PX15656heP7d3Ehq93_rPuu4wWoA/Sheet%201";

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {
    const offer = data[0]; // أول صف في Sheet
    const titleEl = document.getElementById("offer-title");
    const descEl = document.getElementById("offer-desc");

    if (titleEl) titleEl.innerText = offer.title || "لا يوجد عنوان";
    if (descEl) descEl.innerText = offer.description || "لا يوجد وصف";
  })
  .catch(err => {
    console.error("Error loading offer from Sheet:", err);
    const titleEl = document.getElementById("offer-title");
    if (titleEl) titleEl.innerText = "فشل تحميل العرض";
  });

// ===== MENU CAROUSEL FOR MULTIPLE SLIDERS =====
document.addEventListener("DOMContentLoaded", function() {
    
    // --- الجزء الخاص بالـ Slider ---
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        const container = slider.querySelector(".slides");
        const slidesCount = slider.querySelectorAll(".slides img").length;
        const nextBtn = slider.querySelector(".slide-btn.right");
        const prevBtn = slider.querySelector(".slide-btn.left");
        
        let counter = 0;

        if (nextBtn && prevBtn && container) {
            nextBtn.addEventListener("click", () => {
                counter++;
                if (counter >= slidesCount) {
                    counter = 0; // يرجع للصورة الأولى
                }
                container.style.transform = `translateX(${-counter * 100}%)`;
            });

            prevBtn.addEventListener("click", () => {
                counter--;
                if (counter < 0) {
                    counter = slidesCount - 1; // يروح لآخر صورة
                }
                container.style.transform = `translateX(${-counter * 100}%)`;
            });
        }
    });

    // --- الجزء الخاص بجلب العروض من Google Sheets ---
    const sheetURL = "https://opensheet.elk.sh/1bxBxVy_2-1vWj36PX15656heP7d3Ehq93_rPuu4wWoA/Sheet%201";

    fetch(sheetURL)
    .then(res => res.json())
    .then(data => {
        const titleEl = document.getElementById("offer-title");  
        const descEl = document.getElementById("offer-desc");  

        if (data && data.length > 0) {
            const offer = data[0]; 
            if (titleEl) titleEl.innerText = offer.title || "عرض جديد!";  
            if (descEl) descEl.innerText = offer.description || "لا يوجد وصف";
        }
    })
    .catch(err => {
        console.error("Error loading offer:", err);
        const titleEl = document.getElementById("offer-title");
        if (titleEl) titleEl.innerText = "الأندلس.. دايماً معاك";
    });
});
