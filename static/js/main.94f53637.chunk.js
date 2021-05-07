(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),r=s(17),i=s.n(r),c=(s(23),s(3)),o=s(4),l=s(6),m=s(5),p=(s(24),s(18)),d=s.n(p),h=(s(7),s(0));var u=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Employee Directory"}),Object(h.jsx)("div",{children:" All Important Employee Information"})]})};var j=function(e){return Object(h.jsx)("div",{className:"card",children:Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("div",{className:"name",children:Object(h.jsx)("img",{alt:e.last,src:e.image})}),Object(h.jsxs)("div",{className:"name",children:[e.title,e.first," ",e.last]}),Object(h.jsx)("div",{className:"name",children:e.gender}),Object(h.jsx)("div",{className:"name",children:e.age}),Object(h.jsx)("div",{className:"name",children:e.phone}),Object(h.jsx)("div",{className:"name",children:e.email})]})})},b=function(e){Object(l.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={alphabetical:!0,ascending:!0,sortedEmployees:[],employees:[]},e.sortName=function(){var t=[];t=e.state.alphabetical?e.props.empList.sort((function(e,t){var s=e.name.last.toLowerCase(),a=t.name.last.toLowerCase();return s<a?-1:s>a?1:0})):e.props.empList.sort((function(e,t){var s=e.name.last.toLowerCase(),a=t.name.last.toLowerCase();return s>a?-1:s<a?1:0})),e.setState({alphabetical:!e.state.alphabetical,sortedEmployees:t})},e.sortAge=function(){var t=[];t=e.state.ascending?e.props.empList.sort((function(e,t){var s=e.dob.age,a=t.dob.age;return s<a?-1:s>a?1:0})):e.props.empList.sort((function(e,t){var s=e.dob.age,a=t.dob.age;return s>a?-1:s<a?1:0})),e.setState({ascending:!e.state.ascending,sortedEmployees:t})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.state.sortedEmployees.length<1&&this.setState({sortedEmployees:this.props.empList})}},{key:"componentDidUpdate",value:function(e){this.props.empList!==e.empList&&this.setState({sortedEmployees:this.props.empList})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("tbody",{className:"col",children:[Object(h.jsx)("div",{className:"name photo",children:"Photo"}),Object(h.jsxs)("div",{className:"name Name",onClick:this.sortName,children:["Name"," "]}),Object(h.jsx)("div",{className:"name gender",children:"Gender"}),Object(h.jsx)("div",{className:"name",onClick:this.sortAge,children:"Age"}),Object(h.jsx)("div",{className:"name",children:"Phone"}),Object(h.jsx)("div",{className:"name mail",children:"E-mail"})]}),this.state.sortedEmployees.length>0&&this.state.sortedEmployees.map((function(e,t){return Object(h.jsx)(j,{image:e.picture.large,first:e.name.first,last:e.name.last,gender:e.gender,age:e.dob.age,phone:e.cell,email:e.email})}))]})}}]),s}(a.Component),v=function(e){Object(l.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={Search:"",filteredEmployees:[]},e.handleInputChange=function(t){e.setState({Search:t.target.value});var s=t.target.value,a=e.props.employees.filter((function(t){return console.log(e.props.employees),-1!==(t.name.title+t.name.first+t.name.last+t.gender+t.dob.age+t.email+t.cell).indexOf(s)}));e.setState({filteredEmployees:a})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){console.log("this.props",this.props),this.state.filteredEmployees.length<1&&this.setState({filteredEmployees:this.props.employees})}},{key:"render",value:function(){var e,t=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("form",{className:"form",children:Object(h.jsx)("input",{value:this.state.Search,name:"Search",onChange:function(e){return t.handleInputChange(e)},type:"text",placeholder:"Search"})}),(null===(e=this.state.filteredEmployees)||void 0===e?void 0:e.length)>0&&Object(h.jsx)(b,{empList:this.state.filteredEmployees}),Object(h.jsx)("br",{})]})}}]),s}(a.Component),f=function(e){Object(l.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={employees:[]},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://randomuser.me/api/?results=20&nat=Aus").then((function(t){e.setState({employees:t.data.results})}))}},{key:"render",value:function(){return console.log(this.state),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(u,{}),this.state.employees.length>0&&Object(h.jsx)(v,{employees:this.state.employees})]})}}]),s}(a.Component),g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,45)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),g()},7:function(e,t,s){}},[[44,1,2]]]);
//# sourceMappingURL=main.94f53637.chunk.js.map