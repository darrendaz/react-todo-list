(window["webpackJsonpexperiment-todo"]=window["webpackJsonpexperiment-todo"]||[]).push([[0],{11:function(e,t,o){e.exports=o(16)},16:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(3),i=o.n(r),l=o(4),d=o(8),c=o(5),s=o(6),m=o(10),u=o(7),h=o(1),b=o(9),p=function(e){return a.a.createElement("div",{className:"container-fluid"},a.a.createElement("form",{className:"form-group",onSubmit:e.handleCreateTodoItem},a.a.createElement("div",{className:"form-row"},a.a.createElement("label",{className:"col-2 col-form-label",htmlFor:"todoItem"},"Add to your list")),a.a.createElement("div",{className:"form-row"},a.a.createElement("input",{type:"text",className:"form-control col-4",id:"todoItem",placeholder:"ex. grind coffee, submit PR, buy chocolate, repeat, etc.",value:e.todoItem,onChange:e.handleItemNameChange}),a.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add Item"),a.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:e.handleClearList},"Clear List"))))},f=function(e){var t=e.todoList,o=e.handleListItemNameChange,n=e.handleDeleteTodoItem,r=e.toggleComplete,i=t.filter((function(e){return!1===e.completed})).length,l=t.filter((function(e){return!0===e.completed})).length;return a.a.createElement("div",{className:"todolist-group container-fluid"},a.a.createElement("div",{className:"row container-fluid"},a.a.createElement("div",{className:"row container-fluid"},"".concat(l,1===l?" thing done":" things done")," ","/"," ","".concat(i,1===i?" thing to do":" things to do"))),t.map((function(e){return a.a.createElement("div",{className:"row container-fluid ",key:e.id},a.a.createElement("input",{type:"text",className:"form-control col-6",id:e.id,value:e.name,onChange:o.bind(void 0)}),a.a.createElement("button",{type:"button",className:e.completed?"btn btn-success col-3":"btn btn-outline-success col-3",value:e.id,onClick:r.bind(void 0,e.id)},e.completed?"Completed":"Complete Task"),a.a.createElement("button",{type:"button",className:"btn btn-secondary col-2",value:e.id,onClick:n.bind(void 0,e.id)},"Delete"))})))};function g(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}var C=function(e){function t(e){var o;return Object(c.a)(this,t),(o=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={greeting:"To Do List",navList:["Todo List","Calculator","Weather Forecast"],todoItemIdCounter:0,todoItem:"",todoList:[]},o.handleTodoItemNameChange=o.handleTodoItemNameChange.bind(Object(h.a)(o)),o.handleCreateTodoItem=o.handleCreateTodoItem.bind(Object(h.a)(o)),o.handleClearList=o.handleClearList.bind(Object(h.a)(o)),o}return Object(b.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({todoItem:""})}},{key:"handleTodoItemNameChange",value:function(e){this.setState({todoItem:e.target.value})}},{key:"handleListItemNameChange",value:function(e){var t=this.state.todoList;t[e.target.id-1].name=e.target.value,this.setState({todoList:t})}},{key:"handleCreateTodoItem",value:function(e){e.preventDefault();var t=this.state.todoItemIdCounter+1,o={id:t,name:e.target.todoItem.value||"<_empty_entry_>",completed:!1};this.setState({todoItem:"",todoItemIdCounter:t,todoList:[].concat(Object(d.a)(this.state.todoList),[o])})}},{key:"handleDeleteTodoItem",value:function(e){this.setState((function(t){return{todoList:t.todoList.filter((function(t){return t.id!==e}))}}))}},{key:"toggleComplete",value:function(e){var t=this.state.todoList,o=t.findIndex((function(t){return t.id===e})),n=t[o];t[o]=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?g(o,!0).forEach((function(t){Object(l.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},n,{completed:!n.completed}),this.setState({todoList:t})}},{key:"handleClearList",value:function(e){e.preventDefault(),this.setState({todoItemIdCounter:0,todoList:[]})}},{key:"render",value:function(){return a.a.createElement("div",{className:"container-fluid"},a.a.createElement("h1",null,this.state.greeting),a.a.createElement(p,{todoItem:this.state.todoItem,handleItemNameChange:this.handleTodoItemNameChange,handleCreateTodoItem:this.handleCreateTodoItem,handleClearList:this.handleClearList}),a.a.createElement(f,{todoList:this.state.todoList,handleListItemNameChange:this.handleListItemNameChange.bind(this),handleItemNameChange:this.handleTodoItemNameChange,handleDeleteTodoItem:this.handleDeleteTodoItem.bind(this),toggleComplete:this.toggleComplete.bind(this)}))}}]),t}(n.Component);i.a.render(a.a.createElement(C,null),document.querySelector("#root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.37a9a001.chunk.js.map