(window["webpackJsonptf-react-chester"]=window["webpackJsonptf-react-chester"]||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(16),r=t.n(i),c=(t(51),t(52),t(53),t(54),t(2)),s=t(113),o=t(9),m=t(11),u=(t(55),t(4)),d=t.n(u),p=t(39),E=t.n(p),g=t(110),b=t(43),f=t.n(b),v=t(40),h=t.n(v);var y=function(e){return l.a.createElement("div",{className:"mi-bglines"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))},N=t(5),j=t.n(N);var w=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)(!1),s=Object(c.a)(r,2),m=s[0],u=s[1];return Object(n.useEffect)((function(){d.a.get("/api/information").then((function(e){i(e.data)}))}),[]),l.a.createElement("nav",{className:m?"mi-header is-visible":"mi-header"},l.a.createElement("button",{onClick:function(){u(!m)},className:"mi-header-toggler"},m?l.a.createElement(j.a,{name:"close"}):l.a.createElement(j.a,{name:"menu"})),l.a.createElement("div",{className:"mi-header-inner"},l.a.createElement("div",{className:"mi-header-image"},l.a.createElement(o.b,{to:"/"},l.a.createElement("img",{src:t.brandImage,alt:"brandimage"}))),l.a.createElement("ul",{className:"mi-header-menu"},l.a.createElement("li",null,l.a.createElement(o.c,{exact:!0,to:"/mysite"},l.a.createElement("span",null,"Home"))),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/about"},l.a.createElement("span",null,"About"))),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/resume"},l.a.createElement("span",null,"Resume"))),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/contact"},l.a.createElement("span",null,"Contact")))),l.a.createElement("p",{className:"mi-header-copyright"},"\xa9 ",(new Date).getFullYear()," ",l.a.createElement("b",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://nuclearthemes.com"},"NuclearThemes")))))};var O=function(e){return l.a.createElement("div",{className:"mi-wrapper"},l.a.createElement(y,null),l.a.createElement(w,null),e.children)};var k=function(e){return l.a.createElement("div",{className:"mi-sectiontitle"},l.a.createElement("h2",null,e.title),l.a.createElement("span",null,e.title))};var S=function(e){return l.a.createElement("div",{className:"mi-service"},l.a.createElement("span",{className:"mi-service-icon"},l.a.createElement(j.a,{name:e.content.icon})),l.a.createElement("h5",null,e.content.title),l.a.createElement("p",null,e.content.details))};var x=function(e){return l.a.createElement("div",{className:"mi-testimonial-slideritem"},l.a.createElement("div",{className:"mi-testimonial"},l.a.createElement("div",{className:"mi-testimonial-content"},l.a.createElement("p",null,e.content.content)),l.a.createElement("div",{className:"mi-testimonial-author"},l.a.createElement("h5",null,e.content.author.name),l.a.createElement("h6",null,e.content.author.designation))))};var C=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)(""),s=Object(c.a)(r,2),o=s[0],m=s[1],u=Object(n.useState)([]),p=Object(c.a)(u,2),b=p[0],v=p[1],y=Object(n.useState)([]),N=Object(c.a)(y,2),j=N[0],w=N[1];return Object(n.useEffect)((function(){d.a.get("/api/information").then((function(e){m(e.data)})),d.a.get("/api/services").then((function(e){v(e.data)})),d.a.get("/api/reviews").then((function(e){w(e.data)}))}),[]),l.a.createElement(O,null,l.a.createElement("div",{className:"mi-about-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"About Me"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-about-image"},l.a.createElement(f.a,{src:o.aboutImage,placeholder:"/images/about-image-placeholder.png"},(function(e){return l.a.createElement("img",{src:e,alt:"aboutimage",onClick:function(){i({toggler:!t})}})})),l.a.createElement("span",{className:"mi-about-image-icon"},l.a.createElement(g.a,null)),l.a.createElement(E.a,{toggler:t,sources:[o.aboutImageLg]}))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-about-content"},l.a.createElement("h3",null,"I am ",l.a.createElement("span",{className:"color-theme"},o.name)),l.a.createElement("p",null,"I am a data scientist. I can provide actionable insights through rigorous statistical analysis and experimentation. I also make end-to-end machine learning pipelines and create insightful dashbaords."),l.a.createElement("ul",null,o.name?l.a.createElement("li",null,l.a.createElement("b",null,"Full Name")," ",o.name):null,o.age?l.a.createElement("li",null,l.a.createElement("b",null,"Age")," ",o.age," Years"):null,o.phone?l.a.createElement("li",null,l.a.createElement("b",null,"Phone")," ",o.phone):null,o.nationality?l.a.createElement("li",null,l.a.createElement("b",null,"Nationality")," ",o.nationality):null,o.language?l.a.createElement("li",null,l.a.createElement("b",null,"Languages")," ",o.language):null,o.email?l.a.createElement("li",null,l.a.createElement("b",null,"Email")," ",o.email):null,o.address?l.a.createElement("li",null,l.a.createElement("b",null,"Address")," ",o.address):null,o.freelanceStatus?l.a.createElement("li",null,l.a.createElement("b",null,"Freelance")," ",o.freelanceStatus):null),l.a.createElement("a",{href:o.cvfile,className:"mi-button"},"Download CV")))))),l.a.createElement("div",{className:"mi-service-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"Services"}),l.a.createElement("div",{className:"mi-service-wrapper"},l.a.createElement("div",{className:"row mt-30-reverse"},b.map((function(e){return l.a.createElement("div",{className:"col-lg-4 col-md-6 col-12 mt-30",key:e.title},l.a.createElement(S,{content:e}))})))))),l.a.createElement("div",{className:"mi-review-area mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"Reviews"}),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement(h.a,Object.assign({className:"mi-testimonial-slider"},{dots:!1,infinite:!0,arrows:!1,speed:500,slidesToShow:2,slidesToScroll:2,autoplay:!0,autoplaySpeed:6e3,pauseOnHover:!0,adaptiveHeight:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),j.map((function(e){return l.a.createElement(x,{key:e.id,content:e})}))))))))},I=t(21),A=t(111),P=t(112);function D(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var M=function(){var e=Object(n.useState)([]),a=Object(c.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)([]),s=Object(c.a)(r,2),o=s[0],m=s[1],u=Object(n.useState)([]),p=Object(c.a)(u,2),E=p[0],g=p[1],b=Object(n.useState)({name:"",email:"",subject:"",message:""}),f=Object(c.a)(b,2),v=f[0],h=f[1],y=Object(n.useState)(!1),N=Object(c.a)(y,2),j=N[0],w=N[1],S=Object(n.useState)(""),x=Object(c.a)(S,2),C=x[0],M=x[1],L=function(e){h(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?D(t,!0).forEach((function(a){Object(I.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},v,Object(I.a)({},e.currentTarget.name,e.currentTarget.value)))};return Object(n.useEffect)((function(){d.a.get("/api/contactinfo").then((function(e){i(e.data.phoneNumbers),m(e.data.emailAddress),g(e.data.address)}))}),[]),l.a.createElement(O,null,l.a.createElement("div",{className:"mi-contact-area mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"Contact Me"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-contact-formwrapper"},l.a.createElement("h4",null,"Get In Touch"),l.a.createElement("form",{action:"#",className:"mi-form mi-contact-form",onSubmit:function(e){e.preventDefault(),v.name?v.email?v.subject?v.message?(w(!1),M("You message has been sent!!!")):(w(!0),M("Message is required")):(w(!0),M("Subject is required")):(w(!0),M("Email is required")):(w(!0),M("Name is required"))}},l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("label",{htmlFor:"contact-form-name"},"Enter your name*"),l.a.createElement("input",{onChange:L,type:"text",name:"name",id:"contact-form-name",value:v.name})),l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("label",{htmlFor:"contact-form-email"},"Enter your email*"),l.a.createElement("input",{onChange:L,type:"text",name:"email",id:"contact-form-email",value:v.email})),l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("label",{htmlFor:"contact-form-subject"},"Enter your subject*"),l.a.createElement("input",{onChange:L,type:"text",name:"subject",id:"contact-form-subject",value:v.subject})),l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("label",{htmlFor:"contact-form-message"},"Enter your Message*"),l.a.createElement("textarea",{onChange:L,name:"message",id:"contact-form-message",cols:"30",rows:"6",value:v.message})),l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("button",{className:"mi-button",type:"submit"},"Send Mail"))),j&&C?l.a.createElement("div",{className:"alert alert-danger mt-4"},C):!j&&C?l.a.createElement("div",{className:"alert alert-success mt-4"},C):null)),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-contact-info"},o?l.a.createElement("div",{className:"mi-contact-infoblock"},l.a.createElement("span",{className:"mi-contact-infoblock-icon"},l.a.createElement(A.a,null)),l.a.createElement("div",{className:"mi-contact-infoblock-content"},l.a.createElement("h6",null,"Email"),o.map((function(e){return l.a.createElement("p",{key:e},l.a.createElement("a",{href:"mailto:".concat(e)},e))})))):null,t?l.a.createElement("div",{className:"mi-contact-infoblock"},l.a.createElement("span",{className:"mi-contact-infoblock-icon"},l.a.createElement(P.a,null)),l.a.createElement("div",{className:"mi-contact-infoblock-content"},l.a.createElement("h6",null,"Address"),l.a.createElement("p",null,E))):null))))))},L=t(44),_=t.n(L);var G=function(e){var a=Object(n.useState)({}),t=Object(c.a)(a,2),i=t[0],r=t[1];return Object(n.useEffect)((function(){d.a.get("/api/information").then((function(e){r(e.data.socialLinks)}))}),[]),l.a.createElement("ul",{className:e.bordered?"mi-socialicons mi-socialicons-bordered":"mi-socialicons"},i.facebook?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:i.facebook},l.a.createElement(j.a,{name:"facebook"}))):null,i.twitter?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:i.twitter},l.a.createElement(j.a,{name:"twitter"}))):null,i.pinterest?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:i.pinterest},l.a.createElement(j.a,{name:"pinterest"}))):null,i.behance?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:i.behance},l.a.createElement(j.a,{name:"behance"}))):null,i.linkedin?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:i.linkedin},l.a.createElement(j.a,{name:"linkedin"}))):null,i.dribbble?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:i.dribbble},l.a.createElement(j.a,{name:"dribbble"}))):null,i.github?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:i.github},l.a.createElement(j.a,{name:"github"}))):null)};var T=function(e){var a=e.lightMode,t=Object(n.useState)(""),i=Object(c.a)(t,2),r=i[0],s=i[1];return Object(n.useEffect)((function(){d.a.get("/api/information").then((function(e){s(e.data)}))}),[]),l.a.createElement(O,null,l.a.createElement("div",{className:"mi-home-area mi-padding-section"},l.a.createElement(_.a,{className:"mi-home-particle",params:a?{particles:{number:{value:160,density:{enable:!1}},color:{value:"#000000"},opacity:{value:.1},size:{value:5,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}}}:{particles:{number:{value:160,density:{enable:!1}},color:{value:"#ffffff"},opacity:{value:.1},size:{value:5,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}}}}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-10 col-12"},l.a.createElement("div",{className:"mi-home-content"},l.a.createElement("h1",null,"Hi, I am ",l.a.createElement("span",{className:"color-theme"},r.name)),l.a.createElement("p",null,r.aboutContent),l.a.createElement(G,{bordered:!0})))))))};var F=function(){return l.a.createElement(O,null,l.a.createElement("div",{className:"mi-about-area mi-section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-8"},l.a.createElement("div",{className:"notfound"},l.a.createElement("div",{className:"notfound-inner text-center"},l.a.createElement("h1",null,"404"),l.a.createElement("h3",null,"Whoops!!! Page not found!"),l.a.createElement(o.b,{to:"/",className:"mi-button"},"Back to Home"))))))))},q=t(45),B=t.n(q);var U=function(e){return l.a.createElement("div",{className:"mi-smalltitle"},l.a.createElement("span",{className:"mi-smalltitle-icon"},l.a.createElement(j.a,{name:e.icon})),l.a.createElement("h4",null,e.title))};var z=function(e){var a=window.innerWidth;return l.a.createElement("div",{className:"mi-progress"},l.a.createElement("h6",{className:"mi-progress-title"},e.title),l.a.createElement("div",{className:"mi-progress-inner"},l.a.createElement("div",{className:"mi-progress-percentage"},"".concat(e.percentage,"%")),l.a.createElement("div",{className:"mi-progress-container"},a&&a>767?l.a.createElement("span",{className:"mi-progress-active",style:e.isVisible?{width:"".concat(e.percentage,"%")}:{width:0}}):l.a.createElement("span",{className:"mi-progress-active",style:{width:"".concat(e.percentage,"%")}}))))};var H=function(e){var a=e.resumeData,t=a.year,n=a.position,i=a.graduation,r=a.university,c=a.company,s=a.details,o=a.details2,m=a.details3;return l.a.createElement("div",{className:"mi-resume mt-30"},l.a.createElement("div",{className:"mi-resume-summary"},l.a.createElement("h6",{className:"mi-resume-year"},t)),l.a.createElement("div",{className:"mi-resume-details"},l.a.createElement("h5",null,n||i),l.a.createElement("h6",{className:"mi-resume-company"},c||r),l.a.createElement("p",null,s),l.a.createElement("p",null,o),l.a.createElement("p",null,m)))};var J=function(){var e=Object(n.useState)([]),a=Object(c.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)([]),s=Object(c.a)(r,2),o=s[0],m=s[1],u=Object(n.useState)([]),p=Object(c.a)(u,2),E=p[0],g=p[1];return Object(n.useEffect)((function(){d.a.get("/api/skills").then((function(e){i(e.data)})),d.a.get("/api/experience").then((function(e){m(e.data.workingExperience),g(e.data.educationExperience)}))}),[]),l.a.createElement(O,null,l.a.createElement("div",{className:"mi-skills-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"My Skills"}),l.a.createElement("div",{className:"mi-skills"},l.a.createElement("div",{className:"row mt-30-reverse"},t.map((function(e){return l.a.createElement(B.a,{once:!0,className:"col-lg-6 mt-30",key:e.title},l.a.createElement(z,{title:e.title,percentage:e.value}))})))))),l.a.createElement("div",{className:"mi-resume-area mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(k,{title:"Resume"}),l.a.createElement(U,{title:"Working Experience",icon:"briefcase"}),l.a.createElement("div",{className:"mi-resume-wrapper"},o.map((function(e){return l.a.createElement(H,{key:e.id,resumeData:e})}))),l.a.createElement("div",{className:"mt-30"}),l.a.createElement(U,{title:"Educational Qualifications",icon:"book"}),l.a.createElement("div",{className:"mi-resume-wrapper"},E.map((function(e){return l.a.createElement(H,{key:e.id,resumeData:e})}))))))};var R=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],i=a[1];return t?document.body.classList.add("light"):document.body.classList.remove("light"),l.a.createElement(o.a,null,l.a.createElement("div",{className:"light-mode"},l.a.createElement("span",{className:"icon"},l.a.createElement(s.a,null)),l.a.createElement("button",{className:t?"light-mode-switch active":"light-mode-switch",onClick:function(){t?(i(!1),document.body.classList.remove("light")):(i(!0),document.body.classList.add("light"))}})),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/mysite",exact:!0},l.a.createElement(T,{lightMode:t})),l.a.createElement(m.a,{path:"/about",component:C}),l.a.createElement(m.a,{path:"/resume",component:J}),l.a.createElement(m.a,{path:"/contact",component:M}),l.a.createElement(m.a,{path:"*",component:F})))},W=new(t(96))(t(4)),K={name:"Jay Culligan",aboutContent:"I am a Data Scientist. I can provide actionable insights through rigorous statistical analysis and experimentation. I also make end-to-end machine learning pipelines and create insightful dashbaords.",age:33,phone:"",nationality:"American",language:"English",email:"jculligan@gmail.com",address:"San Francisco, California, USA",freelanceStatus:"",socialLinks:{facebook:"",twitter:"",pinterest:"",behance:"",linkedin:"https://www.linkedin.com/in/jay-culligan/",dribbble:"",github:"https://github.com"},brandImage:"/images/brand-image.jpg",aboutImage:"/images/about-image.jpg",aboutImageLg:"/images/about-image-lg.jpg",cvfile:"/files/JayCulligan_Resume.pdf"},V=[{title:"Machine Learning",icon:"layers",details:"Enhancing product development by implementing end-to-end machine learning pipelines. Machine learning is a whole cycle that involves configuring ingestion, data processing, model traing, deployment, and upkeep. ."},{title:"Analytics",icon:"activity",details:"Generating actionable insights through statistical analysis and experimental design. Experience producing actionable insights in industry "},{title:"Visualization",icon:"layout",details:"Creating faster insights through simple, intuitive figures and charts. Developing dashbaords and other visualizations using Kibana, React, seaborn, matplotlib, and plotly"}],Y=[{id:1,content:"He tries his best.",author:{name:"Mom",designation:"Life Giver"}},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",author:{name:"Susan Yost",designation:"Client"}},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",author:{name:"Irving Feeney",designation:"Fiverr Client"}}],Q=[{title:"Python",value:95},{title:"SQL",value:90},{title:"Java",value:70},{title:"JavaScript",value:60}],$={workingExperience:[{id:1,year:"Jan 2018 - Present",position:"Data Scientist",company:"Cequence Security",details:"\u2022 Increased malicious botnet detection for Cequence\u2019s Bot Mitigation SaaS Platform by an average of 20%, using a range of rules and machine learning pipelines on HTTP request data.",details2:"\u2022 Lead the response to multiple web application attacks, working closely with external engineering and security teams - increasing Cequence\u2019s CQ-AI consultancy and threat reporting services annual revenue by $600K+.",details3:"\u2022 Created a range of Kibana dashboards and automated visualizations for internal threat monitoring, system health, and external weekly threat reports."},{id:2,year:"Sep 2016 - Dec 2018",position:"Data Science Fellow",company:"Insight Data Science",details:"\u2022 Developed Plutarch, a web-app that uses natural language processing to provide personalized history podcast recommendations.",details2:"\u2022 Built a pipeline using Word2Vec to find content based on semantic similarity to user-inputted text.",details3:""},{id:3,year:"Nov 2017 - Aug 2018",position:"Postdoctoral Scholar",company:"Okinawa Institute of Science and Technology",details:"\u2022 Applied neural network classifiers with Keras and Tensorflow to investigate the color-changing capabilities of cuttlefish.",details2:"\u2022 Used Generative Adversarial Networks (GANs) to model camouflage adaptation to diverse environments based on predator visual capabilities.",details3:""},{id:4,year:"Sep 2013 - Oct 2017",position:"Postgraduate Researcher",company:"University of Sussex",details:"\u2022 Conducted a range of experiments using digital image analysis, inferential statistics, as well as, unsupervised and supervised models to investigate the visual and rapid camouflage capabilities of cephalopod species.",details2:"\u2022 Used logistic regression classification on Gabor filter outputs of cephalopod images, tuned to predator visual capabilities, to support theories on disruptive camouflage.",details3:"\u2022 Applied Gaussian Mixture Models (GMMs) with Principal Components Analysis (PCA) on scored images of cephalopod camouflage patterns to suggest cephalopod patterning is continuous, not discrete."}],educationExperience:[{id:1,year:"2013 - 2017",graduation:"Biology PhD",university:"University of Sussex - Brighton, East Sussex, UK",details:"",details2:"",details3:""},{id:2,year:"2009 - 2013",graduation:"Biology Bachelors",university:"Indiana University - Bloomington, Indiana, USA",details:"",details2:"",details3:""}]},X={phoneNumbers:[""],emailAddress:["jculligan@gmail.com"],address:"San Francisco, California, USA"};W.onGet("/api/information").reply((function(e){return[200,K]})),W.onGet("/api/services").reply((function(e){return[200,V]})),W.onGet("/api/reviews").reply((function(e){return[200,Y]})),W.onGet("/api/skills").reply((function(e){return[200,Q]})),W.onGet("/api/experience").reply((function(e){return[200,$]})),W.onGet("/api/contactinfo").reply((function(e){return[200,X]})),W.onAny().passThrough();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},46:function(e,a,t){e.exports=t(109)},54:function(e,a,t){},55:function(e,a,t){}},[[46,1,2]]]);
//# sourceMappingURL=main.5e2dc93d.chunk.js.map