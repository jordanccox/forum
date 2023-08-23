const button = document.querySelector('#submit');

button.addEventListener('click', () => {
  const user = document.querySelector('#name').value;
  const msg = document.querySelector('#message').value;

  newPost(user, msg);
});

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

  document.querySelector('.posts').append(p);
  document.querySelector('.posts').append(span);
  document.querySelector('.posts').append(bold);
  document.querySelector('.posts').append(divider);

  // Reset inputs
  document.querySelector("#name").value = "";
  document.querySelector("#message").value = "";
};