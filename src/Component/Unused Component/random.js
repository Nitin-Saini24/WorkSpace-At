const posts = [
    { id: 1, title: 'Post 1', content: 'Content of Post 1' },
    { id: 2, title: 'Post 2', content: 'Content of Post 2' },
    { id: 3, title: 'Post 3', content: 'Content of Post 3' },
    { id: 4, title: 'Post 4', content: 'Content of Post 4' },
    { id: 5, title: 'Post 5', content: 'Content of Post 5' }
    // Add more posts as needed
];

// Function to get random posts
const getRandomPosts = (posts, num) => {
    const shuffled = posts.sort(() => 0.5 - Math.random());
    console.log([1, 2, 3, 4, 5].sort(() => 0.6 - Math.random()))
    return shuffled.slice(0, num);
};

// Get three random posts
const randomPosts = getRandomPosts(posts, 3);
// console.log(randomPosts);