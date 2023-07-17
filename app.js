// create variable to access the form element
const memeForm = document.querySelector('#form');
// create variable to access the URL for the meme image
const imgUrl = document.querySelector('#imageInput');
// create variable to access the input generated for the top text
const topInput = document.querySelector('#topTextInput');
// create variable to access the input generated for the bottom text
const bottomInput = document.querySelector('#bottomTextInput');
// create a variable to access the div element where the new memes will render
const memesHolder = document.querySelector('#memesHolder');

// add an event listener to the form element
// this listener will listen for the click of the submit button or the return key
// pass in the createMeme function that handles the logic for generating new meme
memeForm.addEventListener('submit', createMeme);

// create function that will generate new meme and pass in event
function createMeme(e) {
  // prevent default behavior of submit button which is to reload page
  e.preventDefault();
  // create variable memeContainer and set equal to the new div that is created
  // this new div will hold the new memes that are generated
  const memeContainer = document.createElement('div');
  // add the class of completedMeme to the new div element
  memeContainer.classList.add('completedMeme');
  //create variable memeImage and set equal the new img element
  const memeImage = document.createElement('img');
  // add the class memeImage to the new img element
  memeImage.classList.add('memeImage');
  // set new attribute to the img element
  // an img element needs to have a src equal to a URL or a file
  // this line of code will add the src equal to the URL value supplied by user in the form
  memeImage.setAttribute('src', imgUrl.value);
  // create variable topText and set it equal to the new h1 element
  const topText = document.createElement('h1');
  // add the class memeTextTop to the new h1 element
  topText.classList.add('memeTextTop');
  // change the text appearing at the top of the meme to uppercase
  topText.innerText = topInput.value.toUpperCase();
  // create variable bottomText and set it equal to new h1 element
  const bottomText = document.createElement('h1');
  // add the class memeTextBottom to the new h1 element
  bottomText.classList.add('memeTextBottom');
  // change the text appearing at the bottom of the meme to uppercase
  bottomText.innerText = bottomInput.value.toUpperCase();
  // add the div memeContainor to the memeHolder div
  memesHolder.append(memeContainer);
  // add the img element to the div memeContainer
  memeContainer.append(memeImage);
  // add the h1 TopText to the the div memeContainer
  memeContainer.append(topText);
  // add the h1 bottomText to the div memeContainer
  memeContainer.append(bottomText);
  // set value of variable imageURL to empty string
  imgUrl.value = '';
  // set value of variable topTextInput to empty string
  topInput.value = '';
  // set value of variable bottomTextInput to empty string
  bottomInput.value = '';
}

// create event listener that will listen for click on generated meme and then call function that will delete meme
memesHolder.addEventListener('click', deleteMeme);

// create function to delete meme
function deleteMeme(e) {
  // create condition that to see if the event target tagname is IMG
  if ((e.target.tagName = 'IMG')) {
    // and if it is, remove the image from the parent element
    e.target.parentElement.remove();
  }
}

// * Image URLs for testing
// https://images.unsplash.com/photo-1572288623190-5bb8b0d81aa2
// https://gratisography.com/wp-content/uploads/2023/06/gratisography-flying-squirrel-free-stock-photo-1170x780.jpg
// https://gratisography.com/wp-content/uploads/2023/03/gratisography-not-happy-in-a-hat-stock-photo-1170x780.jpg
// https://gratisography.com/wp-content/uploads/2023/06/gratisography-boxing-boxer-free-stock-photo-1170x780.jpg
