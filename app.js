// select element 
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function () {
    // if (modalOverlay.classList.contains('open-modal')) {
    //     modalOverlay.classList.remove('open-modal');
    // } else {
    //     modalOverlay.classList.add('open-modal');
    // };

    // one line code 
    modalOverlay.classList.toggle('open-modal');
});

// close btn event 
closeBtn.addEventListener('click', function () {
    if (modalOverlay.classList.contains('open-modal')) {
        modalOverlay.classList.remove('open-modal');
    }
    // modalOverlay.classList.toggle('open-modal')
});