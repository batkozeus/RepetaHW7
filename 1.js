// Task 1

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 6,
      dislikes: 2,
      fav: 3
    }
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 124,
      dislikes: 8,
      fav: 36
    }
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 800,
      dislikes: 36,
      fav: 147
    }
  }
];

const placeForCard = document.querySelector('#placeForCard');

const createPostCard = (cardObject) => {
  const postImage = `<img class="post__image" src=${cardObject.img} alt="post image">`;

  const postTitle = `<h2 class="post__title">${cardObject.title}</h2>`;

  const postText = `<p class="post__text">L${cardObject.text}</p>`;

  const iconArray = [{
    name: 'actions__icon--like',
    count: cardObject.stats.likes
  }, {
    name: 'actions__icon--dislike',
    count: cardObject.stats.dislikes
  }, {
    name: 'actions__icon--fav',
    count: cardObject.stats.fav
  }];

  const createLi = (additionalClass) => `<li class="actions__item">
      <button class="actions__btn ">
        <span class="actions__icon ${additionalClass.name}"></span>
        <span class="actions__count">${additionalClass.count}</span>
      </button>
    </li>`;

  const postActions = `<ul class="actions post__actions">${iconArray.reduce((acc, x) => acc + createLi(x), '')}</ul>`;

  const post = `<div class="post">${postImage}${postTitle}${postText}${postActions}</div>`;
  console.log(post);
  return post
};

const createUserCard = (postObject) => {
  placeForCard.innerHTML += createPostCard(postObject);
}

const makeCards = (posts) => {
  posts.forEach((post) => createUserCard(post));
};

makeCards(posts);