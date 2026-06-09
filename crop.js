const Jimp = require('jimp');

async function fixFavicon() {
  try {
    const image = await Jimp.read('public/assets/logo2.png');
    // Primero, le quitamos todo el padding transparente innecesario
    image.autocrop();
    
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    // Tomamos el lado más largo para que sea un cuadrado perfecto
    const size = Math.max(w, h);
    
    // Creamos una nueva imagen cuadrada transparente
    new Jimp(size, size, 0x00000000, (err, square) => {
      if (err) throw err;
      // Pegamos la imagen original exactamente en el centro
      square.composite(image, (size - w) / 2, (size - h) / 2);
      square.write('public/assets/favicon_square.png', () => {
        console.log('¡Favicon cuadrado perfecto creado en favicon_square.png!');
      });
    });
  } catch (err) {
    console.error('Error:', err);
  }
}

fixFavicon();
