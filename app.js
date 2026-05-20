const video = document.getElementById("webcam");
const overlay = document.getElementById("overlay");
const ctx = overlay.getContext("2d");

const statusText = document.getElementById("status");
const startBtn = document.getElementById("btn-init");

startBtn.addEventListener("click", startCamera);

async function startCamera() {

    try {

        const stream =
        await navigator.mediaDevices.getUserMedia({

            video: true,
            audio: false
        });

        video.srcObject = stream;

        await video.play();

        statusText.innerText =
        "STATUS : KAMERA AKTIF";

        startBtn.style.display = "none";

        drawBox();

    } catch (error) {

        console.log(error);

        statusText.innerText =
        "KAMERA GAGAL DIAKSES";
    }
}

function drawBox() {

    ctx.strokeStyle = "#00ff00";

    ctx.lineWidth = 4;

    ctx.strokeRect(
        180,
        100,
        250,
        220
    );

    ctx.fillStyle = "#00ff00";

    ctx.font = "bold 20px Arial";

    ctx.fillText(
        "Objek Terdeteksi",
        180,
        90
    );
}const video = document.getElementById("webcam");
const overlay = document.getElementById("overlay");
const ctx = overlay.getContext("2d");

const statusText = document.getElementById("status");
const startBtn = document.getElementById("btn-init");

startBtn.addEventListener("click", startCamera);

async function startCamera() {

    try {

        const stream =
        await navigator.mediaDevices.getUserMedia({

            video: true,
            audio: false
        });

        video.srcObject = stream;

        await video.play();

        statusText.innerText =
        "STATUS : KAMERA AKTIF";

        startBtn.style.display = "none";

        drawBox();

    } catch (error) {

        console.log(error);

        statusText.innerText =
        "KAMERA GAGAL DIAKSES";
    }
}

function drawBox() {

    ctx.strokeStyle = "#00ff00";

    ctx.lineWidth = 4;

    ctx.strokeRect(
        180,
        100,
        250,
        220
    );

    ctx.fillStyle = "#00ff00";

    ctx.font = "bold 20px Arial";

    ctx.fillText(
        "Objek Terdeteksi",
        180,
        90
    );
}
