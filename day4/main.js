let titles = [
    '前端小课 第一阶段 day4',
    'list',
    'day4'
]

let addText = function(){
    console.log(titles)
    let index = Math.floor(Math.random() * titles.length + 0);
    let div = document.createElement("div");
    let textNode = document.createTextNode(titles[index]);
    div.appendChild(textNode);
    div.style.color = "#FE7235";
    div.style.lineHeight = 2;
    let contentDiv = document.getElementById('content')
    contentDiv.appendChild(div)
}