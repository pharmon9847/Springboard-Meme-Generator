const form = document.querySelector('#form');
const imageURL = document.querySelector('#imageInput');
const topTextInput = document.querySelector('#topTextInput');
const bottomTextInput = document.querySelector('#bottomTextInput');
const memesHolder = document.querySelector('#memesHolder');

form.addEventListener('submit', createMeme);

function createMeme(e) {
  e.preventDefault();
  //create div with meme image as background
  const memeContainer = document.createElement('div');
  memeContainer.classList.add('completedMeme');
  //create image for meme
  const memeImage = document.createElement('img');
  memeImage.classList.add('memeImage');
  memeImage.setAttribute('src', imageURL.value);
  //memeImage.src = imageURL.value;
  //create top text of the meme
  const topText = document.createElement('h1');
  topText.classList.add('memeTextTop');
  topText.innerText = topTextInput.value.toUpperCase();
  //create bottom text of meme
  const bottomText = document.createElement('h1');
  bottomText.classList.add('memeTextBottom');
  bottomText.innerText = bottomTextInput.value.toUpperCase();
  //add the div and texts to the page
  memesHolder.append(memeContainer);
  memeContainer.append(memeImage);
  memeContainer.append(topText);
  memeContainer.append(bottomText);
  imageURL.value = '';
  topTextInput.value = '';
  bottomTextInput.value = '';
}

memesHolder.addEventListener('click', deleteMeme);

function deleteMeme(e) {
  if ((e.target.tagName = 'IMG')) {
    e.target.parentElement.remove();
  }
}

// * Image URLs for testing
// https://images.unsplash.com/photo-1572288623190-5bb8b0d81aa2
// https://gratisography.com/wp-content/uploads/2023/06/gratisography-flying-squirrel-free-stock-photo-1170x780.jpg
// https://gratisography.com/wp-content/uploads/2023/03/gratisography-not-happy-in-a-hat-stock-photo-1170x780.jpg
// https://gratisography.com/wp-content/uploads/2023/06/gratisography-boxing-boxer-free-stock-photo-1170x780.jpg
