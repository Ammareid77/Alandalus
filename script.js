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