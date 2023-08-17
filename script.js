function calculateArea() {
  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);
  const unit = document.getElementById('unit').value;

  if (isNaN(base) || isNaN(height)) {
    alert('Masukkan angka yang valid.');
    return;
  }

  const area = 0.5 * base * height;

  document.getElementById('areaResult').textContent = area.toFixed(2);
  document.getElementById('areaUnit').textContent = unit;
}

function calculatePerimeter() {
  const sideA = parseFloat(document.getElementById('sideA').value);
  const sideB = parseFloat(document.getElementById('sideB').value);
  const sideC = parseFloat(document.getElementById('sideC').value);
  const perimeterUnit = document.getElementById('perimeterUnit').value;

  if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    alert('Masukkan angka yang valid.');
    return;
  }

  const perimeter = sideA + sideB + sideC;

  document.getElementById('perimeterResult').textContent = perimeter.toFixed(2);
  document.getElementById('perimeterUnit').textContent = perimeterUnit;
}