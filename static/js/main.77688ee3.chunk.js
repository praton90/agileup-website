(this["webpackJsonpagileup-website"]=this["webpackJsonpagileup-website"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},199:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(43),i=n.n(r),o=(n(97),n(9)),s=n(10),c=(n(98),function(e){return l.a.createElement("nav",{className:"Nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.c,{to:"/",exact:!0},"COURSE"))))}),u=n(84),m=n.n(u),d=function(e){return l.a.createElement("header",null,l.a.createElement("div",{className:m.a.Header},l.a.createElement("h1",null,l.a.createElement("span",{style:{color:"#43963f"}},"Brain"),"Bites"),l.a.createElement("p",null,"Your business trainer on a daily basis.")),l.a.createElement(c,null))},p=n(15),f=n(16),h=n(18),E=n(17),g=n(85),b=n.n(g),v=function(e){return l.a.createElement("div",{className:b.a.Card},e.children)},y=(n(103),function(e){return l.a.createElement("li",{className:"post-item"},l.a.createElement("div",{className:"post-item__content"},l.a.createElement(v,null,l.a.createElement("h2",{className:"post__title"},e.post.title),l.a.createElement(o.b,{to:"/posts/"+e.post.id},l.a.createElement("img",{src:e.post.img,alt:"intro",className:"post-item__img"})),l.a.createElement(o.b,{className:"btn btn--fullwidth",to:"/posts/"+e.post.id},"Read More"))))}),w=n(86),S=n.n(w),_=function(e){return l.a.createElement("div",{className:S.a.Spinner},"Loading...")},k=(n(104),n(44)),N=function(e){Object(h.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={posts:[],loading:!0},a.client=k.createClient({space:"5ewpe53pwxis",accessToken:"Xerq7AgfY3obWybUXHTuhYnXSNUa5aHgd3l5SQnY-jk"}),a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.client.getEntries({content_type:"blogPost"}).then((function(t){var n=t.items.map((function(e){return{id:e.sys.id,title:e.fields.title,body:e.fields.content.substring(0,250).concat(" ..."),author:e.fields.author.fields.name,createdAt:e.sys.createdAt,img:e.fields.slides[0].fields.file.url}}));e.setState({posts:n,loading:!1})})).catch((function(t){e.setState({loading:!1}),console.log("Something wrong happened",t)}))}},{key:"render",value:function(){var e=l.a.createElement(v,null,l.a.createElement(_,null));if(!this.state.loading)if(this.state.posts.length){var t=this.state.posts.map((function(e){return l.a.createElement(y,{post:e,key:e.id})}));e=l.a.createElement("ul",{className:"post-items"},t)}else e=l.a.createElement(v,null,l.a.createElement("p",null,"No posts available"));return l.a.createElement(a.Fragment,null,e)}}]),n}(a.Component),j=n(27),A=n(91),O=(n(198),n(28)),x=n(29),C=n(44).createClient({space:"5ewpe53pwxis",accessToken:"Xerq7AgfY3obWybUXHTuhYnXSNUa5aHgd3l5SQnY-jk"}),B=(n(199),function(e){Object(h.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).formatPostBody=function(e){var t=function(e){var t=e.children;return l.a.createElement("p",null,t)},n={renderNode:Object(j.a)({},x.BLOCKS.PARAGRAPH,(function(e,n){return l.a.createElement(t,null,n)})),renderText:function(e){return e.split("\n").flatMap((function(e,t){return[t>0&&l.a.createElement("br",null),e]}))}};return Object(O.documentToReactComponents)(e,n)},a.state={post:null,loading:!0},a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;C.getEntry(t).then((function(t){console.log(t);var n={title:t.fields.title,content:t.fields.content,body:t.fields.body,author:{id:t.fields.author.sys.id,name:t.fields.author.fields.name,imageUrl:t.fields.author.fields.photo.fields.file.url,imageDescription:t.fields.author.fields.photo.fields.description,linkedIn:t.fields.author.fields.linkedIn},createdAt:new Date(t.sys.createdAt).toDateString(),slides:t.fields.slides.map((function(e){return{url:e.fields.file.url,description:e.fields.file.fileName}}))};e.setState({post:n,loading:!1})})).catch((function(t){e.setState({loading:!1}),console.log("Something wrong happened",t)}))}},{key:"render",value:function(){var e=l.a.createElement(_,null);return this.state.loading||(e=this.state.post?l.a.createElement(a.Fragment,null,l.a.createElement("h1",{className:"post__title"},this.state.post.title),l.a.createElement("div",{style:{maxWidth:"500px",margin:"0 auto"}},l.a.createElement(A.Carousel,null,this.state.post.slides.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("img",{src:e.url,alt:e.description}))})))),l.a.createElement("p",{className:"post__body"},this.formatPostBody(this.state.post.body))):l.a.createElement("p",{style:{color:"red"}},"Something went wrong")),l.a.createElement("div",{className:"fullpost"},l.a.createElement(v,null,e))}}]),n}(a.Component)),H=function(e){return l.a.createElement(v,null,l.a.createElement("h1",null,"About Agile Up"),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("p",null,"Maybe here we can put some information about Agile UP."),l.a.createElement("p",null,"If you think this section is not necessary we can just delete it.")))},R=(n(200),function(e){return l.a.createElement("div",{className:"container"},e.children)}),U=function(e){Object(h.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).formatAuthorBio=function(e){var t=function(e){var t=e.children;return l.a.createElement("p",null,t)},n={renderNode:Object(j.a)({},x.BLOCKS.PARAGRAPH,(function(e,n){return l.a.createElement(t,null,n)})),renderText:function(e){return e.split("\n").flatMap((function(e,t){return[t>0&&l.a.createElement("br",null),e]}))}};return Object(O.documentToReactComponents)(e,n)},a.state={author:null},a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;C.getEntry(t).then((function(t){var n={id:t.sys.id,name:t.fields.name,image:{url:t.fields.photo.fields.file.url,description:t.fields.photo.fields.description},bio:t.fields.bio,linkedIn:t.fields.linkedIn};e.setState({author:n,loading:!1})})).catch((function(t){e.setState({loading:!1}),console.log("Something wrong happened",t)}))}},{key:"render",value:function(){var e=l.a.createElement("p",null,"Loading...");return this.state.loading||(e=this.state.author?l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center",textDecoration:"underline"}},this.state.author.name),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("img",{src:this.state.author.image.url,alt:this.state.author.image.description,style:{width:"40%"}}),l.a.createElement("div",{style:{width:"55%"}},this.formatAuthorBio(this.state.author.bio)))):l.a.createElement("p",null,"Error...")),l.a.createElement(v,null,e)}}]),n}(a.Component),M=function(){return l.a.createElement(a.Fragment,null,l.a.createElement(d,null),l.a.createElement(R,null,l.a.createElement(s.a,{path:"/",exact:!0,component:N}),l.a.createElement(s.a,{path:"/about",component:H}),l.a.createElement(s.a,{path:"/posts/:id",component:B}),l.a.createElement(s.a,{path:"/author/:id",component:U})))};var P=function(){return l.a.createElement(o.a,{basename:"/"},l.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t){},84:function(e,t,n){e.exports={Header:"Header_Header__3w3i_"}},85:function(e,t,n){e.exports={Card:"Card_Card__UhVmd"}},86:function(e,t,n){e.exports={Spinner:"Spinner_Spinner__24ERy",load8:"Spinner_load8__1FLaS"}},92:function(e,t,n){e.exports=n(201)},97:function(e,t,n){},98:function(e,t,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.77688ee3.chunk.js.map