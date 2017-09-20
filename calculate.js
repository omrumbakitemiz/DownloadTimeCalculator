const fileSize = document.getElementById('fileSize');
const speed = document.getElementById('speed');
const result = document.getElementById('result');
const calculateButton = document.getElementById('calculate');
const sizeType = document.getElementById('sizeType');
const speedType = document.getElementById('speedType');

function calculateTime(fileSize, speed) {
  return fileSize / speed;
}

function calculate() {
  let _fileSize = fileSize.value;
  let _speed = speed.value;
  const _sizeType = sizeType.value;
  const _speedType = speedType.value;

  if (_sizeType === 'GB') {
    _fileSize *= 1000;
  }

  if (_speedType === 'KB/s') {
    _speed /= 1000;
  }

  const timeResult = calculateTime(_fileSize, _speed);
  result.value = timeResult;
}

calculateButton.addEventListener('click', () => {
  calculate();
});
