(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),l=n.n(o),i=n(1),r=n(2),s=n(4),u=n(3),m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=setInterval((function(){e.setState({time:(new Date).toLocaleTimeString()}),console.log(e.state.time)}),1e3);this.setState({interval:t})}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.log("The Clock was renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.interval)}},{key:"render",value:function(){return c.a.createElement("div",{className:"clock"},"Current time:"," ",this.state.time)}}]),n}(c.a.Component);n(12);var p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!1,clockName:null},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"React clock"),this.state.isClockVisible&&c.a.createElement(m,{name:this.state.clockName}),c.a.createElement("div",{className:"App__buttons"},c.a.createElement("button",{type:"button",onClick:function(){e.setState({isClockVisible:!0})}},"Show Clock"),c.a.createElement("button",{type:"button",onClick:function(){e.setState({isClockVisible:!1})}},"Hide Clock"),c.a.createElement("button",{type:"button",onClick:function(){e.setState({clockName:(new Date).getMilliseconds()})}},"Set random name")))}}]),n}(c.a.Component);l.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.b193e439.chunk.js.map