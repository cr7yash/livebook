(this.webpackJsonplivebook=this.webpackJsonplivebook||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),o=n.n(i),c=n(1),s=n(3),y=n(2),h=n(7),x=600,l=400;function d(e,t,n,a){var r=e-n,i=t-a;return Math.sqrt(r*r+i*i)}var g=n(4);n(13);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=["orangered","white","white","white","white","white","white","orangered"],m={0:"<div class=\"title\"><h1>Halloween's stories</h1><img src='https://raw.githubusercontent.com/pylnata/livebook/master/public/images/0.png' /></div>",1:"<p class=\"number\">1</p>\n\n  <h3>The Legend of Bride's Head Bridge</h3>\n\n  <p>There's a bridge near Hanover in Germany called 'Der Kopf der Braut', which means bride's head.  A 15th century legend has it that Reichsgraf von Kesselstatt and his bride Gretchen were approaching the bridge in their horse and carriage when their way was blocked by an elderly crone.</p><p>The Reichsgraf or 'Count' ordered the old lady to get off the bridge instantly and make way for their carriage.  But it was dark, and the old lady had difficulty in herding her sheep off the bridge.</p>\n  <p>Because the old witch was moving none to fast, Reichsgraf von Kesselstatt took his whip and have her\n  a sound thrashing. </p>\n  ",2:"<p class=\"number right\">2</p>\n  <p> Bleeding, and cowering in a ditch, the old witch put a curse on the carriage.  Consequently when the bridal party eventually crossed the bridge, one of the horses shied and the other reared up.  </p>\n    <p><img src='https://raw.githubusercontent.com/pylnata/livebook/master/public/images/1.jpg' /></p>\n  <p>\n  The upshot was that Gretchen was thrown from the carriage into the river below. It seems certain that she drowned as the river was in torrent and Gretchen was never seen again.\n  </p>\n  ",3:"<p class=\"number\">3</p>\n  <p>However, it is said by Hanoverian wicca that at Halloween you can see a headless bride standing on rocks in the middle of the river.  Some say she is looking for her lost head, while other say she is looking for her beloved Reichsgraf von Kesselstatt.</p>\n\n\n  <p><img src='https://raw.githubusercontent.com/pylnata/livebook/master/public/images/5.png' /></p>\n\n\n  ",4:"\n    <p class=\"number right\">4</p>\n\n    <h3>Uncle John's Halloween Story</h3>\n    <p>\n    When I was a boy, each year as the nights began to draw in, my uncle John would tell we kids this Halloween story.  It was a tale about a trick that he played in a graveyard.  One night Uncle John spotted his great friend Eddie weaving his way home from the village pub.  As John watched, he saw Eddie open the church's litch gate and take the shortcut through the graveyard.\n    </p>\n\n    <p>\n  There was no doubt that Eddie was the worse for wear, and appeared disoriented, really he should have taken the longer route home via the round ring.  But then he cried out to nobody in particular, 'Where am I?'\n</p>\n  ",5:"\n  <p class=\"number\">5</p>\n  <p>\n  John replied instantly, 'Amongst the living'.\n  </p><p>\n  'Where are you?' cried Eddie'; to which John replied in his most sepulchral voice, 'Amongst the dead'.\n  </p>\n\n  <p>\n  Eddie sobered up instantly, rushed back the way he came, and took the long way around the churchyard.  This time he preferring to go passed the round ring, rather than stay a minute longer amongst the spirits of the gravestones.\n    </p>",6:'\n  <p class="number right">6</p>\n  <p>Stories are from <a href="https://www.funny-jokes.com">https://www.funny-jokes.com</a></p>\n  ',7:'<h1>&copy; 2019 <a href="http://github.com/pylnata">github.com/pylnata</a></h1>'},f=x/2,z=function(e){return{x:f,y:0,x1:0,y1:0,x2:f,y2:0,x3:f,y3:l,x4:0,y4:l,x5:0,y5:l,z:0===e?2:e>=2?0:1,display:e<=2?"block":"none",bgPos:0,bgPosY:0,bgRad:0,bgHeight:l,bgDisplay:"none",bgY2:0,r:0,scaleX:1,index:0}},v=z,w=function(){r.a.useEffect((function(){return Object(g.disablePageScroll)(),function(){Object(g.enablePageScroll)()}}),[]);var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=(t[0],t[1]),i=Object(y.c)(b.length,(function(e){return u({},v(e),{from:z(e)})})),o=Object(s.a)(i,2),c=o[0],p=o[1],w=Object(h.a)({onDrag:function(e){var t=Object(s.a)(e.args,1)[0],a=e.down,r=(Object(s.a)(e.delta,1)[0],e.distance),i=Object(s.a)(e.direction,1)[0],o=e.movement,c=(e.velocity,e.event,e.initial),y=(e.cancel,e.canceled,e.active,e.first,e.last,e.xy),h=e.memo;if(0!==r){var g,b=i<0?-1:1,m=0,z=0,v="none",w=0,k=l,O={friction:0,tension:a?0:100,clamp:!0,precision:0},j={x:f,y:0,x1:0,y1:0,x2:f,y2:0,x3:f,y3:l,x4:0,y4:l,x5:0,y5:l,z:1,bgPos:0,bgPosY:0,bgRad:0,bgY2:0,bgHeight:l,bgDisplay:"none",display:"none",config:O,onRest:null,immediate:!1,r:0,scaleX:1,index:t},P=document.getElementById("book-container").offsetLeft;g=c[0]-P<=f?"left":c[0]-P>f?"right":-1===b?"right":"left";var E=!a&&(o[0]>100&&"left"===g||o[0]<-100&&"right"===g);n(!1);var R=function(){p((function(e){return u({},j,e===t?{z:2,x:f,immediate:!0,display:"none"}:e===t-1?{z:1,x:f,display:"block",immediate:!0}:e===t-2?{x:0,z:1,display:"block",immediate:!0}:e===t+1?{x:f,z:0,display:"block",immediate:!0}:{z:0,display:"none",immediate:!0})})),console.log("finished-left"),n(!0)},H=function(e){!a&&E?(p((function(e){return u({},j,e===t?{z:2,display:"none",x:0,immediate:!0}:e===t+1?{z:1,x:0,display:"block",immediate:!0}:e===t+2?{z:1,display:"block",immediate:!0}:e===t-1?{x:0,z:0,display:"block",immediate:!0}:e===t+4?{x:f,z:0,display:"block",immediate:!0}:{z:0,display:"none",immediate:!0})})),console.log("finished-right"),n(!0)):a||E||n(!0)},I=function(e,t,n,a,r,i,o){var c=document.getElementById("book-container").offsetLeft,s=document.getElementById("book-container").offsetTop,y={},h=x/2,g=a[0]-c,p=a[1]-s,u=t-c,b=n-s;u>x?u=x:u<0&&(u=0),b>l?b=l:b<0&&(b=0);var m="right"===e?x:0,f=p,z="right"===e?x-g:g;z>p&&(m=g,f=0,z=p),z>l-p&&(m=g,f=l),m>x?m=x:m<0&&(m=0),"right"===e&&u>m?m=u+1:"left"===e&&u<m&&(m=u-1);var v=(u-m)/(f-b),w=(u+m)/2,k=(b+f)/2,O=-k/v+w,j=0,P=0;"right"===e?(O>x&&(O=x,j=v*(x-w)+k,P=1),O<h&&(O=h)):"left"===e&&(O<0&&(O=0,j=-v*w+k,P=1),O>h&&(O=h));var E=(l-k)/v+w,R=l,H=0;"right"===e?(E>x&&(E=x,R=v*(x-w)+k,H=1),E<h&&(E=h)):"left"===e&&(E<0&&(E=0,R=-v*w+k,H=1),E>h&&(E=h));var I=R-j,M=O-E,B=-(I*O+M*j);function D(e,t){return((M*M-I*I)*e-2*I*M*t-2*I*B)/(I*I+M*M)}function S(e,t){return((I*I-M*M)*t-2*I*M*e-2*M*B)/(I*I+M*M)}var Y=D("right"===e?x:0,0),J=S("right"===e?x:0,0),T=D("right"===e?x:0,l),X=S("right"===e?x:0,l);y.z0x=O,y.z0y=j,y.z1x=E,y.z1y=R;var W=Math.atan2(X-J,T-Y)-Math.PI/2,q=d(O,j,Y,J),A=d(E,R,T,X);return y.x="right"===e?Y:Y-h,y.y=J,y.r=W,y.display="block",y.z0=P,y.z1=H,0===P&&0===H?"right"===e?(y.x1=0,y.y1=0,y.x2=q,y.y2=0,y.x3=A,y.y3=l,y.x4=0,y.y4=l):(y.x1=h-q,y.y1=0,y.x2=h,y.y2=0,y.x3=h,y.y3=l,y.x4=h-A,y.y4=l):1===P?"right"===e?(y.x1=0,y.y1=q,y.x2=A,y.y2=l,y.x3=0,y.y3=l,y.x4=y.x3,y.y4=y.y3):(y.x1=h,y.y1=q,y.x2=h-A,y.y2=l,y.x3=h,y.y3=l,y.x4=y.x3,y.y4=y.y3):1===H&&("right"===e?(y.x1=0,y.y1=0,y.x2=q,y.y2=0,y.x3=0,y.y3=l-A,y.x4=y.x3,y.y4=y.x3):(y.x1=h,y.y1=0,y.x2=h-q,y.y2=0,y.x3=h,y.y3=l-A,y.x4=y.x3,y.y4=y.x3)),r||(i?"right"===e?(y.x=0,y.x1=0,y.x2=h,y.x3=h,y.x4=0,y.y=0,y.y1=0,y.y2=0,y.y3=l,y.y4=l,y.r=0,y.z0x=h,y.z0y=0,y.z1x=h,y.z1y=l):(y.x=h,y.x1=0,y.x2=h,y.x3=h,y.x4=0,y.y=0,y.y1=0,y.y2=0,y.y3=l,y.y4=l,y.r=0,y.z0x=h,y.z0y=0,y.z1x=h,y.z1y=l):"right"===e?1===H?(y.y=0,y.x=x,y.x2=0,y.x3=0,y.x4=0,y.y1=0,y.y2=0,y.y3=0,y.z0x=0,y.z0y=0,y.z1x=0,y.z1y=0):1===P?(y.x=x+Y-T,y.y=l+J-X,y.x1=0,y.y1=l,y.x2=0,y.y2=l,y.x3=y.x2,y.x4=y.x2,y.y3=y.y2,y.y4=y.y2,y.z0x=0,y.z0y=0,y.z1x=0,y.z1y=0):(y.r=0,y.y=0,y.x=x,y.x1=0,y.x2=0,y.x3=0,y.x4=0,y.y1=0,y.y2=0,y.y3=l,y.y4=l,y.z0x=0,y.z0y=0,y.z1x=0,y.z1y=0):1===H?(y.x=-h,y.y=0,y.x1=h,y.x2=h,y.x3=h,y.x4=h,y.x5=h,y.y1=0,y.y2=0,y.y3=0,y.y4=0,y.y5=0,y.z0x=0,y.z0y=0,y.z1x=0,y.z1y=0):1===P?(y.x=-h,y.x1=h,y.x2=h,y.x3=h,y.x4=h,y.x5=h,y.y=l,y.y1=0,y.y2=0,y.y3=0,y.y4=0,y.y5=0,y.z0x=0,y.z0y=l,y.z1x=0,y.z1y=l):(y.r=0,y.y=0,y.x=-h,y.x1=h,y.x2=h,y.x3=h,y.x4=h,y.y1=0,y.y2=0,y.y3=l,y.y4=l,y.z0x=0,y.z0y=0,y.z1x=0,y.z1y=l)),y}(g,y[0],y[1],c,a,E),M=I;return p((function(e){var r=0,i=0,o=0,c=0,s=0,y=0,d=0,b=0,P=0;if("left"===g){if(e===t-1){I.x5=I.x4,I.y5=I.y4;var M=u({},j,{display:"block",z:2},I,{bgPos:I.x1,scaleX:1,onRest:function(){I.x,!a&&E?R():E||a||n(!0)}});if(!a&&E){var B=h.z0x;return 1===I.z0&&(B=h.z1x),1===I.z1||1===I.z0?{r:0,x:2*B-f,y:0,x1:f-B,y1:0,x2:f,y2:0,x3:f,y3:l,x4:f-B,y4:l,x5:f-B,y5:l,immediate:!0,onRest:function(){p((function(e){return e===t?{x1:B=f,y1:0,x2:f,y2:0,x3:f,y3:l,x4:B,y4:l,x5:B,y5:l,immediate:!0,onRest:function(){p((function(e){if(e===t)return{x:x,display:"none",immediate:!1,config:O,x1:f,x2:f,x3:f,x4:f,x5:f};if(e===t-1){var n=M;return n.onRest=function(){return R()},n}}))}}:void 0}))}}:M}return M}if(t===e){1===I.z1?(r=I.z0x,i=f,c=f,s=l,d=l,b=I.z1x,P=I.z1y,a||E||(r=0,b=0,P=0)):1===I.z0?(i=f,c=f,s=l,y=I.z1x,d=l,b=0,P=I.z0y):(r=I.z0x,i=f,c=f,s=l,y=I.z1x,d=l,b=I.z1x,P=l);var D=u({},j,{display:"block",x:0,x1:r,y1:0,x2:i,y2:o,x3:c,y3:s,x4:y,y4:d,x5:b,y5:P});if(a||!E||1!==I.z1&&1!==I.z0)return D;return{r:0,x:0,y:0,x1:f,x4:f,y1:0,x2:f,y2:0,x3:f,y3:l,y4:l,x5:f,y5:l,immediate:!0}}return e===t-2?u({},j,{x:0,display:"block"}):e===t+1?{bgDisplay:"none"}:void 0}if("right"!==g)return{index:t,onRest:null,display:"none",immediate:!0};if(t===e){var S=!1;if(1===I.z1){i=I.z0x-f,c=I.z1x-f,s=I.z1y,y=f,d=l,b=0,P=l,a||E||(i=f,o=0,c=f,s=0,y=f,d=l,b=0,P=l);var Y=Math.abs(f-i),J=Math.abs(l-s);z=-180*Math.atan(Y/J)/Math.PI,k=Math.sqrt(J*J+Y*Y),w=k-l,S=!0}else 1===I.z0?(i=f,o=0,c=I.z0x-f,s=I.z0y,y=I.z1x-f,d=I.z1y,b=0,P=l,a||E||(c=f,s=l,y=f,d=l,b=0,P=l)):(i=I.z0x-f,c=I.z1x-f,s=I.z1y,b=y,P=d=l,a||E||(i=f,o=0,c=f,s=l,y=0,d=l,b=0,P=l));if(!S){var T=Math.abs(i-c),X=l;z=180*Math.atan(X/T)/Math.PI-90,k=Math.sqrt(X*X+T*T),w=k-l}var W=u({},j,{display:"block",x:f,x2:i,y2:o,x3:c,y3:s,x4:y,y4:d,x5:b,y5:P});return a||!E||1!==I.z1&&1!==I.z0?W:{r:0,x:f,y:0,x1:0,y1:0,x2:f-h.x2,y2:0,x3:f-h.x2,y3:l,x4:0,y4:l,x5:0,y5:l,immediate:!0}}if(e===t+1){I.x3>I.x2&&(z=-z),m=f-I.x2,v="block";var q=u({},j,{display:"block",z:1},I,{onRest:function(){return H(I.x)}});return!a&&E&&(1===I.z1||1===I.z0)?{r:0,x:x-2*h.x2,y:0,x1:0,y1:0,x2:h.x2,y2:0,x3:h.x2,y3:l,x4:0,y4:l,x5:0,y5:l,immediate:!0,onRest:function(){p((function(e){return e===t?{x2:f-h.x2,x3:f-h.x2,immediate:!0,onRest:function(){p((function(e){if(e===t)return{immediate:!1,config:O,x2:0,x3:0}}))}}:e===t+1?q:void 0}))}}:q}return e===t+2?{index:t,bgPos:m,bgPosY:w,bgRad:z,bgHeight:k,bgDisplay:v,bgY2:0,display:"block",immediate:!0,x:f}:void 0})),a?M:void 0}},onScroll:function(e){return e},onHover:function(e){e.hovering,e.down;return!1}},{}),k=c.map((function(e,t){var n=e.x,a=e.y,i=e.x1,o=e.y1,s=e.x2,h=e.y2,x=e.x3,l=e.y3,d=e.x4,g=e.y4,p=e.x5,u=e.y5,z=e.z,v=(e.bgPos,e.bgPosY,e.bgRad),k=(e.bgHeight,e.bgDisplay,e.bgY2,e.display),O=e.r,j=e.scaleX,P=e.index;return r.a.createElement("div",{key:t},r.a.createElement(y.a.div,Object.assign({key:t,style:{display:k,zIndex:z,backgroundColor:b[t],backgroundPositionX:0,backgroundImage:t%2===1&&t!==c.length-1?Object(y.b)([s,v],(function(e,t){return"linear-gradient(to right,\n         rgb(230, 230, 230) 0%,\n        rgb(255,255,255) ".concat(65*e/f,"%,\n        rgb(230, 230, 230) ").concat(80*e/f,"%,\n        rgb(217, 217, 217) ").concat(88*e/f,"%,\n        rgb(255,255,255) 100%\n      )")})):(P.value,"linear-gradient(to right, rgba(0, 0, 0, 0.3) 0%,rgba(184, 184, 184, 0) 60px)"),WebkitClipPath:Object(y.b)([i,o,s,h,x,l,d,g,p,u],(function(e,t,n,a,r,i,o,c,s,y){return void 0===s&&(s=o),void 0===y&&(y=c),"polygon(".concat(e,"px ").concat(t,"px, ").concat(n,"px ").concat(a,"px, ").concat(r,"px ").concat(i,"px, ").concat(o,"px ").concat(c,"px, ").concat(s,"px ").concat(y,"px )")})),transformOrigin:t%2===0?f+"px 0px":"0px 0px",transform:Object(y.b)([n,a,O,j],(function(e,t,n,a){return"translateX(".concat(e,"px) translateY(").concat(t,"px) rotate(").concat(n,"rad) scaleX(").concat(a,")")}))},className:"page page--".concat(t," ")},w(t)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:m[t]}})),!1)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"book-container",style:{width:x,height:l}},k),r.a.createElement("div",{className:"copy"},"Drag page to flip"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7f71190a.chunk.js.map