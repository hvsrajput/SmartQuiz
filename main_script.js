function createCard(div, thumbnail, name){
    let div_thumbnail = document.createElement("div");
    div_thumbnail.className = "thumbnail";
    div_thumbnail.style.backgroundImage = `url(${thumbnail})`;
    let div_name = document.createElement("h4");
    div_name.innerHTML = `${name}`;
    div.append(div_thumbnail);
    div.append(div_name);
    div.style.cursor = "pointer";
    div.addEventListener("click", ()=>{
        window.location.href = "#";
    });
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
function createPublic(thumbnail, name){
    let div = document.createElement("div");
    div.className = "card";
    createCard(div, thumbnail, name);
    document.querySelector(".public-quizzes").append(div);
}
function quoteAdd(quote){
    let div = document.createElement("h2");
    div.innerHTML = `${quote}`;
    document.querySelector(".quote").append(div);
}

createPublic("https://i0.wp.com/glorioushinduism.com/wp-content/uploads/2020/12/Vashishta-414033436-1630021906694.jpg?fit=789%2C513&ssl=1", "Public Quiz 1");
createPublic("https://images.tv9hindi.com/wp-content/uploads/2024/02/kaise-raja-se-rishi-bane-vishwamitra.jpg", "Public Quiz 2");
createPublic("https://www.poojn.in/wp-content/uploads/2025/05/Jamadagni-Rishis-Spiritual-Significance-Understanding-the-Bhrigu-Lineage-Legacy.jpeg.jpg", "Public Quiz 3");
createPublic("https://i.pinimg.com/736x/8f/72/fd/8f72fd532b15eb317fb16c9156670c45.jpg", "Public Quiz 4");
createPublic("https://images.bhaskarassets.com/web2images/521/2022/03/11/march-az-rishi-bhardwaj-1_1647007310.jpg", "Public Quiz 5");
createPublic("https://images.apnisanskriti.com/a/2017/08/story-of-gautam-rishi-2.jpg", "Public Quiz 6");
createPublic("https://media.assettype.com/newsgram-hindi%2F2024-05%2F11aa5976-fe26-4da8-a14e-af0831b27685%2FIMG_20240524_WA0011.jpg", "Public Quiz 7");

createCreated("https://thumbs.dreamstime.com/b/passing-opening-some-bushes-as-walks-tall-jungle-grasses-beautiful-wary-large-wild-female-orange-137269418.jpg", "Created Quiz 1");
createCreated("https://plus.unsplash.com/premium_photo-1724654643848-ab19f6ec1c79?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9scGhpbnxlbnwwfHwwfHx8MA%3D%3D", "Created Quiz 2");
createCreated("https://media.istockphoto.com/id/1458215547/photo/brown-bear.jpg?s=612x612&w=0&k=20&c=MRQhtNC_-P0llLRwwA3wmbQL6iroSjUla1PmvvEWCZU=", "Created Quiz 3");
createCreated("https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg", "Created Quiz 4");
createCreated("https://i.natgeofe.com/n/bec7bd50-0d57-4982-aeb5-82e5f8184f89/02-machine-saving-animals-nationalgeographic_1977490.jpg", "Created Quiz 5");
createCreated("https://files.worldwildlife.org/wwfcmsprod/images/Elephant_and_Calf_288447_main/story_full_width/3yl7j5q9n4_WEB_288447.jpg", "Created Quiz 6");
createCreated("https://www.cjr.org/wp-content/uploads/2017/08/hedgehog-animal-baby-cute-50577-e1503351981290.jpeg", "Created Quiz 7");

createAttempted("https://www.cuddlynest.com/blog/wp-content/uploads/2020/05/shutterstock_506745523.png", "Attempted Quiz 1");
createAttempted("https://assets.traveltriangle.com/blog/wp-content/uploads/2016/11/Taj-Mahal-and-its-reflection.jpg", "Attempted Quiz 2");
createAttempted("https://static01.nyt.com/images/2017/12/08/travel/360-christ/360-christ-superJumbo.jpg", "Attempted Quiz 3");
createAttempted("https://cdn.britannica.com/49/61349-050-9FFBEB28/El-Castillo-pyramid-plaza-Toltec-state-Yucatan.jpg", "Attempted Quiz 4");
createAttempted("https://www.incatrailmachu.com/img/what-are-the-seven-wonders-of-the-world-06-1440.jpg", "Attempted Quiz 5");
createAttempted("https://images.ctfassets.net/cnu0m8re1exe/2KdSYQhtKPAcjYHX9za1ZW/64a324e9b68c518e8c4c7944fde8f8ca/great-wall-china.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill", "Attempted Quiz 6");
createAttempted("https://res.cloudinary.com/sagacity/image/upload/c_crop,h_4000,w_6000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_1030695895_lfjbb2.jpg", "Attempted Quiz 7");

quoteAdd("HELLO RAM RAM JII");