
document.addEventListener('DOMContentLoaded', () => {
    const horses = {
        matt: document.getElementById('horse-matt'),
        dan: document.getElementById('horse-dan'),
        danny: document.getElementById('horse-danny'),
        ryan: document.getElementById('horse-ryan')
    };

    const positions = { matt: 0, dan: 0, danny: 0, ryan: 0 };

    function moveHorse(name, points) {
        const trackWidth = window.innerWidth - 120;
        const moveX = (points / 100) * trackWidth;
        horses[name].style.left = `${moveX}px`;
    }

    // Example movement values
    moveHorse('matt', 70);
    moveHorse('dan', 50);
    moveHorse('danny', 30);
    moveHorse('ryan', 90);
});
