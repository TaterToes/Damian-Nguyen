// Dynamically adds an editable, animated textbox
function addTextbox({ enterClass, exitClass, idleClass }) {
    const section = document.getElementById('elements-section');
  
    // Create the editable container
    const textbox = document.createElement('div');
    textbox.contentEditable = 'true';        // inline editing via contenteditable :contentReference[oaicite:5]{index=5}
    textbox.classList.add('editable', enterClass);
    textbox.textContent = 'Click to edit…';
  
    section.appendChild(textbox);
  
    // After enter animation ends, switch to idle
    textbox.addEventListener('animationend', (e) => {
      if (e.animationName === 'fadeIn') {
        textbox.classList.replace(enterClass, idleClass);
      }
    });
  
    // On double-click, play exit and then remove
    textbox.addEventListener('dblclick', () => {
      textbox.classList.remove(idleClass);
      textbox.classList.add(exitClass);
      textbox.addEventListener('animationend', (e) => {
        if (e.animationName === 'fadeOut') {
          textbox.remove();
        }
      });
    });
  }
  
  // Initialize on page load
  document.addEventListener('DOMContentLoaded', () => {
    addTextbox({
      enterClass: 'enter',
      exitClass:  'exit',
      idleClass:  'idle'
    });
  });
  