window.onload = getPosts();

const postsTag = document.getElementById('posts');

async function getPosts() {
    const URL = 'http://localhost:3000/posts';

    const posts = await fetch(URL);;
    const jsonPosts = await posts.json();

    console.log(jsonPosts);

    jsonPosts.posts.forEach(element => {
        postCreator(element)
    });
}

function postCreator(post) {
    const newPost = document.createElement('div')
    newPost.className = 'post';

    const voting = document.createElement('div')
    voting.className = 'voting';

    const upArrow = document.createElement('div')
    upArrow.className = 'uparrow';

    const uparrowImg = document.createElement('img')
    uparrowImg.setAttribute('src', 'static/img/upvote.png')
    uparrowImg.setAttribute('alt', 'upvote arrow')
    uparrowImg.setAttribute('width', '20px')
    uparrowImg.setAttribute('height', '20px')
    upArrow.appendChild(uparrowImg);

    const score = document.createElement('div')
    score.className = 'score';
    const scoreP = document.createElement('p')
    const pText = document.createTextNode(post.score)
    scoreP.appendChild(pText)
    score.appendChild(scoreP);

    const downArrow = document.createElement('div')
    downArrow.className = 'downarrow';

    const downarrowImg = document.createElement('img')
    downarrowImg.setAttribute('src', 'static/img/downvote.png')
    downarrowImg.setAttribute('alt', 'downvote arrow')
    downarrowImg.setAttribute('width', '20px')
    downarrowImg.setAttribute('height', '20px')
    downArrow.appendChild(downarrowImg);

    voting.appendChild(upArrow);
    voting.appendChild(score);
    voting.appendChild(downArrow);

    const postContent = document.createElement('div')
    postContent.className = 'post-content';

    const title = document.createElement('div')
    title.className = 'title';
    const titleP = document.createElement('p');
    const pTextTitle = document.createTextNode(post.title)
    titleP.appendChild(pTextTitle);
    title.appendChild(titleP);

    const url = document.createElement('div')
    url.className = 'url';
    const urlP = document.createElement('p');
    const pTexturl = document.createTextNode(post.url)
    urlP.appendChild(pTexturl);
    url.appendChild(urlP);

    const actionButtons = document.createElement('div')
    actionButtons.className = 'action-buttons'

    const modifyA = document.createElement('a')
    modifyA.className = 'modify'
    modifyA.setAttribute('href', `#`)
    const aTextModify = document.createTextNode('Modify')
    modifyA.appendChild(aTextModify);

    const deleteA = document.createElement('a')
    deleteA.className = 'remove'
    deleteA.setAttribute('href', `#`)
    const aTextDelete = document.createTextNode('Remove')
    deleteA.appendChild(aTextDelete);

    actionButtons.appendChild(modifyA)
    actionButtons.appendChild(deleteA)

    postContent.appendChild(title)
    postContent.appendChild(url)
    postContent.appendChild(actionButtons)

    newPost.appendChild(voting)
    newPost.appendChild(postContent)

    postsTag.appendChild(newPost);
}

const createPost = document.getElementById('newPost');
createPost.addEventListener('click', () => {
    location.href = "./createPost.html";
})