const photos = document.querySelector('#photos');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const gallery = [
    './gallery/gallery1-compressor.jpg',
    './gallery/gallery2-compressor.jpg',
    './gallery/gallery3-compressor.jpg',
    './gallery/gallery4-compressor.jpg',
    './gallery/gallery5-compressor.jpg',
    './gallery/gallery6-compressor.jpg',
    './gallery/gallery7-compressor.jpg',
    './gallery/gallery8-compressor.jpg',
    './gallery/gallery9-compressor.jpg',
    './gallery/gallery10-compressor.jpg',
    './gallery/gallery11-compressor.jpg',
    './gallery/gallery12-compressor.jpg',
    './gallery/gallery13-compressor.jpg',
    './gallery/gallery14-compressor.jpg',
    './gallery/gallery15-compressor.jpg',
    './gallery/gallery16-compressor.jpg',
    './gallery/gallery17-compressor.jpg',
    './gallery/gallery18-compressor.jpg',
    './gallery/gallery19-compressor.jpg',
    './gallery/gallery20-compressor.jpg',
    './gallery/gallery21-compressor.jpg',
    './gallery/gallery22-compressor.jpg',
    './gallery/gallery23-compressor.jpg',
    './gallery/gallery24-compressor.jpg',
    './gallery/gallery25-compressor.jpg',
    './gallery/gallery26-compressor.jpg',
    './gallery/gallery27-compressor.jpg',
    './gallery/gallery28-compressor.jpg',
    './gallery/gallery29-compressor.jpg',
    './gallery/gallery30-compressor.jpg',
    './gallery/gallery31-compressor.jpg',
    './gallery/gallery32-compressor.jpg',
    './gallery/gallery33-compressor.jpg',
    './gallery/gallery34-compressor.jpg',
    './gallery/gallery35-compressor.jpg'
]

let counter = 0;
photos.src = gallery[0];

prev.addEventListener('click', () => {
    counter--;
    photos.src = gallery[counter];
    if (counter < 0) {
        counter = gallery.length - 1;
        photos.src = gallery[counter];
    }
})

next.addEventListener('click', () => {
    counter++;
    photos.src = gallery[counter];
    if (counter >= gallery.length) {
        counter = 0;
        photos.src = gallery[counter];
    }
})