let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (input.value == "") {
        msg.innerHTML = "Post cannot be empty";
    } else {
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    createPost();
};


let createPost = () => {
    posts.innerHTML +=
        `<div class="shadow-sm p-3 mb-5 bg-body rounded">
                    <p>${data.text}</p>
                    <span class="options">
                        <i onClick="editPost(this)" class="bi bi-pencil-square"></i>
                        <i onClick="deletePost(this)" class="bi bi-person-x-fill"></i>
                    </span>
                </div>`;

    input.value = "";
};


let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};