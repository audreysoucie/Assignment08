//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
export const pics = [
    { "id": 1, "title": "squirrel", "url": "https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "grey and brown squirrel on log" },

    { "id": 2, "title": "bunny01", "url": "https://images.unsplash.com/photo-1478109214826-170faed7985c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxINkhZUTlNMlRLWXx8ZW58MHx8fHx8", "description": "white bunny with black spots in grass with apple" },

    { "id": 3, "title": "bunny02", "url": "https://images.unsplash.com/photo-1468190919318-dda40b332156?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxINkhZUTlNMlRLWXx8ZW58MHx8fHx8", "description": "white bunny in grass" },

    { "id": 4, "title": "deer", "url": "https://images.unsplash.com/photo-1506099914961-765be7a97019?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xINkhZUTlNMlRLWXx8ZW58MHx8fHx8", "description": "baby deer in green field" },

    { "id": 5, "title": "squirrel02", "url": "https://images.unsplash.com/photo-1470130623320-9583a8d06241?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8SDZIWVE5TTJUS1l8fGVufDB8fHx8fA%3D%3D", "description": "red squirrel in pine tree" },

    { "id": 6, "title": "bunny03", "url": "https://images.unsplash.com/photo-1481500576737-9238440343a6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8SDZIWVE5TTJUS1l8fGVufDB8fHx8fA%3D%3D", "description": "brown bunny in grass with flower" },

    { "id": 7, "title": "bunny04", "url": "https://images.unsplash.com/photo-1480554840075-72cbdabbf689?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8SDZIWVE5TTJUS1l8fGVufDB8fHx8fA%3D%3D", "description": "grey bunny in grass" },

    { "id": 8, "title": "kitten", "url": "https://images.unsplash.com/photo-1622273413879-eded127f7fb0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8SDZIWVE5TTJUS1l8fGVufDB8fHx8fA%3D%3D", "description": "orange kitten sleeping on couch" },

    { "id": 9, "title": "gerbal", "url": "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8SDZIWVE5TTJUS1l8fGVufDB8fHx8fA%3D%3D", "description": "orange gerbal" },

    { "id": 10, "title": "owl", "url": "https://images.unsplash.com/photo-1635803267500-4639005a37b8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "owl in tree at night" },

    { "id": 11, "title": "bird", "url": "https://images.unsplash.com/photo-1633083016072-3fcfec72cc68?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "yellow and blue bird on branch" },

    { "id": 12, "title": "dog", "url": "https://images.unsplash.com/photo-1575350654917-7879fa15e5b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "orange king spaniel playing with rope" },
]

for (let p of pics) {
    let p_thumb = document.getElementById('p' + p.id)
    p_thumb.innerHTML = `
        <img src="${p.url}" alt="${p.description}" class="img-thumbnail"/>
    `

    p_thumb.onclick = function () {
        displayPicture(p)
    }
}



let featured_pic = document.querySelector(".featured")
function displayPicture(pics) {
    featured_pic.innerHTML = `
    <div class "card" style="width:18rem; float:left;">
    <img src="${pics.url} class="card-img-top" alt="${pics.title}" style="width:200%;"> 
        <h1 class="card-header">${pics.title}</h1>
        
        <div class="card-body">
            <p class="card-text">${pics.description}</p>
        </div>
    
    `
}