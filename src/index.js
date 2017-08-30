import './style.css';
import printMe from './print.js';

var elem = document.getElementById('elem');
elem.innerHTML = 'Hello,world.....';
var btn = document.createElement('button');
btn.innerHTML = 'Click Me';
btn.onclick = printMe;
elem.appendChild(btn);
{
    let str=''
}