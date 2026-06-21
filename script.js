// Get DOM element selections
const projectIcon = document.getElementById('icon-project');
const projectWindow = document.getElementById('window-project');
const closeProjectBtn = document.getElementById('close-project');

// Open window when shortcut icon is clicked
projectIcon.addEventListener('click', () => {
    projectWindow.style.display = 'flex';
});

// Close window when 'X' button is clicked
closeProjectBtn.addEventListener('click', () => {
    projectWindow.style.display = 'none';
});

// Dynamic System Clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    clockElement.textContent = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock(); // Run instantly on load