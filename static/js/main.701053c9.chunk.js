(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(3),o=a.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(4),r=a(5),m=a(7),c=a(6),d=a(1),u=a(8),p=function(e){return n.a.createElement("form",{className:"siimple-form",onSubmit:e.handleAdd},n.a.createElement("div",{className:"siimple-form-field"},n.a.createElement("label",{className:"siimple-label siimple--color-white"},"Your Todo:"),n.a.createElement("input",{type:"text",name:"title",className:"siimple-input"}),n.a.createElement("input",{type:"submit",value:"Add",className:"siimple-btn siimple-btn--teal"})))},h={maxWidth:"700px"},v={cursor:"pointer"},b=function(e){return n.a.createElement("ul",{className:"siimple-list"},e.todos.map(function(t,a){return n.a.createElement("li",{key:a,className:"siimple-list-item siimple--bg-white",style:h},t.title," ",n.a.createElement("span",{className:"siimple-tag siimple-tag--error siimple-hover",style:v,onClick:function(){return e.handleRemove(a)}},"Delete"),"   ")}))},f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).state={todo:[]},a.handleAdd=a.handleAdd.bind(Object(d.a)(a)),a.handleRemove=a.handleRemove.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleAdd",value:function(e){e.preventDefault(),this.state.todo.push({title:e.target.title.value}),this.setState({todo:this.state.todo}),e.target.title.value=""}},{key:"handleRemove",value:function(e){this.state.todo.splice(e,1),this.setState({todo:this.state.todo})}},{key:"render",value:function(){return n.a.createElement("div",{className:"siimple-box siimple--bg-dark"},n.a.createElement("h1",{className:"siimple-box-title siimple-color-white"},"React Todo App"),n.a.createElement(p,{handleAdd:this.handleAdd}),n.a.createElement("div",{className:"siimple-rule"}),n.a.createElement(b,{todos:this.state.todo,handleRemove:this.handleRemove}))}}]),t}(i.Component);o.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.701053c9.chunk.js.map