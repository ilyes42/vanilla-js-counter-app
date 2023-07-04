let count = 0;

const countValue = document.getElementById("count-value");
const countAddBtn = document.getElementById("add");
const countSubBtn = document.getElementById("sub");

countValue.innerText = count;

countAddBtn.addEventListener("click", () => {
    count++;
    countValue.innerText = count;
});

countSubBtn.addEventListener("click", () => {
    count--;
    countValue.innerText = count;
});
