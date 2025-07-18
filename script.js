// DOM Elements
const modal = document.getElementById('projectModal');
const projectFrame = document.getElementById('projectFrame');
const closeBtn = document.querySelector('.close');

// Project data mapping
const projects = {
    'CharaterCounter': {
        path: 'projects/CharaterCounter/index.html',
        title: 'Karakter Sayıcı'
    },
    'Fire-Trail-Animation': {
        path: 'projects/Fire-Trail-Animation/index.html',
        title: 'Ateş İzi Animasyonu'
    },
    'Adam-Asmaca-Web': {
        path: 'projects/Adam-Asmaca-Web/index.html',
        title: 'Adam Asmaca Oyunu'
    },
    'Dark-Mode-Toggle': {
        path: 'projects/Dark-Mode-Toggle/index.html',
        title: 'Dark Mode Toggle'
    },
    'Blurred-Background': {
        path: 'projects/Blurred-Background/index.html',
        title: 'Blurred Background'
    },
    'Image-Slider': {
        path: 'projects/Image-Slider/index.html',
        title: 'Image Slider'
    },
    'Random-Photo': {
        path: 'projects/Random-Photo/index.html',
        title: 'Random Photo Generator'
    },
    'Sound-Kit': {
        path: 'projects/Sound-Kit/index.html',
        title: 'Sound Kit'
    },
    'DigitalClock': {
        path: 'projects/DigitalClock/index.html',
        title: 'Digital Clock'
    }
};

// Open project in modal
function openProject(projectName) {
    const project = projects[projectName];
    if (project) {
        projectFrame.src = project.path;
        modal.style.display = 'block';
        modal.classList.add('show');
        
        // Update page title
        document.title = `${project.title} - Proje Portföyü`;
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    modal.classList.remove('show');
    projectFrame.src = '';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
    
    // Restore original page title
    document.title = 'Proje Portföyü - Küçük Projeler';
}

// Event listeners
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});



// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Add hover effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add click effect for buttons
document.querySelectorAll('.view-project-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .view-project-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Auto-detect and add new projects
function autoDetectProjects() {
    // This function can be expanded to automatically detect new projects
    // For now, it's a placeholder for future functionality
    console.log('Auto-detect projects functionality ready');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    autoDetectProjects();
    
    // Add some nice console message
    console.log('%c🚀 Proje Portföyü yüklendi!', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%cProjelerinizi projects/ klasörüne ekleyerek otomatik olarak portföyde görünecekler.', 'color: #666; font-size: 14px;');
}); 