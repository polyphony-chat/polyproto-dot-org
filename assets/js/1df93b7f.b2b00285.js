"use strict";(self.webpackChunkpolyproto_docs=self.webpackChunkpolyproto_docs||[]).push([[4583],{2017:(s,e,t)=>{t.r(e),t.d(e,{default:()=>j});var l=t(5062),a=t(9266),i=t(6540),c=t(4848);const d=function(s){return(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",className:s.className,fill:"currentColor",viewBox:"0 0 256 256",children:(0,c.jsx)("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"})})};function n(){return(0,c.jsx)("section",{className:"bg-poly-black min-h-[70vh] lg:min-h-[75vh] md:h-[70vh] py-10 px-4 md:py-14 overflow-x-hidden",children:(0,c.jsx)("div",{className:"bg-poly-black grid grid-cols-10 h-full max-w-7xl mx-auto md:px-0 lg:grid-cols-12",children:(0,c.jsx)("div",{className:"col-start-1 col-span-10 md:col-span-12",children:(0,c.jsxs)("div",{className:"grid grid-cols-12 fade-in md:py-0",children:[(0,c.jsxs)("div",{className:"col-start-1 col-end-13 md:col-span-8 fade-in-left",children:[(0,c.jsxs)("h3",{className:"text-center text-poly-green-1 text-lg md:text-2xl md:text-left xl:text-3xl fade-in-subtitle",children:["A Refreshingly simple ",(0,c.jsx)("br",{}),"decentralised chat plataform"]}),(0,c.jsx)("h2",{className:"text-white text-center text-[2.70rem] font-bold md:text-left md:text-[4.1rem] lg:text-[5.5rem] xl:text-[7rem]",children:"Transforming"})]}),(0,c.jsxs)("div",{className:"col-start-1 col-end-13 font-bold md:flex md:items-center md:col-start-2 fade-in-right",children:[(0,c.jsx)("h2",{className:"text-center text-8xl bg-clip-text text-transparent bg-gradient-to-r from-[#afa5f4] to-[#8471fe] md:text-[4.1rem] lg:text-[5.5rem] xl:text-[7rem]",children:"online"}),(0,c.jsx)("h2",{className:"text-white text-center text-[2.70rem] md:text-[4.1rem] lg:text-[5.5rem] xl:text-[7rem]",children:"\xa0communication"})]}),(0,c.jsx)("div",{className:"col-start-3 col-span-8 md:col-start-5 md:col-span-4 pt-20 md:pt-16 xl:pt-10",children:(0,c.jsxs)(a.M,{href:"/docs/intro",className:"uppercase font-semibold flex justify-center items-center gap-5 md:text-xl xl:text-2xl anchor-shadow transition ease-in-out duration-300",children:["Get Started",(0,c.jsx)(d,{className:"size-5 md:size-6"})]})})]})})})})}var r=class extends i.Component{constructor(s){super(s),this.t=()=>this.i.current.offsetWidth,this.h=()=>this.i.current.offsetHeight,this.i=i.createRef(),this.state={path:""},this.l=0,this.o=0,this.p=0,this.u=this.u.bind(this)}m(){const s=[];for(let e=0;e<=Math.max(this.props.points,1);e++){const t=100,l=e/this.props.points*this.t(),a=(this.p+(e+e%this.props.points))*this.props.speed*t,i=Math.sin(a/t)*this.props.amplitude,c=Math.sin(a/t)*i+this.props.height;s.push({x:l,y:c})}return s}$(s){let e=`M ${s[0].x} ${s[0].y}`;const t={x:(s[1].x-s[0].x)/2,y:s[1].y-s[0].y+s[0].y+(s[1].y-s[0].y)},l=(s,e)=>` C ${s.x} ${s.y} ${s.x} ${s.y} ${e.x} ${e.y}`;e+=l(t,s[1]);let a=t;for(let i=1;i<s.length-1;i++)a={x:s[i].x-a.x+s[i].x,y:s[i].y-a.y+s[i].y},e+=l(a,s[i+1]);return e+=` L ${this.t()} ${this.h()}`,e+=` L 0 ${this.h()} Z`,e}v(){this.setState({path:this.$(this.m())})}M(){if(!this.props.paused){const s=new Date;this.o+=s-this.l,this.l=s}this.p=this.o*Math.PI/1e3,this.v()}u(){this.M(),this._&&this.D()}D(){this._=window.requestAnimationFrame(this.u),this.l=new Date}componentDidMount(){this._||this.D()}componentWillUnmount(){window.cancelAnimationFrame(this._),this._=0}render(){const{style:s,className:e,fill:t,paused:l,children:a,id:c,svgId:d,svgPathId:n,d:r,ref:o,height:h,amplitude:x,speed:m,points:p,...g}=this.props;return i.createElement("div",{style:{width:"100%",display:"inline-block",...s},className:e,id:c,ref:this.i},i.createElement("svg",{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg",id:d},a,i.createElement("path",Object.assign({},{d:this.state.path,fill:t,id:n},g))))}};const o={fill:"#fff",paused:!1,height:20,amplitude:20,speed:.15,points:3},h=s=>{let{options:e,...t}=s;return i.createElement(r,Object.assign({},o,e,t))};function x(){return(0,c.jsxs)("section",{className:"bg-poly-black",children:[(0,c.jsx)("div",{className:"-mb-4 hidden lg:block",children:(0,c.jsx)(h,{fill:"#f5f5f5",className:"",paused:!1,options:{height:40,amplitude:60,speed:.2,points:8}})}),(0,c.jsx)("div",{className:"-mb-4 lg:hidden",children:(0,c.jsx)(h,{fill:"#f5f5f5",className:"",paused:!1,options:{height:40,amplitude:60,speed:.2,points:3}})}),(0,c.jsx)("div",{className:"bg-poly-white min-h-[60vh] w-full relative",children:(0,c.jsxs)("div",{className:"bg-poly-white grid grid-cols-10 md:grid-cols-12 h-full px-4 xl:px-0 py-10 md:py-20 max-w-7xl mx-auto",children:[(0,c.jsxs)("div",{className:"md:col-start-2 col-span-10 lg:col-span-5",children:[(0,c.jsxs)("div",{className:"title-container",children:[(0,c.jsxs)("h2",{className:"md:text-6xl lg:text-7xl lg:inline hidden font-bold text-poly-indigo-1 title-shadow w-[700px]",children:["What"," ",(0,c.jsx)("span",{className:"md:text-6xl lg:text-7xl lg:inline md:inline hidden font-bold text-poly-indigo-1 w-auto",children:"Polyproto"})," ","is ",(0,c.jsx)("br",{})," all about?"]}),(0,c.jsxs)("h2",{className:"text-4xl md:text-5xl font-bold text-poly-black",children:["What"," ",(0,c.jsx)("span",{className:"text-4xl md:text-5xl font-bold text-poly-indigo-1 inline-block w-auto title-main",children:"Polyproto"})," ","is all about?"]})]}),(0,c.jsx)("div",{className:"mt-10 md:col-start-2 col-span-10 lg:mt-0 lg:col-start-7 lg:col-span-6 lg:hidden",children:(0,c.jsx)("img",{className:"w-full",src:"img/Capa_1.png",alt:""})}),(0,c.jsx)("p",{className:"text-poly-black text-lg mt-10",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid repudiandae deleniti placeat reiciendis quasi asperiores quia aspernatur esse corporis obcaecati, at repellat reprehenderit natus dolores ea quas sequi facilis."}),(0,c.jsx)("div",{className:"flex items-center justify-center lg:justify-start",children:(0,c.jsx)(a.M,{href:"/docs/intro",className:"w-72 mt-10 border-black text-xl",children:"see more"})})]}),(0,c.jsx)("div",{className:"mt-20 md:col-start-2 col-span-10 lg:mt-0 lg:col-start-7 lg:col-span-6 hidden lg:grid",children:(0,c.jsx)("div",{className:"flex items-center",children:(0,c.jsx)("img",{className:"w-full",src:"img/Capa_1.png",alt:""})})})]})})]})}function m(){return(0,c.jsxs)("section",{className:"bg-poly-white",children:[(0,c.jsx)("div",{className:"-mb-4 hidden lg:block",children:(0,c.jsx)(h,{fill:"#e1f852",paused:!1,options:{height:40,amplitude:60,speed:.2,points:10}})}),(0,c.jsx)("div",{className:"-mb-4 lg:hidden",children:(0,c.jsx)(h,{fill:"#e1f852",paused:!1,options:{height:100,amplitude:30,speed:.2,points:5}})}),(0,c.jsxs)("div",{className:"bg-poly-green-2 h-[50vh] w-full",children:[(0,c.jsx)("div",{className:"bg-poly-green-2 grid grid-cols-10 md:grid-cols-12 h-full max-w-7xl px-4 mx-auto place-items-center",children:(0,c.jsxs)("div",{className:"col-start-1 col-span-10 md:col-start-3 md:col-span-8",children:[(0,c.jsx)("h2",{className:"text-4xl md:text-5xl font-bold text-poly-black text-center",children:"Network of Creators"}),(0,c.jsx)("h2",{className:"text-2xl md:text-4xl text-poly-black pt-2 md:text-center",children:"Contributions are always welcome!"}),(0,c.jsxs)("div",{className:"flex flex-col items-end mt-10 md:gap-8 md:flex-row md:justify-between",children:[(0,c.jsxs)("p",{className:"text-poly-black text-lg text-right",children:["Develops"," ",(0,c.jsx)("span",{className:"text-poly-black font-bold",children:"for or with Polyproto."})]}),(0,c.jsx)("div",{className:"flex border-b border-poly-black w-44 md:w-auto",children:(0,c.jsxs)("a",{target:"_blank",className:"text-poly-black text-lg flex items-center gap-3 md:text-xl hover:no-underline hover:text-poly-black",href:"https://github.com/polyphony-chat/polyproto-rs",children:[(0,c.jsx)(d,{className:"size-5"}),"View on GitHub"]})})]})]})}),(0,c.jsx)(h,{fill:"#e1f852",paused:!1,className:"rotate-180 -mt-1",options:{height:100,amplitude:30,speed:.2,points:4}})]})]})}function p(){return(0,c.jsx)("section",{className:"bg-poly-white min-h-[50vh] lg:max-h-[80vh] w-full pb-10 pt-20 md:pt-0",children:(0,c.jsx)("div",{className:"bg-poly-white grid grid-cols-10 md:grid-cols-12 h-full px-4 max-w-7xl mx-auto",children:(0,c.jsxs)("div",{className:"col-start-1 col-span-10 md:col-span-12 py-10",children:[(0,c.jsx)("div",{className:"grid grid-cols-4 md:grid-cols-12",children:(0,c.jsx)("div",{className:"col-start-1 col-span-10 md:col-start-3 md:col-span-8 md:pt-20",children:(0,c.jsx)("h2",{className:"text-4xl md:text-5xl font-bold text-center text-poly-black",children:"Because Polyproto is different"})})}),(0,c.jsxs)("div",{className:"grid grid-col-3 h-[70%] md:pt-16",children:[(0,c.jsx)("div",{className:"md:col-start-1 md:col-span-6 md:border-r md:border-zinc-300 h-96 md:mr-10",children:(0,c.jsxs)("div",{className:"flex flex-col justify-end h-full",children:[(0,c.jsx)("div",{className:"flex md:justify-start",children:(0,c.jsx)("svg",{id:"Capa_2","data-name":"Capa 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200.12 212.54",className:"w-24 md:w-32",children:(0,c.jsx)("g",{id:"Capa_1-2","data-name":"Capa 1",children:(0,c.jsxs)("g",{children:[(0,c.jsxs)("g",{children:[(0,c.jsx)("rect",{className:"cls-2",x:"2.16",y:"2.11",width:"196.26",height:"208.61",rx:"12",ry:"12",transform:"translate(200.57 212.84) rotate(180)"}),(0,c.jsx)("path",{d:"M14.16,210.53c45.18.09,90.44-1.15,135.62-1.51,7.97-.02,28.74-.1,36.94-.09,3.51-.06,6.88-2.12,8.63-5.18.89-1.52,1.33-3.27,1.37-5.03-.1-2.18.61-51.91.59-55.48.55-40.47.64-82.9.25-123.29-.15-3.9.54-8.09-1.72-11.5-1.96-3.24-5.65-5.27-9.42-5.23-55.95.66-116.43.92-172.55,1.05-5.16.05-9.66,4.69-9.57,9.86,0,49.69-.71,104.18-1.59,154.12-.15,8.22-.17,16.44-.26,24.66.06,4.01-.64,8.33,1.65,11.88,2.05,3.5,6,5.73,10.05,5.74h0ZM14.16,210.93c-6.41.1-12.18-5.42-12.25-11.85,0,0-.05-6.17-.05-6.17C1.26,134.46-.16,72.45.02,14.13-.09,6.72,6.29.06,13.74,0c56.3.09,116.52.33,172.67,1.02,4.49.04,8.85,2.52,11.09,6.41,2.41,3.74,1.74,8.32,1.77,12.51-.36,40.37-.33,82.84.25,123.29.04,3.65.61,53.05.59,55.48,0,2.34-.59,4.7-1.75,6.75-2.27,4.13-6.8,6.93-11.55,7.02-11.95.14-25.07-.05-37.04-.06-45.19-.36-90.44-1.59-135.62-1.51h0Z"})]}),(0,c.jsx)("rect",{className:"cls-3",x:"38.74",y:"53.44",width:"119.8",height:"44.21"}),(0,c.jsx)("path",{d:"M147.86,53.43c-27.24.89-54.49,1.13-81.73,1.2-9.08-.01-18.16-.04-27.24-.23l1.12-1.12c-.22,13.14-.9,31.58-.64,44.54,0,0-.48-.48-.48-.48,4.97-.04,9.93-.11,14.9-.22,34.68-.78,69.6-1.22,104.27-.61,0,0-1.31,1.31-1.31,1.31.04-5.56.3-16.72.44-22.27.17-7.42.4-14.85.72-22.27,0,0,.3,0,.3,0,.5,10.71.71,22.62.99,33.4.04.68.16,12.07.19,12.42-10.37.19-20.75.29-31.12.32-29.65.08-59.71-.66-89.38-1.13,0,0-.48,0-.48,0v-.47c.07-12.89-.24-31.47-.64-44.54,0,0-.03-1.1-.03-1.1l1.15-.02c27.24-.46,54.49-.15,81.73.28,9.08.17,18.16.39,27.24.69,0,0,0,.3,0,.3h0Z"}),(0,c.jsx)("rect",{x:"124.44",y:"72.45",width:"10.73",height:"10.73",rx:"5.37",ry:"5.37"}),(0,c.jsx)("rect",{className:"cls-3",x:"38.37",y:"115.09",width:"119.8",height:"44.21"}),(0,c.jsx)("path",{d:"M147.5,115.08c-27.24.89-54.49,1.13-81.73,1.2-9.08-.01-18.16-.04-27.24-.23l1.12-1.12c-.22,13.14-.9,31.58-.64,44.54,0,0-.48-.48-.48-.48,4.97-.04,9.93-.11,14.9-.22,34.68-.78,69.6-1.22,104.27-.61,0,0-1.31,1.31-1.31,1.31.04-5.56.3-16.72.44-22.27.17-7.42.4-14.85.72-22.27,0,0,.3,0,.3,0,.5,10.71.71,22.62.99,33.4.04.68.16,12.07.19,12.42-10.37.19-20.75.29-31.12.32-29.65.08-59.71-.66-89.38-1.13,0,0-.48,0-.48,0v-.47c.07-12.89-.24-31.47-.64-44.54,0,0-.03-1.1-.03-1.1l1.15-.02c27.24-.46,54.49-.15,81.73.28,9.08.17,18.16.39,27.24.69,0,0,0,.3,0,.3h0Z"}),(0,c.jsx)("rect",{x:"124.08",y:"134.1",width:"10.73",height:"10.73",rx:"5.37",ry:"5.37"}),(0,c.jsx)("path",{className:"cls-1",d:"M5.5,45.03s-.18-27.77,23.94-29.49,51.11-6.79,50.33-7.81c-1.58-2.08-68.89-3.98-72.02,1.05-2.33,3.76-2.26,36.26-2.26,36.26Z"}),(0,c.jsx)("path",{className:"cls-1",d:"M194.89,168.96s.18,27.77-23.94,29.49-51.11,6.79-50.33,7.81c1.58,2.08,68.89,3.98,72.02-1.05,2.33-3.76,2.26-36.26,2.26-36.26Z"})]})})})}),(0,c.jsxs)("h2",{className:"text-poly-black text-xl font-bold pt-10",children:[(0,c.jsx)("span",{className:"text-poly-black",children:"Your Digital Home,"}),(0,c.jsx)("span",{className:"text-poly-indigo-1",children:" Always With You"})]}),(0,c.jsx)("p",{className:"text-poly-black text-lg pt-4 md:pt-6 xl:w-96 md:max-w-96 md:pr-8",children:"Allows you to change your home server at any point in time while making sure that your data comes with you"})]})}),(0,c.jsx)("div",{className:"md:col-start-7 md:col-span-6 h-96",children:(0,c.jsxs)("div",{className:"flex flex-col justify-end h-full",children:[(0,c.jsx)("div",{className:"flex  md:justify-start",children:(0,c.jsx)("svg",{id:"Capa_2","data-name":"Capa 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200.12 212.54",className:"w-24 md:w-32",children:(0,c.jsx)("g",{id:"Capa_1-2","data-name":"Capa 1",children:(0,c.jsxs)("g",{children:[(0,c.jsxs)("g",{children:[(0,c.jsx)("rect",{className:"cls-2",x:"2.16",y:"2.11",width:"196.26",height:"208.61",rx:"12",ry:"12",transform:"translate(200.57 212.84) rotate(180)"}),(0,c.jsx)("path",{d:"M14.16,210.53c45.18.09,90.44-1.15,135.62-1.51,7.97-.02,28.74-.1,36.94-.09,3.51-.06,6.88-2.12,8.63-5.18.89-1.52,1.33-3.27,1.37-5.03-.1-2.18.61-51.91.59-55.48.55-40.47.64-82.9.25-123.29-.15-3.9.54-8.09-1.72-11.5-1.96-3.24-5.65-5.27-9.42-5.23-55.95.66-116.43.92-172.55,1.05-5.16.05-9.66,4.69-9.57,9.86,0,49.69-.71,104.18-1.59,154.12-.15,8.22-.17,16.44-.26,24.66.06,4.01-.64,8.33,1.65,11.88,2.05,3.5,6,5.73,10.05,5.74h0ZM14.16,210.93c-6.41.1-12.18-5.42-12.25-11.85,0,0-.05-6.17-.05-6.17C1.26,134.46-.16,72.45.02,14.13-.09,6.72,6.29.06,13.74,0c56.3.09,116.52.33,172.67,1.02,4.49.04,8.85,2.52,11.09,6.41,2.41,3.74,1.74,8.32,1.77,12.51-.36,40.37-.33,82.84.25,123.29.04,3.65.61,53.05.59,55.48,0,2.34-.59,4.7-1.75,6.75-2.27,4.13-6.8,6.93-11.55,7.02-11.95.14-25.07-.05-37.04-.06-45.19-.36-90.44-1.59-135.62-1.51h0Z"})]}),(0,c.jsx)("path",{className:"cls-1",d:"M5.5,45.03s-.18-27.77,23.94-29.49,51.11-6.79,50.33-7.81c-1.58-2.08-68.89-3.98-72.02,1.05-2.33,3.76-2.26,36.26-2.26,36.26Z"}),(0,c.jsx)("path",{className:"cls-1",d:"M194.89,168.96s.18,27.77-23.94,29.49c-24.12,1.72-51.11,6.79-50.33,7.81,1.58,2.08,68.89,3.98,72.02-1.05,2.33-3.76,2.26-36.26,2.26-36.26Z"}),(0,c.jsxs)("g",{children:[(0,c.jsxs)("g",{children:[(0,c.jsx)("path",{className:"cls-3",d:"M160.75,166.06c0-.96-.32-87.84-.32-87.84l-93.29.32.32,67.32s69.24-.32,69.24.64,24.04,19.55,24.04,19.55Z"}),(0,c.jsx)("path",{d:"M160.68,165.92c-.65-25.7-1.78-62.37-1.52-87.69,0,0,1.27,1.26,1.27,1.26-30.25-.66-63.04-.88-93.29.02,0,0,.96-.97.96-.97.14,5.61.27,11.22.35,16.83.17,8.4.36,25.26.46,33.66.06,5.61.16,11.22.17,16.83l-1.64-1.62c16.29-.11,33.95.03,50.17.39,6.41.23,12.86.07,19.25.89.34.13.63.26.77.79.04.39.02.09.03.15.02-.1-.07-.32-.12-.37,4.24,4.22,9.12,7.91,13.64,11.83,2.44,2.03,6.62,5.5,9.03,7.52,0,0,.3.25.3.25l.15.13.08.06s-.07-.01-.09.05h0ZM160.82,166.19c-.13.01-.23-.06-.32-.13,0,0-.16-.11-.16-.11l-.32-.23c-.36-.25-1.52-1.1-1.91-1.38-1.54-1.12-5.97-4.39-7.58-5.58-4.87-3.73-9.96-7.25-14.45-11.44-.16-.17-.3-.47-.34-.73,0,.05-.03-.27,0,.11.07.4.36.59.52.66-.68-.07-2.05-.11-3.04-.13-20.87-.16-46.56.31-67.4.28-.04-22.29.02-46.66.33-68.95,0,0,.02-.98.02-.98h.95c30.7.72,63.85.24,94.54-.64.6,26.13-.47,62.79-.86,89.27h0Z"})]}),(0,c.jsxs)("g",{children:[(0,c.jsx)("path",{className:"cls-4",d:"M39.54,143.83c0-.96.32-87.84.32-87.84l93.29.32-.32,67.32s-69.24-.32-69.24.64-24.04,19.55-24.04,19.55Z"}),(0,c.jsx)("path",{d:"M39.47,143.97c-.37-26.6-1.45-63.01-.86-89.27,30.68.89,63.84,1.35,94.54.65,0,0,.95-.01.95-.01l.02.98c.31,22.3.37,46.66.33,68.95-20.83.03-46.54-.44-67.4-.28-.98.02-2.37.07-3.04.13.16-.07.45-.26.52-.66.03-.38,0-.06,0-.11-.03.26-.17.56-.34.73-4.49,4.2-9.58,7.71-14.45,11.44-1.55,1.14-6.03,4.47-7.58,5.58,0,0-1.27.92-1.27.92l-.64.46-.32.23-.16.11-.08.06s-.18.09-.24.07h0ZM39.6,143.69c-.01-.06-.11-.04-.09-.05l.08-.06.15-.13.3-.25c2.41-2.02,6.57-5.47,9.03-7.52,4.53-3.92,9.41-7.61,13.64-11.83-.04.04-.14.27-.12.37.01-.06-.02.24.03-.15.14-.53.43-.67.77-.79,6.39-.82,12.84-.66,19.25-.89,16.2-.36,33.91-.49,50.17-.39,0,0-1.64,1.62-1.64,1.62.01-5.61.12-11.22.17-16.83.06-8.38.34-25.28.46-33.66.08-5.61.21-11.22.35-16.83l.96.97c-30.26-.89-63.03-.69-93.29-.02,0,0,1.27-1.26,1.27-1.26.26,25.18-.9,62.13-1.52,87.69h0Z"})]}),(0,c.jsx)("path",{d:"M58.72,78.03c4.78-1.08,9.62-1.46,14.48-1.23,2.42.18,4.83.66,7.25.73,2.41.08,4.83-.09,7.24-.4,4.81-.63,9.64-.88,14.48-.9,4.83.11,9.66.43,14.5,1.38v.31c-7.22,1.47-14.43,1.83-21.72,1.45-4.82-.07-9.66-1.13-14.49-.85-4.81.46-9.62,1.35-14.48.8-2.42-.17-4.83-.41-7.25-.98v-.31h0Z"}),(0,c.jsx)("path",{d:"M117.92,99.18c-5.1,1.05-10.25,1.39-15.42,1.12-2.57-.2-5.14-.69-7.71-.78-2.57-.1-5.14.06-7.71.34-5.13.59-10.27.81-15.42.8-5.14-.15-10.28-.5-15.42-1.48v-.31c7.7-1.42,15.38-1.72,23.14-1.29,5.14.11,10.28,1.2,15.42.95,5.13-.42,10.25-1.28,15.42-.69,2.57.19,5.14.45,7.71,1.03v.31h0Z"})]})]})})})}),(0,c.jsxs)("h2",{className:" text-poly-black text-xl font-bold pt-10",children:[(0,c.jsx)("span",{className:"text-poly-indigo-1",children:"Tamper-Proof "}),"Messages"]}),(0,c.jsx)("p",{className:"text-poly-black text-lg pt-6 lg:w-96 max-w- h-[108px]",children:"Produces tamper-resistant data/messages through the use of signatures"})]})})]})]})})})}function g(){return(0,c.jsxs)("section",{className:"bg-poly-white",children:[(0,c.jsx)("div",{className:"hidden lg:block",children:(0,c.jsx)(h,{fill:"#000",paused:!1,className:"-mb-2",options:{height:100,amplitude:30,speed:.2,points:12}})}),(0,c.jsx)("div",{className:"lg:hidden",children:(0,c.jsx)(h,{fill:"#000",paused:!1,className:"-mb-2",options:{height:100,amplitude:30,speed:.15,points:7}})}),(0,c.jsx)("div",{className:"h-[50vh] w-full bg-poly-black",children:(0,c.jsx)("div",{className:"bg-poly-black grid grid-cols-10 md:grid-cols-12 h-full max-w-7xl mx-auto px-4 place-items-center",children:(0,c.jsxs)("div",{className:"col-start-1 col-span-10 md:col-start-3 md:col-span-8 h-40 flex flex-col gap-10 justify-center items-center",children:[(0,c.jsxs)("h2",{className:"text-center text-4xl md:text-5xl font-bold text-poly-white",children:["Ready to"," ",(0,c.jsx)("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-[#b6acff] to-[#9e8efe]",children:"get started"}),"?"]}),(0,c.jsx)(a.M,{href:"/docs/intro",className:"uppercase font-semibold  md:!px-10 bg-poly-green-2 border-poly-green-2 !text-poly-black text-xl md:text-2xl w-[70%]",children:"Get Started"})]})})}),(0,c.jsxs)("div",{className:"bg-poly-black -mt-1 w-full",children:[(0,c.jsx)("div",{className:"hidden lg:block",children:(0,c.jsx)(h,{fill:"#f5f5f5",paused:!1,className:"-mb-2",options:{height:100,amplitude:30,speed:.2,points:14}})}),(0,c.jsx)("div",{className:"lg:hidden",children:(0,c.jsx)(h,{fill:"#f5f5f5",paused:!1,className:"-mb-2",options:{height:100,amplitude:30,speed:.15,points:5}})})]})]})}function j(){return(0,c.jsx)(l.A,{title:"Transforming Online Communication",description:"Description will go into a meta tag in <head />",children:(0,c.jsxs)("main",{children:[(0,c.jsx)(n,{}),(0,c.jsx)(x,{}),(0,c.jsx)(m,{}),(0,c.jsx)(p,{}),(0,c.jsx)(g,{})]})})}}}]);