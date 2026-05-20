async function aktifkanKamera(){

let video=document.getElementById("video");
let status=document.getElementById("status");

try{

const stream=await navigator.mediaDevices.getUserMedia({
video:true
});

video.srcObject=stream;

status.innerHTML=
"STATUS : KAMERA AKTIF";

}
catch(err){

status.innerHTML=
"STATUS : GAGAL AKSES KAMERA";

console.log(err);

}

}
