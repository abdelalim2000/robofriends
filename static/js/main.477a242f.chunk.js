(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),o=n.n(s),a=(n(12),n(13),n(4)),i=n(5),h=n(7),l=n(6),d=n(0),b=function(e){var t=e.robot,n=t.id,c=t.name,r=t.email,s=t.phone;return Object(d.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(n),alt:c,width:"200",height:"200"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:c}),Object(d.jsx)("p",{children:r}),Object(d.jsx)("p",{children:s})]})]})},u=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsx)(b,{robot:e},e.id)}))})},j=function(e){var t=e.handleSearch;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",name:"search",placeholder:"Search Robots",onChange:t})})},f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleSearch=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})})).catch((function(e){return console.log(e.message)}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.email.toLowerCase().includes(n.toLowerCase())||e.phone.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1 tc ttu white",children:"Robo Friends"}),Object(d.jsx)(j,{handleSearch:this.handleSearch}),Object(d.jsx)(u,{robots:c})]}):Object(d.jsx)("h1",{className:"tc white ma3 f1",children:"Loading"})}}]),n}(c.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.477a242f.chunk.js.map