const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab');
        
        contents.forEach(content => {
            content.classList.remove('active');
            if(content.id === target) {
                content.classList.add('active');
            }
        });

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Set the first tab as active initially
buttons[0].click();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
