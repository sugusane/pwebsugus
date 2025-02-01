// Fungsi untuk membuka modal dan memperbesar gambar
function zoomImage(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('zoomedImage');
    modal.style.display = 'flex';
    modalImg.src = src;
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Tutup modal saat mengklik di luar gambar
window.onclick = function (event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};