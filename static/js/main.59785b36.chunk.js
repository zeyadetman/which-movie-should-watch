(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(8),c=n.n(i),r=(n(15),n(2)),s=n(3),l=n(5),h=n(4),u=n(6),p=n(1),m=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("input",{className:"input-comp",type:this.props.type,style:{border:"none",padding:"5px",margin:"5px",borderBottom:"1px solid #000",width:"20%",minWidth:"200px",textAlign:"center",color:"#000",fontWeight:"800"},onChange:this.props.onChange,placeholder:this.props.placeholder})}}]),t}(o.Component),d=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("button",{onClick:this.props.onClick,className:"button-comp",style:{padding:"15px 30px",border:"none",position:"relative",top:"0",cursor:"pointer",borderRadius:"3px",margin:"15px 0 11px 0",textAlign:"center",userSelect:"none",transition:"all 0.2s ease",background:"#fc3",boxShadow:"0px 5px rgb(171, 141, 51)",color:"#000",fontWeight:"800"}},this.props.text)}}]),t}(o.Component),f=(n(17),n(19),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={movie1:"",movie2:"",movie1Info:{},movie2Info:{},isCompare:!1},n.movie1Change=n.movie1Change.bind(Object(p.a)(Object(p.a)(n))),n.movie2Change=n.movie2Change.bind(Object(p.a)(Object(p.a)(n))),n.handleCompare=n.handleCompare.bind(Object(p.a)(Object(p.a)(n))),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"movie2Change",value:function(e){this.setState({movie1:e.target.value})}},{key:"movie1Change",value:function(e){this.setState({movie2:e.target.value})}},{key:"handleCompare",value:function(){var e=this,t="https://omdbapi.com/?apikey=a5cbd3f6&t=".concat(this.state.movie1),n="https://omdbapi.com/?apikey=a5cbd3f6&t=".concat(this.state.movie2);fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({movie1Info:t})}).catch(function(e){console.log(e)}),fetch(n).then(function(e){return e.json()}).then(function(t){e.setState({movie2Info:t})}).then(function(){e.setState({isCompare:!0})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=0,n=0;return a.a.createElement("div",{style:{height:"90%",position:"absolute",top:"0",bottom:"0",left:"0",right:"0",margin:"auto"}},a.a.createElement("div",null,a.a.createElement("h1",{style:{background:"#fc3",textAlign:"center",padding:"20px",margin:"25px auto",width:"50%",border:"5px solid",fontWeight:"800"}},"WHICH MOVIE SHOULD WATCH?")),this.state.isCompare?a.a.createElement("div",{style:{textAlign:"center"}},this.state.movie1Info.Ratings?this.state.movie1Info.Ratings.forEach(function(e){"Internet Movie Database"===e.Source?t+=+e.Value.split("/")[0]:"Rotten Tomatoes"===e.Source?t+=+e.Value.slice(0,-1):"Metacritic"===e.Source&&(t+=+e.Value.split("/")[0])}):null,this.state.movie2Info.Ratings?this.state.movie2Info.Ratings.forEach(function(e){"Internet Movie Database"===e.Source?n+=+e.Value.split("/")[0]:"Rotten Tomatoes"===e.Source?n+=+e.Value.slice(0,-1):"Metacritic"===e.Source&&(n+=+e.Value.split("/")[0])}):null,a.a.createElement("p",{style:{fontSize:"2em",fontWeight:"900",background:"#fc3",padding:"15px",color:"#000"}}," ",t>n?this.state.movie1Info.Title:this.state.movie2Info.Title||"Go Sleep..."),a.a.createElement(d,{text:"Play Again",onClick:function(){return e.setState({isCompare:!1})}})):a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("div",{style:{margin:"5% 0"}},a.a.createElement(m,{type:"text",placeholder:"Movie Title",onChange:this.movie1Change}),a.a.createElement(m,{type:"text",placeholder:"Movie Title",onChange:this.movie2Change})),a.a.createElement(d,{text:"COMPARE",onClick:this.handleCompare})))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.59785b36.chunk.js.map