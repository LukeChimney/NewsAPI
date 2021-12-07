console.log("test")

let output = document.getElementById("output")

function news(){
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=51a01d27dbb547aaa73191139b9412ae")
    .then(response => response.json())
    .then(data => {
        console.log(data.articles);
        data.articles.forEach(elt => {
            output.innerHTML += `
            <img src="${elt.urlToImage}" alt="">
            <h3> ${elt.title}</h3>
            <h4> ${elt.description}</h4>
            <h4> ${elt.publishedAt}</h4>
            <p> ${elt.content}</p>`
        })
    })
    .catch(err => console.log(err))
}
news()