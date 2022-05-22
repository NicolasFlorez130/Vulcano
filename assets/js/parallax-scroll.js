jQuery(function(){ParallaxScroll.init()});var ParallaxScroll={showLogs:!1,round:1e3,init:function(){if(this._log("init"),this._inited)return this._log("Already Inited"),void(this._inited=!0);this._requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a,e){window.setTimeout(a,1e3/60)},this._onScroll(!0)},_inited:!1,_properties:["x","y","z","rotateX","rotateY","rotateZ","scaleX","scaleY","scaleZ","scale"],_requestAnimationFrame:null,_log:function(a){this.showLogs&&console.log("Parallax Scroll / "+a)},_onScroll:function(a){var e=jQuery(document).scrollTop(),t=jQuery(window).height();this._log("onScroll "+e),jQuery("[data-parallax]").each(jQuery.proxy(function(l,r){var n=jQuery(r),s=[],i=!1,o=n.data("style");null==o&&(o=n.attr("style")||"",n.data("style",o));var u,c=[n.data("parallax")];for(u=2;n.data("parallax"+u);u++)c.push(n.data("parallax-"+u));var d=c.length;for(u=0;u<d;u++){var m=c[u],h=m["from-scroll"];null==h&&(h=Math.max(0,jQuery(r).offset().top-t)),h|=0;var y=m.distance,p=m["to-scroll"];null==y&&null==p&&(y=t),y=Math.max(0|y,1);var v=m.easing,w=m["easing-return"];if(null!=v&&jQuery.easing&&jQuery.easing[v]||(v=null),null!=w&&jQuery.easing&&jQuery.easing[w]||(w=v),v){var x=m.duration;null==x&&(x=y),x=Math.max(0|x,1);var g=m["duration-return"];null==g&&(g=x),y=1;var f=n.data("current-time");null==f&&(f=0)}null==p&&(p=h+y),p|=0;var _=m.smoothness;null==_&&(_=30),_|=0,(a||0==_)&&(_=1),_|=0;var j=e;j=Math.max(j,h),j=Math.min(j,p),v&&(null==n.data("sens")&&n.data("sens","back"),j>h&&("back"==n.data("sens")?(f=1,n.data("sens","go")):f++),j<p&&("go"==n.data("sens")?(f=1,n.data("sens","back")):f++),a&&(f=x),n.data("current-time",f)),this._properties.map(jQuery.proxy(function(a){var e=0,t=m[a];if(null!=t){"scale"==a||"scaleX"==a||"scaleY"==a||"scaleZ"==a?e=1:t|=0;var l=n.data("_"+a);null==l&&(l=e);var r=(j-h)/(p-h)*(t-e)+e,o=l+(r-l)/_;if(v&&f>0&&f<=x){var u=e;"back"==n.data("sens")&&(u=t,t=-t,v=w,x=g),o=jQuery.easing[v](null,f,u,t,x)}(o=Math.ceil(o*this.round)/this.round)==l&&r==t&&(o=t),s[a]||(s[a]=0),s[a]+=o,l!=s[a]&&(n.data("_"+a,s[a]),i=!0)}},this))}if(i){if(null!=s.z){var Q=m.perspective;null==Q&&(Q=800);var A=n.parent();A.data("style")||A.data("style",A.attr("style")||""),A.attr("style","perspective:"+Q+"px; -webkit-perspective:"+Q+"px; "+A.data("style"))}null==s.scaleX&&(s.scaleX=1),null==s.scaleY&&(s.scaleY=1),null==s.scaleZ&&(s.scaleZ=1),null!=s.scale&&(s.scaleX*=s.scale,s.scaleY*=s.scale,s.scaleZ*=s.scale);var X="translate3d("+(s.x?s.x:0)+"px, "+(s.y?s.y:0)+"px, "+(s.z?s.z:0)+"px)"+" "+("rotateX("+(s.rotateX?s.rotateX:0)+"deg) rotateY("+(s.rotateY?s.rotateY:0)+"deg) rotateZ("+(s.rotateZ?s.rotateZ:0)+"deg)")+" "+("scaleX("+s.scaleX+") scaleY("+s.scaleY+") scaleZ("+s.scaleZ+")")+";";this._log(X),n.attr("style","transform:"+X+" -webkit-transform:"+X+" "+o)}},this)),window.requestAnimationFrame?window.requestAnimationFrame(jQuery.proxy(this._onScroll,this,!1)):this._requestAnimationFrame(jQuery.proxy(this._onScroll,this,!1))}};