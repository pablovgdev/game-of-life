(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],[,,,function(e,n,t){e.exports={run:"Button_run__3XPBX",stop:"Button_stop__3lEiv"}},function(e,n,t){e.exports={cell:"Cell_cell__3It8G",alive:"Cell_alive__3_X2v Cell_cell__3It8G",dead:"Cell_dead__3dg0C Cell_cell__3It8G"}},,,,function(e,n,t){e.exports={app:"App_app__101rE"}},function(e,n,t){e.exports={grid:"Grid_grid__UzfeF"}},,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),l=t(7),o=t.n(l),i=t(5),c=t(8),u=t.n(c),s=a.a.createContext({}),f=t(9),v=t.n(f),d=t(10),p=t(4),_=t.n(p),m=function(e){var n=e.alive,t=e.row,l=e.col,o=Object(r.useContext)(s),i=o.cells,c=o.setCells,u=o.run;return a.a.createElement("div",{className:n?_.a.alive:_.a.dead,onClick:function(){if(!u){var e=Object(d.a)(i);console.log(t,l),e[t][l].alive=!i[t][l].alive,c(e)}}})},w=function(){for(var e=[],n=0;n<g(window.innerHeight);n++){e.push([]);for(var t=0;t<g(window.innerWidth);t++)e[n].push({alive:!1,row:n,col:t})}return e},g=function(e){for(var n=0,t=0;t+21<=e;)t+=21,n++;return n},C=function(){var e=Object(r.useContext)(s),n=e.cells,t=e.setCells,l=e.run,o=e.setRun;return Object(r.useEffect)((function(){var e=function(){console.log("resized to: ",window.innerWidth,"x",window.innerHeight),t(w())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),Object(r.useEffect)((function(){var e=function(e){for(var t=0,r=e.row-1;r<=e.row+1;r++)for(var a=e.col-1;a<=e.col+1;a++)if(r>=0&&r<n.length&&a>=0&&a<n[0].length&&n[r][a].alive){if(r===e.row&&a===e.col)continue;t++}return t};if(l){var r=setInterval((function(){return function(){for(var r=JSON.stringify(n),a=JSON.parse(r),l=0;l<n.length;l++)for(var i=0;i<n[0].length;i++){var c=e(n[l][i]);n[l][i].alive&&(c<2||c>3)?a[l][i].alive=!1:n[l][i].alive||3!==c||(a[l][i].alive=!0)}r===JSON.stringify(a)?o(!1):t(a)}()}),50);return function(){return clearInterval(r)}}}),[l,n,t,o]),a.a.createElement("div",{className:v.a.grid,style:{gridTemplateColumns:"repeat(".concat(n[0].length,", 1fr)")}},n.map((function(e,n){return e.map((function(e,t){return a.a.createElement(m,{key:n+"-"+t,alive:e.alive,row:n,col:t})}))})))},E=t(3),h=t.n(E),O=function(){var e=Object(r.useContext)(s),n=e.run,t=e.setRun;return a.a.createElement("span",{className:h.a.run,onClick:function(){t(!n)}},n?"\u23f8":"\u25b6\ufe0f")},b=function(){var e=Object(r.useContext)(s),n=e.setRun,t=e.setCells;return a.a.createElement("span",{className:h.a.stop,onClick:function(){n(!1),t(w())}},"\u23f9")},j=function(){var e=Object(r.useState)(w()),n=Object(i.a)(e,2),t=n[0],l=n[1],o=Object(r.useState)(!1),c=Object(i.a)(o,2),f={cells:t,setCells:l,run:c[0],setRun:c[1]};return a.a.createElement("div",{className:u.a.app},a.a.createElement(s.Provider,{value:f},a.a.createElement(O,null),a.a.createElement(b,null),a.a.createElement(C,null)))};t(16);o.a.render(a.a.createElement(j,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.b6b97834.chunk.js.map