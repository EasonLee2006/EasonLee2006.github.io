document.addEventListener("DOMContentLoaded", function () {
    const envelopeWrapper = document.querySelector(".envelope-wrapper");
    let flapUpTimeout, flapDownTimeout;
    let opened = false;

    // When the mouse enters, start a timer to add the helper class after 500ms.
    envelopeWrapper.addEventListener("mouseenter", function () {
        flapUpTimeout = setTimeout(() => {
            envelopeWrapper.classList.add("flap-lower");
        }, 500); // 500ms delay (adjust to match your animation duration)
    });

    // When the mouse leaves, cancel the timer and remove the helper class.
    envelopeWrapper.addEventListener("mouseleave", function () {
        if (opened === true) {
            return;
        }
        clearTimeout(flapUpTimeout);
        flapDownTimeout = setTimeout(() => {
            envelopeWrapper.classList.remove("flap-lower");
        }, 600);
    });

    /**************** letter ***************/
    const letter = document.querySelector(".envelope .letter");

    envelopeWrapper.addEventListener("click", function (event) {
        // Prevent any click event on parent elements from interfering.
        event.stopPropagation();
        opened = opened ? false : true;

        // Get the current computed transform of the letter.
        const computedStyle = window.getComputedStyle(letter);
        const transformMatrix = computedStyle.transform; // e.g., "matrix(1, 0, 0, 1, 0, -30)"
        let startY = 0;
        if (transformMatrix && transformMatrix !== "none") {
            // The matrix is in the format: matrix(a, b, c, d, tx, ty)
            const matrixValues = transformMatrix.match(/matrix.*\((.+)\)/)[1].split(", ");
            startY = parseFloat(matrixValues[5]); // the sixth value is translateY
        }
        // Set the starting Y value as a CSS variable.
        letter.style.setProperty("--startY", `${startY}px`);


        // Add the animate class to trigger the keyframe animation.
        letter.classList.add("animate");

        // (Optional) Remove the click handler if you want the animation to run only once.
        letter.removeEventListener("click", arguments.callee);
        
        // particles
        const particlesContainer = document.querySelector('.particles');
    
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            // Randomize travel distances (adjust these values as desired)
            const tx = (Math.random() - 0.5) * 300 + "px";
            const ty = (Math.random() - 1) * 300 + "px"; // upward bias
            particle.style.setProperty('--tx', tx);
            particle.style.setProperty('--ty', ty);
            // Position the particle roughly at the center of the envelope
            particle.style.left = "50%";
            particle.style.top = "50%";
            particlesContainer.appendChild(particle);
            // Optionally remove the particle after animation completes (after 1s)
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    });

});
