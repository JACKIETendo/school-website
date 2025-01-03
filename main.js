

document.querySelectorAll('.navbar-links').forEach(link => {
    link.addEventListener('click', () => {
        const section = link.getAttribute('data-section');
        const content = {
            staff: 'Our dedicated staff are committed to providing an exceptional learning environment.',
            spirituality: 'We foster spiritual growth and moral values to build a wholesome community.',
            security: 'Our school maintains a secure and safe environment for all students.',
            discipline: 'Discipline is the cornerstone of our success, encouraging responsibility and focus.',
            meals: 'Nutritious and balanced meals are provided daily to support student health.'
        };
        document.getElementById('info-section').innerHTML = `<p>${content[section]}</p>`;
    });
});

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


AOS.init();

// GSAP animation for cards
document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".features .card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3, // Delay between animations
    });
});

// Get the button element
const backToTopButton = document.getElementById('backToTop');

// Show or hide the button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Scroll to the top when the button is clicked
backToTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

let lastScrollTop = 0;
const topHeader = document.getElementById("topHeader");
const mainNavbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll Down
    topHeader.classList.add("hidden");
    mainNavbar.classList.add("hidden");
  } else {
    // Scroll Up
    topHeader.classList.remove("hidden");
    mainNavbar.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll
});


function downloadWork(fileName) {
    alert(`Starting download for ${fileName}`);
    // Simulate download (replace with actual file link)
    window.location.href = `files/${fileName}`;
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.gallery-section');
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
}
// Attach click event listener to images
document.querySelectorAll('.gallery-section img').forEach(img => {
    img.addEventListener('click', function () {
        // Get the source of the clicked image
        const src = this.src;

        // Set the source of the modal image
        const modalImage = document.getElementById('modalImage');
        modalImage.src = src;

        // Show the modal
        const galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
        galleryModal.show();
    });
});