(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{269:function(e,t,a){e.exports=a.p+"static/media/web3js.d861e2f4.jpg"},276:function(e,t,a){e.exports=a(732)},281:function(e,t,a){},282:function(e,t,a){},283:function(e,t,a){},284:function(e,t,a){},304:function(e,t){},328:function(e,t){},330:function(e,t){},351:function(e,t){},683:function(e,t){},728:function(e,t,a){e.exports=a.p+"static/media/BrightEthereumBackground.a151fee6.png"},732:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(61),l=a.n(c),o=a(273),i=a(43),s=(a(281),a(282),a(283),a(284),a(18)),u=a(734),m=a(735),d=a(736),p=a(737),b=a(738);var f=function(){var e=r.a.useState("navbar-transparent"),t=Object(s.a)(e,2),a=t[0],n=t[1],c=r.a.useState(!1),l=Object(s.a)(c,2),o=l[0],i=l[1];return r.a.useEffect((function(){var e=function(){document.documentElement.scrollTop>400||document.body.scrollTop>400?n(""):(document.documentElement.scrollTop<400||document.body.scrollTop<400)&&n("navbar-transparent")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),r.a.createElement(r.a.Fragment,null,o?r.a.createElement("div",{id:"bodyClick",onClick:function(){document.documentElement.classList.toggle("nav-open"),i(!1)}}):null,r.a.createElement(u.a,{className:"fixed-top "+a,expand:"lg",color:"info"},r.a.createElement(m.a,null,r.a.createElement("div",{className:"navbar-translate"},r.a.createElement(d.a,{href:"",target:"_blank",id:"navbar-brand"},"Bright Ethereum"),r.a.createElement("button",{className:"navbar-toggler navbar-toggler",onClick:function(){document.documentElement.classList.toggle("nav-open"),i(!o)},"aria-expanded":o,type:"button"},r.a.createElement("span",{className:"navbar-toggler-bar top-bar"}),r.a.createElement("span",{className:"navbar-toggler-bar middle-bar"}),r.a.createElement("span",{className:"navbar-toggler-bar bottom-bar"}))),r.a.createElement(p.a,{className:"justify-content-end",isOpen:o,navbar:!0},r.a.createElement(b.a,{navbar:!0})))))};var g=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(m.a,null,r.a.createElement("nav",null),r.a.createElement("div",{className:"copyright",id:"copyright"},"\xa9 ",(new Date).getFullYear()," Bright Ethereum"," ")))},v=a(10),h=a.n(v),E=a(28),w=a(739),k=a(740),y=a(741),x=a(742),j=a(744),O=a(743),N=a(101),D=a.n(N),C=a(138),S=a.n(C),B=a(268),z=a.n(B),I={};if("object"===typeof window&&"undefined"!==typeof window.web3)I=new S.a({provider:window.web3.currentProvider,network:1});else{var A=new z.a("https://mainnet.infura.io/v3/f1d9de7ebcd04578b9f5696f04760115");I=new S.a({provider:A,network:1})}var L=function(){var e=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.lookup(t);case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),F="brightid://link-verification/http:%2f%2fnode.brightid.org/ethereum/",M=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(s.a)(l,2),i=o[0],u=o[1],d=Object(n.useState)(!0),p=Object(s.a)(d,2),b=p[0],f=p[1],g=Object(n.useState)(""),v=Object(s.a)(g,2),N=v[0],C=v[1],S=Object(n.useState)(!1),B=Object(s.a)(S,2),z=B[0],I=B[1],A=Object(n.useState)(/android/i.test(navigator.userAgent)?"https://play.google.com/store/apps/details?id=org.brightid":/iPhone|iPad/i.test(navigator.userAgent)?"https://testflight.apple.com/join/L99RcYEc":""),M=Object(s.a)(A,1)[0],T=Object(n.useState)(!1),q=Object(s.a)(T,2),P=q[0],W=q[1];Object(n.useEffect)((function(){if(a&&a.includes(".eth")){function e(){return(e=Object(E.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Y,e.next=3,L(a);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}else Y(a);u(!1)}),[a]);var Y=function(e){D.a.utils.isAddress(e)?(f(!0),C(e)):f(!1)},_=function(){c(""),I(!1),W(!1)};return r.a.createElement(w.a,null,r.a.createElement("div",{className:"main-form"},r.a.createElement(k.a,{onChange:function(e){c(e.target.value)},id:"ethereumAddress",spellCheck:!1,autoComplete:"off",className:"main-input",placeholder:"Enter your Ethereum address or ENS Domain",value:a,invalid:i}),r.a.createElement(y.a,{id:"invalidAddress"},"Looks like this wallet address is invalid"),r.a.createElement(x.a,{onClick:function(e){e.preventDefault(),b?I(!0):u(!0)},size:"lg",color:"neutral",type:"submit",disabled:!b},"Submit"),z&&r.a.createElement("div",null,r.a.createElement(j.a,{onExit:_,className:"DefaultModal",isOpen:z,toggle:function(){return I(!1)}},r.a.createElement(m.a,null,r.a.createElement("div",{className:"DefaultModal-content"},r.a.createElement(O.a,null,r.a.createElement("div",{className:"DefaultModal-content"},r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("ol",null,r.a.createElement("li",{style:{marginBottom:"10px"}},"Please send an empty 0 value transaction to ",r.a.createElement("strong",null,"brightid.burnsignal.eth")," from",r.a.createElement("p",{style:{fontSize:"9px",fontWeight:"bold",marginBottom:"0px"}},N),"to register with the BrightID contract"),r.a.createElement("li",null,"Click ",r.a.createElement("strong",null,"Link BrightID")," to link this address to your BrightID account with the BrightID mobile app"))))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement(x.a,{onClick:function(){""!==M?(setTimeout((function(){window.location.assign(M)}),1e3),window.location.assign(F+"".concat(N))):W(!0)},size:"lg",color:"primary",type:"button"},"Link BrightID"),r.a.createElement(x.a,{size:"lg",color:"warning",type:"button",onClick:_},"Close")))))),P&&r.a.createElement("div",null,r.a.createElement(j.a,{onExit:_,className:"DefaultModal",isOpen:P,toggle:function(){return W(!1)}},r.a.createElement(m.a,null,r.a.createElement("div",{className:"DefaultModal-content"},r.a.createElement(O.a,null,r.a.createElement("div",{className:"DefaultModal-content"},r.a.createElement("p",null,"Unfortunately, the BrightID app is not available for your mobile operating system."))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement(x.a,{size:"lg",color:"warning",type:"button",onClick:_},"Close"))))))))},T=a(269),q=a.n(T),P=a(270),W=a.n(P),Y=a(271),_=a.n(Y),G=a(272),J=a.n(G),R={walletconnect:{package:_.a,options:{infuraId:"f1d9de7ebcd04578b9f5696f04760115"}},authereum:{package:J.a,options:{}}},H=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"",type:"address"}],name:"Sponsor",type:"event"},{stateMutability:"payable",type:"fallback"},{inputs:[{internalType:"address",name:"add",type:"address"}],name:"sponsor",outputs:[],stateMutability:"nonpayable",type:"function"}],Q=a(102),U=function(){var e=Object(E.a)(h.a.mark((function e(){var t,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://sp.brightid.org/node/v4/verifications/ethereum");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(t.statusText);case 6:return e.next=8,t.json();case 8:return a=e.sent,n=a.data.contextIds.map((function(e){return Object(Q.toChecksumAddress)(e)})),e.abrupt("return",n);case 13:return e.prev=13,e.t0=e.catch(0),console.error("Error fetching authenticated addresses from BrightID: ",e.t0),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),K=function(e,t){return t.includes(Object(Q.toChecksumAddress)(e))},V=a(722),X=function(e){var t=e.ethAddress,a=F+t;return r.a.createElement("div",null,r.a.createElement(V,{value:a,size:192}))},Z=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),o=Object(s.a)(l,2),i=o[0],u=o[1],d=Object(n.useState)(!1),p=Object(s.a)(d,2),b=p[0],f=p[1],g=Object(n.useState)([]),v=Object(s.a)(g,2),w=v[0],k=v[1],y=Object(n.useState)(""),N=Object(s.a)(y,2),C=N[0],S=N[1],B=Object(n.useState)(!1),z=Object(s.a)(B,2),I=z[0],A=z[1],L=Object(n.useState)(!1),F=Object(s.a)(L,2),M=F[0],T=F[1];Object(n.useEffect)((function(){S(a[0]),a[0]&&!K(a[0],w)?A(!1):a[0]&&K(a[0],w)&&A(!0)}),[a,w]);var P=function(){var e=Object(E.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i&&0!==a.length){e.next=6;break}return e.next=3,Y();case 3:f(!0),e.next=7;break;case 6:f(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(E.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(){var e=Object(E.a)(h.a.mark((function e(t,a){var n,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new W.a({network:"mainnet",theme:{background:"#214564",main:"#dd866c",secondary:"#FFFFFF",border:"rgba(195, 195, 195, 0.14)",hover:"rgb(39, 49, 56)"},providerOptions:R}),e.next=4,n.connect();case 4:r=e.sent,c=new D.a(r),t(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}());case 3:return t=e.sent,e.next=6,_(t);case 6:window.ethereum.on("accountsChanged",Object(E.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Web3 login could not be detected");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(E.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(new t.eth.Contract(H,"0xA4DDdF5C53F5FCa4d6901d14FAE463bC02638898")),e.t0=k,e.next=4,U();case 4:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=c,e.next=9,t.eth.getAccounts();case 9:e.t3=e.sent,(0,e.t2)(e.t3);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){f(!1)},J=function(){var e=Object(E.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===i){e.next=3;break}return e.next=3,i.methods.sponsor(a[0]).send({from:a[0]}).on("transactionHash",(function(){T(!0)})).on("error",(function(e){console.error("An error ocurred when attempting to sponsor with with BrightID",e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"btn-selection"},r.a.createElement(x.a,{className:"btn",onClick:P,color:"neutral",type:"button"},r.a.createElement("div",{className:"btn-inner-container"},r.a.createElement("div",{className:"btn-content"},r.a.createElement("img",{src:q.a,alt:""}),r.a.createElement("div",{className:"btn-text"},r.a.createElement("p",null,"Link ",r.a.createElement("strong",null,"BrightID")," to your Ethereum account directly with a supported wallet:"),r.a.createElement("ul",{className:"small-caps"},r.a.createElement("li",null,"Metamask"),r.a.createElement("li",null,"WalletConnect"),r.a.createElement("li",null,"Authereum")))),r.a.createElement("p",null,r.a.createElement("strong",null,"Get started >>"))))),b&&r.a.createElement("div",null,r.a.createElement(j.a,{onExit:G,className:"DefaultModal",isOpen:b,toggle:function(){return f(!1)}},r.a.createElement(m.a,null,r.a.createElement("div",{className:"DefaultModal-content"},r.a.createElement(O.a,null,r.a.createElement("div",{className:"DefaultModal-content"},I&&r.a.createElement("div",null,r.a.createElement("p",null,"Your address:"),r.a.createElement("p",null,r.a.createElement("strong",null,C)),r.a.createElement("p",null,"is already verified with BrightID.")),!I&&!M&&r.a.createElement("div",null,r.a.createElement("p",null,"Is this the address you would like to link with BrightID?"),r.a.createElement("p",null,r.a.createElement("strong",null,C))),M&&r.a.createElement("div",null,r.a.createElement("p",null,"Scan the code with any QR scanner or the BrightID app to link your accounts and you're finished!"),r.a.createElement(X,{ethAddress:C})))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement(x.a,{size:"lg",color:"primary",type:"button",onClick:G},"Go back"),!I&&!M&&r.a.createElement(x.a,{onClick:function(){return J()},size:"lg",color:"warning",type:"button"},"Continue")))))))};var $=function(){var e=Object(n.useState)(function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t}()),t=Object(s.a)(e,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page-header clear-filter"},r.a.createElement(m.a,null,r.a.createElement("div",{className:"content-center brand"},r.a.createElement("h1",{className:"h1-seo"},"Bright Ethereum"),r.a.createElement("h4",null,"Link your Ethereum address to ",r.a.createElement("strong",null,"BrightID"),", a global, unique identity network:"),t?r.a.createElement(M,null):r.a.createElement(Z,null))),r.a.createElement(g,null)))};var ee=function(){return r.a.useEffect((function(){return document.body.classList.add("index-page"),document.body.classList.add("sidebar-collapse"),document.documentElement.classList.remove("nav-open"),window.scrollTo(0,0),document.body.scrollTop=0,function(){document.body.classList.remove("index-page"),document.body.classList.remove("sidebar-collapse")}})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bg-image",style:{backgroundImage:"url("+a(728)+")"}}),r.a.createElement(f,null),r.a.createElement($,null))};l.a.render(r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",render:function(e){return r.a.createElement(ee,e)}})))),document.getElementById("root"))}},[[276,1,2]]]);
//# sourceMappingURL=main.b3988cce.chunk.js.map