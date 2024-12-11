
function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});








// Select elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const clickableImages = document.querySelectorAll('.clickable-img img');

// Show lightbox on image click
clickableImages.forEach((img) => {
    img.parentElement.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default behavior of <a>
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

// Close lightbox on close button click
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox on clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});











const toggleScrolling = (state) => {
    document.body.style.overflow = state ? 'hidden' : '';
};

clickableImages.forEach((img) => {
    img.addEventListener('click', () => {
        console.log("Image clicked"); // Debugging line
        lightbox.classList.add('show');
        lightboxImg.src = img.src;
    });
});


closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('show');
    toggleScrolling(false);
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('show');
        toggleScrolling(false);
    }
});
