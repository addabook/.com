const users = [
    { username: "risat", password: "risat27", name: "Sayyed Risat" },
    { username: "nafisa", password: "nafisa13", name: "Nafisa Rashid" },
    { username: "ismail", password: "ismail123", name: "Md Ismail" },
    { username: "nazifa", password: "nazifa123", name: "Nazifa Tabassum" }
];

let currentUser = JSON.parse(localStorage.getItem("user")) || null;

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        localStorage.setItem("user", JSON.stringify(foundUser));
        window.location.href = "newsfeed.html";
    }
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "index.html";
}

function addPost() {
    let postText = document.getElementById("postText").value;
    if (postText.trim()) {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.unshift({ user: currentUser.name, text: postText });
        localStorage.setItem("posts", JSON.stringify(posts));
        location.reload();
    }
}

function sendMessage() {
    let receiver = document.getElementById("receiver").value;
    let chatText = document.getElementById("chatText").value;
    let chat = JSON.parse(localStorage.getItem("chat")) || [];
    chat.push({ sender: currentUser.username, receiver, text: chatText });
    localStorage.setItem("chat", JSON.stringify(chat));
    location.reload();
}
