
// your JavaScript file
const container = document.getElementById("container");

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

let redP = document.createElement('p');
redP.textContent="Hey I'm red!";
redP.style.color="red";

let h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

let div = document.createElement('div');
div.style.border.color='black';
div.style.background.color='pink';

let h1 = document.createElement('h1');
h1.textContent = "I'm in a div"

let p = document.createElement('p');
p.textContent="ME TOO!";

div.appendChild(h1);
div.appendChild(p);

container.appendChild(content);
container.appendChild(redP);
container.appendChild(h3);
container.appendChild(div);