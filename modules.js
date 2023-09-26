

const changeTextColor = (y) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  y.style.color = `rgb(${r}, ${g}, ${b})`;
}

const changeBackgroundColor = (y) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  y.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

export { changeTextColor, changeBackgroundColor };


