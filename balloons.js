let isDragging = false;
let offsetX, offsetY;

function startDrag(e) {
  isDragging = true;
  offsetX = e.clientX - parseFloat(getComputedStyle(this).left);
  offsetY = e.clientY - parseFloat(getComputedStyle(this).top);
}

function drag(e) {
  if (isDragging) {
    this.style.left = e.clientX - offsetX + 'px';
    this.style.top = e.clientY - offsetY + 'px';
  }
}

function stopDrag() {
  isDragging = false;
}

document.getElementById('balloon1').addEventListener('mousedown', startDrag);
document.getElementById('balloon2').addEventListener('mousedown', startDrag);
document.getElementById('balloon3').addEventListener('mousedown', startDrag);

document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDrag);
