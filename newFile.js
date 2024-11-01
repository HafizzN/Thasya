// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
            title: 'ini buat kamu ya sayanggg proud of youu semangat yaaa ',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d69a39',
            cancelButtonColor: '#d364',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
    }).then((result) => {
            if (result.isConfirmed) {
                    document.querySelector('.song').play();
                    resolveFetch().then(animationTimeline());
            } else {
                    resolveFetch().then(animationTimeline());
            }
    });
});
