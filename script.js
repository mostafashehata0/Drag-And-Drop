const words = document.querySelectorAll(".word");
const dropTargets = document.querySelectorAll(".drop-target");

words.forEach((word) => {
  word.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", word.dataset.word);
  });
});

dropTargets.forEach((target) => {
  target.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  target.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const word = document.createElement("span");
    word.textContent = data;
    const targetWord = e.target.dataset.target;

    // Check if the dropped word matches the target word for this drop target
    if (targetWord === data) {
      e.target.textContent = ""; // Clear the drop target before appending the word
      e.target.appendChild(word);

      // Remove the dropped word from the list
      const droppedWord = document.querySelector(`.word[data-word='${data}']`);
      if (droppedWord) {
        droppedWord.parentNode.removeChild(droppedWord);
      }
    }
  });
});
