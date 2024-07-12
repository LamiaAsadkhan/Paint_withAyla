// Function to display the clicked painting in a modal
function showPainting(imageName) {
    var modal = document.getElementById("paintingModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = "{{ url_for('static', filename='images/') }}" + imageName;
}

function closeModal() {
    var modal = document.getElementById("paintingModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("paintingModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
