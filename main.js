let pluss = document.querySelectorAll(".plus");
pluss.forEach((item) => {
    item.addEventListener("click", (eo) => {
        let content =
            eo.target.parentElement.parentElement.getElementsByClassName("para")[0];
        content.classList.toggle("active");
        if (content.classList.contains("active")) {
            content.style.height = `${content.scrollHeight}px`;
        } else {
            content.style.height = `0`;
        }
        eo.target.classList.toggle("hide-plus");
        if (eo.target.classList.contains("hide-plus")) {
            eo.target.innerText = "-";
        } else {
            eo.target.innerText = "+";
        }
    });
});
