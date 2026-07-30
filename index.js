const input = document.getElementById('diaryInput');
const button = document.getElementById('saveBtn');
const message = document.getElementById('message');

button.addEventListener('click', function () {
  localStorage.setItem('myDiary', input.value);
  message.textContent = 'SAVED';
});

const savedText = localStorage.getItem('myDiary');
if (savedText) {
  input.value = savedText;
  message.textContent = 'PREVIOUSLY SAVED';
}