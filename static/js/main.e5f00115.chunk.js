(this.webpackJsonptiktok=this.webpackJsonptiktok||[]).push([[0],{37:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},61:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),i=c(26),r=c.n(i),a=(c(37),c(13)),o=c.n(a),d=c(27),l=c(4),u=c(28),b=c.n(u).a.create({baseURL:"http://localhost:9000"}),j=(c(57),c(58),c(59),c(1));var v=function(e){var t=e.channel,c=e.description,s=e.movieTitle;return Object(j.jsx)("div",{className:"videoFooter",children:Object(j.jsxs)("div",{className:"videoFooter_text",children:[Object(j.jsxs)("h3",{children:["@",t]}),Object(j.jsx)("div",{className:"videoFooter_ticker",children:Object(j.jsx)("p",{children:s})}),Object(j.jsx)("p",{children:c})]})})},p=(c(61),c(29)),h=c.n(p),f=c(31),m=c.n(f);var O=function(e){var t=e.likes,c=(e.shares,e.messages,Object(s.useState)(!1)),n=Object(l.a)(c,2),i=n[0],r=n[1];return Object(j.jsx)("div",{className:"videoSidebar",children:Object(j.jsxs)("div",{className:"videoSidebar_button",children:[i?Object(j.jsx)(h.a,{fontSize:"large",onClick:function(e){return r(!1)}}):Object(j.jsx)(m.a,{fontSize:"large",onClick:function(e){return r(!0)}}),Object(j.jsx)("p",{children:i?t+1:t})]})})};var k=function(e){var t=e.url,c=e.channel,n=e.description,i=e.movieTitle,r=e.likes,a=e.shares,o=e.messages,d=Object(s.useState)(!1),u=Object(l.a)(d,2),b=u[0],p=u[1],h=Object(s.useRef)(null);return Object(j.jsxs)("div",{className:"video",children:[Object(j.jsx)("video",{onClick:function(){b?(h.current.pause(),p(!1)):(h.current.play(),p(!0))},className:"video_player",loop:!0,type:"video/mp4",ref:h,src:t}),Object(j.jsx)(v,{channel:c,description:n,movieTitle:i}),Object(j.jsx)(O,{likes:r,shares:a,messages:o})]})};c.p,c.p,c.p;var x=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/v2/posts");case 2:return t=e.sent,n(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(c),Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)("div",{className:"app_videos",children:[Object(j.jsx)(k,{url:"https://v39.tiktokcdn-us.com/24320f15a8bae393becb95bd49ded4f0/61849368/video/tos/useast2a/tos-useast2a-pve-0068/3fea1d66564f4b3cbe1eb630fdeb9d51/?a=1233&br=1258&bt=629&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Sduyqeta4kag3&l=2021110420110001011300619710A8DD4C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzZkaDY6ZmVsODMzNzczM0ApZTxnOjtmaTtkNzxmOjdmZGdrMjEzcjRnXnBgLS1kMTZzcy4wNGE0XzQ0LzE0YzFeMjQ6Yw%3D%3D&vl=&vr=",channel:"jonesmichael",description:"Musa travels through parrell universes to find his captured father...",movieTitle:"Cyba Brotha",likes:"4623"}),Object(j.jsx)(k,{url:"https://v19.tiktokcdn-us.com/3d3a8bd67c08b7975db8fe023da18901/618496f6/video/tos/useast2a/tos-useast2a-ve-0068c004/21f806103b874794ac1d5b7cc1e9b6aa/?a=1233&br=2620&bt=1310&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Sduyqeta4kag3&l=20211104202612010191057017363CBA0C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anY2Nzc6Znc1NzMzNzczM0ApZjY4ZTo3M2Q3NzhlOWU5OmcuZTBtcjRnNWtgLS1kMTZzc2E0NjJiYGBeYzAxMF80YDU6Yw%3D%3D&vl=&vr=",channel:"mrrobodude",description:"When the Order of Robots dynasty took over the world, one robot decided to not fall in line...",movieTitle:"Robotic Rebel",likes:"3326"}),Object(j.jsx)(k,{url:"https://v39.tiktokcdn-us.com/40ad6bc94b9448c3196705dcd493085f/6184978f/video/tos/useast2a/tos-useast2a-ve-0068c003/2c90b46c15f542918f68b689a1ef7f1d/?a=1233&br=3626&bt=1813&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=2&er=&ft=Sduyqeta4kag3&l=2021110420312301011313512820AB6F34&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ampsZTs6ZjpwODMzNzczM0ApN2ZmN2RkOztoNzo5OzxkOmdjLS1xcjRvZGtgLS1kMTZzc180Ly8wLzI2MWBhYDAzYV46Yw%3D%3D&vl=&vr=",channel:"innov8",description:"In a world where drones are only issued for goverment use to monitor civilians Khadijja builds one on her own... ",movieTitle:"Similar",likes:"6892"})]})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),z()}},[[68,1,2]]]);
//# sourceMappingURL=main.e5f00115.chunk.js.map