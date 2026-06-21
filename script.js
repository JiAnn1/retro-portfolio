// Grab Desktop Elements
const projectIcon = document.getElementById('icon-project');
const aboutIcon = document.getElementById('icon-about');
const aboutWindow = document.getElementById('window-about');
const closeAboutBtn = document.getElementById('close-about');

// 1. Project Shortcut -> Opens Streamlit in a clean tab
projectIcon.addEventListener('click', () => {
    window.open('https://ai-video-planner-fym7wjdiceubukaaatbkuc.streamlit.app/', '_blank');
});

// 2. About Me Shortcut -> Opens window with a subtle popup state
aboutIcon.addEventListener('click', () => {
    aboutWindow.style.display = 'flex';
    // Center it on open
    aboutWindow.style.top = '15%';
    aboutWindow.style.left = '25%';
});

// 3. Close Button -> Hides the pop-up window panel
closeAboutBtn.addEventListener('click', () => {
    aboutWindow.style.display = 'none';
});

// --- ADVANCED FEATURE: DRAGGABLE WINDOW ENGINE ---
makeDraggable(aboutWindow);

function makeDraggable(windowElement) {
    const header = windowElement.querySelector('.window-header');
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        // Calculate where the cursor is relative to the top-left of the window frame
        offsetX = e.clientX - windowElement.getBoundingClientRect().left;
        offsetY = e.clientY - windowElement.getBoundingClientRect().top;
        header.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        // Compute new X and Y coordinates based on cursor speed and limits
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Keep the window inside the boundaries of the viewport
        if (newY < 0) newY = 0;
        
        windowElement.style.left = `${newX}px`;
        windowElement.style.top = `${newY}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        header.style.cursor = 'grab';
    });
}

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
updateClock();// Grab Desktop Elements
const projectIcon = document.getElementById('icon-project');
const aboutIcon = document.getElementById('icon-about');
const aboutWindow = document.getElementById('window-about');
const closeAboutBtn = document.getElementById('close-about');

// 1. Project Shortcut -> Opens Streamlit in a clean tab
projectIcon.addEventListener('click', () => {
    window.open('https://ai-video-planner-fym7wjdiceubukaaatbkuc.streamlit.app/', '_blank');
});

// 2. About Me Shortcut -> Opens window with a subtle popup state
aboutIcon.addEventListener('click', () => {
    aboutWindow.style.display = 'flex';
    // Center it on open
    aboutWindow.style.top = '15%';
    aboutWindow.style.left = '25%';
});

// 3. Close Button -> Hides the pop-up window panel
closeAboutBtn.addEventListener('click', () => {
    aboutWindow.style.display = 'none';
});

// --- ADVANCED FEATURE: DRAGGABLE WINDOW ENGINE ---
makeDraggable(aboutWindow);

function makeDraggable(windowElement) {
    const header = windowElement.querySelector('.window-header');
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        // Calculate where the cursor is relative to the top-left of the window frame
        offsetX = e.clientX - windowElement.getBoundingClientRect().left;
        offsetY = e.clientY - windowElement.getBoundingClientRect().top;
        header.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        // Compute new X and Y coordinates based on cursor speed and limits
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Keep the window inside the boundaries of the viewport
        if (newY < 0) newY = 0;
        
        windowElement.style.left = `${newX}px`;
        windowElement.style.top = `${newY}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        header.style.cursor = 'grab';
    });
}

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