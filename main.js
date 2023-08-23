const button = document.querySelector('#submit');
let currentPost = 0;

const newPost = (user, msg) => {
  const p = document.createElement('p');
  const pContent = document.createTextNode(msg);

  p.appendChild(pContent);

  const span = document.createElement('span');
  const postedBy = document.createTextNode("Posted By: ");

  span.appendChild(postedBy);

  const bold = document.createElement('b');
  const userName = document.createTextNode(user);

  bold.appendChild(userName);

  const divider = document.createElement('hr');

  document.querySelector('.posts').innerHTML += `<div id="post${currentPost}">`;
  document.querySelector('.posts').append(p);
  document.querySelector('.posts').append(span);
  document.querySelector('.posts').append(bold);
  document.querySelector('.posts').innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="btn btn-link thumbs-up" id="thumbs-up-${currentPost}"><i class="fa-solid fa-thumbs-up"></i></span><span id="likes-${currentPost}"></span><span class="btn btn-link thumbs-down" id="thumbs-down-${currentPost}"><i class="fa-solid fa-thumbs-down"></i></span><span id="dislikes-${currentPost}"></span>`;
  document.querySelector('.posts').append(divider);
  document.querySelector('.posts').innerHTML += `</div>`;

  // Reset inputs
  document.querySelector("#name").value = "";
  document.querySelector("#message").value = "";

  // Increment post count
  currentPost++;
};

button.addEventListener('click', () => {
  const user = document.querySelector('#name').value;
  const msg = document.querySelector('#message').value;

  newPost(user, msg);
  createLikeAndDislike();
});

const createLikeAndDislike = () => {
  for (let i = 0; i < currentPost; i++) {
    const likeButton = document.querySelector(`#thumbs-up-${i}`);
    const dislikeButton = document.querySelector(`#thumbs-down-${i}`);

    likeButton.addEventListener('click', () => {
      const likes = document.querySelector(`#likes-${i}`);
      let num = Number(likes.innerHTML);

      if (likes.textContent === "") {
        num = 1;
      } else {
        num++;
      }

      likes.innerHTML = num;
    });

    dislikeButton.addEventListener('click', () => {
      alert(`dislike ${i}`);
    });

  }
};

const addLike = () => {

};

const addDislike = () => {

};