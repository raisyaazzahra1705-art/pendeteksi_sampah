const tombol = document.getElementById("btnKamera");

tombol.addEventListener("click", async () => {

const video = document.getElementById("video");
const status = document.getElementById("status");

try {

status.textContent="Meminta izin kamera...";

const stream = await navigator.mediaDevices.getUserMedia({
    video:true,
    audio:false
});

video.srcObject = stream;

video.onloadedmetadata = () => {
    video.play();
};

status.textContent="STATUS : KAMERA AKTIF";

}
catch(error){

status.textContent="ERROR : " + error.name;

console.log(error);

}

});
