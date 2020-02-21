(this["webpackJsonpmeetup-two"]=this["webpackJsonpmeetup-two"]||[]).push([[0],{20:function(e,t,n){e.exports=n(45)},25:function(e,t,n){},26:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(19),o=n.n(s),i=(n(25),n(2)),c=n(3),u=n(5),l=n(4),p=n(6),h=(n(26),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={event:[],showDetails:!1},n.handleShowDetails=function(){!1===n.state.showDetails?n.setState({showDetails:!0}):n.setState({showDetails:!1})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showDetails;return r.a.createElement("div",{className:"Event"},r.a.createElement("div",{className:"detailsOverview"},r.a.createElement("p",{className:"date"},"Date: ",this.props.event.local_date),r.a.createElement("p",{className:"time"},"Time: ",this.props.event.local_time),r.a.createElement("p",{className:"name"},"Event Name: ",this.props.event.name),r.a.createElement("p",{className:"attendeeNumber"},"Number Attending: ",this.props.event.yes_rsvp_count),r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"More Details")),t&&r.a.createElement("div",{className:"expandedDetails"},r.a.createElement("p",{className:"description"},this.props.event.description)))}}]),t}(a.Component)),m=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h,{event:e}))})))}}]),t}(a.Component),d=n(7),f=n.n(d),v=n(8),g=n(9),y=n.n(g),b=[{created:1578477368e3,duration:108e5,id:"267743487",name:"AWS UG February Event",rsvp_limit:200,date_in_series_pattern:!1,status:"upcoming",time:1582047e6,local_date:"2020-02-18",local_time:"18:30",updated:1581348429e3,utc_offset:36e5,waitlist_count:0,yes_rsvp_count:199,venue:{id:26166503,name:"MAN Truck & Bus / RIO",lat:48.180694580078125,lon:11.596031188964844,repinned:!0,address_1:"Oskar-Schlemmer-Str. 19-21",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1400514197e3,name:"Munich AWS User Group",id:14546712,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"AWS-Munich",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/AWS-Munich/events/267743487/",description:"It's only the second month of they year but the usergroup is already back at full throttle - awesome location and great (international) speaker! We're very happy about the sponsorship of RIO The Logistic Flow, the digital brand of TRATON GROUP. They will provide their offices, food and drinks for us.AGENDA: 18:30 - Doors open, networking, drinks, food9:00 - Markus (Team Internet AG) - Recent AWS announcements 19:30 - Massimo Re Ferre\u2019 (AWS Principal Developer Advocate) - Container on AWS - state of the union In this highly interactive session we will cover, with a mix of slides and demos, the latest updates of the container related services AWS unveiled at re:Invent 2019. ",how_to_find_us:"Canteen, Walter-Gropius-Str. 19",visibility:"public",member_pay_fee:!1},{created:1581354e6,duration:108e5,id:"268607198",name:"Scaling Transformation by Design @ Nokia",rsvp_limit:1,date_in_series_pattern:!1,status:"upcoming",time:15822198e5,local_date:"2020-02-20",local_time:"18:30",updated:1581354337e3,utc_offset:36e5,waitlist_count:4,yes_rsvp_count:1,venue:{id:26854977,name:"NOKIA Digital Creativity Lab",lat:48.11524200439453,lon:11.5970458984375,repinned:!1,address_1:"Werinherstra\xdfe 91",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1559166585e3,name:"Transformation by Design",id:32061396,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Transformation-by-Design",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Transformation-by-Design/events/268607198/",description:"+++ please register via Design Thinking M\xfcnchen: Scaling Transformation by Design. Over the last years, design &amp; design thinking have become the key success factor for many large, global companies, as society has moved from being product-driven to user-centered, from \u201ctechnology first\u201d to \u201chuman first\u201d, from \u201cmaking people want things\u201d to \u201cmaking things people want\u201d. Studies have shown that design-driven companies outperform considerably in terms of revenue growth (by 100%+) and Total Return to Shareholder (70%+), the return on investment can be as much as 300%. With this in mind, we decided to develop, test and incubate this approach in Nokia Transformation. We have been doing this during the last 1.5 years, under the name \u201cTransformation by Design\u201d, gathering learnings along the way from more than 70 design projects and sprints, on topics ranging from product innovation, to strategy, to organization redesign.",visibility:"public",member_pay_fee:!1}];function w(e){return _.apply(this,arguments)}function _(){return(_=Object(v.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,E();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,y.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return O.apply(this,arguments)}function O(){return(O=Object(v.a)(f.a.mark((function e(t,n){var a,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",b);case 2:return e.next=4,E();case 4:if(!(a=e.sent)){e.next=12;break}return r="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+a,t&&n&&(r+="&lat="+t+"&lon="+n),e.next=10,y.a.get(r);case 10:return s=e.sent,e.abrupt("return",s.data.events);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return S.apply(this,arguments)}function S(){return(S=Object(v.a)(f.a.mark((function e(){var t,n,a,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token")){e.next=8;break}if(n=new URLSearchParams(window.location.search),a=n.get("code")){e.next=7;break}return window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=3jsm2toi92h8a08o038b2o1hh1&response_type=code&redirect_uri=https://elizabethsn7.github.io/meetup-two/",e.abrupt("return",null);case 7:return e.abrupt("return",j("get",a));case 8:if(r=localStorage.getItem("last_saved_time"),!(t&&Date.now()-r<36e5)){e.next=11;break}return e.abrupt("return",t);case 11:return s=localStorage.getItem("refresh_token"),e.abrupt("return",j("renew",s));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return N.apply(this,arguments)}function N(){return(N=Object(v.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://fesvq75t1d.execute-api.us-west-1.amazonaws.com/dev/api/token/{code}"+n:"renew"===t&&(a="https://fesvq75t1d.execute-api.us-west-1.amazonaws.com/dev/api/refreshtoken/{refresh_token}"+n),e.next=3,y.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[]},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),w(t).then((function(e){return n.setState({suggestions:e})}))},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),t}(a.Component),x=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={amount:"10"},n.handleInputChanged=function(e){var t=e.target.value;n.setState({amount:t})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NumberOfEvents"},r.a.createElement("input",{type:"text",className:"eventsShown",placeholder:"Number of events",value:this.state.amount,onChange:this.handleInputChanged}))}}]),t}(a.Component),A=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={events:[]},n.updateEvents=function(e,t){k(e,t).then((function(e){return n.setState({events:e})}))},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,{updateEvents:this.updateEvents}),r.a.createElement(m,{events:this.state.events}),r.a.createElement(x,null),r.a.createElement(m,{events:this.state.events}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.129c514a.chunk.js.map