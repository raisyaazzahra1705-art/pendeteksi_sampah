const tombol = document.getElementById("btnKamera");

tombol.addEventListener("click", async () => {

const video = document.getElementById("video");
const status = document.getElementById("status");

try {

const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
});

video.srcObject = stream;

await video.play();

status.textContent = "STATUS : KAMERA AKTIF";

}
catch(error){

status.textContent = "STATUS : GAGAL AKSES KAMERA";

console.log(error);

}

});
