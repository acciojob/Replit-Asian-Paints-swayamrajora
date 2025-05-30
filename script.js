const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('reset_button');

changeButton.addEventListener('click', () => {
  const blockId = document.getElementById('block_id').value;
  const color = document.getElementById('colour_id').value;

  // Reset all grid items to transparent first
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.style.backgroundColor = 'transparent';
  });

  // Change color of specific block if it exists
  const block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  } else {
    alert('Invalid block ID. Please enter a number from 1 to 9.');
  }
});

resetButton.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.style.backgroundColor = 'transparent';
  });
});
