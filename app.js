const tombol=document.getElementById("btnKamera");
const video=document.getElementById("video");
const status=document.getElementById("status");

tombol.addEventListener("click", aktifkanKamera);

async function aktifkanKamera(){

try{

const stream=await navigator.mediaDevices.getUserMedia({
video:true
});

video.srcObject=stream;

status.innerHTML="STATUS : KAMERA AKTIF";

}
catch(error){

status.innerHTML="STATUS : GAGAL AKSES KAMERA";

console.log(error);

}

}
