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

  const postDiv = document.createElement('div');
  postDiv.setAttribute('id', `post${currentPost}`);
  document.querySelector('.posts').append(postDiv);

  document.querySelector(`#post${currentPost}`).append(p);
  document.querySelector(`#post${currentPost}`).append(span);
  document.querySelector(`#post${currentPost}`).append(bold);
  document.querySelector(`#post${currentPost}`).innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="btn btn-link thumbs-up" id="thumbs-up-${currentPost}"><i class="fa-solid fa-thumbs-up"></i></span><span class="likes" id="likes-${currentPost}"></span><span class="btn btn-link thumbs-down" id="thumbs-down-${currentPost}"><i class="fa-solid fa-thumbs-down"></i></span><span class="dislikes" id="dislikes-${currentPost}"></span>`;
  document.querySelector(`#post${currentPost}`).append(divider);

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

    // Check if event listeners have already been added
    if (!likeButton.hasAttribute('data-listener-added')) {
      likeButton.addEventListener('click', () => {
        const likes = document.querySelector(`#likes-${i}`);
        let num = Number(likes.innerHTML);

        if (likes.textContent === "") {
          num = 1;
        } else {
          num++;
        }

        likes.innerHTML = num;

        postPopularity();
      });

      // Set custom attribute to indicate that event listener has been added
      likeButton.setAttribute('data-listener-added', 'true');
    }

    if (!dislikeButton.hasAttribute('data-listener-added')) {
      dislikeButton.addEventListener('click', () => {
        const dislikes = document.querySelector(`#dislikes-${i}`);
        let num = Number(dislikes.innerHTML);

        if (dislikes.textContent === "") {
          num = 1;
        } else {
          num++;
        }

        dislikes.innerHTML = num;
      });

      // Set custom attribute to indicate that event listener has been added
      dislikeButton.setAttribute('data-listener-added', 'true');
    }
  }
};

const postPopularity = () => {
  const divsArray = [];
  for (let i = 0; i < currentPost; i++) {
    // reorder divs so that most liked posts are at the top of the forum
    let currentDiv = document.querySelector(`#likes-${i}`);
    divsArray.push(currentDiv);
  }

  divsArray.sort((a,b) => {
    if (Number(a.innerHTML) < Number(b.innerHTML)) {
      return 1;
    } else if (Number(a.innerHTML) > Number(b.innerHTML)) {
      return -1;
    }

    return 0;
  });

  // remove children
  document.querySelector('.posts').innerHTML = ""; 
 
  divsArray.forEach((post) => { 
    document.querySelector('.posts').append(post.parentElement);
  });

};