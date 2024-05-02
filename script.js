const imgArray = [
    "images/whathepoyo.webp",
    "images/yumkirb.gif",
    "images/kirbdance.gif",
    "images/nomkirb.gif",
    "images/suck.gif"
];

function generateImg() {
    const randomIndex = Math.floor(Math.random() * imgArray.length);
    const displayImg = document.getElementById("displayimg");
    displayImg.innerHTML = `<img src="${imgArray[randomIndex]}" alt="Random Kirby Image" class="kirby-image">`;
}
