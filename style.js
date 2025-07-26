// Mr Stealer Start
        /* <![CDATA[ */
        document.addEventListener('DOMContentLoaded', () => {
            const popupOverlay = document.getElementById('welcomePopupOverlay');
            const popupMessageElement = document.getElementById('popupMessage');
            const closeButton = document.getElementById('closePopupButton');
            const messageText = "Mr Stealer Community";
            let charIndex = 0;
            let typingTimeout;

            const hasPopupBeenShown = sessionStorage.getItem('hackerPopupShown');

            function typeWriter() {
                if (charIndex < messageText.length) {
                    popupMessageElement.textContent += messageText.charAt(charIndex);
                    charIndex++;
                    typingTimeout = setTimeout(typeWriter, 100);
                }
            }

            function showPopup() {
                popupOverlay.classList.add('show');
                charIndex = 0;
                popupMessageElement.textContent = '';
                typeWriter();
                sessionStorage.setItem('hackerPopupShown', 'true');
            }

            function hidePopup() {
                clearTimeout(typingTimeout);
                popupOverlay.classList.remove('show');
            }

            if (!hasPopupBeenShown) {
                showPopup();
            }

            closeButton.addEventListener('click', hidePopup);

            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    hidePopup();
                }
            });
        });
        /* ]]> */
        // Mr Stealer Ended
