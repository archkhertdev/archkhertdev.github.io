
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('live-clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

function goToInfo() {
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("info").classList.remove("hidden");
}
