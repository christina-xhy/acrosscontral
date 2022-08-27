//AJAX原理，加载请求引入其他文档：js/css/xml/json/html 等文件。前提创建文件，并且server.js 添加路由。
/* const request = new XMLHttpRequest();
request.open("GET", "http://qq.com:8888/friend.json");
request.onreadystatechange = () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.response);
  }
};
request.send(); */

// 引入script的内容，并插在body最后，也可以使用html的script src 引入 friends.js文件的内容，自己拿取数据。
//frank.com 需要引用qq.com 的中间商  friends.js

// 版本一:执行赋值
/* const script = document.createElement("script");
script.src = "http://qq.com:8888/friends.js";
script.onload = () => {
  console.log(window.xxx);
};
document.body.appendChild(script);
 */
// 加强版 ：执行函数 ，window.random也是一个跨域的回调函数；
const random = Math.random();
console.log(random);
window[random] = (data) => {
  console.log(data);
};
const script = document.createElement("script");
script.src = `http://qq.com:8888/friends.js?callback=${random}`;
script.onload = () => {
  debugger;
  script.remove();
};
console.log("frank.js-----------");
document.body.appendChild(script);
