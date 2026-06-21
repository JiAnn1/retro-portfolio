// Grab Desktop Elements
const projectIcon = document.getElementById('icon-project');
const aboutIcon = document.getElementById('icon-about');
const aboutWindow = document.getElementById('window-about');
const closeAboutBtn = document.getElementById('close-about');

// 1. Project Shortcut -> Opens your live streamlit app in a clean tab
projectIcon.addEventListener('click', () => {
    window.open('https://ai-video-planner-fym7wjdiceubukaaatbkuc.streamlit.app/', '_blank');
});

// 2. About Me Shortcut -> Opens the retro pop-up container
aboutIcon.addEventListener('click', () => {
    aboutWindow.style.display = 'flex';
});

// 3. Close Button -> Hides the pop-up window panel
closeAboutBtn.addEventListener('click', () => {
    aboutWindow.style.display = 'none';
});

// Dynamic Taskbar System Clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    clockElement.textContent = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();