document.addEventListener("DOMContentLoaded", function() {
    
    function typeText(element, texts, speed) {
        var index = 0;
        var textIndex = 0;
        var typingText = '';
        var isDeleting = false;

        
        function type() {
            var currentText = texts[textIndex];

            if (isDeleting) {
                typingText = currentText.substring(0, typingText.length - 1);
            } else {
                typingText = currentText.substring(0, typingText.length + 1);
            }

            element.textContent = typingText;

            var typeSpeed = isDeleting ? speed / 2 : speed;

            if (!isDeleting && typingText === currentText) {
                typeSpeed = 1500;
                isDeleting = true;
            } else if (isDeleting && typingText === '') {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(type, typeSpeed);
        }

        
        type();
    }

  
    var typingElement1 = document.querySelector(".typing");
    typeText(typingElement1, ["Confident","Stylish","Smart","Fashionable"], 100);

});