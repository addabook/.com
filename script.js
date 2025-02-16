const users = [
    { username: "risat", password: "risat27", name: "Sayyed Risat", bio: "Loves coding!" },
    { username: "nafisa", password: "nafisa13", name: "Nafisa Rashid", bio: "Avid reader & writer." },
    { username: "ismail", password: "ismail123", name: "Md Ismail", bio: "Tech enthusiast." },
    { username: "nazifa", password: "nazifa123", name: "Nazifa Tabassum", bio: "Nature lover." }
];

let currentUser = JSON.parse(localStorage.getItem("user")) || null;

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("profile.html")) {
        loadProfile();
    }
    if (window.location.pathname.includes("newsfeed.html")) {
        loadPosts();
    }
});

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
        localStorage.setItem("user", JSON.stringify(foundUser));
        window.location.href = "newsfeed.html";
    }
}

function loadProfile() {
    document.getElementById("profileName").innerText = currentUser.name;
    document.getElementById("profileBio").innerText = "Bio: " + currentUser.bio;

    let profilePosts = document.getElementById("profilePosts");
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let userPosts = posts.filter(post => post.user === currentUser.name);
    profilePosts.innerHTML = userPosts.map(post => `<div class="post">${post.text}</div>`).join("");
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "index.html";
}
