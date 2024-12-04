const progressBar = document.querySelector('.progress-bar');
let progress = 0;

function updateProgressBar() {
    progress += 10;
    progressBar.style.width = progress + '%';

    if (progress >= 100) {
        clearInterval(interval);
    }
}

const interval = setInterval(updateProgressBar, 500);