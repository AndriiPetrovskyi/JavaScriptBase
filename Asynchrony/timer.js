const displayTimer = document.querySelector('.display_timer')
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

// const date = new Date();
// console.log(date)

// const date = new Date(99999000000);
// console.log(date)
// // console.log(date.getTime())

// const currentDate = Date.now()
// console.log(currentDate)

// const delta = currentDate - date.getDate();
// console.log(delta)


const timer = {
    startTimeId: null,
    isActive: false,
    


    start() {      
        if (this.isActive) {
            return;
        }
        
        this.isActive = true;
        const startTime = Date.now();

        this.startTimeId = setInterval(() => {
            const currentDate = Date.now();
            const delta = currentDate - startTime;
            // console.log(delta);
            updateClockface(delta);
        }, 1000)
    },

    stop(id) {
        this.isActive = false;
        clearInterval(this.startTimeId);
        this.startTimeId = null;
        updateClockface(0);
    }
}

startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));
// timer.start()

function updateClockface(time) {
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    // console.log(`${hours}:${mins}:${secs}`)
    displayTimer.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
}

