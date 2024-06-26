const crypto = require('crypto'); 

// Question 6 //
const numsToRGBColor = ([color1, color2, color3]) => {
  return `rgb(${color1}, ${color2}, ${color3})`;
};
// console.log(numsToRGBColor([1, 2, 334]))

const getRandomBytes = () => new Promise((resolve, reject) => {
  crypto.randomFill(new Uint8Array(3), (err, buffer) => {
    if (err) return reject(err);
    resolve([...buffer]);
  });
});

const return4RandomColors = () => {
  const colors = [];
  return getRandomBytes()
    .then((val) => {
      colors.push(numsToRGBColor(val))
      return getRandomBytes()
    }) 
    .then((val) => {
      colors.push(numsToRGBColor(val))
      return getRandomBytes()
    }) 
    .then((val) => {
      colors.push(numsToRGBColor(val))
      return getRandomBytes()
    }) 
    .then((val) => {
      colors.push(numsToRGBColor(val))
      return colors
    })
    .catch((err) => {
      console.error(err);
    });
};

return4RandomColors().then(console.log);

module.exports = {
  numsToRGBColor,
  getRandomBytes,
  return4RandomColors,
};
