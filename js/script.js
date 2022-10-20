const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    // Making 5s delay in website loading
    setTimeout((5) => {

        loader.classList.add('fadeOut');
        setTimeout((5) => {
            loader.style.display = 'none';
        }, 1000);

    }, 5000);

});
