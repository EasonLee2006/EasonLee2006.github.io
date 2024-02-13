document.addEventListener('DOMContentLoaded', function () {
    const sentenceElement = document.getElementById('sentence');
    const button1 = document.getElementById('button1');
    
    // Array of sentences
    const sentences = [
        'I like apples.',
        'I love bananas.',
        'Hello world!'
    ];
    let currentSentenceIndex = 1;
    
    button1.addEventListener('click', function () {
        let button1CurrentFontSize = parseFloat(window.getComputedStyle(button1).fontSize);
        let button1CurrentPadding = parseFloat(window.getComputedStyle(button1).padding);
        
        button1CurrentFontSize += 8;
        button1CurrentPadding += 8;

        button1.style.fontSize = button1CurrentFontSize + 'px';
        button1.style.padding = button1CurrentPadding + 'px';
        
        // Change the sentence
        sentenceElement.textContent = sentences[currentSentenceIndex];
        
        button1.textContent = "bigger";
        
        // Increment the index or loop back to 0 if it exceeds the length of the array
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    });
  });
  