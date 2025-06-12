function createCard(div, thumbnail, name){
    let div_thumbnail = document.createElement("div");
    div_thumbnail.className = "thumbnail";
    div_thumbnail.style.backgroundImage = `url(${thumbnail})`;
    let div_name = document.createElement("h4");
    div_name.innerHTML = `${name}`;
    div.append(div_thumbnail);
    div.append(div_name);
}
function createAttempted(thumbnail, name){
    let div = document.createElement("div");
    div.className = "card";
    createCard(div, thumbnail, name);
    document.querySelector(".attempt-quizzes").append(div);
}
function createCreated(thumbnail, name){
    let div = document.createElement("div");
    div.className = "card";
    createCard(div, thumbnail, name);
    document.querySelector(".created-quizzes").append(div);
}
function quoteAdd(quote){
    let div = document.createElement("h2");
    div.innerHTML = `${quote}`;
    document.querySelector(".quote").append(div);
}

createCreated("https://thumbs.dreamstime.com/b/passing-opening-some-bushes-as-walks-tall-jungle-grasses-beautiful-wary-large-wild-female-orange-137269418.jpg", "Created Quiz 1");
createCreated("https://plus.unsplash.com/premium_photo-1724654643848-ab19f6ec1c79?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9scGhpbnxlbnwwfHwwfHx8MA%3D%3D", "Created Quiz 2");

createAttempted("https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg", "Attempted Quiz 1");
createAttempted("https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", "Attempted Quiz 2");

quoteAdd("HELLO RAM RAM JII");