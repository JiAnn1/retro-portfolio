// Get DOM element selections
const projectIcon = document.getElementById('icon-project');

// Open the live Streamlit app in a brand new browser tab cleanly
projectIcon.addEventListener('click', () => {
    window.open('https://jiann1-ai-video-planner.streamlit.app', '_blank');
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