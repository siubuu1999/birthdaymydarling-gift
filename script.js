// Hàm hiện thông điệp và hiển thị album video
function showMessage() {
  const message = document.getElementById("message");
  message.classList.toggle("hidden");

  // Gọi hàm hiển thị album video khi nhận quà
  if (!document.getElementById("video-album")) {
    showVideoAlbum();
  }
  // Hiệu ứng trái tim bắn bùm bùm
  for (let i = 0; i < 20; i++) {
    createHeartBurst();
  }
}
// Hàm tạo hiệu ứng trái tim bắn bùm bùm
function createHeartBurst() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Vị trí ngẫu nhiên trong trang
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * 100 + "vh";

  // Thời gian bắn ngẫu nhiên
  heart.style.animationDuration = Math.random() * 0.5 + 1 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000); // Xóa trái tim sau khi bắn
}

// Mảng chứa danh sách các video trong album
const videoList = [
  { title: "Trước khi gặp iem 👩🏻😋", src: "video1.mov" },
  { title: "Khi là đang gặp nhau đó 🥰🫠", src: "video2.mp4" },
  { title: "Rồi sau đó thì......🤕🤒", src: "video3.mov" },
  // Thêm các video khác vào đây
];

// Hàm hiển thị album video
function showVideoAlbum() {
  const albumContainer = document.createElement("div");
  albumContainer.id = "video-album";
  albumContainer.style.marginTop = "20px";

  const videoPlayer = document.createElement("video");
  videoPlayer.id = "main-video";
  videoPlayer.width = 400;
  videoPlayer.controls = true;
  const videoSource = document.createElement("source");
  videoSource.src = videoList[0].src;
  videoSource.type = "video/mp4";
  videoPlayer.appendChild(videoSource);
  albumContainer.appendChild(videoPlayer);

  const videoButtons = document.createElement("div");
  videoButtons.id = "video-list";
  videoButtons.style.marginTop = "10px";

  // Tạo nút cho mỗi video trong album
  videoList.forEach((video) => {
    const button = document.createElement("button");
    button.innerText = video.title;
    button.style.margin = "5px";
    button.onclick = () => changeVideo(video.src);
    videoButtons.appendChild(button);
  });

  albumContainer.appendChild(videoButtons);
  document.getElementById("message").appendChild(albumContainer);
}

// Hàm đổi video khi nhấn vào nút
function changeVideo(videoSrc) {
  const videoPlayer = document.getElementById("main-video");
  const videoSource = videoPlayer.querySelector("source");

  videoSource.src = videoSrc;
  videoPlayer.load();
  videoPlayer.play();
}
// Hàm đổi video và tạo hiệu ứng trái tim bay lên
function changeVideo(videoSrc) {
  const videoPlayer = document.getElementById("main-video");
  const videoSource = videoPlayer.querySelector("source");

  videoSource.src = videoSrc;
  videoPlayer.load();
  videoPlayer.play();

  // Tạo hiệu ứng trái tim bay lên khi chuyển video
  for (let i = 0; i < 10; i++) {
    createTransitionHeart();
  }
}

// Hàm tạo trái tim bay lên khi chuyển video
function createTransitionHeart() {
  const heart = document.createElement("div");
  heart.classList.add("transition-heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 1 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000); // Xóa trái tim sau khi bay lên
}
