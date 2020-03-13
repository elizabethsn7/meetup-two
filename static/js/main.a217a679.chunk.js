(this["webpackJsonpmeetup-two"]=this["webpackJsonpmeetup-two"]||[]).push([[0],{209:function(e,t,n){e.exports=n(414)},214:function(e,t,n){},215:function(e,t,n){},414:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),i=n.n(o),s=(n(214),n(11)),c=n(19),l=n(13),u=n(12),p=n(14),h=(n(215),n(417)),m=n(17),d=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],showDetails:!1},n.handleShowDetails=function(){!1===n.state.showDetails?n.setState({showDetails:!0}):n.setState({showDetails:!1})},n.getRSVPData=function(){for(var e=n.state.events,t=0;t<e.length;t++)e[t]===n.props.event.yes_rsvp_count&&e[t]===n.props.event.rsvp_limit&&console.log("I AM WORKING");var a=n.props.event.yes_rsvp_count;return[{name:"Reservations",value:a},{name:"Open Spots",value:n.props.event.rsvp_limit-a}]},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.event,n=["#e63070","#ff8a00"];return r.a.createElement("div",{className:"Event"},r.a.createElement("div",{className:"detailsOverview"},r.a.createElement("span",{className:"eventName"},"Event: ",t.name)," ",r.a.createElement("br",null),r.a.createElement("span",null,"Date: ",t.local_date),r.a.createElement("span",null," Time: ",t.local_time),r.a.createElement(h.a,{className:"btn details-btn",onClick:function(){return e.handleShowDetails()}},"Show More")),this.state.showDetails&&r.a.createElement("div",{className:"expandedDetails"},r.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:t.description}}),r.a.createElement("p",{className:"rsvpCount"},"Number Attending: ",t.yes_rsvp_count),r.a.createElement("p",{className:"rsvpLimit"},"RSVP Limit: ",t.rsvp_limit),r.a.createElement(m.e,{height:100},r.a.createElement(m.d,{width:20,height:20,margin:{top:20,right:30,left:0,bottom:0}},r.a.createElement(m.c,{data:this.getRSVPData(),cx:50,cy:50,outerRadius:80,fill:"#82ca9d",dataKey:"value",nameKey:"name"},this.getRSVPData().map((function(e,t){return r.a.createElement(m.b,{key:"cell-".concat(t),fill:n[t]})}))),r.a.createElement(m.h,null))),r.a.createElement(h.a,{className:"btn details-btn",onClick:function(){return e.handleShowDetails()}},"Show Less")))}}]),t}(a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(d,{event:e}))})))}}]),t}(a.Component),v=n(20),g=n.n(v),b=n(53),y=n(72),w=n.n(y),_=[{created:1578477368e3,duration:108e5,id:"267743487",name:"AWS UG February Event",rsvp_limit:200,date_in_series_pattern:!1,status:"upcoming",time:1582047e6,local_date:"2020-03-14",local_time:"18:30",updated:1581348429e3,utc_offset:36e5,waitlist_count:0,yes_rsvp_count:139,venue:{id:26166503,name:"MAN Truck & Bus / RIO",lat:48.180694580078125,lon:11.596031188964844,repinned:!0,address_1:"Oskar-Schlemmer-Str. 19-21",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1400514197e3,name:"Munich AWS User Group",id:14546712,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"AWS-Munich",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/AWS-Munich/events/267743487/",description:"<p>Dripping Springs Toastmasters' Club wishes to extend a warm welcome to the community and an invitation to visit our club. We meet each Tuesday evening at 6:30 for about an hour in the Pioneer Bank Building (west side entrance). Bank is located at 100 Creek Road or at the corner of Creek Road and US HWY 290W (west of intersection of RR12). (Google Maps prefers to call as County Road 190)</p> <p>Our mission is to promote personal public speaking ability and leadership skills within each member of the club. Everyone has a beginning. No one person's goals are the same as another. Yet the Toastmasters' model develops each individual at their pace and ability.</p>",how_to_find_us:"Canteen, Walter-Gropius-Str. 19",visibility:"public",member_pay_fee:!1},{created:1581354e6,duration:108e5,id:"268607198",name:"Scaling Transformation by Design @ Nokia",rsvp_limit:10,date_in_series_pattern:!1,status:"upcoming",time:15822198e5,local_date:"2020-03-13",local_time:"18:30",updated:1581354337e3,utc_offset:36e5,waitlist_count:4,yes_rsvp_count:5,venue:{id:26854977,name:"NOKIA Digital Creativity Lab",lat:48.11524200439453,lon:11.5970458984375,repinned:!1,address_1:"Werinherstra\xdfe 91",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1559166585e3,name:"Transformation by Design",id:32061396,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Transformation-by-Design",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Transformation-by-Design/events/268607198/",description:"<p>Dripping Springs Toastmasters' Club wishes to extend a warm welcome to the community and an invitation to visit our club. We meet each Tuesday evening at 6:30 for about an hour in the Pioneer Bank Building (west side entrance). Bank is located at 100 Creek Road or at the corner of Creek Road and US HWY 290W (west of intersection of RR12). (Google Maps prefers to call as County Road 190)</p> <p>Our mission is to promote personal public speaking ability and leadership skills within each member of the club. Everyone has a beginning. No one person's goals are the same as another. Yet the Toastmasters' model develops each individual at their pace and ability.</p><p>Dripping Springs Toastmasters' Club wishes to extend a warm welcome to the community and an invitation to visit our club. We meet each Tuesday evening at 6:30 for about an hour in the Pioneer Bank Building (west side entrance). Bank is located at 100 Creek Road or at the corner of Creek Road and US HWY 290W (west of intersection of RR12). (Google Maps prefers to call as County Road 190)</p>",visibility:"public",member_pay_fee:!1}];function E(e){return k.apply(this,arguments)}function k(){return(k=Object(b.a)(g.a.mark((function e(t){var n,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,C();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,w.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,n){return O.apply(this,arguments)}function O(){return(O=Object(b.a)(g.a.mark((function e(t,n,a){var r,o,i,s,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",_);case 2:if(navigator.onLine){e.next=5;break}return r=localStorage.getItem("lastEvents"),e.abrupt("return",JSON.parse(r));case 5:return e.next=7,C();case 7:if(!(o=e.sent)){e.next=19;break}return i="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+o,t&&n&&(i+="&lat="+t+"&lon="+n),a&&(i+="&page="+a),t&&n&&a&&(i+="&lat="+t+"&lon="+n+"&page="+a),e.next=15,w.a.get(i);case 15:return s=e.sent,(c=s.data.events).length&&localStorage.setItem("lastEvents",JSON.stringify(c)),e.abrupt("return",c);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(g.a.mark((function e(t,n){var a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://8f80bb691h.execute-api.us-west-2.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://8f80bb691h.execute-api.us-west-2.amazonaws.com/dev/api/refreshtoken/"+n),e.next=3,w.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return N.apply(this,arguments)}function N(){return(N=Object(b.a)(g.a.mark((function e(){var t,n,a,r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token")){e.next=8;break}if(n=new URLSearchParams(window.location.search),a=n.get("code")){e.next=7;break}return window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=3jsm2toi92h8a08o038b2o1hh1&response_type=code&redirect_uri=https://elizabethsn7.github.io/meetup-two/",e.abrupt("return",null);case 7:return e.abrupt("return",j("get",a));case 8:if(r=localStorage.getItem("last_saved_time"),!(t&&Date.now()-r<36e5)){e.next=11;break}return e.abrupt("return",t);case 11:return o=localStorage.getItem("refresh_token"),e.abrupt("return",j("renew",o));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(a.Component),R=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).color="#b52424",n}return Object(p.a)(t,e),t}(D),T=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).color="#b52424",n}return Object(p.a)(t,e),t}(D),W=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getStyle=function(){return{color:n.color,fontStyle:"italic",fontSize:"1.5em",backgroundColor:"#e63070",textAlign:"center"}},n.color="#fff",n}return Object(p.a)(t,e),t}(D),A=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[]},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),E(t).then((function(e){n.setState({suggestions:e}),t&&0===e.length?n.setState({infoText:"We can not find the city you are looking for. Please try another city."}):n.setState({infoText:""})}))},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(R,{text:this.state.infoText}),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"Enter Location"}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),t}(a.Component),M=n(69),I=n(180),z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={number:32},n.handleInputChanged=function(e){var t=e.target.value;n.setState({number:t}),n.props.updateEvents(null,null,t),t<1?n.setState({infoText:"Please enter a number of 1 or greater"}):n.setState({infoText:""})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NumberOfEvents"},r.a.createElement(T,{text:this.state.infoText}),r.a.createElement(M.a,null,r.a.createElement(I.a,{className:"eventListInput"},r.a.createElement("span",null,"Show"),r.a.createElement("input",{type:"number",className:"eventsShown",placeholder:"32",value:this.state.number,onChange:this.handleInputChanged}),r.a.createElement("span",null,"Results"))))}}]),t}(a.Component),B=n(184),G=n(181),L=n.n(G),U=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],page:null,lat:null,lon:null,warningText:""},n.updateEvents=function(e,t,a){!1===navigator.onLine?n.setState({warningText:"You are no longer online"}):n.setState({warningText:""}),e&&t?S(e,t,n.state.page).then((function(a){return n.setState({events:a,lat:e,lon:t})})):a?S(n.state.lat,n.state.lon,a).then((function(e){return n.setState({events:e,page:a})})):S(n.state.lat,n.state.lon,n.state.page).then((function(e){return n.setState({events:e})}))},n.countEventsOnADate=function(e){for(var t=0,a=0;a<n.state.events.length;a+=1)n.state.events[a].local_date===e&&(t+=1);return t},n.getData=function(){for(var e=[],t=L()(),a=0;a<7;a+=1){t.add(1,"days");var r=t.format("YYYY-MM-DD"),o=n.countEventsOnADate(r);e.push({date:r,number:o})}return e},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateEvents()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B.a,{className:"brand"},"Meetup"),r.a.createElement(W,{text:this.state.warningText}),r.a.createElement(M.a,null,r.a.createElement(A,{updateEvents:this.updateEvents}),r.a.createElement(z,{updateEvents:this.updateEvents}),r.a.createElement(m.e,{height:400},r.a.createElement(m.g,{width:800,height:400,margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(m.a,null),r.a.createElement(m.i,{type:"category",dataKey:"date"}),r.a.createElement(m.j,{type:"number",dataKey:"number",name:"Number of Events",allowDecimals:!1}),r.a.createElement(m.h,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(m.f,{data:this.getData(),fill:"#8884d8"}))),r.a.createElement(f,{events:this.state.events})))}}]),t}(a.Component),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var K=n(183);n(413);i.a.render(r.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup-two",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup-two","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Y(t,e)}))}}(),K.config("73f1f9fd9b124abb89885caa1e94cd11").install()}},[[209,1,2]]]);
//# sourceMappingURL=main.a217a679.chunk.js.map