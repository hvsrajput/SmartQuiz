document.querySelectorAll(".faq").forEach(container=>{
    let answer = container.querySelector(".faq-answer");
    let plus = container.querySelector(".plus");
    answer.style.display = "none";
    container.querySelector(".faq-question").addEventListener("click", ()=>{
        let isVisible = answer.style.display === "none";
        plus.style.transform = isVisible ? "rotate(45deg)" : "rotate(0deg)";
        answer.style.display = isVisible ? "block" : "none";
    })
});