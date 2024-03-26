document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        fetch(this.action, {
            method: 'POST',
            body: new FormData(this),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            alert('Pesan terkirim.');
            window.location.reload();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Pesan gagal terkirim. Silakan coba lagi.');
        });
    });
});