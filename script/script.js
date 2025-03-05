document.querySelectorAll('.q').forEach(q => {
    q.addEventListener('click', function () {
        let answer = this.querySelector('.answer');
        if (answer) {
            answer.classList.toggle('collapse');
        }
    });
});