// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:

//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
  myName.innerHTML = "";
  myHobby.innerHTML = "";
  myLocation.innerHTML = "";
});

// 3. Add an event listener to the `image1Button`
image1Button.addEventListener('click', function() {
// 4. When clicked, it should change the source of `image` to another image URL.
  image.src = "https://media0.giphy.com/media/GA1sltMVrl4YJgMyh5/giphy.gif";
});
// 5. Add an event listener to the `image2Button`
image2Button.addEventListener('click', function() {
  image.src = "https://i.pinimg.com/originals/0f/7c/b3/0f7cb3ca1ce88fe28e5be48f202dd45d.gif";
});
// 6. When clicked, it should change the source of `image` to another image URL.


// BONUS
// 7. Try using different event types for your buttons.
