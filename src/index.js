import './style.css';
import './test.css';
import { cube } from './common/main.js' ;
import { server } from './config.js' ;
require("jquery");

// function component() {
//     var element = document.createElement('div');
//
//     // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//     element.innerHTML = 'hellow webpack 45678' + cube(5);
//     element.classList.add('hello') ;
//
//     // 将图像添加到我们现有的 div。
//     var myIcon = new Image();
//     myIcon.src = Icon;
//     element.appendChild(myIcon);
//
//     return element;
// }

function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');
    element.classList.add('hello') ;
    console.log(server.url) ;

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = "hello webpack";
    element.appendChild(br);
    element.appendChild(button);
    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        var print = module.default;
        print();
    });

    return element;
}

document.body.appendChild(component());

$(document).ready(function(){
    console.log("jquery load success") ;
});

fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => {
     console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
     console.log(json)
   })
    .catch(error => console.error('Something went wrong when fetching this data: ', error))