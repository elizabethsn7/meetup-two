(this["webpackJsonpmeetup-two"]=this["webpackJsonpmeetup-two"]||[]).push([[0],{30:function(e,t,n){e.exports=n(59)},35:function(e,t,n){},36:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(15),o=n.n(s),i=(n(35),n(6)),c=n(7),u=n(9),l=n(8),p=n(10),m=(n(36),n(13)),h=n(29),d=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],showDetails:!1},n.handleShowDetails=function(){!1===n.state.showDetails?n.setState({showDetails:!0}):n.setState({showDetails:!1})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.event;return r.a.createElement(m.a,null,r.a.createElement("div",{className:"Event"},r.a.createElement("p",{className:"name"},"Event: ",t.name),r.a.createElement("p",{className:"date"},"Date: ",t.local_date),r.a.createElement("p",{className:"time"},"Time: ",t.local_time),r.a.createElement("p",{className:"attendeeNumber"},"Number Attending: ",t.yes_rsvp_count),r.a.createElement("div",{className:"expandedDetails"},this.state.showDetails&&r.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:t.description}})),r.a.createElement(h.a,{className:"btn details-btn",onClick:function(){return e.handleShowDetails()}},"More Details")))}}]),t}(a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(d,{event:e}))})))}}]),t}(a.Component),b=n(11),v=n.n(b),g=n(14),y=n(16),w=n.n(y),_=[{created:1578477368e3,duration:108e5,id:"267743487",name:"AWS UG February Event",rsvp_limit:200,date_in_series_pattern:!1,status:"upcoming",time:1582047e6,local_date:"2020-02-18",local_time:"18:30",updated:1581348429e3,utc_offset:36e5,waitlist_count:0,yes_rsvp_count:199,venue:{id:26166503,name:"MAN Truck & Bus / RIO",lat:48.180694580078125,lon:11.596031188964844,repinned:!0,address_1:"Oskar-Schlemmer-Str. 19-21",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1400514197e3,name:"Munich AWS User Group",id:14546712,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"AWS-Munich",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/AWS-Munich/events/267743487/",description:"<p>Dripping Springs Toastmasters' Club wishes to extend a warm welcome to the community and an invitation to visit our club. We meet each Tuesday evening at 6:30 for about an hour in the Pioneer Bank Building (west side entrance). Bank is located at 100 Creek Road or at the corner of Creek Road and US HWY 290W (west of intersection of RR12). (Google Maps prefers to call as County Road 190)</p> <p>Our mission is to promote personal public speaking ability and leadership skills within each member of the club. Everyone has a beginning. No one person's goals are the same as another. Yet the Toastmasters' model develops each individual at their pace and ability.</p>",how_to_find_us:"Canteen, Walter-Gropius-Str. 19",visibility:"public",member_pay_fee:!1},{created:1581354e6,duration:108e5,id:"268607198",name:"Scaling Transformation by Design @ Nokia",rsvp_limit:1,date_in_series_pattern:!1,status:"upcoming",time:15822198e5,local_date:"2020-02-20",local_time:"18:30",updated:1581354337e3,utc_offset:36e5,waitlist_count:4,yes_rsvp_count:1,venue:{id:26854977,name:"NOKIA Digital Creativity Lab",lat:48.11524200439453,lon:11.5970458984375,repinned:!1,address_1:"Werinherstra\xdfe 91",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1559166585e3,name:"Transformation by Design",id:32061396,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Transformation-by-Design",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Transformation-by-Design/events/268607198/",description:"<p>Dripping Springs Toastmasters' Club wishes to extend a warm welcome to the community and an invitation to visit our club. We meet each Tuesday evening at 6:30 for about an hour in the Pioneer Bank Building (west side entrance). Bank is located at 100 Creek Road or at the corner of Creek Road and US HWY 290W (west of intersection of RR12). (Google Maps prefers to call as County Road 190)</p> <p>Our mission is to promote personal public speaking ability and leadership skills within each member of the club. Everyone has a beginning. No one person's goals are the same as another. Yet the Toastmasters' model develops each individual at their pace and ability.</p><p>Dripping Springs Toastmasters' Club wishes to extend a warm welcome to the community and an invitation to visit our club. We meet each Tuesday evening at 6:30 for about an hour in the Pioneer Bank Building (west side entrance). Bank is located at 100 Creek Road or at the corner of Creek Road and US HWY 290W (west of intersection of RR12). (Google Maps prefers to call as County Road 190)</p>",visibility:"public",member_pay_fee:!1}];function k(e){return E.apply(this,arguments)}function E(){return(E=Object(g.a)(v.a.mark((function e(t){var n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,N();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,w.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,n){return O.apply(this,arguments)}function O(){return(O=Object(g.a)(v.a.mark((function e(t,n,a){var r,s,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",_);case 2:return e.next=4,N();case 4:if(!(r=e.sent)){e.next=15;break}return s="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+r,t&&n&&(s+="&lat="+t+"&lon="+n),a&&(s+="&page="+a),t&&n&&a&&(s+="&lat="+t+"&lon="+n+"&page="+a),e.next=12,w.a.get(s);case 12:return o=e.sent,i=o.data.events,e.abrupt("return",i);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return C.apply(this,arguments)}function C(){return(C=Object(g.a)(v.a.mark((function e(t,n){var a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://8f80bb691h.execute-api.us-west-2.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://8f80bb691h.execute-api.us-west-2.amazonaws.com/dev/api/refreshtoken/"+n),e.next=3,w.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return x.apply(this,arguments)}function x(){return(x=Object(g.a)(v.a.mark((function e(){var t,n,a,r,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token")){e.next=8;break}if(n=new URLSearchParams(window.location.search),a=n.get("code")){e.next=7;break}return window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=3jsm2toi92h8a08o038b2o1hh1&response_type=code&redirect_uri=https://elizabethsn7.github.io/meetup-two/",e.abrupt("return",null);case 7:return e.abrupt("return",j("get",a));case 8:if(r=localStorage.getItem("last_saved_time"),!(t&&Date.now()-r<36e5)){e.next=11;break}return e.abrupt("return",t);case 11:return s=localStorage.getItem("refresh_token"),e.abrupt("return",j("renew",s));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[]},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),k(t).then((function(e){return n.setState({suggestions:e})}))},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"Enter Location"}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),t}(a.Component),M=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={number:32},n.handleInputChanged=function(e){var t=e.target.value;n.setState({number:t}),n.props.updateEvents(null,null,t)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NumberOfEvents"},r.a.createElement(m.a,null,r.a.createElement("span",null,"Show"),r.a.createElement("input",{type:"number",className:"eventsShown",placeholder:"32",value:this.state.number,onChange:this.handleInputChanged}),r.a.createElement("span",null,"Results")))}}]),t}(a.Component),W=n(28),R=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],page:null,lat:null,lon:null},n.updateEvents=function(e,t,a){e&&t?S(e,t,n.state.page).then((function(a){return n.setState({events:a,lat:e,lon:t})})):a?S(n.state.lat,n.state.lon,a).then((function(e){return n.setState({events:e,page:a})})):S(n.state.lat,n.state.lon,n.state.page).then((function(e){return n.setState({events:e})}))},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateEvents()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W.a,{className:"brand"},"Meetup Api"),r.a.createElement(m.a,null,r.a.createElement(D,{updateEvents:this.updateEvents}),r.a.createElement(M,{updateEvents:this.updateEvents},r.a.createElement("p",null,'"How many events would you like to see?"')),r.a.createElement(f,{events:this.state.events})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(58);o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.7d61da93.chunk.js.map