const package = require('./package.json.js');
const images = require('images');
console.log(package.version);
const bg_image = images('./images/timo.jpg');
console.log(bg_image);

const qg_image = images('./images/gq.jpg');
console.log(qg_image);

const offset = {
    x: 5,
    y: 5
}

console.log("qg_image_width: \t" + qg_image.width())

console.log("qg_image_height: \t" + qg_image.height())

const foreground_image = images(qg_image.width() + offset.x, qg_image.height() + offset.y).fill(0xff, 0xff, 0xff, 1).draw(qg_image, offset.x, offset.y);

const pos = {
    x: bg_image.width() - qg_image.width(),
    y: bg_image.height() - qg_image.height()

}
bg_image.draw(foreground_image, pos.x, pos.y).save('./images/dhyuan.jpg', { quality: 100 })