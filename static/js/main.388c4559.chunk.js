(this["webpackJsonpbun-alert"]=this["webpackJsonpbun-alert"]||[]).push([[0],{132:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(12),o=n.n(r),c=(n(132),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,236)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))}),s=n(229),l=n(230),u=n(16),d=n(228),b=n(117),g=n(14),j=n(207),f=n(208),m=n(233),h=n(209),p=n(210),x=n(211),O=n(212),v=n(213),w=n(214),y=n(168),S=n(205),B=n(206),A=n(3),k=function(e){var t=e.label,n=e.route,a=void 0===n?"/bun-alert/".concat(t.toLowerCase().replaceAll(" ","-")):n,i=e.icon,r=e.closeLeftMenu,o=Object(g.f)();return Object(A.jsxs)(y.a,{button:!0,onClick:function(){o.push(a),r()},children:[i&&Object(A.jsx)(S.a,{children:i}),Object(A.jsx)(B.a,{primary:t})]},"menu_item_".concat(t.toLowerCase().replaceAll(" ","_")))},N=Object(j.a)((function(e){return Object(f.a)({root:{width:"100%",backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}})})),T=function(e){var t=e.open,n=e.closeLeftMenu,a=N();return Object(A.jsx)(m.a,{anchor:"left",open:t,onClose:n,children:Object(A.jsxs)(h.a,{className:a.root,children:[Object(A.jsx)(k,{label:"Home",route:"/bun-alert/",icon:Object(A.jsx)(p.a,{}),closeLeftMenu:n}),Object(A.jsx)(k,{label:"About",icon:Object(A.jsx)(x.a,{}),closeLeftMenu:n}),Object(A.jsx)(k,{label:"Report Bun",icon:Object(A.jsx)(O.a,{}),closeLeftMenu:n}),Object(A.jsx)(k,{label:"Find Buns",icon:Object(A.jsx)(v.a,{}),closeLeftMenu:n}),Object(A.jsx)(k,{label:"Settings",icon:Object(A.jsx)(w.a,{}),closeLeftMenu:n})]})})},C=n(215),D=n(216),F=n(217),L=n(77),I=n(109),P=n.n(I),M=n(108),W=n.n(M),R=n(107),z=n.n(R),E=Object(j.a)((function(e){return Object(f.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})})),U=function(e){var t=e.theme,n=e.toggleTheme,a=e.pageTitle,i=void 0===a?"":a,r=e.toggleLeftMenu,o=E();return Object(A.jsx)("div",{className:o.root,children:Object(A.jsx)(C.a,{position:"static",children:Object(A.jsxs)(D.a,{children:[r&&Object(A.jsx)(F.a,{edge:"start",className:o.menuButton,color:"inherit",onClick:r,children:Object(A.jsx)(z.a,{})}),Object(A.jsxs)(L.a,{variant:"h6",className:o.title,children:[i?"".concat(i," - "):"","Bun Alert"]}),Object(A.jsx)("div",{children:Object(A.jsx)(F.a,{"aria-label":"Toggle light/dark theme","aria-controls":"menu-appbar","aria-haspopup":"false",onClick:n,color:"inherit",children:"dark"===t?Object(A.jsx)(W.a,{}):Object(A.jsx)(P.a,{})})})]})})})},_=n(218),q=n(110),H=n.n(q),Y=Object(j.a)((function(e){return Object(f.a)({fab:{position:"fixed",bottom:"0px",right:"0px",margin:e.spacing(2)},fabSpacing:{height:"56px",margin:e.spacing(2)}})})),G=function(){var e=Y();return Object(A.jsxs)(a.Fragment,{children:[Object(A.jsx)("div",{className:e.fabSpacing}),Object(A.jsx)(_.a,{color:"primary",onClick:function(){window.open("https://github.com/andrewdimmer/bun-alert/issues","_blank")},className:e.fab,children:Object(A.jsx)(H.a,{})})]})},J=n(123),K=n(219),V=n(220),Q=function(e){return{"Baby Bun":1,"King Bun":2,"Queen Bun":3,"Princess Bun":4,"Prince Bun":5,"Peasent Bun":6}[e]},Z=function(){var e=window.localStorage.getItem("bunFilterParameters");return e?JSON.parse(e):{maxAlertAge:15,maxDistanceAway:1,walkingSpeed:3.1,detourCoefficent:.7}}(),X=function(){return Z},$=function(){var e=window.localStorage.getItem("notificationFilter");return e?parseInt(e):6}(),ee=function(){return $},te="Notification"in window,ne=function(e){for(var t="",n=0;n<e;n++)t+="\ud83d\udc07";return t},ae=n(170),ie=n(169),re=n(118),oe=n(76),ce=Object(re.a)({palette:{primary:oe.a,secondary:void 0,success:void 0,error:void 0,info:void 0,warning:void 0}}),se=Object(re.a)({palette:{type:"dark",primary:oe.a,secondary:void 0,success:void 0,error:void 0,info:void 0,warning:void 0}}),le=Object(ae.a)((function(e){return Object(ie.a)({padded:{padding:e.spacing(2)},margined:{margin:e.spacing(2)},marginedTopBottom:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},marginedPadded:{margin:e.spacing(2),padding:e.spacing(2)},pageTitle:{textAlign:"center",marginBottom:e.spacing(2)},hintIcon:{fill:e.palette.success.main},infoIcon:{fill:e.palette.info.main},warningIcon:{fill:e.palette.warning.main},errorIcon:{fill:e.palette.error.main}})})),ue=n(111),de=n.n(ue),be=n(75),ge=n.n(be),je=n(56),fe=n.n(je),me=n(57),he=n.n(me),pe=function(e){var t=e.type,n=e.prefix,a=e.message,i=e.className,r=le(),o={hint:Object(A.jsx)(de.a,{className:r.hintIcon}),info:Object(A.jsx)(fe.a,{className:r.infoIcon}),warning:Object(A.jsx)(he.a,{className:r.warningIcon}),error:Object(A.jsx)(ge.a,{className:r.errorIcon})};return Object(A.jsxs)(K.a,{container:!0,spacing:2,className:i,wrap:"nowrap",alignItems:"center",justifyContent:"flex-start",children:[Object(A.jsx)(K.a,{item:!0,children:o[t]}),Object(A.jsx)(K.a,{item:!0,children:n?Object(A.jsxs)(L.a,{children:[Object(A.jsx)("strong",{children:n})," ",a]}):Object(A.jsx)(L.a,{children:a})})]})},xe=function(e){var t=e.accessToLocationServices,n=e.notificationFilter,r=le(),o=i.a.useState(Notification.permission),c=Object(u.a)(o,2),s=c[0],l=c[1];return te?!0===t?"granted"===s?0===n?Object(A.jsx)(J.a,{className:r.marginedPadded,children:Object(A.jsx)(pe,{type:"info",prefix:"Do Not Disturb is on!",message:'You will not receive any new Bun Alerts until you turn off Do Not Disturb on the "Settings" page. In the mean time though, you\'re free to find nearby buns yourself using the "Find Buns" page.'})}):Object(A.jsx)(a.Fragment,{}):Object(A.jsx)(J.a,{className:r.marginedPadded,children:Object(A.jsxs)(K.a,{container:!0,spacing:2,wrap:"nowrap",alignItems:"center",justifyContent:"flex-start",children:[Object(A.jsx)(K.a,{item:!0,children:"default"===s?Object(A.jsx)(fe.a,{className:r.infoIcon}):Object(A.jsx)(he.a,{className:r.warningIcon})}),Object(A.jsx)(K.a,{item:!0,children:Object(A.jsxs)(L.a,{children:[Object(A.jsx)("strong",{children:"Notifications are required to receive Bun Alerts automatically when a new bun is sighted!"})," ","If you wish to be automatically notified when a new bun is sighted, please enable notifications to find buns."]})}),"default"===s&&Object(A.jsx)(K.a,{item:!0,children:Object(A.jsx)(V.a,{color:"primary",onClick:function(){try{Notification.requestPermission().then(l)}catch(e){Notification.requestPermission(l)}},variant:"outlined",children:"Enable Notifications"})})]})}):Object(A.jsx)(J.a,{className:r.marginedPadded,children:Object(A.jsx)(pe,{type:!1===t?"warning":"info",prefix:"Location Services are required to receive Bun Alerts automatically when a new bun is sighted!",message:"We need to know where you are to notify you about nearby buns. If you wish to be automatically notified when a new bun is sighted, please enable location services."})}):Object(A.jsxs)(J.a,{className:r.marginedPadded,children:[Object(A.jsx)(pe,{type:"warning",prefix:"Your web browser does not support notifications.",message:"You will not be able to receive Bun Alerts automatically when a new bun is sighted. However, you're free to report buns you see and find nearby buns yourself."})," "]})},Oe=n(26),ve=n(119),we=n(221),ye=n(234),Se=n(112),Be=n.n(Se),Ae=n(113),ke=n.n(Ae),Ne=n(5),Te=["className","message","onClose","variant"],Ce={success:Be.a,warning:he.a,error:ge.a,info:fe.a},De=Object(ae.a)((function(e){return Object(ie.a)({success:{color:e.palette.getContrastText(e.palette.success.main),backgroundColor:e.palette.success.main},error:{color:e.palette.getContrastText(e.palette.error.main),backgroundColor:e.palette.error.main},info:{color:e.palette.getContrastText(e.palette.info.main),backgroundColor:e.palette.info.main},warning:{color:e.palette.getContrastText(e.palette.warning.main),backgroundColor:e.palette.warning.main},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}})})),Fe=function(e){var t=De(),n=e.className,a=e.message,i=e.onClose,r=e.variant,o=Object(ve.a)(e,Te),c=Ce[r];return Object(A.jsx)(we.a,Object(Oe.a)({className:Object(Ne.a)(t[r],n),"aria-describedby":"client-snackbar",message:Object(A.jsxs)("span",{id:"client-snackbar",className:t.message,children:[Object(A.jsx)(c,{className:Object(Ne.a)(t.icon,t.iconVariant)}),a]}),action:[Object(A.jsx)(F.a,{"aria-label":"close",color:"inherit",onClick:i,children:Object(A.jsx)(ke.a,{className:t.icon})},"close")]},o))};function Le(e){var t=e.notification,n=e.setNotification,a=i.a.useState({type:"info",message:""}),r=Object(u.a)(a,2),o=r[0],c=r[1],s=function(e,t){"clickaway"!==t&&n(null)};return t&&t!==o&&c(t),Object(A.jsx)("div",{children:Object(A.jsx)(ye.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:!!t,autoHideDuration:6e3,onClose:s,children:Object(A.jsx)(Fe,{onClose:s,variant:o.type,message:o.message})})})}var Ie,Pe=function(e){var t=e.children,n=e.heading,a=e.title,r=void 0===a?n:a,o=le();return i.a.useEffect((function(){document.title=(r?"".concat(r," - "):"")+"Bun Alert"}),[r]),Object(A.jsxs)(J.a,{className:o.marginedPadded,children:[Object(A.jsx)(L.a,{variant:"h3",className:o.pageTitle,children:n}),t]})},Me=function(){return Object(A.jsx)(Pe,{heading:"About Bun Alert",title:"About"})},We=function(e){var t=e.errorCode,n=e.errorMessage,a=e.errorDescription,i=void 0!==t?" ".concat(t):"";return Object(A.jsxs)(Pe,{heading:"Error".concat(i,"!"),title:"Error".concat(i),children:[Object(A.jsx)(L.a,{variant:"h4",children:n}),a&&Object(A.jsx)(L.a,{variant:"body1",children:a})]})},Re=function(){return Object(A.jsx)(We,{errorCode:404,errorMessage:"Unable to find the page you are looking for.",errorDescription:"Unless, of course, you are looking for an error page. In which case,\r\ngreat job! You found it!"})},ze=n(225),Ee=n(114),Ue=(n(167),Ee.a.initializeApp({apiKey:"AIzaSyDyVAmGhFNleL7whAhc5I7NjoX4joaHIhE",authDomain:"dimmer-hacks.firebaseapp.com",databaseUrl:"https://dimmer-hacks.firebaseio.com",projectId:"dimmer-hacks",storageBucket:"dimmer-hacks.appspot.com",messagingSenderId:"6837139663",appId:"1:6837139663:web:be2275c76dcb7852851fba",measurementId:"G-6DZWRVZ0RP"}).firestore().collection("hackathons").doc("SelfieHacks2021")),_e=[],qe=!0,He=function(e){return!_e.includes(e)&&(_e.push(e),!0)},Ye=function(e){return!!_e.includes(e)&&(_e.splice(_e.indexOf(e),1),!0)},Ge=function(e,t){return Math.trunc((t-e)/6e4)},Je=n(115),Ke=function(e,t,n){var a=e.numberOfBuns>1?" + ".concat(e.numberOfBuns-1," other").concat(2!==e.numberOfBuns?"s":""):"",i="".concat(e.rankOfSmallestBun).concat(a),r=n?Math.round(100*(Object(Je.getDistance)(n,e)/1609))/100:-1,o=-1!==r?"".concat(r," mile").concat(1!==r?"s":""," away"):"",c=Ve(r),s=-1!==c?"about ".concat(c," minute").concat(1!==c?"s":""," away"):"",l=Ge(e.timeOfSighting,t),u=0===l?"just now":"".concat(l," minute").concat(l>1?"s":""," ago"),d=n?function(e,t){return"https://www.google.com/maps/dir/".concat(t.latitude,",+").concat(t.longitude,"/").concat(e.latitude,",").concat(e.longitude,"/")}(e,n):"";return Object(Oe.a)(Object(Oe.a)({},e),{},{rankAndOtherBuns:i,distanceAway:r,distanceAwayText:o,estimatedArrival:c,estimatedArrivalText:s,minutesSinceSighting:l,minutesSinceSightingText:u,googleMapsDirectionsLink:d})},Ve=function(e){var t=X();return-1!==e?Math.round(e/(t.walkingSpeed*t.detourCoefficent)*60):-1},Qe=function(e){var t=X();return!("Baby Bun"===e.rankOfSmallestBun&&e.distanceAway>.1)&&(!(e.distanceAway>t.maxDistanceAway)&&!(e.minutesSinceSighting+e.estimatedArrival>t.maxAlertAge))},Ze=function(e,t){return e.reduce((function(e,n){return!function(e,t){return Ge(e.timeOfSighting,t)>60&&(Ye(e.id),Ue.collection("buns").doc(e.id).delete(),!0)}(n,t)&&Qe(n)?e.concat(n):e}),[])},Xe=function(e,t){var n=e.minutesSinceSighting+e.estimatedArrival-(t.minutesSinceSighting+t.estimatedArrival);if(0!==n)return n;var a=t.numberOfBuns-e.numberOfBuns;if(0!==a)return a;var i=Q(e.rankOfSmallestBun)-Q(t.rankOfSmallestBun);return 0!==i?i:e.timeOfSighting-t.timeOfSighting},$e=n(223),et=n(235),tt=n(224),nt=n(116),at=n.n(nt),it=function(e){var t=e.labeled?"bunny":"";return Object(A.jsx)("span",{className:"emoji",role:"img","aria-label":t,"aria-hidden":!t,children:"\ud83d\udc07"})},rt=function(e){var t=e.bun,n="".concat(t.rankAndOtherBuns," sighted nearby!"),a=t.distanceAwayText?" | ".concat(t.distanceAwayText):"",i=t.estimatedArrivalText?" (".concat(t.estimatedArrivalText,")"):"",r="Sighted ".concat(t.minutesSinceSightingText).concat(a).concat(i);return Object(A.jsxs)(y.a,{children:[Object(A.jsx)($e.a,{children:Object(A.jsx)(et.a,{children:Object(A.jsx)(it,{})})}),Object(A.jsx)(B.a,{primary:n,secondary:r}),Object(A.jsx)(tt.a,{children:Object(A.jsx)(F.a,{edge:"end","aria-label":"open in maps",disabled:!t.googleMapsDirectionsLink,onClick:function(){window.open(t.googleMapsDirectionsLink,"_blank")},children:Object(A.jsx)(at.a,{})})})]})},ot=function(e){var t=e.accessToLocationServices,n=e.prefix,i=void 0===n?"Location Services are required!":n,r=e.message,o=void 0===r?"Please enable location services to access this page.":r,c=e.children;return Object(A.jsx)(a.Fragment,{children:!0===t?c:Object(A.jsx)(pe,{type:!1===t?"error":"info",prefix:i,message:o})})},ct=function(e){var t=e.accessToLocationServices,n=e.location,r=e.allBuns,o=function(e,t,n){return n?function(e,t,n){return Ze(e.map((function(e){return Ke(e,t,n)})),t).concat([]).sort(Xe)}(e,t,n):[]},c=i.a.useState(o(r,Date.now(),n)),s=Object(u.a)(c,2),l=s[0],d=s[1];return i.a.useEffect((function(){d(o(r,Date.now(),n));var e=setInterval((function(){d(o(r,Date.now(),n))}),6e4);return function(){clearInterval(e)}}),[r,n]),Object(A.jsx)(Pe,{heading:"Find Nearby Buns!",title:"Find Buns",children:Object(A.jsx)(ot,{accessToLocationServices:t,prefix:"Location Services are required to find nearby buns!",message:"We need to know where you are to show you nearby buns... please enable location services to find buns.",children:l.length>0?Object(A.jsx)(h.a,{children:l.map((function(e,t,n){return Object(A.jsxs)(a.Fragment,{children:[Object(A.jsx)(rt,{bun:e}),t!==n.length-1&&Object(A.jsx)(ze.a,{})]},"bun_sighting_".concat(e.id))}))}):Object(A.jsx)(pe,{type:"info",prefix:"There are not any nearby buns reported.",message:'You can either report one yourself from the "Report Bun" page, or you can adjust the scope of your search from the "Settings" page to see if you can find buns further out.'})})})},st=function(e){var t=e.label,n=e.route,a=e.icon,i=le(),r=Object(g.f)(),o=a,c=Object(A.jsx)(o,{className:i.margined});return Object(A.jsxs)(V.a,{className:i.marginedTopBottom,color:"primary",fullWidth:!0,onClick:function(){r.push(n)},variant:"contained",children:[c,Object(A.jsx)(L.a,{variant:"h5",children:t}),c]})},lt=function(){var e=le();return Object(A.jsxs)(Pe,{heading:"Welcome to Bun Alert!",title:"",children:[Object(A.jsx)(L.a,{variant:"h6",className:e.pageTitle,children:'"They need to know: there are buns." - xkcd 1871'}),Object(A.jsx)(st,{label:"Learn More About Bun Alert",route:"/bun-alert/about",icon:x.a}),Object(A.jsx)(st,{label:"Report a Bun Sighting",route:"/bun-alert/report-bun",icon:O.a}),Object(A.jsx)(st,{label:"Find Nearby Buns",route:"/bun-alert/find-buns",icon:v.a}),Object(A.jsx)(st,{label:"Settings",route:"/bun-alert/settings",icon:w.a})]})},ut=n(231),dt=n(227),bt=n(226),gt=n(120),jt=function(){return Ie},ft=function(e){Ie=e},mt=function(e){var t=e.accessToLocationServices,n=e.setNotification,r=le(),o=i.a.useState(""),c=Object(u.a)(o,2),s=c[0],l=c[1],d=i.a.useState(""),b=Object(u.a)(d,2),g=b[0],j=b[1];return Object(A.jsx)(Pe,{heading:"Report a Bun Sighting",title:"Report Bun",children:Object(A.jsxs)(ot,{accessToLocationServices:t,prefix:"Location Services are required to report bun sightings!",message:"We need to know where you've found your bun... please enable location services to report a bun sighting.",children:[Object(A.jsx)(ut.a,{className:r.marginedTopBottom,error:""===s||s<=0,fullWidth:!0,helperText:(""===s||s<=0)&&Object(A.jsxs)(a.Fragment,{children:[Object(A.jsx)(bt.a,{fontSize:"inherit"})," There must be at least one bun!"]}),id:"enter-number-of-buns",label:"Number of Buns",onChange:function(e){var t=""!==e.target.value?Math.trunc(parseFloat(e.target.value)):"";l(t)},type:"number",value:s.toString(),variant:"outlined"}),Object(A.jsx)(ut.a,{className:r.marginedTopBottom,error:""===g,fullWidth:!0,helperText:""===g&&Object(A.jsxs)(a.Fragment,{children:[Object(A.jsx)(bt.a,{fontSize:"inherit"})," Please select a size range for the smallest bun."]}),id:"select-rank-of-buns",label:"Select the Approximate Length from Head to Tail of the Smallest Bun",onChange:function(e){j(e.target.value)},select:!0,value:g,variant:"outlined",children:[{label:Object(A.jsx)("em",{children:"Please select a size range"}),value:""},{label:"< 3.5 inches (smaller than a computer mouse)",value:"Baby Bun"},{label:"< 4.75 inches (smaller than a pop can)",value:"King Bun"},{label:"< 6 inches (smaller than an eyeglasses case)",value:"Queen Bun"},{label:"< 8 inches (smaller than a disposable water bottle)",value:"Princess Bun"},{label:"< 12 inches (smaller than a loaf of bread)",value:"Prince Bun"},{label:"> 12 inches (larger than a loaf of bread)",value:"Peasent Bun"}].map((function(e,t){return Object(A.jsx)(dt.a,{value:e.value,children:e.label},"select-bun-rank-option-".concat(t))}))}),Object(A.jsx)(ut.a,{className:r.marginedTopBottom,disabled:!0,fullWidth:!0,id:"display-bun-rank",label:"Informational: Rank of the Smallest Bun",value:g,variant:"outlined"}),Object(A.jsx)(V.a,{color:"primary",className:r.marginedTopBottom,disabled:""===s||s<=0||""===g,fullWidth:!0,onClick:function(){var e=jt();e?(!function(e,t){He(e.id),Ue.collection("buns").doc(e.id).set(e).then((function(){"Baby Bun"===e.rankOfSmallestBun?t({type:"info",message:'Baby Bun sighting reported with limited alerts (more info on the "About" page).'}):t({type:"success",message:"Bun sighting reported successfully."})})).catch((function(e){console.log(e),t({type:"error",message:"Unable to report bun sighting. Please try again later."})}))}({id:Object(gt.a)(),numberOfBuns:""!==s?s:1,rankOfSmallestBun:""!==g?g:"Peasent Bun",timeOfSighting:Date.now(),latitude:e.latitude,longitude:e.longitude},n),l(""),j("")):n({type:"error",message:"Unable to get your location to create a Bun Sighting. Please try again."})},variant:"contained",children:Object(A.jsx)(L.a,{variant:"h5",children:"Submit Bun Sighting"})})]})})},ht=function(e){var t=e.notificationFilter,n=e.setNotificationFilter,r=le(),o=i.a.useState(X()),c=Object(u.a)(o,2),s=c[0],l=c[1],d=function(e){(l(e),""===e.maxAlertAge||e.maxAlertAge<=0||""===e.maxDistanceAway||e.maxDistanceAway<=0||""===e.walkingSpeed||e.walkingSpeed<=0||""===e.detourCoefficent||e.detourCoefficent<.01||e.detourCoefficent>1)||function(e){Z=e,window.localStorage.setItem("bunFilterParameters",JSON.stringify(e))}({maxAlertAge:e.maxAlertAge,maxDistanceAway:e.maxDistanceAway,walkingSpeed:e.walkingSpeed,detourCoefficent:e.detourCoefficent})};return Object(A.jsxs)(Pe,{heading:"Settings",children:[Object(A.jsx)(L.a,{variant:"h4",children:"Bun Alert Filter Parameters"}),Object(A.jsx)(ut.a,{className:r.marginedTopBottom,error:""===s.maxAlertAge||s.maxAlertAge<=0,fullWidth:!0,helperText:(""===s.maxAlertAge||s.maxAlertAge<=0)&&Object(A.jsxs)(a.Fragment,{children:[Object(A.jsx)(bt.a,{fontSize:"inherit"})," There must be at least one minute before an alert goes stale!"]}),id:"enter-max-alert-age",label:"Max Alert Age in Minutes (default is 15 minutes)",onChange:function(e){var t=""!==e.target.value?Math.trunc(parseFloat(e.target.value)):"";d(Object(Oe.a)(Object(Oe.a)({},s),{},{maxAlertAge:t}))},type:"number",value:s.maxAlertAge.toString(),variant:"outlined"}),Object(A.jsx)(ut.a,{className:r.marginedTopBottom,error:""===s.maxDistanceAway||s.maxDistanceAway<=0,fullWidth:!0,helperText:(""===s.maxDistanceAway||s.maxDistanceAway<=0)&&Object(A.jsxs)(a.Fragment,{children:[Object(A.jsx)(bt.a,{fontSize:"inherit"})," There must be at least some distance allowed between you and the furthest alert!"]}),id:"enter-max-distance-away",label:"Max Distance in Miles to Walk to Bun Sighting (default is 1 mile)",onChange:function(e){var t=""!==e.target.value?parseFloat(e.target.value):"";d(Object(Oe.a)(Object(Oe.a)({},s),{},{maxDistanceAway:t}))},type:"number",value:s.maxDistanceAway.toString(),variant:"outlined"}),Object(A.jsx)(ut.a,{className:r.marginedTopBottom,error:""===s.walkingSpeed||s.walkingSpeed<=0,fullWidth:!0,helperText:(""===s.walkingSpeed||s.walkingSpeed<=0)&&Object(A.jsxs)(a.Fragment,{children:[Object(A.jsx)(bt.a,{fontSize:"inherit"})," Walking speed must be greater than 0!"]}),id:"enter-walking-speed",label:"Average Walking Speed in Miles/Hour (default is 3.1 mile/hour)",onChange:function(e){var t=""!==e.target.value?parseFloat(e.target.value):"";d(Object(Oe.a)(Object(Oe.a)({},s),{},{walkingSpeed:t}))},type:"number",value:s.walkingSpeed.toString(),variant:"outlined"}),Object(A.jsx)(ut.a,{className:r.marginedTopBottom,error:""===s.detourCoefficent||s.detourCoefficent<.01||s.detourCoefficent>1,fullWidth:!0,helperText:(""===s.detourCoefficent||s.detourCoefficent<.01||s.detourCoefficent>1)&&Object(A.jsxs)(a.Fragment,{children:[Object(A.jsx)(bt.a,{fontSize:"inherit"})," The percentage must be between 1% and 100%!"]}),id:"enter-detour-coefficent",label:"Average Progress towards Bun Alert out of Total Distance Walked as a Percent (default is 70%)",onChange:function(e){var t=""!==e.target.value?parseFloat(e.target.value)/100:"";d(Object(Oe.a)(Object(Oe.a)({},s),{},{detourCoefficent:t}))},type:"number",value:""===s.detourCoefficent?"":(Math.round(1e8*s.detourCoefficent)/1e6).toString(),variant:"outlined"}),Object(A.jsx)(ut.a,{className:r.marginedTopBottom,disabled:!0,fullWidth:!0,id:"actual-max-distance",label:"Actual Max Distance of Furthest Alert using the Proprietary Bun Alert Freshness Algorithm",value:function(){if(""===s.maxAlertAge||s.maxAlertAge<=0||""===s.maxDistanceAway||s.maxDistanceAway<=0||""===s.walkingSpeed||s.walkingSpeed<=0||""===s.detourCoefficent||s.detourCoefficent<.01||s.detourCoefficent>1)return"";var e=s.maxAlertAge,t=s.maxDistanceAway,n=s.walkingSpeed,a=s.detourCoefficent;return Math.min(t,n*a*(e/60)).toString()}(),variant:"outlined"}),Object(A.jsx)(L.a,{variant:"h4",children:"Do Not Disturb Settings"}),Object(A.jsx)(ut.a,{className:r.marginedTopBottom,fullWidth:!0,id:"minimum-rank-for-bun-alert",label:"Select the Minimum Rank to Receive Bun Alerts for",onChange:function(e){var t=parseInt(e.target.value);n(t),function(e){$=e,window.localStorage.setItem("notificationFilter",e.toString())}(t)},select:!0,value:t,variant:"outlined",children:[{label:Object(A.jsx)("em",{children:"Do Not Disturb"}),value:0},{label:"Baby Bun",value:1},{label:"King Bun",value:2},{label:"Queen Bun",value:3},{label:"Princess Bun",value:4},{label:"Prince Bun",value:5},{label:"Peasent Bun",value:6}].map((function(e,t){return Object(A.jsx)(dt.a,{value:e.value,children:e.label},"select-notification-filter-option-".concat(t))}))})]})},pt=function(e,t){return Ue.collection("buns").onSnapshot((function(t){e(t.docs.map((function(e){return e.data()}))),t.docChanges().forEach((function(e){var t=e.doc.data();if("added"===e.type){var n=Ke(t,Date.now(),jt());Qe(n)&&He(t.id)&&!qe&&function(e){if(te&&"granted"===Notification.permission&&Q(e.rankOfSmallestBun)<=ee()){var t=e.distanceAwayText?" ".concat(e.distanceAwayText):"";new Notification("BUN ALERT!",{badge:"%PUBLIC_URL%logo512.png",body:"".concat(e.rankAndOtherBuns," sighted").concat(t,'. Learn more on the "Find Buns" page. ').concat(ne(e.numberOfBuns)),icon:"%PUBLIC_URL%logo512.png"})}}(n)}else"removed"===e.type?Ye(t.id):console.warn("An existing Firebase document was changed. This should not happen!")})),qe=!1}),(function(e){console.log(e),t({type:"error",message:"Unable to get bun sightings. Please try again later."})}))},xt=function(e){var t=e.theme,n=e.toggleTheme,a=i.a.useState(null),r=Object(u.a)(a,2),o=r[0],c=r[1],s=i.a.useState(!1),l=Object(u.a)(s,2),j=l[0],f=l[1],m=i.a.useState(),h=Object(u.a)(m,2),p=h[0],x=h[1];void 0===p&&navigator.geolocation.getCurrentPosition((function(e){x(!0);var t={latitude:e.coords.latitude,longitude:e.coords.longitude};y(t),ft(t)}),(function(e){console.log(e),x(!1)}));var O=i.a.useState(),v=Object(u.a)(O,2),w=v[0],y=v[1];i.a.useEffect((function(){if(!0===p){var e=navigator.geolocation.watchPosition((function(e){var t={latitude:e.coords.latitude,longitude:e.coords.longitude};y(t),ft(t)}),(function(e){console.log(e),c({type:"error",message:"Unable to get your location to find buns nearby. Please try again."})}));return function(){navigator.geolocation.clearWatch(e)}}}),[p]);var S=i.a.useState([]),B=Object(u.a)(S,2),k=B[0],N=B[1];i.a.useEffect((function(){var e=pt(N,c);return function(){e()}}),[]);var C=i.a.useState(ee()),D=Object(u.a)(C,2),F=D[0],L=D[1];return Object(A.jsxs)(b.a,{children:[Object(A.jsx)(U,{theme:t,toggleTheme:n,toggleLeftMenu:function(){f(!j)}}),Object(A.jsxs)(d.a,{children:[Object(A.jsx)(xe,{accessToLocationServices:p,notificationFilter:F}),Object(A.jsxs)(g.c,{children:[Object(A.jsx)(g.a,{path:"/bun-alert/",exact:!0,children:Object(A.jsx)(lt,{})}),Object(A.jsx)(g.a,{path:"/bun-alert/about",exact:!0,children:Object(A.jsx)(Me,{})}),Object(A.jsx)(g.a,{path:"/bun-alert/report-bun",exact:!0,children:Object(A.jsx)(mt,{accessToLocationServices:p,setNotification:c})}),Object(A.jsx)(g.a,{path:"/bun-alert/find-buns",exact:!0,children:Object(A.jsx)(ct,{accessToLocationServices:p,location:w,allBuns:k})}),Object(A.jsx)(g.a,{path:"/bun-alert/settings",exact:!0,children:Object(A.jsx)(ht,{notificationFilter:F,setNotificationFilter:L})}),Object(A.jsx)(g.a,{children:Object(A.jsx)(Re,{})})]})]}),Object(A.jsx)(T,{open:j,closeLeftMenu:function(){f(!1)}}),Object(A.jsx)(Le,{notification:o,setNotification:c}),Object(A.jsx)(G,{})]})},Ot=function(){var e=function(){var e=i.a.useState("light"),t=Object(u.a)(e,2),n=t[0],a=t[1],r=i.a.useState(!1),o=Object(u.a)(r,2),c=o[0],s=o[1],l=function(e){window.localStorage.setItem("theme",e),a(e)};return i.a.useEffect((function(){var e=window.localStorage.getItem("theme");window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!e?l("dark"):e?a(e):l("light"),s(!0)}),[]),{theme:n,toggleTheme:function(){l("light"===n?"dark":"light")},componentMounted:c}}(),t=e.theme,n=e.toggleTheme;return e.componentMounted?Object(A.jsx)(s.a,{theme:"dark"===t?se:ce,children:Object(A.jsxs)(a.Fragment,{children:[Object(A.jsx)(l.a,{}),Object(A.jsx)(xt,{theme:t,toggleTheme:n})]})}):Object(A.jsx)(a.Fragment,{})};o.a.render(Object(A.jsx)(Ot,{}),document.getElementById("root")),c()}},[[165,1,2]]]);
//# sourceMappingURL=main.388c4559.chunk.js.map