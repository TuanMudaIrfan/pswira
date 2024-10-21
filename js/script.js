// Ambil elemen
const nameInputPage = document.getElementById('name-input-page');
const birthdayMessagePage = document.getElementById('birthday-message-page');
const nameInput = document.getElementById('nameInput');
const nameDisplay = document.getElementById('nameDisplay');
const submitBtn = document.getElementById('submitBtn');
const backBtn = document.getElementById('backBtn');

// Fungsi untuk menampilkan ucapan ulang tahun
submitBtn.addEventListener('click', function() {
    const name = nameInput.value.trim().toLowerCase();
    if (name.includes("annisa")) {
        // Jika nama mengandung "rifqa", tampilkan ucapan ulang tahun
        nameDisplay.textContent = nameInput.value.trim();
        nameInputPage.classList.add('hidden');
        birthdayMessagePage.classList.remove('hidden');
    } else {
        // Jika tidak mengandung "rifqa", tampilkan pesan peringatan
        alert('petunjuk : Annisa');
    }
});

// Fungsi untuk kembali ke halaman input nama
backBtn.addEventListener('click', function() {
    nameInputPage.classList.remove('hidden');
    birthdayMessagePage.classList.add('hidden');
    nameInput.value = '';
});
