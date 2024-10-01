document.addEventListener('DOMContentLoaded', function() {
    const frontWord = document.querySelector('.front-word');
    const mainContent = document.querySelector('.main-content');

    // Hide main content initially
    if (mainContent) {
        mainContent.style.display = 'none';
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            // Slide the front word to the side
            frontWord.style.transition = 'transform 1s ease-in-out';
            frontWord.style.transform = 'translateX(-100%)';

            // Show the main content
            if (mainContent) {
                setTimeout(() => {
                    mainContent.style.display = 'block';
                    mainContent.style.animation = 'fadeIn 1s';
                }, 500);
            }

            document.querySelector('.front-word').classList.add('slide-up');
        setTimeout(() => {
            document.querySelector('h1').classList.add('fade-in');
            }, 500);

        }
    });
    frontWord.addEventListener('click', function(event) {
        // Slide the front word to the side
        frontWord.style.transition = 'transform 1s ease-in-out';
        frontWord.style.transform = 'translateX(-100%)';

        // Show the main content
        if (mainContent) {
            setTimeout(() => {
                mainContent.style.display = 'block';
                mainContent.style.animation = 'fadeIn 1s';
            }, 500);
        }

        document.querySelector('.front-word').classList.add('slide-up');
        setTimeout(() => {
            document.querySelector('h1').classList.add('fade-in');
        }, 500);
    });


});




// Add this CSS to your stylesheet or in a <style> tag in your HTML
// @keyframes fadeIn {
//     from { opacity: 0; }
//     to { opacity: 1; }
// }
