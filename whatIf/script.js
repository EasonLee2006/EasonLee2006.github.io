document.addEventListener('DOMContentLoaded', function () {
    const sentenceElement = document.getElementById('sentence');
    const changeButton = document.getElementById('changeButton');
    
    // Array of sentences
    const sentences = [
      'I like apples.',
      'I love bananas.',
      'Hello world!'
    ];
    let currentSentenceIndex = 1;
  
    changeButton.addEventListener('click', function () {
      // Change the sentence
      sentenceElement.textContent = sentences[currentSentenceIndex];
  
      // Increment the index or loop back to 0 if it exceeds the length of the array
      currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    });
  });
  