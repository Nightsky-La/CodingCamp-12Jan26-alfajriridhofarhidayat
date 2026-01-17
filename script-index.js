document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.type-effect');
    const textToType = textElement.getAttribute('data-text');
    let index = 0;
    let isDeleting = false;
    
    const typeSpeed = 100; 
    const deleteSpeed = 50; 
    const pauseTime = 2000; 

    function typeWriter() {
        const currentText = textElement.textContent;

        if (!isDeleting) {
            textElement.textContent = textToType.substring(0, index + 1);
            index++;

            if (index === textToType.length) {
                isDeleting = true;
                setTimeout(typeWriter, pauseTime);
                return;
            }
        } else {
            textElement.textContent = textToType.substring(0, index - 1);
            index--;

            if (index === 0) {
                isDeleting = false;
            }
        }
        const speed = isDeleting ? deleteSpeed : typeSpeed;
        setTimeout(typeWriter, speed);
    }
    setTimeout(typeWriter, 1000); 
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close-modal");

function openModal(element) {
    modal.style.display = "block";

    const imgElement = element.querySelector('img');
    const titleElement = element.querySelector('h3');

    modalImg.src = imgElement.src;
    
    captionText.innerHTML = titleElement.innerText;
    
    document.body.style.overflow = "hidden";
}
closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});