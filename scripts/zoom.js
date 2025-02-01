// Fungsi untuk efek zoom mengikuti cursor
document.querySelectorAll('.gallery-item').forEach(item => {
    const img = item.querySelector('img');

    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posisi X cursor relatif terhadap gambar
        const y = e.clientY - rect.top; // Posisi Y cursor relatif terhadap gambar

        const scale = 2; // Faktor zoom
        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = `scale(${scale})`;
    });

    item.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)'; // Kembalikan ke ukuran normal saat cursor meninggalkan gambar
    });
});