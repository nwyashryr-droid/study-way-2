document.addEventListener("DOMContentLoaded", () => {
  console.log("Study Way 2 جاهز");

  // مثال بسيط باش نتأكد كلش يخدم
  const btns = document.querySelectorAll(".button");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("زر شغال ✔");
    });
  });
});
