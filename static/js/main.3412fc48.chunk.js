(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={form:"ContactForm_form__oxRjO",input:"ContactForm_input__1EFtL",addButton:"ContactForm_addButton__DYvOB"}},function(t,e,n){t.exports={contacts:"ContactList_contacts__2L4uJ",contact:"ContactList_contact__njGPd",removeButton:"ContactList_removeButton__xxR_Y"}},,,,function(t,e,n){t.exports={input:"Filter_input__3SIEZ"}},,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(9),r=n.n(o),i=(n(17),n(12)),s=n(2),u=n(3),l=n(5),m=n(4),d=n(10),b=n(6),h=n.n(b),j=n(0),f=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(d.a)({},e.target.name,e.target.value))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.props.onCreateContact,c=this.handleChange;return Object(j.jsxs)("form",{className:h.a.form,onSubmit:function(t){t.preventDefault(),a(e,n)},children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{className:h.a.input,name:"name",type:"text",value:e,onChange:c})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{className:h.a.input,name:"number",type:"text",value:n,onChange:c})]}),Object(j.jsx)("button",{className:h.a.addButton,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=n(11),p=n.n(C),O=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.onChangeFilter;return Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{className:p.a.input,name:"filter",type:"text",onChange:t})]})}}]),n}(a.Component),v=n(7),x=n.n(v),g=function(t){var e=t.filtredContacts,n=t.onRemoveContact;return Object(j.jsx)("ul",{className:x.a.contacts,children:e.map((function(t){return Object(j.jsxs)("li",{className:x.a.contact,children:[Object(j.jsxs)("p",{children:[t.name,": ",t.number]}),Object(j.jsx)("button",{className:x.a.removeButton,type:"button",onClick:function(){n(t.id)},children:"Delete"})]},t.id)}))})},_=(n(19),n(22)),y=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.isContainName=function(t,e){return Boolean(e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))},t.handleCreateContactsList=function(e,n){var a=t.state.contacts;t.isContainName(e,a)?alert("Contact ".concat(e," already exists.")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[{name:e,id:Object(_.a)(),number:n}])}}))},t.handleChangeFilter=function(e){t.setState({filter:e.target.value})},t.handleFilterContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.handleRemoveContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:n})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.handleCreateContactsList,e=this.handleFilterContacts,n=this.handleChangeFilter,a=this.handleRemoveContact;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Phone book"}),Object(j.jsx)(f,{onCreateContact:t}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(O,{onChangeFilter:n}),Object(j.jsx)(g,{filtredContacts:e(),onRemoveContact:a})]})}}]),n}(a.Component),F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),F()}],[[20,1,2]]]);
//# sourceMappingURL=main.3412fc48.chunk.js.map