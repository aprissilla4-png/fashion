 // Script untuk Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Script untuk Modal Detail Produk
        const productCards = document.querySelectorAll('.product-card');
        const modal = document.getElementById('product-modal');
        const closeModalBtn = document.getElementById('close-modal');
        
        const modalImg = document.getElementById('modal-img');
        const modalName = document.getElementById('modal-name');
        const modalPrice = document.getElementById('modal-price');
        const modalDiscount = document.getElementById('modal-discount');
        const modalDesc = document.getElementById('modal-desc');
        const whatsappLink = document.getElementById('whatsapp-link');

        const whatsappNumber = '6285774712676';

        productCards.forEach(card => {
            card.addEventListener('click', () => {
                // Ambil data dari atribut data-*
                const name = card.dataset.name;
                const price = card.dataset.price;
                const discount = card.dataset.discount;
                const image = card.dataset.image;
                const desc = card.dataset.desc;

                // Isi konten modal
                modalImg.src = image;
                modalName.textContent = name;
                modalPrice.textContent = price;
                modalDiscount.textContent = discount;
                modalDesc.textContent = desc;

                // Buat link WhatsApp
                const message = encodeURIComponent(`Halo A-GIN FASHION, saya ingin membeli produk ini:\n\n*${name}*\nHarga: *${discount}*`);
                whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${message}`;

                // Tampilkan modal
                modal.classList.remove('hidden');
            });
        });

        // Fungsi untuk menutup modal
        function closeModal() {
            modal.classList.add('hidden');
        }

        closeModalBtn.addEventListener('click', closeModal);

        // Tutup modal jika klik di luar kontennya
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    
