let imaxVideo = document.querySelector(".Imax__video");
let imaxPlayBtn = document.querySelector(".Imax__play-btn");
imaxPlayBtn.addEventListener("click", function () {
    imaxPlayBtn.style.display = "none";
    imaxVideo.setAttribute("controls", true);
})