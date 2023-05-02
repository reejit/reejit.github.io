var timeDisplay = document.getElementById("time");
function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);


var rando = document.getElementById("place");
var arr = ["at <b>Noamundi</b>", "at <b>Kolkata</b>","in <b>India</b>", "in <b>Jharkhand</b>", "in <b>West Bengal</b>", "at <b>Ranaghat</b>", "at <b>Ranchi</b>", "at <b>Chaibasa</b>", "at <b>Home</b>", "at <b>School</b>", "at <b>Tution</b>", "in a <b>Hotel</b>", "on <b>bed</b>", "in <b>bed</b>"];
function random() {
    var rand = arr[Math.floor(Math.random() * arr.length)];
    rando.innerHTML = rand;
}
random();

var nowPlaying = document.getElementById("text");
function magic(){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",'https://scraper2.onlineradiobox.com/jp.jpoppowerplaykawaii',false);
    Httpreq.send( null );
    var raw = Httpreq.responseText;
    var json_obj = JSON.parse(raw);
    var msg = json_obj.title
    nowPlaying.innerHTML = msg;
}   
setInterval(magic, 15000)

function aud_play_pause() {
  var myAudio = document.getElementById("myTune");
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
  }
}

var visitCount = document.getElementById("count");
function coun(){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",'https://api.countapi.xyz/hit/581f4dd8-20d4-43c6-b2e8-bac5cf8c23d3',false);
    Httpreq.send( null );
    var raw = Httpreq.responseText;
    var json_obj = JSON.parse(raw);
    var count = json_obj.value
    visitCount.innerHTML = count;
}

coun();

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

var quot = document.getElementById("quott")
var auth = document.getElementById("auth");
function quott(){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",'https://animechan.vercel.app/api/random',false);
    Httpreq.send( null );
    var raw = Httpreq.responseText;
    var json_obj = JSON.parse(raw);
    var quote = json_obj.quote;
    var author = json_obj.character;
    var animeo = json_obj.anime;
    var frm = '~ '+author+' from '+animeo;
    quot.innerHTML = quote;
    auth.innerHTML = frm;
}

quott();

function vibrate(milli) { 
   navigator.vibrate(milli); 
} 

timeLeft=11;
function countdown() {
	timeLeft--;
	var sec = document.getElementById("seconds");
        var snds = String( timeLeft );
        var nw = "<h1><b>"+snds + " second(s)"+"</b></h1>";
        sec.innerHTML = nw;
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
        else{
           sec.innerHTML = "DESTROYING";
           sleep(1000);    
           vibrate(2000);
           sec.innerHTML = "Destroying Web page"; 
           sleep(1000);
           vibrate(500);  
           document.body.innerHTML = "<h1>Empty as space 🌌.</h1>";
        }};



function vis(){
document.getElementById("second").remove();
}


var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

/*
//---slider-captcha-js--
(function(){"use strict";function u(n){var i=document.getElementById(n.id),r=typeof n=="object"&&n;return new t(i,r)}var r=function(){var u=arguments.length,n=arguments[0]||{},t,i,r;for(typeof n!="object"&&typeof n!="function"&&(n={}),u==1&&(n=this,t--),t=1;t<u;t++){i=arguments[t];for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])}return n},i=function(n){return typeof n=="function"&&typeof n.nodeType!="number"},t=function(n,i){this.$element=n;this.options=r({},t.DEFAULTS,i);this.$element.style.position="relative";this.$element.style.width=this.options.width+"px";this.$element.style.margin="0 auto";this.init()},n;t.VERSION="1.0";t.Author="argo@163.com";t.DEFAULTS={width:280,height:155,PI:Math.PI,sliderL:42,sliderR:9,offset:5,loadingText:"æ­£åœ¨åŠ è½½ä¸­...",failedText:"å†è¯•ä¸€æ¬¡",barText:"å‘å³æ»‘åŠ¨å¡«å……æ‹¼å›¾",repeatIcon:"fa fa-repeat",maxLoadCount:3,localImages:function(){return"images/Pic"+Math.round(Math.random()*4)+".jpg"},verify:function(n,t){var i=!1;return $.ajax({url:t,data:{datas:JSON.stringify(n)},dataType:"json",type:"post",async:!1,success:function(n){i=JSON.stringify(n);console.log("è¿”å›žç»“æžœï¼š"+i)}}),i},remoteUrl:null};window.sliderCaptcha=u;window.sliderCaptcha.Constructor=t;n=t.prototype;n.init=function(){this.initDOM();this.initImg();this.bindEvents()};n.initDOM=function(){var n=function(n,t){var i=document.createElement(n);return i.className=t,i},v=function(n,t){var i=document.createElement("canvas");return i.width=n,i.height=t,i},f=v(this.options.width-2,this.options.height),e=f.cloneNode(!0),t=n("div","sliderContainer"),l=n("i","refreshIcon "+this.options.repeatIcon),o=n("div","sliderMask"),y=n("div","sliderbg"),s=n("div","slider"),a=n("i","fa fa-arrow-right sliderIcon"),h=n("span","sliderText"),u,c;e.className="block";h.innerHTML=this.options.barText;u=this.$element;u.appendChild(f);u.appendChild(l);u.appendChild(e);s.appendChild(a);o.appendChild(s);t.appendChild(y);t.appendChild(o);t.appendChild(h);u.appendChild(t);c={canvas:f,block:e,sliderContainer:t,refreshIcon:l,slider:s,sliderMask:o,sliderIcon:a,text:h,canvasCtx:f.getContext("2d"),blockCtx:e.getContext("2d")};i(Object.assign)?Object.assign(this,c):r(this,c)};n.initImg=function(){var n=this,f=window.navigator.userAgent.indexOf("Trident")>-1,r=this.options.sliderL+this.options.sliderR*2+3,e=function(t,i){var r=n.options.sliderL,o=n.options.sliderR,s=n.options.PI,u=n.x,e=n.y;t.beginPath();t.moveTo(u,e);t.arc(u+r/2,e-o+2,o,.72*s,2.26*s);t.lineTo(u+r,e);t.arc(u+r+o-2,e+r/2,o,1.21*s,2.78*s);t.lineTo(u+r,e+r);t.lineTo(u,e+r);t.arc(u+o-2,e+r/2,o+.4,2.76*s,1.24*s,!0);t.lineTo(u,e);t.lineWidth=2;t.fillStyle="rgba(255, 255, 255, 0.7)";t.strokeStyle="rgba(255, 255, 255, 0.7)";t.stroke();t[i]();t.globalCompositeOperation=f?"xor":"destination-over"},o=function(n,t){return Math.round(Math.random()*(t-n)+n)},t=new Image,u;t.crossOrigin="Anonymous";u=0;t.onload=function(){n.x=o(r+10,n.options.width-(r+10));n.y=o(10+n.options.sliderR*2,n.options.height-(r+10));e(n.canvasCtx,"fill");e(n.blockCtx,"clip");n.canvasCtx.drawImage(t,0,0,n.options.width-2,n.options.height);n.blockCtx.drawImage(t,0,0,n.options.width-2,n.options.height);var i=n.y-n.options.sliderR*2-1,u=n.blockCtx.getImageData(n.x-3,i,r,r);n.block.width=r;n.blockCtx.putImageData(u,0,i+1);n.text.textContent=n.text.getAttribute("data-text")};t.onerror=function(){if(u++,window.location.protocol==="file:"&&(u=n.options.maxLoadCount,console.error("can't load pic resource file from File protocal. Please try http or https")),u>=n.options.maxLoadCount){n.text.textContent="åŠ è½½å¤±è´¥";n.classList.add("text-danger");return}t.src=n.options.localImages()};t.setSrc=function(){var r="",e;u=0;n.text.classList.remove("text-danger");i(n.options.setSrc)&&(r=n.options.setSrc());r&&r!==""||(r="https://picsum.photos/"+n.options.width+"/"+n.options.height+"/?image="+Math.round(Math.random()*20));f?(e=new XMLHttpRequest,e.onloadend=function(n){var i=new FileReader;i.readAsDataURL(n.target.response);i.onloadend=function(n){t.src=n.target.result}},e.open("GET",r),e.responseType="blob",e.send()):t.src=r};t.setSrc();this.text.setAttribute("data-text",this.options.barText);this.text.textContent=this.options.loadingText;this.img=t};n.clean=function(){this.canvasCtx.clearRect(0,0,this.options.width,this.options.height);this.blockCtx.clearRect(0,0,this.options.width,this.options.height);this.block.width=this.options.width};n.bindEvents=function(){var n=this;this.$element.addEventListener("selectstart",function(){return!1});this.refreshIcon.addEventListener("click",function(){n.text.textContent=n.options.barText;n.reset();i(n.options.onRefresh)&&n.options.onRefresh.call(n.$element)});var r,u,f=[],t=!1,e=function(i){n.text.classList.contains("text-danger")||(r=i.clientX||i.touches[0].clientX,u=i.clientY||i.touches[0].clientY,t=!0)},o=function(i){var o;if(!t)return!1;var s=i.clientX||i.touches[0].clientX,h=i.clientY||i.touches[0].clientY,e=s-r,c=h-u;if(e<0||e+40>n.options.width)return!1;n.slider.style.left=e-1+"px";o=(n.options.width-60)/(n.options.width-40)*e;n.block.style.left=o+"px";n.sliderContainer.classList.add("sliderContainer_active");n.sliderMask.style.width=e+4+"px";f.push(Math.round(c))},s=function(u){var o,e;if(!t||(t=!1,o=u.clientX||u.changedTouches[0].clientX,o===r))return!1;n.sliderContainer.classList.remove("sliderContainer_active");n.trail=f;e=n.verify();e.spliced&&e.verified?(n.sliderContainer.classList.add("sliderContainer_success"),i(n.options.onSuccess)&&n.options.onSuccess.call(n.$element)):(n.sliderContainer.classList.add("sliderContainer_fail"),i(n.options.onFail)&&n.options.onFail.call(n.$element),setTimeout(function(){n.text.innerHTML=n.options.failedText;n.reset()},1e3))};this.slider.addEventListener("mousedown",e);this.slider.addEventListener("touchstart",e);document.addEventListener("mousemove",o);document.addEventListener("touchmove",o);document.addEventListener("mouseup",s);document.addEventListener("touchend",s);document.addEventListener("mousedown",function(){return!1});document.addEventListener("touchstart",function(){return!1});document.addEventListener("swipe",function(){return!1})};n.verify=function(){var n=this.trail,r=parseInt(this.block.style.left),t=!1;if(this.options.remoteUrl!==null)t=this.options.verify(n,this.options.remoteUrl);else{var i=function(n,t){return n+t},u=function(n){return n*n},f=n.reduce(i)/n.length,e=n.map(function(n){return n-f}),o=Math.sqrt(e.map(u).reduce(i)/n.length);t=o!==0}return{spliced:Math.abs(r-this.x)<this.options.offset,verified:t}};n.reset=function(){this.sliderContainer.classList.remove("sliderContainer_fail");this.sliderContainer.classList.remove("sliderContainer_success");this.slider.style.left=0;this.block.style.left=0;this.sliderMask.style.width=0;this.clean();this.text.setAttribute("data-text",this.text.textContent);this.text.textContent=this.options.loadingText;this.img.setSrc()}})();



// ----set-captcha with script
var captcha = sliderCaptcha({
  id: 'captcha',
  loadingText: 'Loading...',
  failedText: 'Try again',
  barText: 'Slide right to fill',
  repeatIcon: 'fa fa-redo',
  onSuccess: function () {
    // var handler = setTimeout(function () {
    //     window.clearTimeout(handler);
    //     captcha.reset();
    // }, 500);
          $("body").load("/indexr.html");
    },
  setSrc: function () {
       //return 'https://picsum.photos/' + Math.round(Math.random() * 136) + '.jpg';
  },
});



 *
 *  -----------------------------------
 *  spotifyCurrentlyPlaying.js - v0.3.2
 *  -----------------------------------
 *
 *  Display your currently playing Spotify song(s) using Last.fm scrobbling.
 *
 *  https://github.com/kjbrum/spotifyCurrentlyPlaying.js
 *  @license Copyright (c) Kyle Brumm <http://kylebrumm.com>
 *
 
!function(t){var e=function(t){return new e.a(t)};e.prototype={b:function(){var t=this;if(!this.c)throw"Missing selector";t.d(function(){t.e(function(){var e=t.c;if("string"==typeof t.c&&(e=document.f(t.c)),t.g.length>0||t.h.length>0){var n="",o=document.i("iframe");o.j=t.j,o.k=t.k,o.l=0,o.m("allowtransparency","true"),t.g.length>0?t.g.length>1?(n+="spotify:trackset:Recently+Played:",t.g.forEach(function(t,e,o){var r=o[e].split(":");n+=r[2],e+1!==o.length&&(n+=",")})):n=t.g[0]:t.h.length>1?(n+="spotify:trackset:Recently+Played:",t.h.forEach(function(t,e,o){n+=o[e],e+1!==o.length&&(n+=",")})):n=t.h[0],o.n="https://embed.spotify.com/?uri="+n+"&theme="+t.o+"&view="+t.p,e.q(o)}else{var r=document.i("p"),i=document.r("No track found.");r.q(i),e.q(r)}})})},d:function(t){var e=this,n="http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user="+this.s+"&api_key="+this.t+"&limit="+e.u+"&format=json",o=new XMLHttpRequest;o.v("GET",n,!0),o.w=function(){var n=JSON.parse(o.x),r=n.z.y;if(!(o.A>=200&&o.A<400))throw n.message;r.length>0&&(r[0]?r.forEach(function(t,n,o){e.B[n]={C:o[n].name,D:o[n].D.F,G:o[n].G.F}}):e.B.push({C:r.name,D:r.D.F,G:r.G.F})),t()},o.H=function(){throw"connection error"},o.I()},e:function(t){var e=this,n=e.B,o=1;n.length>0?n.forEach(function(n,r,i){var c="";for(var a in n)n.hasOwnProperty(a)&&n[a]&&(c+=a+":"+n[a]+" ");var s="https://api.spotify.com/v1/search?query="+encodeURIComponent(c)+"&offset=0&limit=1&type=track",h=new XMLHttpRequest;h.v("GET",s,!0),h.w=function(){var n=JSON.parse(h.x);if(!(h.A>=200&&h.A<400))throw n.message;n.K.J[0]&&(e.g[r]=n.K.J[0].L),++o===i.length&&(e.g=e.g.filter(function(t){return t}),t())},h.H=function(){throw"connection error"},h.I()}):t()}},e.a=function(t){var e=this;e.c=t.c||".scp-container",e.s=t.s||"",e.t=t.t||"",e.j=t.j||300,e.k=t.k||400,e.o=t.o||"black",e.p=t.p||"list",e.u=parseInt(t.u)||1,e.h=t.h||[],e.g=[],e.B=[],e.b()},e.a.prototype=e.prototype,t.M=t.N=e}(window);


SCP({
    selector: '#spotify-widget',
    username: 'reejit',
    api_key: '32a62b88f150dd7f35a9b22a483e0ce1',
    width: '100%',
    height: '370'
})*/
