const fs = require('fs');
const images = require('images');

images(1000,1000)
    .draw(images("./images/logo.png"), 80, 80)
    .save('outer.png');