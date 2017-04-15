const fs = require('fs');
const gm = require('gm');
const path = require('path');
var imageMagick = gm.subClass({ imageMagick: true });

gm('done.png')
    .size(function (err, size) {
        console.log(arguments);
        if (!err)
            console.log(size.width > size.height ? 'wider' : 'taller than you');
    });