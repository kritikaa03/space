document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");
    const closeModal = document.getElementById("closeModal");

    function openModal(imgSrc, imgCaption) {
        modal.style.display = "block";
        modalImage.src = imgSrc;
        caption.innerText = imgCaption; // Set the caption here
    }

    document.querySelectorAll('.map-image').forEach((image) => {
        image.onclick = () => openModal(image.src, image.getAttribute('data-caption'));
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    };

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
    
});
