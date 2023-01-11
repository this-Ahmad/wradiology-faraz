var p7PM3over='_over';var p7PM3open='_down';var p7PM3indent='\u2007';var p7PM3ctl=[],p7PM3i=false,p7PM3a=false,p7PM3adv=[],p7PM3dy=(1000/100),p7PM3kf=false,p7PM3clk=false;function P7_PM3set(){var i,h,sh,hd,x,v,ie=P7_PM3getIEver();if(!document.getElementById||(ie>4&&ie<6)){return;}
sh='.p7PM3 ul div {position:absolute; display:none; height:0px; top:100%; z-index:999;}\n';sh+='.p7PM3 li.pmm3-title-bar div {position:relative; display:block; height:auto; top:auto;}\n';sh+='.pmm3-select-wrapper {display:none;}\n';sh+='@media only screen and (min-device-width:768px) and (max-device-width:1024px) {\n';sh+='body * {cursor: pointer;}\n}\n';sh+='.p7bpm3-spcr {width:100%; display:none;}\n';sh+='.p7pm3-fixed {position:fixed !important;}\n';sh+='.horiz.p7pm3-fixed {top:0; left:0; width:100%;}\n';sh+='.vert.p7pm3-fixed {top:100px; left:20px; width:240px;}\n';sh+='.p7PM3 {box-sizing:border-box; -moz-box-sizing:border-box;}\n';sh+='@media only screen and (min-width: 0px) and (max-width: 700px) {\n';sh+='.p7PM3.responsive {max-height: 700777px;}\n';sh+='.p7PM3.responsive ul a {max-height: 700777px;}\n';sh+='.p7PM3.responsive ul div {position:relative; overflow:hidden;margin-left:0 !important; margin-top:0 !important;}\n';sh+='.p7PM3 ul ul {\n-webkit-transform: none !important; -webkit-transition: none !important;';sh+='transform: none !important; transition: none !important;';sh+='opacity:100 !important;}\n';sh+='}\n';sh+='@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n';sh+='.p7PM3.responsive {max-height: 700777px;}\n';sh+='}\n';if(document.styleSheets){if(ie>4&&ie<7){sh+='.p7PM3 li {zoom: 1;}\n';}
h='\n<st'+'yle type="text/css">\n'+sh+'\n</s'+'tyle>';document.write(h);}
else{P7_PM3addSheet(sh);}}
P7_PM3set();function P7_PM3op(){if(!document.getElementById){return;}
p7PM3ctl[p7PM3ctl.length]=arguments;if(arguments[2]>5){P7_PM3setCSSanim(arguments);}}
function P7_PM3setCSSanim(op){var i,pf,prf,sh='';prf=P7_PM3getCSSPre();if(prf!='none'){if(op[2]==6){sh+='#'+op[0]+' ul ul {\n';sh+='-webkit-transition: -webkit-transform 300ms, opacity 300ms;\n';sh+='transition: transform 300ms, opacity 300ms;\n';sh+='-webkit-transform: scale(0);\n';sh+='transform: scale(0);\n';sh+='opacity: 0;\n}\n';sh+='#'+op[0]+' ul ul.sub-open {\n';sh+='-webkit-transform: scale(1);\n';sh+='transform: scale(1);\n';sh+='opacity: 1;\n}\n';}
else if(op[2]==7){sh+='#'+op[0]+' ul ul {\n';sh+='-webkit-transition: -webkit-transform 300ms, opacity 300ms;\n';sh+='transition: transform 300ms, opacity 300ms;\n';sh+='-webkit-transform: translateY(-100%) rotate(-120deg);\n';sh+='transform: translateY(-100%) rotate(-120deg);\n';sh+='opacity: 0;\n}\n';sh+='#'+op[0]+' ul ul.sub-open {\n';sh+='-webkit-transform: translateY(0px) rotate(0deg);\n';sh+='transform: translateY(0px) rotate(0deg);\n';sh+='opacity: 1;\n}\n';}
else if(op[2]==8){sh+='#'+op[0]+' ul ul {\n';sh+='-webkit-transition: -webkit-transform 300ms, opacity 300ms;\n';sh+='transition: transform 300ms, opacity 300ms;\n';sh+='-webkit-transform: scale(0,1);\n';sh+='transform: scale(0,1);\n';sh+='opacity: 0;\n}\n';sh+='#'+op[0]+' ul ul.sub-open {\n';sh+='-webkit-transform: scale(1,1);\n';sh+='transform: scale(1,1);\n';sh+='opacity: 1;\n}\n';}
else if(op[2]==9){sh+='#'+op[0]+' ul ul {\n';sh+='-webkit-transition: -webkit-transform 300ms, opacity 300ms;\n';sh+='transition: transform 300ms, opacity 300ms;\n';sh+='-webkit-transform: scale(1,0);\n';sh+='transform: scale(1,0);\n';sh+='opacity: 0;\n}\n';sh+='#'+op[0]+' ul ul.sub-open {\n';sh+='-webkit-transform: scale(1,1);\n';sh+='transform: scale(1,1);\n';sh+='opacity: 1;\n}\n';}
P7_PM3addSheet(sh);}}
function P7_PM3bb(){P7_PM3shutall();}
function P7_PM3addLoad(){var ie=P7_PM3getIEver();if(!document.getElementById||(ie>4&&ie<6)){return;}
if(window.addEventListener){window.addEventListener("load",P7_PM3init,false);window.addEventListener("unload",P7_PM3bb,false);window.addEventListener("resize",P7_PM3rsz,false);}
else if(window.attachEvent){document.write("<script id=p7ie_pm3 defer src=\"//:\"><\/script>");document.getElementById("p7ie_pm3").onreadystatechange=function(){if(this.readyState=="complete"){if(p7PM3ctl.length>0){P7_PM3init();}}};window.attachEvent("onload",P7_PM3init);window.attachEvent("onunload",P7_PM3bb);window.attachEvent("onresize",P7_PM3rsz);}}
P7_PM3addLoad();function P7_PM3init(){var i,j,jj,k,x,tB,tU,tD,tS,tA,taA,tBR,tBU,iM,cN,dv,pn,lv,ls,fs,d,sr,s1,s2,pp,cl,pf,wns;if(p7PM3i){return;}
p7PM3i=true;document.p7PM3preload=[];pf=P7_PM3getCSSPre();wns=false;for(jj=0;jj<p7PM3ctl.length;jj++){tB=document.getElementById(p7PM3ctl[jj][0]);if(tB){tB.p7opt=p7PM3ctl[jj];tU=tB.getElementsByTagName('UL');if(tU&&tU.length>1){for(i=tU.length-1;i>0;i--){pn=tU[i].parentNode;dv=document.createElement('div');dv.pm3d=true;dv.appendChild(tU[i]);pn.appendChild(dv);}}
P7_PM3remClass(tB,'p7PM3noscript');if(tB.p7opt[17]==1){dv=document.createElement('div');dv.setAttribute('id',tB.id.replace('_','spcr_'));dv.className=tB.className;P7_PM3setClass(dv,'p7bpm3-spcr');tB.parentNode.insertBefore(dv,tB.nextSibling);tB.pm3Spacer=dv;dv.pm3Menu=tB;if(!wns){wns=true;if(window.addEventListener){window.addEventListener('scroll',P7_PM3fixed,false);}
else if(window.attachEvent){window.attachEvent('onscroll',P7_PM3fixed);}}}
tB.pm3Duration=100;tB.pm3AnimType='quad';tB.pmm3DefLink=false;tB.pm3Shut=true;dv=P7_PM3isMobile();if(dv=='touch'){if(P7_PM3getStyle(tB,'maxHeight','max-height')!='700777px'){dv=false;}}
if(dv){tB.p7opt[15]=0;}
p7PM3clk=true;if(window.addEventListener){document.addEventListener("click",P7_PM3body,false);}
else if(window.attachEvent){window.attachEvent("click",P7_PM3body,false);}
if(tB.p7opt[2]>5){if(pf=='none'){tB.p7opt[2]=3;}}
tB.style.position='relative';tB.style.zIndex=tB.p7opt[14];tU=tB.getElementsByTagName('UL');tD=tU[0].getElementsByTagName('DIV');for(i=0;i<tD.length;i++){if(tD[i].pm3d){tD[i].setAttribute("id",tB.id+'d'+(i+2));tD[i].pm3State='closed';tD[i].pm3Menu=tB.id;}}
tB.pm3UL=tU[0];tB.pm3MouseTimer=null;tB.pm3Fixed=false;pp=tB;while(pp){if(P7_PM3getStyle(pp,'position','position')=='fixed'){tB.pm3Fixed=true;break;}
if(pp.nodeName=='BODY'){break;}
pp=pp.parentNode;}
tB.pm3ToolbarClosed=false;tBR=document.getElementById(tB.id.replace('_','tb_'));tBU=tU[0];if(tBR&&tBU){tBR.pm3Menu=tB.id;tBR.pm3UL=tBU;cl=tBR.className;if(cl&&cl!==''&&cl.indexOf('opened')>-1){tBU.pm3State='open';tBR.pm3State='open';P7_PM3setClass(tBU,'opened');}
else{P7_PM3remClass(tBR,'closed');P7_PM3remClass(tBU,'closed');tB.pm3ToolbarClosed=true;tBU.pm3State='closed';tBR.pm3State='closed';}
tBR.onclick=function(){var tBR=document.getElementById(this.pm3Menu.replace('_','tb_'));var tBU=this.pm3UL;if(tBU.pm3State=='open'){tBR.pm3State='closed';tBU.pm3State='closed';P7_PM3changeClass(tBR,'opened','closed');P7_PM3changeClass(tBU,'opened','closed');}
else{tBR.pm3State='open';tBU.pm3State='open';P7_PM3changeClass(tBR,'closed','opened');P7_PM3changeClass(tBU,'closed','opened');}};tA=tBR.getElementsByTagName('A');if(tA&&tA[0]){tA[0].onclick=function(){return false;};}}
d=1;for(i=0;i<tU.length;i++){tU[i].setAttribute("id",tB.id+'u'+(i+1));tU[i].pm3Menu=tB.id;tU[i].setAttribute('aria-hidden','true');lv=1;pp=tU[i].parentNode;while(pp){if(pp.id&&pp.id==tB.id){break;}
if(pp.tagName&&pp.tagName=="UL"){lv++;}
pp=pp.parentNode;}
tU[i].pm3Level=lv;P7_PM3setClass(tU[i],'level_'+lv);cN=tU[i].childNodes;fs=-1;ls=0;if(cN){for(j=0;j<cN.length;j++){if(cN[j].tagName&&cN[j].tagName=='LI'){ls++;cl=cN[j].getAttribute('class');if(cl&&cl!==''&&cl.indexOf('pmm3-title-bar')>-1){if(fs<0){P7_PM3setClass(cN[j],'pm3first');}
fs=j;cN[j].pm3Title=true;cN[j].onclick=function(){P7_PM3toggleTB(this.parentNode.id);};if(tB.p7opt[15]==1){cN[j].onmouseover=function(){var tU=this.parentNode;var tB=document.getElementById(tU.pm3Menu);if(tB.pm3MouseTimer){clearTimeout(tB.pm3MouseTimer);}
if(P7_PM3getStyle(tB,'maxHeight','max-height')=='700777px'){return;}
P7_PM3trigTB(tU.id);};}}
else{taA=cN[j].getElementsByTagName('A');if(taA&&taA[0]){tA=taA[0];}
else{continue;}
if(fs<0){P7_PM3setClass(tA,'pm3first');P7_PM3setClass(cN[j],'pm3first');}
fs=j;if(!tB.pm3FirstA){tB.pm3FirstA=tA;}
tA.setAttribute("id",tB.id+'a'+(d));d++;tA.pm3State='closed';tA.pm3Level=lv;tA.pm3ParentDiv=tU[i].parentNode.id;tA.pm3Menu=tB.id;tA.pm3Sub=false;if(i===0){P7_PM3setClass(cN[j],('root_'+ls));}
tA.onclick=function(){return P7_PM3click(this);};if(tB.p7opt[15]==1){tA.onmouseover=function(){var tB=document.getElementById(this.pm3Menu);if(tB.pm3MouseTimer){clearTimeout(tB.pm3MouseTimer);}
if(P7_PM3getStyle(this,'maxHeight','max-height')=='700777px'){return;}
P7_PM3trig(this.id);};}
tA.hasImg=false;iM=tA.getElementsByTagName("IMG");if(iM&&iM[0]){sr=iM[0].getAttribute("src");iM[0].pm3Swap=tB.p7opt[9];x=sr.lastIndexOf(".");s1=sr.substring(0,x)+p7PM3over+'.'+sr.substring(x+1);s2=sr.substring(0,x)+p7PM3open+'.'+sr.substring(x+1);if(iM[0].pm3Swap==1){iM[0].p7imgswap=[sr,s1,s1];P7_PM3preloader(s1);}
else if(iM[0].pm3Swap==2){iM[0].p7imgswap=[sr,s1,s2];P7_PM3preloader(s1,s2);}
else{iM[0].p7imgswap=[sr,sr,sr];}
iM[0].p7state='closed';iM[0].mark=false;iM[0].rollover=tB.p7opt[10];if(iM[0].pm3Swap>0){tA.hasImg=true;iM[0].onmouseover=function(){P7_PM3imovr(this);};iM[0].onmouseout=function(){P7_PM3imout(this);};tA.onfocus=function(){P7_PM3imovr(this.getElementsByTagName('IMG')[0]);};tA.onblur=function(){P7_PM3imout(this.getElementsByTagName('IMG')[0]);};}}
tS=cN[j].getElementsByTagName('UL');if(tS&&tS.length>0){tA.pm3Sub=tS[0].parentNode.id;tS[0].parentNode.pm3Trigger=tA;if(i===0){P7_PM3setClass(tA,('root_trig'));P7_PM3setClass(tA.parentNode,('root_trig'));}
P7_PM3setClass(tA,'trig_closed');P7_PM3setClass(tA.parentNode,'trig_closed');if(tB.p7opt[5]==1){P7_PM3setClass(tA,'trig_left');P7_PM3setClass(tA.parentNode,'trig_left');}
if(tB.p7opt[13]==1){P7_PM3setClass(tA,'trig_up');P7_PM3setClass(tA.parentNode,'trig_up');}}
else{P7_PM3setClass(tA,'pm3-link');P7_PM3setClass(tA.parentNode,'pm3-link');if(i===0){P7_PM3setClass(tA,('root_link'));P7_PM3setClass(tA.parentNode,('root_link'));}}}}}
if(fs>0){P7_PM3setClass(cN[fs],'pm3last');if(!cN[fs].pm3Title){P7_PM3setClass(tA,'pm3last');}}}}
cl=tB.getAttribute('class');if(cl&&cl.indexOf('select')>-1){ob=document.createElement('div');ob.setAttribute('id',tB.id.replace('_','sw_'));ob.setAttribute('class','pmm3-select-wrapper');tB.insertBefore(ob,tB.childNodes[0]);el=document.createElement('select');el.setAttribute('id',tB.id.replace('_','s_'));el.setAttribute('class','pmm3-select');el.pm3Div=tB.id;el.onchange=function(){var op=this.options[this.selectedIndex];op.pm3Link.click();};ob.appendChild(el);tB.pm3Select=el;P7_PM3buildSel(el,tB.pm3UL=tU[0]);}
if(tB.p7opt[15]==1){tB.onmouseout=function(evt){var k,rt,pp,tD,m=true;evt=(evt)?evt:((event)?event:null);if(P7_PM3getStyle(this,'maxHeight','max-height')=='700777px'){return;}
if(evt){rt=(evt.relatedTarget)?evt.relatedTarget:evt.toElement;if(rt){pp=rt.parentNode;while(pp){if(pp&&pp.id&&typeof(pp.id)=='string'&&pp.id.indexOf(this.id)===0){m=false;break;}
if(pp&&pp.tagName&&(pp.tagName=='BODY'||pp.tagName=='HTML')){break;}
pp=pp.parentNode;}}
if(m){if(this.pm3MouseTimer){clearTimeout(this.pm3MouseTimer);}
if(this.p7opt[8]==1){this.pm3MouseTimer=setTimeout("P7_PM3shut('"+this.id+"')",360);}
else{P7_PM3shut(this.id);}}}};}
if(tB.pm3ToolbarClosed){P7_PM3setClass(tBR,'closed');P7_PM3setClass(tBU,'closed');}
if(tB.p7opt[11]==1){P7_PM3currentMark(tB);}
P7_PM3setBC(tB.id);}}
p7PM3a=true;}
function P7_PM3preloader(){var i,x;for(i=0;i<arguments.length;i++){x=document.p7PM3preload.length;document.p7PM3preload[x]=new Image();document.p7PM3preload[x].src=arguments[i];}}
function P7_PM3imovr(im){var m=true;if(im.p7state=='open'&&im.rollover===0){m=false;}
if(m){im.src=im.p7imgswap[1];}}
function P7_PM3imout(im){if(im.p7state=='open'||im.mark){im.src=im.p7imgswap[2];}
else{im.src=im.p7imgswap[0];}}
function P7_PM3setBC(d){var i,j,k,tB,bC,tU,tA,wH,cl,m,a,ba,bli,im,tx,el,tgs,nd;tB=document.getElementById(d);bC=document.getElementById(d.replace('_','bc_'));wH=window.location.href;if(tB&&bC){tU=bC.getElementsByTagName('UL');if(tU&&tU[0]){tA=tU[0].getElementsByTagName('A');if(tA&&tA.length>0){for(i=0;i<tA.length;i++){cl=tA[i].getAttribute('class');if(cl&&cl!==''){if(cl.indexOf('placeholder')>-1){tU[0].removeChild(tA[i].parentNode);}}}}
tA=tB.getElementsByTagName('A');var aP=[];for(j=0;j<tA.length;j++){cl=tA[j].getAttribute('class');if(cl&&cl.indexOf('current_mark')>-1){aP[aP.length]=j;}}
for(k=0;k<aP.length;k++){m=false;a=tA[aP[k]];ba=document.createElement('a');bli=document.createElement('li');im=a.getElementsByTagName('IMG');if(im&&im[0]){tx=document.createTextNode(im[0].getAttribute('alt'));}
else{tx=document.createTextNode(a.textContent);}
if(!tx||tx===''){tx='Page '+(i+1);}
if(a.href!=wH&&a.href!=wH+'#'){if(a.href.toLowerCase().indexOf('javascript:')==-1){m=true;}}
if(m){ba.setAttribute('href',a.href);ba.appendChild(tx);bli.appendChild(ba);}
else{bli.appendChild(tx);}
tU[0].appendChild(bli);}
if(!aP||aP.length===0||(tB.pmm3DefLink&&tB.pmm3DefLink.href!=wH)){bli=document.createElement('li');cl=bC.getAttribute('class');nd=null;m=true;if(cl&&cl!==''){if(cl.indexOf('def-a')>-1){tgs=document.getElementsByTagName('A');}
else if(cl.indexOf('def-h1')>-1){tgs=document.getElementsByTagName('H1');}
else if(cl.indexOf('def-h2')>-1){tgs=document.getElementsByTagName('H2');}
else if(cl.indexOf('def-p')>-1){tgs=document.getElementsByTagName('P');}
else if(cl.indexOf('def-t')>-1){tgs=document.getElementsByTagName('TITLE');}
else{m=false;}
if(tgs&&tgs[0]){nd=tgs[0];}}
if(nd&&nd.textContent&&nd.textContent!==''){tx=document.createTextNode(nd.textContent);}
else{tx=document.createTextNode('Page');}
if(m){bli.appendChild(tx);tU[0].appendChild(bli);}}}}}
function P7_PM3fixed(){var i,tB;if(p7PM3ctl&&p7PM3ctl.length){for(i=0;i<p7PM3ctl.length;i++){tB=document.getElementById(p7PM3ctl[i][0]);if(tB&&tB.pm3Spacer){if(P7_PM3getStyle(tB.pm3FirstA,'maxHeight','max-height')=='700777px'){if(tB.pm3FixedOn){tB.pm3Spacer.style.display='none';P7_PM3remClass(tB,'p7pm3-fixed');tB.pm3FixedOn=false;}
continue;}
if(!tB.pm3FixedOn&&tB.getBoundingClientRect().top<0){tB.pm3Spacer.style.height=tB.offsetHeight+'px';tB.pm3Spacer.style.display='block';P7_PM3setClass(tB,'p7pm3-fixed');tB.pm3FixedOn=true;}
else if(tB.pm3FixedOn&&tB.pm3Spacer.getBoundingClientRect().top>=0){tB.pm3Spacer.style.display='none';P7_PM3remClass(tB,'p7pm3-fixed');tB.pm3FixedOn=false;}}}}}
function P7_PM3trig(d){var tB,a;a=document.getElementById(d);tB=document.getElementById(a.pm3Menu);if(tB.pm3MouseTimer){clearTimeout(tB.pm3MouseTimer);}
if(a.pm3Sub){if(tB.p7opt[8]==1){tB.pm3MouseTimer=setTimeout("P7_PM3open('"+a.id+"',null,2)",160);}
else{P7_PM3open(a.id,null,2);}}
else{if(tB.p7opt[8]==1){tB.pm3MouseTimer=setTimeout("P7_PM3toggle('"+a.id+"',null,2)",160);}
else{P7_PM3toggle(a.id,null,2);}}}
function P7_PM3trigTB(du){var tB,tU;tU=document.getElementById(du);tB=document.getElementById(tU.pm3Menu);if(tB.pm3MouseTimer){clearTimeout(tB.pm3MouseTimer);}
if(tB.p7opt[8]==1){tB.pm3MouseTimer=setTimeout("P7_PM3toggleTB('"+tU.id+"')",160);}
else{P7_PM3toggleTB(tU.id);}}
function P7_PM3click(a){var wH,tB,cnv=false,m=false;P7_PM3shutall(a.pm3Menu);wH=window.location.href;if(a.href!=wH&&a.href!=wH+'#'){if(a.href.toLowerCase().indexOf('javascript:')==-1){m=true;}}
tB=document.getElementById(a.pm3Menu);if(tB.pm3MouseTimer){clearTimeout(tB.pm3MouseTimer);}
if(P7_PM3getStyle(tB,'maxHeight','max-height')=='700777px'){cnv=true;}
if(m&&a.pm3Sub&&a.pm3State=='closed'){if(!tB.pm3Select){m=false;}}
if(a.pm3State=='closed'){P7_PM3open(a.id,null,1);}
else{P7_PM3close(a.id,null,1);}
if(m){P7_PM3shutall();}
return m;}
function P7_PM3open(d,bp,p){var i,a,tB,iM,op,sD,tU,mT,mL,cmb,pB;a=document.getElementById(d);if(a.pm3State=='open'){return;}
tB=document.getElementById(a.pm3Menu);if(!bp){P7_PM3toggle(a.id);}
op=tB.p7opt[2];if(P7_PM3getStyle(a,'maxHeight','max-height')=='700777px'){if(op!==0){op=99;}}
if(a.hasImg){iM=a.getElementsByTagName("IMG")[0];iM.p7state='open';iM.src=iM.p7imgswap[2];}
if(a.pm3Sub){sD=document.getElementById(a.pm3Sub);sD.pm3State='open';tB.pm3Shut=false;a.pm3State='open';P7_PM3changeClass(a,'trig_closed','trig_open');P7_PM3changeClass(a.parentNode,'trig_closed','trig_open');tU=sD.getElementsByTagName('UL')[0];tU.setAttribute('aria-hidden','false');sD.style.visibility='hidden';sD.style.height='auto';sD.style.display='block';mT=(a.parentNode.offsetHeight*-1)+tB.p7opt[3];mL=a.parentNode.offsetWidth+tB.p7opt[4];if(tB.p7opt[5]==1){mL=(tU.offsetWidth*-1)-tB.p7opt[4];}
if(tB.p7opt[1]==1&&a.pm3Level==1){mT=0;mL=0;if(tB.p7opt[7]==1){mL=((sD.offsetWidth-a.parentNode.offsetWidth)/2)*-1;}
else if(tB.p7opt[7]==2){mL=((sD.offsetWidth-a.parentNode.offsetWidth))*-1;}
if(tB.p7opt[16]==1){if(a.className.indexOf('pm3first')>-1){mL=0;}
else if(a.className.indexOf('pm3last')>-1){mL=(sD.offsetWidth-a.parentNode.offsetWidth)*-1;}}}
if(tB.p7opt[13]==1){mT-=sD.offsetHeight;if(tB.p7opt[1]==1&&a.pm3Level==1){mT-=a.parentNode.offsetHeight;}}
if(tB.p7opt[6]>0&&sD.getBoundingClientRect){var adjL=0,adjT=0,vL,vR,pL,pR,pT;var ws=P7_PM3getWinScroll();var wn=P7_PM3getWinDims();pL=mL+a.parentNode.getBoundingClientRect().left+ws[1];pR=pL+sD.offsetWidth;if(tB.p7opt[6]==2){vL=tB.getBoundingClientRect().left+ws[1];vR=vL+tB.offsetWidth;if(pR>vR){if(tB.p7opt[1]==1&&a.pm3Level==1){mL=mL-(pR-vR);}
else{mL=(tU.offsetWidth*-1)-tB.p7opt[4];}}
pL=mL+a.parentNode.getBoundingClientRect().left+ws[1];if(pL<vL){if(tB.p7opt[5]==1&&(tB.p7opt[1]!=1||(tB.p7opt[1]==1&&a.pm3Level!=1))){mL=a.parentNode.offsetWidth+tB.p7opt[4];}
else{mL=mL+(vL-pL);}}}
if(tB.p7opt[6]>0){pL=mL+a.parentNode.getBoundingClientRect().left+ws[1];pR=pL+sD.offsetWidth;vL=ws[1];vR=wn[1];if(pR>vR){if(tB.p7opt[1]==1&&a.pm3Level==1){mL=mL-(pR-vR);}
else{mL=(tU.offsetWidth*-1)-tB.p7opt[4];}}
pL=mL+a.parentNode.getBoundingClientRect().left+ws[1];if(pL<vL){if(tB.p7opt[5]==1&&(tB.p7opt[1]!=1||(tB.p7opt[1]==1&&a.pm3Level!=1))){mL=a.parentNode.offsetWidth+tB.p7opt[4];}
else{mL=mL+(vL-pL);}}
pB=mT+a.parentNode.getBoundingClientRect().bottom+sD.offsetHeight-ws[0];if(pB>wn[0]){mT=mT-(pB-wn[0]+2);}
pT=mT+a.parentNode.getBoundingClientRect().bottom+ws[0];if(pT<0){mT=mT-pT+ws[0];}}}
sD.style.marginTop=mT+'px';if(tB.p7opt[4]===0){if(mL==a.parentNode.offsetWidth){sD.style.marginLeft='100%';}
else if(mL==a.parentNode.offsetWidth*-1){sD.style.marginLeft='-100%';}
else{sD.style.marginLeft=mL+'px';}}
else{sD.style.marginLeft=mL+'px';}
tU.p7animDuration=tB.pm3Duration;tU.p7animType='linear';if(op==3){if(tB.p7opt[1]==1&&tU.pm3Level==2){cmb=2;}
else{cmb=1;}}
if(op==1||cmb==1){tU.p7animProp='fontSize';tU.p7animUnit='%';tU.pm3DefProp='100%';tU.p7animStartVal=5;tU.p7animCurrentVal=tU.p7animStartVal;tU.p7animFinishVal=100;tU.style[tU.p7animProp]=tU.p7animCurrentVal+tU.p7animUnit;tU.p7animStartTime=P7_PM3getTime(0);tU.p7animDuration=160;sD.style.visibility='visible';if(!tU.p7PM3running){tU.p7PM3running=true;tU.p7PM3anim=setInterval(function(){P7_PM3animator(tU);},p7PM3dy);}}
else if(op==2||cmb==2){tU.p7animProp='lineHeight';tU.p7animUnit='%';if(!tU.pm3DefProp){tU.pm3DefProp=P7_PM3getStyle(tU,'lineHeight','line-height');tU.pm3DefProp=(tU.pm3DefProp)?tU.pm3DefProp:'normal';}
tU.p7animStartVal=5;tU.p7animCurrentVal=tU.p7animStartVal;tU.p7animFinishVal=100;tU.style[tU.p7animProp]=tU.p7animCurrentVal+tU.p7animUnit;tU.p7animStartTime=P7_PM3getTime(0);tU.p7animDuration=160;sD.style.visibility='visible';tU.p7cb=function(){this.style[this.p7animProp]=this.pm3DefProp;};if(!tU.p7PM3running){tU.p7PM3running=true;tU.p7PM3anim=setInterval(function(){P7_PM3animator(tU,tU.p7cb);},p7PM3dy);}}
else if(op==4){tU.p7animProp='textIndent';tU.p7animUnit='px';tU.style.overflow='hidden';tU.p7animStartVal=-100;tU.p7animCurrentVal=tU.p7animStartVal;tU.p7animFinishVal=0;tU.style[tU.p7animProp]=tU.p7animCurrentVal+tU.p7animUnit;tU.p7animStartTime=P7_PM3getTime(0);tU.p7animDuration=160;sD.style.visibility='visible';tU.p7cb=function(){this.style.textIndent='0px';this.style.overflow='visible';};if(!tU.p7PM3running){tU.p7PM3running=true;tU.p7PM3anim=setInterval(function(){P7_PM3animator(tU,tU.p7cb);},p7PM3dy);}}
else if(op==5){if(sD.p7PM3fadeRunning){clearInterval(sD.p7PM3fade);sD.p7PM3fadeRunning=false;}
sD.p7animType='quad';sD.pm3StartFade=0;sD.pm3FinishFade=99;sD.pm3CurrentFade=sD.pm3StartFade;if(sD.filters){sD.style.filter='alpha(opacity='+sD.pm3CurrentFade+')';}
else{sD.style.opacity=sD.pm3CurrentFade/100;}
sD.style.visibility='visible';sD.pm3FadeStartTime=P7_PM3getTime(0);sD.pm3FadeDuration=400;if(!sD.p7PM3fadeRunning){sD.p7PM3fadeRunning=true;sD.p7PM3fade=setInterval(function(){P7_PM3fade(sD);},p7PM3dy);}}
else if(op>5&&op<99){sD.style.visibility='visible';P7_PM3setClass(tU,'sub-open');}
else if(op==99){if(sD.p7PM3running){clearInterval(sD.p7PM3anim);sD.p7PM3running=false;}
sD.style.overflow='hidden';sD.p7animType='quad';sD.p7animProp='height';sD.p7animUnit='px';sD.p7animStartVal=0;sD.p7animCurrentVal=sD.p7animStartVal;sD.p7animFinishVal=tU.offsetHeight;sD.style[sD.p7animProp]=sD.p7animCurrentVal+sD.p7animUnit;sD.p7animStartTime=P7_PM3getTime(0);sD.p7animDuration=360;sD.style.visibility='visible';sD.p7cb=function(){this.style.height='auto';this.style.overflow="visible";};if(!sD.p7PM3running){sD.p7PM3running=true;sD.p7PM3anim=setInterval(function(){P7_PM3animator(sD,sD.p7cb);},p7PM3dy);}}
else{sD.style.visibility='visible';}}}
function P7_PM3close(d,p){var i,a,tB,iM,op,sD,tU;a=document.getElementById(d);if(a.pm3State=='closed'){return;}
tB=document.getElementById(a.pm3Menu);op=tB.p7opt[2];if(P7_PM3getStyle(a,'maxHeight','max-height')=='700777px'){if(op!==0){op=99;}}
if(a.hasImg){iM=a.getElementsByTagName("IMG")[0];iM.p7state='closed';iM.src=iM.p7imgswap[0];}
if(a.pm3Sub){sD=document.getElementById(a.pm3Sub);sD.pm3State='closed';a.pm3State='closed';P7_PM3changeClass(a,'trig_open','trig_closed');P7_PM3changeClass(a.parentNode,'trig_open','trig_closed');tU=sD.getElementsByTagName('UL')[0];tU.setAttribute('aria-hidden','true');if(op>0&&op<6){if(sD.p7PM3fadeRunning){clearInterval(sD.p7PM3fade);sD.p7PM3fadeRunning=false;}
sD.p7animType='quad';sD.pm3StartFade=100;sD.pm3FinishFade=0;sD.pm3CurrentFade=sD.pm3StartFade;if(sD.filters){sD.style.filter='alpha(opacity='+sD.pm3CurrentFade+')';}
else{sD.style.opacity=sD.pm3CurrentFade/100;}
sD.pm3FadeStartTime=P7_PM3getTime(0);sD.pm3FadeDuration=220;if(!sD.p7PM3fadeRunning){sD.p7PM3fadeRunning=true;sD.p7PM3fade=setInterval(function(){P7_PM3fade(sD);},p7PM3dy);}}
else if(op>5&&op<99){P7_PM3remClass(tU,'sub-open');setTimeout(function(){P7_PM3closeAnim(sD);},300);}
else if(op==99){if(sD.p7PM3running){clearInterval(sD.p7PM3anim);sD.p7PM3running=false;}
sD.style.overflow='hidden';sD.p7animType='quad';sD.p7animProp='height';sD.p7animUnit='px';sD.p7animStartVal=sD.offsetHeight;sD.p7animCurrentVal=sD.p7animStartVal;sD.p7animFinishVal=0;sD.style[sD.p7animProp]=sD.p7animCurrentVal+sD.p7animUnit;sD.p7animStartTime=P7_PM3getTime(0);sD.p7animDuration=360;sD.p7cb=function(){this.style.height='0px';this.style.display='none';this.style.overflow="visible";};if(!sD.p7PM3running){sD.p7PM3running=true;sD.p7PM3anim=setInterval(function(){P7_PM3animator(sD,sD.p7cb);},p7PM3dy);}}
else{sD.style.height='0px';sD.style.display='none';}}}
function P7_PM3closeAnim(el){el.style.display='none';el.style.height='0px';}
function P7_PM3toggle(d,bp,p){var i,a,tD,pp;a=document.getElementById(d);pp=a.parentNode;while(pp){if(pp.tagName&&pp.tagName=='UL'){break;}
pp=pp.parentNode;}
tD=pp.getElementsByTagName("DIV");if(tD&&tD.length>0){for(i=tD.length-1;i>-1;i--){if(tD[i].pm3State&&tD[i].pm3State=='open'){if(bp==1||(!bp&&tD[i].pm3Trigger!=a)){P7_PM3close(tD[i].pm3Trigger.id);}}}}}
function P7_PM3toggleTB(du){var i,tU,tD;tU=document.getElementById(du);if(tU){tD=tU.getElementsByTagName("DIV");if(tD&&tD.length>0){for(i=tD.length-1;i>-1;i--){if(tD[i].pm3State&&tD[i].pm3State=='open'){P7_PM3close(tD[i].pm3Trigger.id);}}}}}
function P7_PM3shut(d){var i,tB,tD;if(d){tB=document.getElementById(d);if(tB&&!tB.pm3Shut&&tB.pm3UL){tD=tB.pm3UL.getElementsByTagName("DIV");if(tD&&tD.length){tB.pm3Shut=true;for(i=tD.length-1;i>-1;i--){if(tD[i].pm3State&&tD[i].pm3State=='open'){P7_PM3close(tD[i].pm3Trigger.id);}}}}}}
function P7_PM3shutall(bp){var i,tB;if(p7PM3ctl&&p7PM3ctl.length){for(i=0;i<p7PM3ctl.length;i++){tB=document.getElementById(p7PM3ctl[i][0]);if(tB&&(!bp||bp!=tB.id)){P7_PM3shut(tB.id);}}}}
function P7_PM3body(evt){evt=(evt)?evt:event;var m=true,pp=(evt.fromElement)?evt.fromElement:evt.target;while(pp){if(pp&&pp.id&&typeof(pp.id)=='string'&&pp.id.indexOf('p7PM3')===0){m=false;break;}
if(pp&&pp.tagName&&(pp.tagName=='BODY'||pp.tagName=='HTML')){break;}
pp=pp.parentNode;}
if(m){P7_PM3shutall();}}
function P7_PM3rsz(){var i,tB;if(p7PM3ctl&&p7PM3ctl.length){for(i=0;i<p7PM3ctl.length;i++){tB=document.getElementById(p7PM3ctl[i][0]);if(tB){if(tB.p7opt&&tB.p7opt[15]==1){if(P7_PM3getStyle(tB,'maxHeight','max-height')!='700777px'){P7_PM3shut(tB.id);}}}}}
P7_PM3fixed();}
function P7_PM3animator(el,cb,op){var i,tB,tA,tS,et,nv,m=false;et=P7_PM3getTime(el.p7animStartTime);if(et>=el.p7animDuration){et=el.p7animDuration;m=true;}
if(el.p7animCurrentVal!=el.p7animFinishVal){nv=P7_PM3anim(el.p7animType,et,el.p7animStartVal,el.p7animFinishVal-el.p7animStartVal,el.p7animDuration);el.p7animCurrentVal=nv;el.style[el.p7animProp]=nv+el.p7animUnit;}
if(m){el.p7PM3running=false;clearInterval(el.p7PM3anim);if(cb&&typeof(cb)==="function"){cb.call(el);}}}
function P7_PM3fade(el,tp){var i,tC,tA,op,et,cet,m=false;et=P7_PM3getTime(el.pm3FadeStartTime);if(et>=el.pm3FadeDuration){et=el.pm3FadeDuration;m=true;}
if(el.pm3CurrentFade!=el.pm3FinishFade){op=P7_PM3anim(tp,et,el.pm3StartFade,el.pm3FinishFade-el.pm3StartFade,el.pm3FadeDuration);el.pm3CurrentFade=op;if(el.filters){el.style.filter='alpha(opacity='+el.pm3CurrentFade+')';}
else{el.style.opacity=el.pm3CurrentFade/100;}}
if(m){el.p7PM3fadeRunning=false;clearInterval(el.p7PM3fade);if(el.pm3FinishFade===0){el.style.height='0px';el.style.display='none';}
if(el.filters){el.style.filter='';}
else{el.style.opacity=1;}}}
function P7_PM3anim(tp,t,b,c,d){if(tp=='quad'){if((t/=d/2)<1){return c/2*t*t+b;}
else{return-c/2*((--t)*(t-2)-1)+b;}}
else{return(c*(t/d))+b;}}
function P7_PM3getTime(st){var d=new Date();return d.getTime()-st;}
function P7_PM3mark(){p7PM3adv[p7PM3adv.length]=arguments;}
function P7_PM3currentMark(el){var j,i,wH,cm=false,mt=['',1,'',''],op,r1,k,kk,tA,aU,pp,a,im,x;wH=window.location.href;if(el.p7opt[12]!=1){wH=wH.replace(window.location.search,'');}
if(wH.charAt(wH.length-1)=='#'){wH=wH.substring(0,wH.length-1);}
for(k=0;k<p7PM3adv.length;k++){if(p7PM3adv[k][0]&&p7PM3adv[k][0]==el.id){mt=p7PM3adv[k];cm=true;break;}}
op=mt[1];if(op<1){return;}
r1=/index\.[\S]*/i;k=-1;kk=-1;tA=el.getElementsByTagName("A");for(j=0;j<tA.length;j++){aU=tA[j].href.replace(r1,'');if(op>0){if(tA[j].href==wH||aU==wH){k=j;kk=-1;}}
if(op==2){if(tA[j].firstChild){if(tA[j].firstChild.nodeValue==mt[2]){kk=j;}}}
if(op==3&&tA[j].href.indexOf(mt[2])>-1){kk=j;}
if(op==4){for(x=2;x<mt.length;x+=2){if(wH.indexOf(mt[x])>-1){if(tA[j].firstChild&&tA[j].firstChild.nodeValue){if(tA[j].firstChild.nodeValue==mt[x+1]){kk=j;}}}}}}
k=(kk>k)?kk:k;if(k>-1){el.pmm3DefLink=tA[k];if(el.pm3Select){el.pm3Select.selectedIndex=tA[k].pm3OptIndex;}
pp=tA[k].parentNode;while(pp){if(pp.tagName&&pp.tagName=='LI'){P7_PM3setClass(pp,'li_current_mark');a=pp.getElementsByTagName('A');if(a&&a[0]){P7_PM3setClass(a[0],'current_mark');if(a[0].hasImg){im=a[0].getElementsByTagName('IMG')[0];im.mark=true;im.src=im.p7imgswap[2];}}}
else{if(pp==el){break;}}
pp=pp.parentNode;}}}
function P7_PM3setClass(ob,cl){if(ob){var cc,nc,r=/\s+/g;cc=ob.className;nc=cl;if(cc&&cc.length>0){if(cc.indexOf(cl)==-1){nc=cc+' '+cl;}
else{nc=cc;}}
nc=nc.replace(r,' ');ob.className=nc;}}
function P7_PM3remClass(ob,cl){if(ob){var cc,nc;cc=ob.className;if(cc&&cc.indexOf(cl>-1)){nc=cc.replace(cl,'');nc=nc.replace(/\s+/g,' ');nc=nc.replace(/\s$/,'');nc=nc.replace(/^\s/,'');ob.className=nc;}}}
function P7_PM3changeClass(ob,clf,clt){if(ob){var cc,nc;cc=ob.className;if(cc&&cc.indexOf(clf>-1)){nc=cc.replace(clf,clt);ob.className=nc;}
else{P7_PM3setClass(ob,clt);}}}
function P7_PM3getStyle(el,s1,s2){var s='';if(el.currentStyle){s=el.currentStyle[s1];}
else{s=document.defaultView.getComputedStyle(el,"").getPropertyValue(s2);}
return s;}
function P7_PM3getWinDims(){var h,w,st;if(document.documentElement&&document.documentElement.clientHeight){w=document.documentElement.clientWidth;h=document.documentElement.clientHeight;}
else if(window.innerHeight){if(document.documentElement.clientWidth){w=document.documentElement.clientWidth;}
else{w=window.innerWidth;}
h=window.innerHeight;}
else if(document.body){w=document.body.clientWidth;h=document.body.clientHeight;}
return[h,w];}
function P7_PM3getWinScroll(){var st=0,sl=0;st=document.body.parentNode.scrollTop;if(!st){st=document.body.scrollTop;if(!st){st=window.scrollY?window.scrollY:0;}}
sl=document.body.parentNode.scrollLeft;if(!sl){sl=document.body.scrollLeft;if(sl){sl=window.scrollX?window.scrollX:0;}}
return[st,sl];}
function P7_PM3getIEver(){var j,v=-1,nv,m=false;nv=navigator.userAgent.toLowerCase();j=nv.indexOf("msie");if(j>-1){v=parseFloat(nv.substring(j+4,j+8));if(document.documentMode){v=document.documentMode;}}
return v;}
function P7_PM3isMobile(){var i,m=false,ua=navigator.userAgent.toLowerCase();var dv=['iphone','ipad','ipod','touch','android','windows ce','iemobile','windowsce','blackberry','palm','symbian','series60','armv','arm7tdmi','opera mobi','opera mini','polaris','kindle','midp','mmp/','portalmmm','smm-mms','sonyericsson'];for(i=0;i<dv.length;i++){if(ua.search(dv[i])>-1){m=dv[i];break;}}
return m;}
function P7_PM3getCSSPre(){var i,dV,pre=['transition','WebkitTransition'];var c='none',cssPre=['','-webkit-'];dV=document.createElement('div');for(i=0;i<pre.length;i++){if(dV.style[pre[i]]!==undefined){c=cssPre[i];break;}}
return c;}
function P7_PM3addSheet(sh){var h,hd;h=document.createElement('style');h.type='text/css';h.appendChild(document.createTextNode(sh));hd=document.getElementsByTagName('head');hd[0].appendChild(h);}
function P7_PM3buildSel(sl,ob){var i,j,k,tx,tA,tU,tx,indent;if(ob.hasChildNodes){for(i=0;i<ob.childNodes.length;i++){if(ob.childNodes[i].nodeName&&ob.childNodes[i].nodeName=='LI'){tA=ob.childNodes[i].getElementsByTagName('A');if(tA&&tA[0]){k=sl.options.length;indent=' ';for(j=1;j<tA[0].pm3Level;j++){indent+=p7PM3indent;}
el=document.createElement('option');el.text=indent+tA[0].childNodes[0].nodeValue;tA[0].pm3OptItem=el;tA[0].pm3OptIndex=k;el.pm3Link=tA[0];sl.add(el,k);tU=tA[0].parentNode.getElementsByTagName("UL");if(tU&&tU[0]){P7_PM3buildSel(sl,tU[0]);}}}}}}
var p7EHC={init:false,built:false,groups:[],currentHeight:[],columns:[],wrappers:[],counter:1};function P7_EHCaddLoad(){if(!document.getElementById){return;}
if(window.addEventListener){document.addEventListener("DOMContentLoaded",P7_initEHC,false);window.addEventListener("load",P7_initEHC,false);window.addEventListener("unload",P7_EHCrf,false);}
else if(window.attachEvent){document.write("<script id=p7ie_EHC defer src=\"//:\"><\/script>");document.getElementById("p7ie_EHC").onreadystatechange=function(){if(this.readyState=="complete"){P7_initEHC();}};window.attachEvent("onload",P7_initEHC);}}
P7_EHCaddLoad();function P7_EHCrf(){return;}
function P7_initEHC(){var i,j,nL,cl,sl;if(p7EHC.init){return;}
p7EHC.init=true;nL=document.getElementsByTagName('*');for(i=0;i<nL.length;i++){cl=nL[i].className;if(cl&&cl.indexOf('p7ehc-')>-1){sl=cl.split(' ');for(j=0;j<sl.length;j++){if(sl[j].indexOf('p7ehc-')>-1){P7_EHCcreate(sl[j],nL[i]);p7EHC.built=true;}}}}
if(p7EHC.built){setInterval("P7_EHCsizer()",20);}}
function P7_EHCcreate(cl,cD){var i,x,tW,m=false;for(i=0;i<p7EHC.groups.length;i++){if(p7EHC.groups[i]==cl){m=true;break;}}
if(!m){i=p7EHC.groups.length;p7EHC.groups[i]=cl;p7EHC.currentHeight[i]=0;p7EHC.columns[i]=[];p7EHC.wrappers[i]=[];x=0;}
else{x=p7EHC.columns[i].length;}
tW=document.createElement('div');tW.setAttribute('id','p7EHCd_'+(p7EHC.counter));p7EHC.counter++;tW.ehcPaddingCounter=0;tW.ehcPaddingTop=false;tW.ehcPaddingBottom=false;cD.appendChild(tW);while(cD.childNodes[0]!=tW){tW.appendChild(cD.childNodes[0]);}
p7EHC.columns[i][x]=cD;p7EHC.wrappers[i][x]=tW;tW.ehcPaddingTimer=setTimeout("P7_EHCcheckPadding('"+tW.id+"')",1);}
function P7_EHCcheckPadding(d,v){var p,cD,tW=document.getElementById(d);cD=tW.parentNode;tW.ehcPaddingCounter++;if(!tW.ehcPaddingTop){p=P7_EHCgetStyle(cD,'paddingTop','padding-top');if(p&&parseFloat(p)!==0){tW.style.paddingTop=p;cD.style.paddingTop='0px';tW.ehcPaddingTop=true;}}
if(!tW.ehcPaddingBottom){p=P7_EHCgetStyle(cD,'paddingBottom','padding-bottom');if(p&&parseFloat(p)!==0){tW.style.paddingBottom=p;cD.style.paddingBottom='0px';tW.ehcPaddingBottom=true;}}
if(tW.ehcPaddingCounter<50){if(!tW.ehcPaddingTop||!tW.ehcPaddingBottom){tW.ehcPaddingTimer=setTimeout("P7_EHCcheckPadding('"+d+"')",10);}}}
function P7_EHCsizer(){var i,j,oh,h;for(i=0;i<p7EHC.groups.length;i++){oh=0;for(j=0;j<p7EHC.wrappers[i].length;j++){if(P7_EHCgetStyle(p7EHC.columns[i][j],'maxHeight','max-height')=='888678px'){p7EHC.columns[i][j].ehcByPass=true;}
else{p7EHC.columns[i][j].ehcByPass=false;}
if(!p7EHC.columns[i][j].ehcByPass){h=p7EHC.wrappers[i][j].offsetHeight;oh=(h>oh)?h:oh;}}
if(oh!=p7EHC.currentHeight[i]&&oh!==0){p7EHC.currentHeight[i]=oh;for(j=0;j<p7EHC.columns[i].length;j++){if(!p7EHC.columns[i][j].ehcByPass){p7EHC.columns[i][j].style.height=oh+'px';}}}}}
function P7_EHCgetStyle(el,s1,s2){var s='';if(el.currentStyle){s=el.currentStyle[s1];}
else{s=document.defaultView.getComputedStyle(el,"").getPropertyValue(s2);}
return s;}
var p7TM3over='_over';var p7TM3open='_down';var p7TM3i=false,p7TM3a=false,p7TM3ctl=[],p7TM3adv=[],p7TM3dy=(1000/100);function P7_TM3set(){var h,sh,hd,ie=P7_TM3getIEver();if(!document.getElementById){return;}
sh='.p7TM3 ul div {height:0px;overflow:hidden;position:relative;display:none;}\n';sh+='.p7TM3 ul {overflow:hidden;}\n';sh+='.p7TM3toggle {display:block !important;}\n';if(document.styleSheets){if(ie>4&&ie<7){sh+='.p7TM3, .p7TM3 a, .p7TM3 li {height:1%;}\n';}
if(ie>4&&ie<6){sh+='.p7TM3 a, .p7TM3 a {overflow:visible !important;}\n';}
h='\n<st'+'yle type="text/css">\n'+sh+'\n</s'+'tyle>';document.write(h);}
else{h=document.createElement('style');h.type='text/css';h.appendChild(document.createTextNode(sh));hd=document.getElementsByTagName('head');hd[0].appendChild(h);}}
P7_TM3set();function P7_TM3addLoad(){if(window.addEventListener){window.addEventListener("load",P7_TM3init,false);window.addEventListener("unload",P7_TM3bb,false);}
else if(window.attachEvent){document.write("<script id=p7ie_tm3 defer src=\"//:\"><\/script>");document.getElementById("p7ie_tm3").onreadystatechange=function(){if(this.readyState=="complete"){if(p7TM3ctl.length>0){P7_TM3init();}}};window.attachEvent("onload",P7_TM3init);}}
P7_TM3addLoad();function P7_TM3bb(){return;}
function P7_TM3op(){if(!document.getElementById){return;}
p7TM3ctl[p7TM3ctl.length]=arguments;}
function P7_TM3init(){var i,j,jj,k,tM,tA,tU,lv,pp,clv,fs,tS,d=1,cl,tp,uh=0,cN,tw,ow,oh,sP,cA,oA,tN,iM,tD,tB;if(p7TM3i){return;}
p7TM3i=true;document.p7TM3preload=[];for(k=0;k<p7TM3ctl.length;k++){tM=document.getElementById(p7TM3ctl[k][0]);if(tM){tM.p7opt=p7TM3ctl[k];tM.style.position='relative';tM.style.overflow='hidden';tM.tm3Subs=[];tM.tm3StartTime=0;tM.tm3Duration=tM.p7opt[10];tM.tm3AnimType='quad';tM.p7TM3running=false;if(navigator.appVersion.indexOf("MSIE 5")>-1){tM.p7opt[1]=0;}
tU=tM.getElementsByTagName('UL');tB=document.getElementById(tM.id.replace('_','tb_'));if(tB&&tU[0]){tB.tm3Div=tM.id;tB.tm3UL=tU[0];cl=tU[0].className;if(cl&&cl!==''&&cl.indexOf('opened')>-1){tB.tm3State='open';tU[0].tm3State='open';}
else{P7_TM3remClass(tB,'closed');P7_TM3remClass(tU[0],'closed');tM.tm3ToolbarClosed=true;tB.tm3State='closed';tU[0].tm3State='closed';}
tB.onclick=function(){var tB=this;var tU=this.tm3UL;if(tB.tm3State=='open'){tB.tm3State='closed';tU.tm3State='closed';P7_TM3remClass(tB,'opened');P7_TM3remClass(tU,'opened');P7_TM3setClass(tB,'closed');P7_TM3setClass(tU,'closed');}
else{tB.tm3State='open';tU.tm3State='open';P7_TM3remClass(tB,'closed');P7_TM3remClass(tU,'closed');P7_TM3setClass(tB,'opened');P7_TM3setClass(tU,'opened');}};tA=tB.getElementsByTagName('A');if(tA&&tA[0]){tA[0].onclick=function(){return false;};}}
tD=tU[0].getElementsByTagName("DIV");for(i=0;i<tD.length;i++){tD[i].setAttribute("id",tM.id+'d'+(i+2));tD[i].tm3State='closed';tD[i].tm3Div=tM.id;tM.tm3Subs[tM.tm3Subs.length]=tD[i];tD[i].style.display='none';tD[i].style.height='0px';}
tU=tM.getElementsByTagName("UL");for(i=0;i<tU.length;i++){tU[i].setAttribute("id",tM.id+'u'+(i+1));lv=1;pp=tU[i].parentNode;while(pp){if(pp.id&&pp.id==tM.id){break;}
if(pp.tagName&&pp.tagName=="UL"){lv++;}
pp=pp.parentNode;}
tU[i].tm3Level=lv;clv='level_'+lv;P7_TM3setClass(tU[i],clv);tN=tU[i].childNodes;if(tN){fs=-1;jj=0;for(j=0;j<tN.length;j++){if(tN[j].tagName&&tN[j].tagName=="LI"){jj++;tA=tN[j].getElementsByTagName("A")[0];if(fs<0){P7_TM3setClass(tA,'tm3first');P7_TM3setClass(tN[j],'tm3first');}
tN[j].tm3State='closed';fs=j;tA.setAttribute("id",tM.id+'a'+(d));tA.tm3Level=lv;tA.tm3Div=tM.id;if(i===0){P7_TM3setClass(tN[j],('root_'+jj));}
tS=tN[j].getElementsByTagName("UL");if(tS&&tS.length>0){tA.tm3Sub=tS[0].parentNode.id;tA.tm3State="closed";P7_TM3setClass(tA,'trig_closed');P7_TM3setClass(tA.parentNode,'trig_closed');tA.onclick=function(){return P7_TM3trig(this);};}
else{tA.tm3Sub=false;P7_TM3setClass(tA,'p7tm3_page');P7_TM3setClass(tA.parentNode,'p7tm3_page');}
d++;tA.hasImg=false;var sr,x,swp,s1,s2,s3;iM=tA.getElementsByTagName("IMG");if(iM&&iM[0]){sr=iM[0].getAttribute("src");iM[0].tm3Swap=tM.p7opt[3];x=sr.lastIndexOf(".");s1=sr.substring(0,x)+p7TM3over+'.'+sr.substring(x+1);s2=sr.substring(0,x)+p7TM3open+'.'+sr.substring(x+1);if(iM[0].tm3Swap==1){iM[0].p7imgswap=[sr,s1,s1];P7_TM3preloader(s1);}
else if(iM[0].tm3Swap==2){iM[0].p7imgswap=[sr,s1,s2];P7_TM3preloader(s1,s2);}
else{iM[0].p7imgswap=[sr,sr,sr];}
iM[0].tm3State='closed';iM[0].mark=false;iM[0].rollover=tM.p7opt[10];if(iM[0].tm3Swap>0){tA.hasImg=true;iM[0].onmouseover=function(){P7_TM3imovr(this);};iM[0].onmouseout=function(){P7_TM3imout(this);};tA.onfocus=function(){P7_TM3imovr(this.getElementsByTagName('IMG')[0]);};tA.onblur=function(){P7_TM3imout(this.getElementsByTagName('IMG')[0]);};}}}}
if(fs>0){P7_TM3setClass(tA,'tm3last');P7_TM3setClass(tN[fs],'tm3last');}}}
oA=document.getElementById(tM.id+'oa');if(oA){oA.onclick=function(){P7_TM3all(this.id.replace('oa',''),'open',0);return false;};}
cA=document.getElementById(tM.id+'ca');if(cA){cA.onclick=function(){P7_TM3all(this.id.replace('ca',''),'close',0);return false;};}
if(tM.p7opt[5]==1){P7_TM3currentMark(tM);}
if(tM.p7opt[9]>-1){P7_TM3all(tM.id,'open',tM.p7opt[9]);}
if(tM.tm3ToolbarClosed){tB=document.getElementById(tM.id.replace('_','tb_'));P7_TM3setClass(tB,'closed');P7_TM3setClass(tB.tm3UL,'closed');}}}
p7TM3a=true;}
function P7_TM3preloader(){var i,x;for(i=0;i<arguments.length;i++){x=document.p7TM3preload.length;document.p7TM3preload[x]=new Image();document.p7TM3preload[x].src=arguments[i];}}
function P7_TM3imovr(im){var m=true;if(im.tm3State=='open'&&im.rollover===0){m=false;}
if(m){im.src=im.p7imgswap[1];}}
function P7_TM3imout(im){if(im.tm3State=='open'||im.mark){im.src=im.p7imgswap[2];}
else{im.src=im.p7imgswap[0];}}
function P7_TM3trig(a){var wH,m=false;wH=window.location.href;if(a.href!=wH&&a.href!=wH+'#'){if(a.href.toLowerCase().indexOf('java')==-1){m=true;}}
if(m&&a.tm3Sub&&a.tm3State=='closed'){m=false;}
if(a.tm3State=='closed'){P7_TM3open(a);}
else{P7_TM3close(a);}
return m;}
function P7_TM3open(a,bp){var sP,tM,tD,iM,tw,v,tU,op=0;if(a.tm3State=='open'){return;}
tM=document.getElementById(a.tm3Div);tD=document.getElementById(a.tm3Sub);if(!bp){if(tM.p7opt[8]==1){P7_TM3toggle(a);}}
a.tm3State='open';a.parentNode.tm3State='open';tD.tm3State='open';if(a.hasImg){iM=a.getElementsByTagName("IMG")[0];iM.tm3State='open';iM.src=iM.p7imgswap[2];}
sP=document.getElementById(a.tm3span);a.className=a.className.replace('trig_closed','trig_open');a.parentNode.className=a.parentNode.className.replace('trig_closed','trig_open');op=tM.p7opt[1];if(!bp&&p7TM3a&&op>0){if(op>0){tU=tD.getElementsByTagName('UL')[0];tM.p7animType='quad';tM.p7animProp='height';tM.p7animUnit='px';tD.style.display='block';tD.p7animStartVal=0;if(tD.tm3State=='open'){tD.p7animStartVal=tD.offsetHeight;}
tD.p7animCurrentVal=tD.p7animStartVal;tD.p7animFinishVal=tU.offsetHeight;tD.style[tM.p7animProp]=tD.p7animCurrentVal+tM.p7animUnit;tM.p7animStartTime=P7_TM3getTime(0);tM.p7animDuration=tM.tm3Duration;if(!tM.p7TM3running){tM.p7TM3running=true;tM.p7TM3anim=setInterval("P7_TM3animator('"+tM.id+"',"+op+")",p7TM3dy);}}}
else{tD.style.height='auto';tD.style.display='block';}}
function P7_TM3close(a,bp){var sP,tM,tD,iM,op,tU;if(a.tm3State=='closed'){return;}
tM=document.getElementById(a.tm3Div);op=tM.p7opt[1];tD=document.getElementById(a.tm3Sub);a.tm3State='closed';a.parentNode.tm3State='closed';if(a.hasImg){iM=a.getElementsByTagName("IMG")[0];iM.tm3State='closed';if(iM.mark){iM.src=iM.p7imgswap[1];}
else{iM.src=iM.p7imgswap[0];}}
sP=document.getElementById(a.tm3span);a.className=a.className.replace('trig_open','trig_closed');a.parentNode.className=a.parentNode.className.replace('trig_open','trig_closed');tD.tm3State='closed';if(!bp&&p7TM3a&&op>0){if(op>0){tU=tD.getElementsByTagName('UL')[0];tM.p7animType='quad';tM.p7animProp='height';tM.p7animUnit='px';tD.style.display='block';tD.p7animStartVal=tD.offsetHeight;tD.p7animCurrentVal=tD.p7animStartVal;tD.p7animFinishVal=0;tD.style[tM.p7animProp]=tD.p7animCurrentVal+tM.p7animUnit;tM.p7animStartTime=P7_TM3getTime(0);tM.p7animDuration=tM.tm3Duration;if(!tM.p7TM3running){tM.p7TM3running=true;tM.p7TM3anim=setInterval("P7_TM3animator('"+tM.id+"',"+op+")",p7TM3dy);}}}
else{tD.style.height='0px';tD.style.display='none';}}
function P7_TM3toggle(a,bp){var i,tC;tC=a.parentNode.parentNode.childNodes;for(i=0;i<tC.length;i++){if(tC[i].tagName&&tC[i].tagName=='LI'){if(tC[i].tm3State&&tC[i].tm3State=='open'&&tC[i]!=a.parentNode){P7_TM3close(tC[i].getElementsByTagName('A')[0]);}}}}
function P7_TM3animator(d,op){var i,tB,tA,tS,et,nv,m=false;tB=document.getElementById(d);et=P7_TM3getTime(tB.p7animStartTime);if(et>=tB.p7animDuration){et=tB.p7animDuration;}
tS=tB.tm3Subs;for(i=0;i<tS.length;i++){if(tS[i]){if(tS[i].p7animCurrentVal!=tS[i].p7animFinishVal){nv=P7_TM3anim(tB.p7animType,et,tS[i].p7animStartVal,tS[i].p7animFinishVal-tS[i].p7animStartVal,tB.p7animDuration);tS[i].p7animCurrentVal=nv;tS[i].style[tB.p7animProp]=nv+tB.p7animUnit;if(tS[i].p7animCurrentVal==tS[i].p7animFinishVal){if(tS[i].tm3State=='closed'){tB.tm3Subs[i].style.display='none';tB.tm3Subs[i].style.height='0px';}
else{tB.tm3Subs[i].style.height='auto';}}
else{m=true;}}
else{}}}
if(!m){tB.p7TM3running=false;clearInterval(tB.p7TM3anim);}}
function P7_TM3getTime(st){var d=new Date();return d.getTime()-st;}
function P7_TM3anim(tp,t,b,c,d){if(tp=='quad'){if((t/=d/2)<1){return c/2*t*t+b;}
else{return-c/2*((--t)*(t-2)-1)+b;}}
else{return(c*(t/d))+b;}}
function P7_TM3all(d,ac,lv){var i,tM,tA;lv=(lv>0)?lv:0;tM=document.getElementById(d);if(tM){tA=tM.getElementsByTagName("A");for(i=0;i<tA.length;i++){if(tA[i].tm3Sub&&(lv===0||tA[i].tm3Level<=lv)){if(ac=='open'){if(tA[i].tm3State!='open'){P7_TM3open(tA[i],1);}}
else{if(tA[i].tm3State!='closed'){P7_TM3close(tA[i],1);}}}}}}
function P7_TM3mark(){p7TM3adv[p7TM3adv.length]=arguments;}
function P7_TM3currentMark(el){var x,j,i,k,wH,cm=false,mt=['',1,'',''],op,r1,kk,tA,aU,pp,a,im;wH=window.location.href;if(el.p7opt[6]!=1){wH=wH.replace(window.location.search,'');}
if(wH.charAt(wH.length-1)=='#'){wH=wH.substring(0,wH.length-1);}
for(k=0;k<p7TM3adv.length;k++){if(p7TM3adv[k][0]&&p7TM3adv[k][0]==el.id){mt=p7TM3adv[k];cm=true;break;}}
op=mt[1];if(op<1){return;}
r1=/index\.[\S]*/i;k=-1;kk=-1;tA=el.getElementsByTagName("A");for(j=0;j<tA.length;j++){aU=tA[j].href.replace(r1,'');if(op>0){if(tA[j].href==wH||aU==wH){k=j;kk=-1;}}
if(op==2){if(tA[j].firstChild){if(tA[j].firstChild.nodeValue==mt[2]){kk=j;}}}
if(op==3&&tA[j].href.indexOf(mt[2])>-1){kk=j;}
if(op==4){for(x=2;x<mt.length;x+=2){if(wH.indexOf(mt[x])>-1){if(tA[j].firstChild&&tA[j].firstChild.nodeValue){if(tA[j].firstChild.nodeValue==mt[x+1]){kk=j;}}}}}}
k=(kk>k)?kk:k;if(k>-1){pp=tA[k].parentNode;while(pp){if(pp.tagName&&pp.tagName=='LI'){P7_TM3setClass(pp,'li_current_mark');a=pp.getElementsByTagName('A');if(a&&a[0]){P7_TM3setClass(a[0],'current_mark');if(a[0].hasImg){im=a[0].getElementsByTagName('IMG')[0];im.mark=true;im.src=im.p7imgswap[1];}
if(a[0].tm3Sub){if(el.p7opt.length<12||el.p7opt[11]==1){P7_TM3open(a[0],1);}}}}
else{if(pp==el){break;}}
pp=pp.parentNode;}}}
function P7_TM3setClass(ob,cl){if(ob){var cc,nc,r=/\s+/g;cc=ob.className;nc=cl;if(cc&&cc.length>0){if(cc.indexOf(cl)==-1){nc=cc+' '+cl;}
else{nc=cc;}}
nc=nc.replace(r,' ');ob.className=nc;}}
function P7_TM3remClass(ob,cl){if(ob){var cc,nc;cc=ob.className;if(cc&&cc.indexOf(cl>-1)){nc=cc.replace(cl,'');nc=nc.replace(/\s+/g,' ');nc=nc.replace(/\s$/,'');nc=nc.replace(/^\s/,'');ob.className=nc;}}}
function P7_TM3getStyle(el,s1,s2){var s='';if(el.currentStyle){s=el.currentStyle[s1];}
else{s=document.defaultView.getComputedStyle(el,"").getPropertyValue(s2);}
return s;}
function P7_TM3getIEver(){var j,v=-1,nv,m=false;nv=navigator.userAgent.toLowerCase();j=nv.indexOf("msie");if(j>-1){v=parseFloat(nv.substring(j+4,j+8));if(document.documentMode){v=document.documentMode;}}
return v;}
var p7IGMctl=[],p7IGMi=false,p7IGMa=false,p7IGMfsd=false,p7IGMdy=(1000/100);function P7_IGMset(){var h,sh,hd,ie=P7_IGMgetIEver();if(!document.getElementById){return;}
sh='';sh+='.IGM-thumbs {white-space: nowrap !important;}\n';sh+='.IGM-thumbs a {display: block !important;}\n';sh+='.IGM-thumbs li {display: inline-block !important;}\n';sh+='.IGM-arrows {display: block !important;}\n';sh+='.p7IGMimage-wrapper {position:relative; overflow:hidden;}\n';sh+='.p7IGMfixed-height {position:absolute; display:block; zoom:1; filter:inherit;}\n';sh+='.p7IGM-FSMode {height:100%;left:0;position:fixed;top:0;width:100% !important;z-index:99999998;}\n';sh+='.p7IGM-suppressScroll {overflow-y: hidden;overflow-x: hidden;}\n';sh+='.IGM-caption, .IGM-description {filter:inherit;}\n';sh+='.IGMno-display {display:none !important;}\n';if(ie>5&&ie<9){sh+='.IGM-cap-overlay-top, .IGM-cap-overlay-bottom, ';sh+='.p7IGMdescription-wrapper.IGM-desc-overlay-top .IGM-description, ';sh+='.p7IGMdescription-wrapper.IGM-desc-overlay-bottom ';sh+='.IGM-description { filter: alpha(opacity=80) !important; zoom: 1;}\n';}
if(ie>5&&ie<8){sh+='.IGM-thumbs li {display: inline !important;}\n';sh+='.IGM-toolbar-top li, .IGM-toolbar-bottom li {display: inline;}\n';sh+='.IGMpaginator-pags-bottom ul, .IGMpaginator-pags-top ul {display: inline;}\n';}
if(ie>5&&ie<7){sh+='.IGM-thumbs-top, .IGM-thumbs-bottom {margin: 0px !important;}\n';sh+='.IGM-thumbs a {display: inline !important;}\n';sh+='.IGM-thumbsVP {width: 100%;}\n';sh+='.IGM-arrows {zoom: 1;}\n';sh+='.arrow-left, .arrow-right {position: absolute !important; z-index: 999;}\n';sh+='.arrow-right {left: auto; right: -2px;}\n';sh+='div {zoom: 1;}\n';}
if(document.styleSheets){h='\n<st'+'yle type="text/css">\n'+sh+'\n</s'+'tyle>';document.write(h);}
else{h=document.createElement('style');h.type='text/css';h.appendChild(document.createTextNode(sh));hd=document.getElementsByTagName('head');hd[0].appendChild(h);}}
P7_IGMset();function P7_opIGM(){if(!document.getElementById){return;}
p7IGMctl[p7IGMctl.length]=arguments;if(arguments[1]>1){var tD=document.getElementById(arguments[0]);if(tD){tD.p7opt=arguments;P7_IGMthumbSetVert(tD.id);}}}
function P7_IGMaddLoad(){if(!document.getElementById){return;}
if(window.addEventListener){document.addEventListener("DOMContentLoaded",P7_initIGM,false);window.addEventListener("load",P7_initIGM,false);window.addEventListener("unload",P7_IGMrf,false);window.addEventListener("resize",P7_IGMrsz,false);document.addEventListener("keydown",P7_IGMkey,false);}
else if(window.attachEvent){document.write("<script id=p7ie_igm defer src=\"//:\"><\/script>");document.getElementById("p7ie_igm").onreadystatechange=function(){if(this.readyState=="complete"){if(p7IGMctl.length>0){P7_initIGM();}}};window.attachEvent("onload",P7_initIGM);window.attachEvent("onresize",P7_IGMrsz);document.attachEvent("onkeydown",P7_IGMkey);}}
P7_IGMaddLoad();function P7_IGMrf(){return;}
function P7_initIGM(){var i,j,w,jj,k,x=0,tD,tV,tA,tC,li,tR,tW,im,a,dv,fS,fI,el,sn,cl,pN,n,cvs;if(p7IGMi){return;}
p7IGMi=true;document.p7igmpre=[];for(j=0;j<p7IGMctl.length;j++){tD=document.getElementById(p7IGMctl[j][0]);if(tD){tD.p7opt=p7IGMctl[j];P7_IGMtblfix(tD);P7_IGMremClass(tD,'IGMnoscript');if(tD.p7opt[12]===0){tD.p7opt[12]=1;P7_IGMrandomizer(tD.id);}
k=0;tD.igmTrigScroll=false;tD.igmImages=[];tD.igmCurrentSlideNum=1;tD.igmShowMode='pause';tD.igmNumPlays=1;tD.igmDirection='right';tD.igmFixedHeight=tD.p7opt[19]>0;tV=document.getElementById(tD.id.replace('_','tvp_'));tW=document.getElementById(tD.id.replace('_','tgw_'));tW.igmDiv=tD.id;fI=document.getElementById(tD.id.replace('_','image_'));fI.igmDiv=tD.id;tD.igmCanvas=false;cvs=document.createElement('canvas');if(cvs.getContext&&cvs.getContext('2d')){cvs.setAttribute('id',tD.id.replace('_','cvs_'));tD.igmCanvas=cvs.id;cvs.setAttribute('class','p7IGM-canvas');el=document.getElementById(tD.id.replace('_','im_'));el.parentNode.appendChild(cvs);}
else if(tD.p7opt[5]==7){tD.p7opt[5]=8;}
fS=document.getElementById(tD.id.replace('_','imgwrapper_'));if(tD.igmFixedHeight){if(!tD.igmCanvas){fS.style.height=tD.p7opt[19]+'px';P7_IGMsetClass(document.getElementById(tD.id.replace('_','imlink_')),'p7IGMfixed-height');}
else{fS.style.height=tD.p7opt[19]+'px';}}
if(!tD.igmCanvas&&tD.p7opt[5]>1&&tD.p7opt[5]<7){dv=document.createElement('div');dv.setAttribute('id',tD.id.replace('_','overlay_'));dv.style.position='absolute';dv.style.left='-9000px';dv.style.top='0';dv.style.zIndex=2;dv.className='p7IGMoverlay';for(i=0;i<2;i++){cl=(i===0)?'v_':'v2_';el=fI.cloneNode(true);el.setAttribute('id',el.id.replace('_',cl));a=el.getElementsByTagName('A')[0];a.setAttribute('id',a.id.replace('_',cl));a.setAttribute('href','#');a.className=document.getElementById(tD.id.replace('_','imlink_')).className;im=el.getElementsByTagName('IMG')[0];im.setAttribute('id',im.id.replace('_',cl));im.setAttribute('name',im.id.replace('_',cl));im.setAttribute('alt','');im.className=document.getElementById(tD.id.replace('_','im_')).className;el.style.position='absolute';el.style.top='0';el.style.zIndex=2;dv.appendChild(el);dv.igmDiv=tD.id;tD['igmOVdiv'+(i+1)]=el;tD['igmOVim'+(i+1)]=im;}}
else{im=document.createElement('img');im.setAttribute('id',tD.id.replace('_','imv_'));im.className=document.getElementById(tD.id.replace('_','im_')).className;a=document.createElement('a');a.setAttribute('id',tD.id.replace('_','imlinkv_'));a.className=document.getElementById(tD.id.replace('_','imlink_')).className;a.appendChild(im);dv=document.createElement('div');dv.setAttribute('id',tD.id.replace('_','imagev_'));dv.style.position='absolute';dv.style.display='none';dv.style.top='0';dv.style.zIndex=2;dv.className=document.getElementById(tD.id.replace('_','image_')).className;dv.appendChild(a);}
fS.appendChild(dv);el=document.getElementById(tD.id.replace('_','caption_'));pN=document.getElementById(tD.id.replace('_','capwrapper_'));if(el&&pN){el.igmDiv=tD.id;tD.igmCaptionDiv=el.id;pN.igmDiv=tD.id;pN.igmCaptionType='normal';el.igmType=pN.igmType='cap';cl=pN.className;if(cl&&(/IGM-cap-/.test(cl))){pN.igmPositionType=cl.match(/IGM-cap-[^"\s]*[^\s]/)[0];pN.igmPositionType=pN.igmPositionType.replace('IGM-cap-','');}}
else{tD.igmCaptionDiv=false;}
el=document.getElementById(tD.id.replace('_','desc_'));pN=document.getElementById(tD.id.replace('_','descwrapper_'));if(el&&pN){el.igmDiv=tD.id;tD.igmDescDiv=el.id;pN.igmDiv=tD.id;pN.igmDescType='normal';el.igmType=pN.igmType='desc';cl=pN.className;if(cl&&(/IGM-desc-/.test(cl))){pN.igmPositionType=cl.match(/IGM-desc-[^"\s]*[^\s]/)[0];pN.igmPositionType=pN.igmPositionType.replace('IGM-desc-','');}}
else{tD.igmDescDiv=false;}
tD.igmCapClosed=true;tD.igmDescClosed=true;tD.onCapDescClosed=function(sn,bp){if(sn==this.igmCurrentSlideNum){if((!this.igmCaptionDiv||this.igmCapClosed)&&(!this.igmDescDiv||this.igmDescClosed)){this.igmCapClosed=false;this.igmDescClosed=false;P7_IGMdispB(this.id,sn,bp);}}};tD.igmCapOpened=true;tD.igmDescOpened=true;el=document.getElementById(tD.id.replace('_','thumbs_'));tD.igmHasThumbs=true;cl=el.className;if(cl&&(/p7IGM-no-thumbs/.test(cl))){tD.igmHasThumbs=false;}
tA=tW.getElementsByTagName('A');tD.igmCategories=[];if(tD.igmHasThumbs&&tD.p7opt[2]==1){tD.igmTrigScroll=true;tW.style.left='0px';tD.igmThumbScrollType='horiz';for(w=tA.length-1;w>-1;w--){cl=tA[w].parentNode.parentNode.className;if(cl&&/IGM-thumbs/.test(cl)){break;}}
if(w>-1){P7_IGMresetWidth(tW,tA[w].parentNode,(w+1));}
el=document.getElementById(tD.id.replace('_','tvp_'));tR=document.getElementById(tD.id.replace('_','left_'));if(tR){tR.igmDiv=tD.id;tR.onclick=function(){return P7_IGMthumbScroll(this.igmDiv,'left');};tR.parentNode.style.height=el.offsetHeight+'px';}
tR=document.getElementById(tD.id.replace('_','right_'));if(tR){tR.igmDiv=tD.id;tR.onclick=function(){return P7_IGMthumbScroll(this.igmDiv,'right');};tR.parentNode.style.height=el.offsetHeight+'px';}}
if(tD.p7opt[9]==1){document.oncontextmenu=function(evt){var tg,m=true;evt=(evt)?evt:event;tg=(evt.target)?evt.target:evt.srcElement;if(tg.id&&tg.id.indexOf('p7IGM'===0)){m=false;}
return m;};}
k=0;for(i=0;i<tA.length;i++){if(tA[i].parentNode.nodeName=="LI"){k++;tD.igmImages[k]=tA[i];tA[i].igmDiv=tD.id;tA[i].igmImageNum=k;if(tD.igmHasThumbs){tA[i].onclick=function(){return P7_IGMcontrol(this.igmDiv,this.igmImageNum);};tA[i].parentNode.onmouseover=function(){P7_IGMsetClass(this,'igm-thumb-over');};tA[i].parentNode.onmouseout=function(){P7_IGMremClass(this,'igm-thumb-over');};}
document.p7igmpre[x]=new Image();document.p7igmpre[x].cmp=false;document.p7igmpre[x].onload=function(){this.cmp=true;};document.p7igmpre[x].onerror=function(){this.cmp=true;this.p7Status='load_error';this.width=300;this.height=300;};tA[i].igmPreIndex=x;tA[i].igmPreImage=document.p7igmpre[x];if(k<3){document.p7igmpre[x].src=tA[i].href;}
x++;}}
P7_IGMthumbSetArrowStates(tD.id);tD.igmImageNums=tD.igmImages.length-1;tD.igmPaginator=false;tD.igmPaginators=[];tC=document.getElementById(tD.id.replace('_','paginator_'));if(tC){tD.igmPaginator=true;tA=tC.getElementsByTagName('A');if(tA){jj=0;for(k=0;k<tA.length;k++){if(!tA[k].id&&!/pgpp|pgbk/.test(tA[k].id)){jj++;if(tD.igmImages[jj]){tA[k].igmDiv=tD.id;tA[k].igmImageNum=jj;tD.igmPaginators[jj]=tA[k];tA[k].setAttribute('title',tD.igmImages[jj].getAttribute('title'));tA[k].onclick=function(){return P7_IGMcontrol(this.igmDiv,this.igmImageNum);};}}}}}
tD.igmControls=[];tD.igmControls[0]=P7_IGMsetCC(tD.id,'bp_','prev');tD.igmControls[1]=P7_IGMsetCC(tD.id,'bn_','next');tC=document.getElementById(tD.id.replace('_','toolbar_'));if(tC){tD.igmControls[2]=P7_IGMsetCC(tD.id,'rf_','first');tD.igmControls[3]=P7_IGMsetCC(tD.id,'rp_','prev');tD.igmControls[5]=P7_IGMsetCC(tD.id,'rn_','next');tD.igmControls[6]=P7_IGMsetCC(tD.id,'rl_','last');el=document.getElementById(tD.id.replace('_','rpp_'));if(el){el.p7state='pause';el.igmDiv=tD.id;tD.igmControls[4]=el;el.onclick=function(){var ac=(this.p7state=='play')?'pause':'play';P7_IGMcontrol(this.igmDiv,ac);return false;};el.igmSetButtonState=function(st){var tx;if(st=='play'){tx='||';P7_IGMremClass(this,'tb-play');this.setAttribute('title','Pause');}
else{tx='&rArr;';P7_IGMsetClass(this,'tb-play');this.setAttribute('title','Play');}
this.innerHTML=tx;};}}
el=document.getElementById(tD.id.replace('_','pgpp_'));if(el){el.p7state='pause';el.igmDiv=tD.id;tD.igmControls[7]=el;el.onclick=function(){var ac=(this.p7state=='play')?'pause':'play';P7_IGMcontrol(this.igmDiv,ac);return false;};el.igmSetButtonState=function(st){this.p7state=st;if(st=='play'){P7_IGMremClass(this,'pag-play');this.setAttribute('title','Pause');}
else{P7_IGMsetClass(this,'pag-play');this.setAttribute('title','Play');}};}
var hs=(P7_IGMgetIEver()>5)?1:2;el=document.getElementById(tD.id.replace('_','rbk_'));if(el){el.onclick=function(){return P7_IGMgoBack();};if(window.history.length<hs){el.style.display='none';}}
el=document.getElementById(tD.id.replace('_','pgbk_'));if(el){el.onclick=function(){return P7_IGMgoBack();};if(window.history.length<hs){el.style.display='none';}}
tD.igmFullScreen=false;el=document.getElementById(tD.id.replace('_','rmx_'));if(el){el.p7state='normal';P7_IGMremClass(this,'max');P7_IGMsetClass(this,'min');el.igmDiv=tD.id;tD.igmControls[9]=el;el.onclick=function(){var ac=(this.p7state=='fullscreen')?'normal':'fullscreen';P7_IGMfullScreen(this.igmDiv,ac);return false;};el.igmSetButtonState=function(st){this.p7state=st;if(this.p7state=='fullscreen'){P7_IGMremClass(this,'max');P7_IGMsetClass(this,'min');this.setAttribute('title','Exit Full Screen Mode');}
else{P7_IGMremClass(this,'min');P7_IGMsetClass(this,'max');this.setAttribute('title','Full Screen Mode');}};}
el=document.getElementById(tD.id.replace('_','pgx_'));if(el){el.p7state='normal';P7_IGMremClass(this,'max');P7_IGMsetClass(this,'min');el.igmDiv=tD.id;tD.igmControls[10]=el;el.onclick=function(){var ac=(this.p7state=='fullscreen')?'normal':'fullscreen';P7_IGMfullScreen(this.igmDiv,ac);return false;};el.igmSetButtonState=function(st){this.p7state=st;if(this.p7state=='fullscreen'){P7_IGMremClass(this,'max');P7_IGMsetClass(this,'min');this.setAttribute('title','Exit Full Screen Mode');}
else{P7_IGMremClass(this,'min');P7_IGMsetClass(this,'max');this.setAttribute('title','Full Screen Mode');}};}
P7_IGMpause(tD.id);P7_IGManimPreLoad(tD.id);}}
p7IGMa=true;}
function P7_IGMfullScreen(dv,ac){var i,tD,vP,ch,imA,el,cW,cvs,fh,cla,ctx;tD=document.getElementById(dv);if(ac=='fullscreen'){if(p7IGMfsd||tD.igmfullScreen){return;}}
else if(ac!='fullscreen'&&!tD.igmFullScreen){return;}
if(tD.igmShowTimer){clearTimeout(tD.igmShowTimer);}
if(tD.igmControls[9]){tD.igmControls[9].igmSetButtonState(ac);}
if(tD.igmControls[10]){tD.igmControls[10].igmSetButtonState(ac);}
vP=document.getElementById(tD.id.replace('_','imgwrapper_'));cW=document.getElementById(tD.id.replace('_','image_'));if(ac=='fullscreen'){if(tD.igmCanvas){cvs=document.getElementById(tD.igmCanvas);tD.igmOrigCanvasHeight=cvs.height;tD.igmOrigCanvasWidth=cvs.width;}
p7IGMfsd=tD.id;tD.igmStaticHeight=tD.offsetHeight;tD.igmStaticVPHeight=vP.offsetHeight;tD.igmStaticHeightOpt=tD.p7opt[19];tD.igmChromeHeight=tD.offsetHeight-vP.offsetHeight;P7_IGMsetClass(document.body,'p7IGM-suppressScroll');tD.igmFixedHeight=true;P7_IGMsetClass(tD,'IGM-fixed-height');if(!tD.igmCanvas){cla=['imlink_','imlinkv_','imlinkv2'];for(i=0;i<cla.length;i++){el=document.getElementById(tD.id.replace('_',cla[i]));if(el){P7_IGMsetClass(el,'p7IGMfixed-height');el.style.left='0px';el.style.top='0px';}}}
tD.igmFullScreen=true;P7_IGMsetClass(tD,'p7IGM-fullscreen');tD.igmFullScreenChromeHeight=tD.offsetHeight-tD.igmStaticVPHeight;P7_IGMsetClass(tD,'p7IGM-FSMode');tD.p7opt[19]=tD.offsetHeight-tD.igmFullScreenChromeHeight;if(tD.igmCanvas){vP.style.height=tD.p7opt[19]+'px';cvs=document.getElementById(tD.igmCanvas);ctx=cvs.getContext('2d');ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);}}
else{p7IGMfsd=false;tD.p7opt[19]=tD.igmStaticHeightOpt;if(tD.p7opt[19]===0){tD.igmFixedHeight=false;P7_IGMremClass(tD,'IGM-fixed-height');cla=['imlink_','imlinkv_','imlinkv2'];for(i=0;i<cla.length;i++){el=document.getElementById(tD.id.replace('_',cla[i]));if(el){P7_IGMremClass(el,'p7IGMfixed-height');el.style.left='0px';el.style.top='0px';}}}
if(tD.igmCanvas){cvs=document.getElementById(tD.igmCanvas);cvs.height=tD.igmOrigCanvasHeight;cvs.width=tD.igmOrigCanvasWidth;ctx=cvs.getContext('2d');ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);}
if(tD.igmCanvas){vP.style.height=tD.igmStaticVPHeight+'px';}
else{if(tD.p7opt[19]>0){vP.style.height=tD.p7opt[19]+'px';}
else{vP.style.height=tD.igmStaticVPHeight+'px';}}
tD.igmFullScreen=false;P7_IGMremClass(tD,'p7IGM-fullscreen');P7_IGMremClass(document.body,'p7IGM-suppressScroll');P7_IGMremClass(tD,'p7IGM-FSMode');}
if(tD.igmResizer){clearTimeout(tD.igmResizer);}
P7_IGMrsz(1);}
function P7_IGMinitB(dv){var sn,tD=document.getElementById(dv);sn=tD.p7opt[12];P7_IGMcontrol(tD.id,sn,1);P7_IGMurl(tD.id);if(tD.p7opt[1]==1){P7_IGMfullScreen(dv,'fullscreen');}
if(tD.p7opt[13]==1){tD.igmShowMode='play';if(tD.igmControls[4]){tD.igmControls[4].p7state='play';tD.igmControls[4].igmSetButtonState('play');}
if(tD.igmControls[7]){tD.igmControls[7].p7state='play';tD.igmControls[7].igmSetButtonState('play');}
if(tD.igmShowTimer){clearTimeout(tD.igmShowTimer);}
tD.igmShowTimer=setTimeout("P7_IGMcontrol('"+tD.id+"','next',2)",tD.p7opt[14]);}}
function P7_IGMshowImage(dv,sn,bp){var tA,tD,zn;bp=(bp)?bp:null;tD=document.getElementById(dv);if(tD.igmCurrentSlideNum==sn&&bp!=1){return false;}
if(tD.p7igmwait){clearTimeout(tD.p7igmwait);}
if(tD.igmOVsrcTimer){clearTimeout(tD.igmOVsrcTimer);}
tD.igmPreviousSlideNum=tD.igmCurrentSlideNum;tD.igmCurrentSlideNum=sn;tA=tD.igmImages[sn];tA.igmPreImage.src=tA.href;P7_IGMsetControlStates(tD.id);if(tD.igmPreviousSlideNum!=tD.igmCurrentSlideNum){P7_IGMremClass(tD.igmImages[tD.igmPreviousSlideNum],'thumb_down');P7_IGMremClass(tD.igmImages[tD.igmPreviousSlideNum].parentNode,'thumb_down');}
P7_IGMsetClass(tA,'thumb_down');P7_IGMsetClass(tA.parentNode,'thumb_down');P7_IGMthumbSync(dv);P7_IGMpreLoadImage(tD.id,sn,tA.igmPreIndex,bp);return false;}
function P7_IGMpreLoadImage(dv,sn,ix,bp){var tD,iM,lD,im,tA;iM=document.p7igmpre[ix];lD=document.getElementById(dv.replace('_','loading_'));tD=document.getElementById(dv);if(tD.p7igmwait){clearTimeout(tD.p7igmwait);}
if(iM.cmp&&iM.height>0&&iM.width>0){if(iM.p7Status!='load_error'){lD.style.display='none';}
if(!tD.igmCanvas){P7_IGMswitchOVsrc(dv,sn,ix,bp);}
else{P7_IGMdispA(dv,sn,bp);}}
else{lD.style.display='block';tD.p7igmwait=setTimeout("P7_IGMpreLoadImage('"+dv+"',"+sn+","+ix+","+bp+")",60);}}
function P7_IGMdispA(dv,sn,bp){var tD;tD=document.getElementById(dv);if(sn!=tD.igmCurrentSlideNum){return;}
if(tD.igmCaptionDiv){tD.igmCapClosed=false;P7_IGMcloseCapDesc(tD,'cap',sn,bp);}
if(tD.igmDescDiv){tD.igmDescClosed=false;P7_IGMcloseCapDesc(tD,'desc',sn,bp);}
if(tD.p7opt[5]==7){if(tD.igmCanvas){P7_IGMswitchImgSource(dv,sn,bp);P7_IGMpzSetCvs(dv,sn,bp);P7_IGMdispF(dv,sn,bp);}
else{P7_IGMpzSet(dv,sn,bp);P7_IGMdispF(dv,sn,bp);}}
else if(!tD.igmCaptionDiv&&!tD.igmDescDiv){P7_IGMdispB(dv,sn,bp);}}
function P7_IGMdispB(dv,sn,bp){var tD,an,tA,iM,vP,dm;tD=document.getElementById(dv);if(sn!=tD.igmCurrentSlideNum){return;}
if(tD.igmFixedHeight||tD.p7opt[5]==8){P7_IGMdispC(dv,sn,bp);return;}
an=tD.p7opt[5];if(bp==1||!p7IGMa){if(an!=7){an=0;}}
if(tD.igmCanvas){vP=document.getElementById(tD.id.replace('_','image_'));}
else{vP=document.getElementById(tD.id.replace('_','imgwrapper_'));}
tD.igmPevViewportHeight=vP.offsetHeight;tA=tD.igmImages[sn];iM=tA.igmPreImage;if(vP.p7Move){clearInterval(vP.p7Move);}
vP.style.height=vP.offsetHeight+'px';dm=P7_IGMfitImg(iM.width,iM.height,vP.offsetWidth,vP.offsetHeight);if(an>0){if(Math.round(dm[1])<vP.offsetHeight){vP.igmDiv=tD.id;vP.p7vph_c=function(cba){P7_IGMdispC(this.igmDiv,cba[0],cba[1]);};vP.p7Type='quad';vP.p7anim=[[vP.id,'height',vP.offsetHeight,dm[1]]];vP.p7StartTime=P7_IGMgetTime(0);vP.p7Duration=tD.p7opt[6];vP.p7Move=setInterval(function(){P7_IGMmove(vP,vP.p7vph_c,[sn,bp]);},p7IGMdy);}
else{P7_IGMdispC(dv,sn,bp);}}
else{if(dm[1]<vP.offsetHeight&&tD.p7opt[19]!=1){vP.style.height=dm[1]+'px';}
P7_IGMdispC(dv,sn,bp);}}
function P7_IGMdispC(dv,sn,bp){var tD,an;tD=document.getElementById(dv);if(sn!=tD.igmCurrentSlideNum){return;}
an=tD.p7opt[5];if(an<2||an==8){if(tD.igmCanvas){P7_IGMswitchImgSource(dv,sn,bp);P7_IGMsetCrossFadeCvs(dv,sn,bp);}
else{P7_IGMsetCrossFader(dv,sn,bp);}}
else if(an>1&&an<10&&an!=7){if(tD.igmCanvas){P7_IGMswitchImgSource(dv,sn,bp);P7_IGMsetSlideCvs(dv,sn,bp);}
else{P7_IGMsetSlider(dv,sn,bp);}}
else{P7_IGMswitchImgSource(dv,sn,bp);P7_IGMdispD(dv,sn,bp);}}
function P7_IGMdispD(dv,sn,bp){var tD,an,tA,iM,vP,dm;tD=document.getElementById(dv);if(tD.igmFixedHeight||tD.p7opt[5]==8){P7_IGMdispE(dv,sn,bp);return;}
if(sn!=tD.igmCurrentSlideNum){return;}
an=tD.p7opt[5];if(bp==1||!p7IGMa){if(an!=7){an=0;}}
tA=tD.igmImages[sn];iM=tA.igmPreImage;if(tD.igmCanvas){vP=document.getElementById(tD.id.replace('_','image_'));}
else{vP=document.getElementById(tD.id.replace('_','imgwrapper_'));}
if(vP.p7Move){clearInterval(vP.p7Move);}
vP.style.height=vP.offsetHeight+'px';dm=P7_IGMfitImg(iM.width,iM.height,vP.offsetWidth,vP.offsetHeight);if(an>0){if(Math.round(dm[1])>vP.offsetHeight){vP.igmDiv=tD.id;vP.p7vph_f=function(cba){P7_IGMdispE(this.igmDiv,cba[0],cba[1]);};vP.p7anim=[[vP.id,'height',vP.offsetHeight,dm[1]]];vP.p7StartTime=P7_IGMgetTime(0);vP.p7Duration=tD.p7opt[6];vP.p7Type='quad';vP.p7Move=setInterval(function(){P7_IGMmove(vP,vP.p7vph_f,[sn,bp]);},p7IGMdy);}
else{P7_IGMdispE(dv,sn,bp);}}
else{if(dm[1]>vP.offsetHeight&&tD.p7opt[19]!=1){vP.style.height=dm[1]+'px';}
P7_IGMdispE(dv,sn,bp);}}
function P7_IGMdispE(dv,sn,bp){var tD;tD=document.getElementById(dv);if(sn!=tD.igmCurrentSlideNum){return;}
if(tD.igmCaptionDiv){tD.igmCapOpened=false;P7_IGMopenCapDesc(tD,'cap',sn,bp);}
if(tD.igmDescDiv){tD.igmDescOpened=false;P7_IGMopenCapDesc(tD,'desc',sn,bp);}
P7_IGMdispF(dv,sn,bp);}
function P7_IGMdispF(dv,sn,bp){var tD,tA,iM,ns;tD=document.getElementById(dv);if(sn!=tD.igmCurrentSlideNum){return;}
ns=tD.igmCurrentSlideNum+1;ns=(ns<=tD.igmImages.length-1)?ns:1;tA=tD.igmImages[ns];iM=tA.igmPreImage;if(!iM.cmp){iM.src=tA.href;}
if(tD.igmShowMode=='play'&&bp!=1){tD.igmShowMode='play';tD.igmShowResume=false;if(tD.igmShowTimer){clearTimeout(tD.igmShowTimer);}
tD.igmShowTimer=setTimeout("P7_IGMcontrol('"+tD.id+"','next',2)",tD.p7opt[15]);}}
function P7_IGMswitchOVsrc(dv,sn,ix,bp){var tD,oV,oVI,iM,imD,an,dy=5;tD=document.getElementById(dv);if(sn!=tD.igmCurrentSlideNum){return;}
an=tD.p7opt[5];dy=10;if(!tD.igmCanvas&&bp!=1){dy=500;}
iM=document.getElementById(tD.id.replace('_','im_'));imD=document.getElementById(tD.id.replace('_','image_'));oV=document.getElementById(dv.replace('_','imagev_'));oVI=document.getElementById(dv.replace('_','imv_'));oV.style.width=imD.offsetWidth+'px';oVI.src=iM.src;oVI.style.height=iM.style.height;oVI.style.width=iM.style.width;oVI.parentNode.style.left=iM.parentNode.style.left;oVI.parentNode.style.top=iM.parentNode.style.top;oV.style.left=imD.style.left;oV.style.top=imD.style.top;if(tD.igmOVsrcTimer){clearTimeout(tD.igmOVsrcTimer);}
tD.igmOVsrcTimer=setTimeout("P7_IGMdispA('"+dv+"',"+sn+","+bp+")",dy);}
function P7_IGMswitchImgSource(dv,sn,bp,imd){var i,tD,iM,imT,imA,cN,tA,imlA,cl,el,tt,rl,imD;tD=document.getElementById(dv);if(sn!=tD.igmCurrentSlideNum){return;}
if(!imd){imd=tD.id.replace('_','image_');}
imD=document.getElementById(imd);tA=tD.igmImages[tD.igmCurrentSlideNum];imT=tA.getElementsByTagName('IMG')[0];iM=imD.getElementsByTagName('IMG')[0];imA=imD.getElementsByTagName('A')[0];iM.src=tA.igmPreImage.src;imA.removeAttribute("href");imA.setAttribute("title","");imA.onclick=null;cN=tA.parentNode.childNodes;for(i=0;i<cN.length;i++){if(cN[i].nodeType==1){cl=cN[i].className;if(cl&&cl=='p7igm_image_link'){el=cN[i].getElementsByTagName('A');if(el&&el[0]){imA.setAttribute("href",el[0].getAttribute("href"));tt='';if(el[0].textContent){tt=el[0].textContent;}
else if(el[0].innerText){tt=el[0].innerText;}
tt=(tt&&tt!=='')?tt:imT.getAttribute('alt');imA.setAttribute("title",tt);if(el[0].getAttribute('target')){imA.setAttribute('target',el[0].getAttribute('target'));}
else{imA.removeAttribute('target');}
rl=el[0].getAttribute('rel');if(rl&&rl=='new'){imA.onclick=function(){return P7_IGMopenWin(this);};}
else{imA.onclick=function(){return P7_IGMImageClick(this);};}}
break;}}}}
function P7_IGMcloseCapDesc(tD,tp,sn,bp){var cd,cw,an,cD,cW,vP,sD,st,ady;if(sn!=tD.igmCurrentSlideNum){return;}
vP=document.getElementById(tD.id.replace('_','imgwrapper_'));an=(tp=='cap')?tD.p7opt[7]:tD.p7opt[8];ady=(tp=='cap')?tD.p7opt[10]:tD.p7opt[11];if(bp!=2){ady=ady/3;}
cd=(tp=='cap')?'caption_':'desc_';cw=(tp=='cap')?'capwrapper_':'descwrapper_';cD=document.getElementById(tD.id.replace('_',cd));cW=document.getElementById(tD.id.replace('_',cw));if(bp==1||!p7IGMa){if(tD.p7opt[5]!=7){an=0;}}
if(an>0){if(an==1){if(cW.p7Fader){clearInterval(cW.p7Fader);}
P7_IGMfade(cW,99,1,ady,false,false,P7_IGMCapDescClosed,[sn,bp]);}
else if(an==2){if(cD.p7Move){clearInterval(cD.p7Move);}
if(cW.p7Move){clearInterval(cW.p7Move);}
if(cW.igmPositionType=='overlay-top'){cW.p7anim=[[cW.id,'top',cW.offsetTop,cW.offsetHeight*-1]];sD=cW;}
else if(cW.igmPositionType=='overlay-bottom'){st=parseInt(P7_IGMgetStyle(cW,'bottom','bottom'),10);st=(st)?st:0;cW.p7anim=[[cW.id,'bottom',st,cW.offsetHeight*-1]];sD=cW;}
else if(cW.igmPositionType=='top'){cW.style.height=cW.offsetHeight+'px';cD.p7anim=[[cD.id,'top',cD.offsetTop,cD.offsetHeight*-1]];sD=cD;}
else if(cW.igmPositionType=='bottom'){cW.style.height=cW.offsetHeight+'px';cD.p7anim=[[cD.id,'top',cD.offsetTop,cD.offsetHeight]];sD=cD;}
else{cD.style.visibility='hidden';cW.style.visibility='hidden';if(tp=='cap'){tD.igmCapClosed=true;}
else{tD.igmDescClosed=true;}
P7_IGMCapDescClosed.call(cW,sn,bp);return;}
sD.p7Type='quad';sD.p7StartTime=P7_IGMgetTime(0);sD.p7Duration=ady;sD.p7Move=setInterval(function(){P7_IGMmove(sD,P7_IGMCapDescClosed,[sn,bp]);},p7IGMdy);}}
else{cD.style.visibility='hidden';cW.style.visibility='hidden';if(cW.igmPositionType=='overlay-bottom'){cW.style.bottom=cW.offsetHeight*-1+'px';}
if(an==1){if(cW.filters){cW.style.filter='alpha(opacity=1)';}
else{cW.style.opacity=0.01;}}
if(tp=='cap'){tD.igmCapClosed=true;}
else{tD.igmDescClosed=true;}
P7_IGMCapDescClosed.call(cW,[sn,bp]);}}
function P7_IGMCapDescClosed(cba){var tD=document.getElementById(this.igmDiv);if(cba[0]!=tD.igmCurrentSlideNum){return;}
this.p7State='closed';this.style.visibility='hidden';if(this.igmType=='cap'){tD.igmCapClosed=true;}
else{tD.igmDescClosed=true;}
if(tD.p7opt[5]==7){P7_IGMopenCapDesc(tD,this.igmType,cba[0],cba[1]);}
else{tD.onCapDescClosed(cba[0],cba[1]);}}
function P7_IGMopenCapDesc(tD,tp,sn,bp){var i,cd,cw,cl,an,cD,cW,vP,sD,tA,imT,cN,sR,ob,tt,ch,st,ady,hasCnt=true;if(sn!=tD.igmCurrentSlideNum){return;}
vP=document.getElementById(tD.id.replace('_','imgwrapper_'));an=(tp=='cap')?tD.p7opt[7]:tD.p7opt[8];ady=(tp=='cap')?tD.p7opt[10]:tD.p7opt[11];cd=(tp=='cap')?'caption_':'desc_';cw=(tp=='cap')?'capwrapper_':'descwrapper_';cD=document.getElementById(tD.id.replace('_',cd));cW=document.getElementById(tD.id.replace('_',cw));cD.style.visibility='hidden';cW.style.visibility='hidden';tA=tD.igmImages[tD.igmCurrentSlideNum];ch=cD.offsetHeight;if(tp=='cap'){tt=tA.getAttribute('title');ob=document.createTextNode(tt);if(cD.hasChildNodes){for(i=0;i<cD.childNodes.length;i++){cD.removeChild(cD.childNodes[i]);}}
if(tt&&tt!==''){cD.appendChild(ob);}
else{hasCnt=false;}}
else{if(cD.p7src){P7_IGMcopyCN(cD.p7src,cD);}
cD.p7src=false;cN=tA.parentNode.childNodes;for(i=0;i<cN.length;i++){if(cN[i].nodeType==1){cl=cN[i].className;if(cl&&cl=='p7igm_description'){sR=cN[i];break;}}}
if(sR){P7_IGMcopyCN(cD,sR);cD.p7src=sR;}
else{hasCnt=false;}}
if(bp==1||!p7IGMa){if(tD.p7opt[5]!=7){an=0;}}
if(an>0){if(an==1){if(cW.p7Fader){clearInterval(cW.p7Fader);}
if(cW.igmPositionType=='overlay-bottom'){cW.style.bottom='0px';}
if(hasCnt){cD.style.visibility='visible';P7_IGMfade(cW,1,99,ady,true,true,P7_IGMCapDescOpened,[sn,bp]);}
else{if(tp=='cap'){tD.igmCapOpened=true;}
else{tD.igmDescOpened=true;}}}
else if(an==2){if(cD.p7Move){clearInterval(cD.p7Move);}
if(cW.p7Move){clearInterval(cW.p7Move);}
cD.igmAdjustHeight=false;if(hasCnt){if(cW.igmPositionType=='overlay-top'){cW.p7anim=[[cW.id,'top',cW.offsetHeight*-1,0]];sD=cW;}
else if(cW.igmPositionType=='overlay-bottom'){cW.p7anim=[[cW.id,'bottom',cW.offsetHeight*-1,0]];sD=cW;}
else if(cW.igmPositionType=='top'){cD.p7anim=[[cD.id,'top',cD.offsetHeight*-1,0]];if(ch!=cD.offsetHeight){cD.igmAdjustHeight=true;}
sD=cD;}
else if(cW.igmPositionType=='bottom'){cD.p7anim=[[cD.id,'top',cW.offsetHeight,0]];if(ch!=cD.offsetHeight){cD.igmAdjustHeight=true;}
sD=cD;}
else{cD.style.visibility='hidden';cW.style.visibility='hidden';if(tp=='cap'){tD.igmCapOpened=true;}
else{tD.igmDescOpened=true;}
return;}
if(sD.p7State!='open'){sD.style[sD.p7anim[0][1]]=sD.p7anim[0][2]+'px';}
sD.p7State='open';cD.style.visibility='visible';cW.style.visibility='visible';sD.p7Type='quad';sD.p7StartTime=P7_IGMgetTime(0);sD.p7Duration=ady;sD.p7Move=setInterval(function(){P7_IGMmove(sD,P7_IGMCapDescOpened,[sn,bp]);},p7IGMdy);}
else{if(tp=='cap'){tD.igmCapOpened=true;}
else{tD.igmDescOpened=true;}}}}
else{if(hasCnt){if(cW.filters){cW.style.filter='';}
else{cW.style.opacity=1.0;}
cD.style.visibility='visible';cW.style.visibility='visible';if(cW.igmPositionType=='overlay-bottom'){cW.style.bottom='0px';}}
if(tp=='cap'){tD.igmCapOpened=true;}
else{tD.igmDescOpened=true;}}}
function P7_IGMCapDescOpened(cba){var tD=document.getElementById(this.igmDiv);if(cba[0]!=tD.igmCurrentSlideNum){return;}
if(this.igmAdjustHeight){P7_IGMCapDescAdjustHeight(this,cba);}
else{if(this.igmType=='cap'){tD.igmCapOpened=true;}
else{tD.igmDescOpened=true;}
if(tD.p7opt[5]!=7){}}}
function P7_IGMCapDescAdjustHeight(el,cba){var tD=document.getElementById(this.igmDiv);if(cba[0]!=tD.igmCurrentSlideNum){return;}
var cW=el.parentNode;if(cW.p7Move){clearInterval(cW.p7Move);}
cW.p7callback=function(cba){var tD=document.getElementById(this.igmDiv);this.style.height='auto';if(this.igmType=='cap'){tD.igmCapOpened=true;}
else{tD.igmDescOpened=true;}
if(tD.p7opt[5]!=7){}};cW.p7Type='quad';cW.p7anim=[[cW.id,'height',cW.offsetHeight,el.offsetHeight]];cW.p7StartTime=P7_IGMgetTime(0);cW.p7Duration=15;cW.p7Move=setInterval(function(){P7_IGMmove(cW,cW.p7callback,cba);},p7IGMdy);}
function P7_IGMctrl(dv,ac){return P7_IGMcontrol(dv,ac);}
function P7_IGMcontrol(dv,ac,bp){var i,tD,cs,ts,op,sn,eI,eC,eD,tm=0,pauseOnAction=false,rs=false,m=false;tD=document.getElementById(dv);if(tD&&tD.igmImages){if(tD.igmShowTimer){clearTimeout(tD.igmShowTimer);}
if(tD.p7opt[20]==1){pauseOnAction=true;}
cs=tD.igmCurrentSlideNum;ts=tD.igmImageNums;op=tD.p7opt;if(ac=='pause'){P7_IGMpause(dv);return m;}
if(!bp&&pauseOnAction){P7_IGMpause(tD.id);}
if(ac=='play'){tD.igmShowMode='play';if(tD.igmControls[4]){tD.igmControls[4].p7state='play';tD.igmControls[4].igmSetButtonState('play');}
if(tD.igmControls[7]){tD.igmControls[7].p7state='play';tD.igmControls[7].igmSetButtonState('play');}
ac='next';rs=true;}
if(ac=='first'){sn=1;}
else if(ac=='prev'){sn=cs-1;if(sn<1){sn=ts;}}
else if(ac=='next'){sn=cs+1;if(tD.igmShowMode=='play'){if(tD.igmDirection=='left'){sn=cs-1;}
if(sn>ts){tD.igmNumPlays++;if(tD.p7opt[17]>0&&tD.igmNumPlays>tD.p7opt[17]){tD.igmNumPlays=0;sn=(tD.p7opt[18]==1)?1:tD.igmImageNums;tD.igmDirection='right';P7_IGMpause(tD.id);}
else{if(tD.p7opt[16]===0){sn=cs-1;tD.igmDirection='left';}
else{sn=1;}}}
if(sn<1){tD.numPlays++;tD.igmDirection='right';if(tD.p7opt[7]>0&&tD.numPlays>tD.p7opt[7]){tD.igmNumPlays=0;sn=(tD.p7opt[18]==1)?1:tD.igmImageNums;P7_IGMpause(tD.id);}
else{sn=cs+1;}}}
else{if(sn>ts){sn=1;}}}
else if(ac=='last'){sn=ts;}
else{sn=ac;}
sn=(sn<1)?1:sn;sn=(sn>tD.igmImageNums)?tD.igmImageNums:sn;if(sn==tD.igmCurrentSlideNum&&bp!=1){return m;}
tD.igmCarousel='next';if((sn<tD.igmCurrentSlideNum)||ac=='prev'){tD.igmCarousel='prev';}
if(rs){tm=100;setTimeout("P7_IGMshowImage('"+tD.id+"',"+sn+","+bp+")",tm);}
else{P7_IGMshowImage(tD.id,sn,bp);}}
return false;}
function P7_IGMsetControlStates(dv){var i,tD,sn,cl='off';tD=document.getElementById(dv);sn=tD.igmCurrentSlideNum;if(sn<=1){P7_IGMsetClass(tD.igmControls[2],cl);}
else{P7_IGMremClass(tD.igmControls[2],cl);}
if(sn>=tD.igmImageNums){P7_IGMsetClass(tD.igmControls[6],cl);}
else{P7_IGMremClass(tD.igmControls[6],cl);}
if(tD.igmPaginator){for(i=1;i<tD.igmPaginators.length;i++){if(i==sn){P7_IGMsetClass(tD.igmPaginators[i],'pags-down');}
else{P7_IGMremClass(tD.igmPaginators[i],'pags-down');}}}}
function P7_IGMpause(d){var cD,tD=document.getElementById(d);if(tD){tD.igmShowMode='pause';if(tD.igmShowTimer){clearTimeout(tD.igmShowTimer);}
if(tD.igmControls[4]){tD.igmControls[4].p7state='pause';tD.igmControls[4].igmSetButtonState('pause');}
if(tD.igmControls[7]){tD.igmControls[7].p7state='pause';tD.igmControls[7].igmSetButtonState('pause');}}}
function P7_IGMthumbSync(dv){var tD,tV,tW,sn,sl,fl,li,vw,vh,tw,dh,viewEdge,vprtEdge,lastli,minLeft,m=false;tD=document.getElementById(dv);tV=document.getElementById(tD.id.replace('_','tvp_'));tW=document.getElementById(tD.id.replace('_','tgw_'));if(!tD.igmHasThumbs&&tD.p7opt[2]!=1){return;}
if(tW.p7Move){clearInterval(tW.p7Move);tW.p7MoveRunning=false;}
P7_IGMresetOffsets(tW.parentNode);sn=tD.igmCurrentSlideNum;li=tD.igmImages[sn].parentNode;vw=tV.offsetWidth;tw=li.offsetWidth;dh=tW.offsetHeight;sl=parseInt(tW.style.left,10);fl=sl;lastli=tD.igmImages[tD.igmImages.length-1].parentNode;minLeft=(lastli.offsetLeft+lastli.offsetWidth-tV.offsetWidth)*-1;if(tD.igmThumbScrollType=='horiz'){viewEdge=li.offsetLeft+tw;vprtEdge=(tW.offsetLeft*-1)+vw;if(viewEdge>vprtEdge||(li.offsetLeft*-1)>tW.offsetLeft){fl=(li.offsetLeft*-1)+((vw-tw)/2);fl=(fl>0)?0:fl;fl=(fl<minLeft)?minLeft:fl;tW.p7anim=[[tW.id,'left',sl,fl]];m=true;}}
else{return;}
if(m){tW.p7Type='quad';tW.p7StartTime=P7_IGMgetTime(0);tW.p7Duration=tD.p7opt[3];tW.p7Move=setInterval(function(){P7_IGMmove(tW,P7_IGMthumbSetArrowStates,tD.id);},p7IGMdy);}}
function P7_IGMthumbScroll(d,dr){var tD,tW,tV,li,minLeft,vw,sl=0,fl=0;tD=document.getElementById(d);tV=document.getElementById(tD.id.replace('_','tvp_'));tW=document.getElementById(tD.id.replace('_','tgw_'));if(tW.p7Move){clearInterval(tW.p7Move);tW.p7MoveRunning=false;}
if(dr=='stop'){return false;}
P7_IGMresetOffsets(tW.parentNode);sl=tW.offsetLeft;vw=tV.offsetWidth;li=tD.igmImages[tD.igmImages.length-1].parentNode;minLeft=(li.offsetLeft+li.offsetWidth-tV.offsetWidth)*-1;if(dr=='left'){fl=sl+vw;fl=(fl>0)?0:fl;tW.p7anim=[[tW.id,'left',sl,fl]];}
else if(dr=='right'){fl=sl-vw;fl=(fl<minLeft)?minLeft:fl;tW.p7anim=[[tW.id,'left',sl,fl]];}
tW.p7Type='quad';tW.p7StartTime=P7_IGMgetTime(0);tW.p7Duration=tD.p7opt[3];tW.p7Move=setInterval(function(){P7_IGMmove(tW,P7_IGMthumbSetArrowStates,tD.id);},p7IGMdy);return false;}
function P7_IGMthumbSetArrowStates(d){var a,tD,tW,tV,cl,vh,minLeft,li,cls='arrow-off';tD=document.getElementById(d);tW=document.getElementById(d.replace('_','tgw_'));tV=document.getElementById(tD.id.replace('_','tvp_'));if(!tD.igmHasThumbs){return;}
cl=tW.offsetLeft;li=tD.igmImages[tD.igmImages.length-1].parentNode;minLeft=(li.offsetLeft+li.offsetWidth-tV.offsetWidth)*-1;vh=tV.offsetHeight;a=document.getElementById(d.replace('_','left_'));if(a){if(cl>=0){P7_IGMsetClass(a,cls);P7_IGMsetClass(a.parentNode,cls);}
else{P7_IGMremClass(a,cls);P7_IGMremClass(a.parentNode,cls);}}
a=document.getElementById(d.replace('_','right_'));if(a){if(cl<=minLeft){P7_IGMsetClass(a,cls);P7_IGMsetClass(a.parentNode,cls);}
else{P7_IGMremClass(a,cls);P7_IGMremClass(a.parentNode,cls);}}}
function P7_IGMsetCrossFadeCvs(dv,sn,bp){var tD,tA,iM,cD,pD,vP,ci,cvs,ctx,pz,cb,tp,dm,vh;tD=document.getElementById(dv);vP=document.getElementById(tD.id.replace('_','imgwrapper_'));tA=tD.igmImages[sn];iM=tA.igmPreImage;if(tD.igmCurrentPZ=='A'){cD=document.getElementById(tD.id.replace('_','imagev_'));pD=document.getElementById(tD.id.replace('_','image_'));tD.igmCurrentPZ='B';}
else{cD=document.getElementById(tD.id.replace('_','image_'));pD=document.getElementById(tD.id.replace('_','imagev_'));tD.igmCurrentPZ='A';}
if(pD.p7CvsAnim){clearInterval(pD.p7CvsAnim);}
if(cD.p7CvsAnim){clearInterval(cD.p7CvsAnim);}
cD.igmPrevDiv=pD.id;pD.igmPrevDiv=cD.id;cD.igmCurrentImage=iM;cD.igmPrevImage=pD.igmCurrentImage;cvs=document.getElementById(tD.igmCanvas);ctx=cvs.getContext('2d');vP.igmViewportWidth=vP.offsetWidth;dm=P7_IGMfitImg(tA.igmPreImage.width,tA.igmPreImage.height,vP.offsetWidth,vP.offsetHeight,tD.igmFixedHeight);if(tD.p7opt[5]==8){tA.igmPZoptions=['igmPZ',2,2,2,2,15,1,1];P7_IGMpzPosition(cD,tA.igmPZoptions,cvs.width,cvs.height,tA.igmPreImage.width,tA.igmPreImage.height);}
else{cD.p7currentWidth=dm[0];cD.p7currentHeight=dm[1];if(tD.igmFixedHeight){cD.p7currentLeft=(vP.offsetWidth-dm[0])/2;cD.p7currentTop=(vP.offsetHeight-dm[1])/2;}
else{cD.p7currentLeft=0;cD.p7currentTop=0;}}
cD.igmCanvas=tD.igmCanvas;cD.igmDiv=tD.id;cD.crossFadeFinished=function(cba){var tD=document.getElementById(this.igmDiv);if(tD.p7opt[5]==8){P7_IGMdispE(this.igmDiv,cba[0],cba[1]);}
else{P7_IGMdispD(this.igmDiv,cba[0],cba[1]);}};cb=false;tp='linear';cD.igmFadeTime=0;cD.igmFadeBegin=0;cD.igmFadeFinish=100;cD.igmFadeDuration=tD.p7opt[6]/p7IGMdy;if(tD.p7opt[5]<1||bp==1||!p7IGMa){cD.igmFadeDuration=1;}
cD.p7CvsAnim=setInterval(function(){P7_IGMcrossFadeCvs(cD,cD.crossFadeFinished,tp,[sn,bp]);},p7IGMdy);}
function P7_IGMcrossFadeCvs(el,cb,tp,cba){var cvs,ctx,iM,obOut,imOut,pi,po;iM=el.igmCurrentImage;cvs=document.getElementById(el.igmCanvas);ctx=cvs.getContext('2d');obOut=document.getElementById(el.igmPrevDiv);if(obOut&&obOut.igmCurrentImage){imOut=obOut.igmCurrentImage;}
if(el.igmFadeTime<el.igmFadeDuration){el.igmFadeTime++;pi=P7_IGMlinear(el.igmFadeTime,el.igmFadeBegin,el.igmFadeFinish-el.igmFadeBegin,el.igmFadeDuration);po=el.igmFadeFinish-pi;if(imOut){ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);ctx.globalAlpha=(po/100);ctx.drawImage(imOut,obOut.p7currentLeft,obOut.p7currentTop,obOut.p7currentWidth,obOut.p7currentHeight);}
ctx.globalAlpha=pi/100;ctx.drawImage(iM,el.p7currentLeft,el.p7currentTop,el.p7currentWidth,el.p7currentHeight);}
else{clearInterval(el.p7CvsAnim);if(cb&&typeof(cb)==="function"){cb.call(el,cba);}}}
function P7_IGMsetSlideCvs(dv,sn,bp){var tD,tA,iM,cD,pD,vP,an,ci,cvs,ctx,pz,cb,tp,dm,sl,st,fl,ft,vw,vh,pm;tD=document.getElementById(dv);vP=document.getElementById(tD.id.replace('_','imgwrapper_'));tA=tD.igmImages[sn];iM=tA.igmPreImage;an=tD.p7opt[5];if(tD.igmCurrentPZ=='A'){cD=document.getElementById(tD.id.replace('_','imagev_'));pD=document.getElementById(tD.id.replace('_','image_'));tD.igmCurrentPZ='B';}
else{cD=document.getElementById(tD.id.replace('_','image_'));pD=document.getElementById(tD.id.replace('_','imagev_'));tD.igmCurrentPZ='A';}
if(pD.p7CvsAnim){clearInterval(pD.p7CvsAnim);}
if(cD.p7CvsAnim){clearInterval(cD.p7CvsAnim);}
cD.igmPrevDiv=pD.id;pD.igmPrevDiv=cD.id;cD.igmCurrentImage=iM;cD.igmPrevImage=pD.igmCurrentImage;cvs=document.getElementById(tD.igmCanvas);ctx=cvs.getContext('2d');vP.igmViewportWidth=vP.offsetWidth;dm=P7_IGMfitImg(tA.igmPreImage.width,tA.igmPreImage.height,vP.offsetWidth,vP.offsetHeight,tD.igmFixedHeight);cD.p7currentWidth=dm[0];cD.p7currentHeight=dm[1];cD.igmCanvas=tD.igmCanvas;cD.igmDiv=tD.id;vw=cvs.width;vh=cvs.height;pD.p7startLeft=pD.p7startTop=cD.p7startLeft=cD.p7startTop=0;pD.p7finishLeft=pD.p7finishTop=cD.p7finishLeft=cD.p7finishTop=0;if(an==6){an=Math.floor((Math.random()*4)+2);}
if(tD.igmCarousel=='prev'){if(an==2){an=3;}
else if(an==3){an=2;}
else if(an==4){an=5;}
else if(an==5){an=4;}}
tD.igmCarousel='next';if(an==2){cD.p7startLeft=dm[0]*-1;pD.p7finishLeft=vw;}
else if(an==3){cD.p7startLeft=dm[0];pD.p7finishLeft=vw*-1;}
else if(an==4){cD.p7startTop=dm[1]*-1;pD.p7finishTop=vP.offsetHeight;}
else{cD.p7startTop=tD.igmPevViewportHeight;pD.p7finishTop=tD.igmPevViewportHeight*-1;}
if(tD.igmFixedHeight){cD.p7finishLeft=(vw-dm[0])/2;cD.p7finishTop=(vh-dm[1])/2;pD.p7startLeft=pD.p7currentLeft;pD.p7startTop=pD.p7currentTop;if(an==2){cD.p7startLeft=(vw*-1)+((vw-dm[0])/2);cD.p7startTop=(vh-dm[1])/2;pD.p7finishLeft=pD.p7startLeft+vw;pD.p7finishTop=pD.p7startTop;}
else if(an==3){cD.p7startLeft=vw+((vw-dm[0])/2);cD.p7startTop=(vh-dm[1])/2;pD.p7finishLeft=pD.p7startLeft-vw;pD.p7finishTop=pD.p7startTop;}
else if(an==4){cD.p7startLeft=(vw-dm[0])/2;cD.p7startTop=(vh*-1)+((vh-dm[1])/2);pD.p7finishLeft=pD.p7startLeft;pD.p7finishTop=pD.p7startTop+vh;}
else{cD.p7startLeft=(vw-dm[0])/2;cD.p7startTop=vh+((vh-dm[1])/2);pD.p7finishLeft=pD.p7startLeft;pD.p7finishTop=pD.p7startTop-vh;}}
cD.p7StartTime=P7_IGMgetTime(0);cD.p7Duration=tD.p7opt[6];if(bp==1||!p7IGMa){cD.p7Duration=1;}
cD.slideFinished=function(cba){P7_IGMdispD(this.igmDiv,cba[0],cba[1]);};tp='quad';cD.p7CvsAnim=setInterval(function(){P7_IGMslideCvs(cD,cD.slideFinished,tp,[sn,bp]);},p7IGMdy);}
function P7_IGMslideCvs(cD,cb,tp,cba){var pD,cI,pI,cvs,ctx,x=0,xx=0,y=0,yy=0,m=false;cI=cD.igmCurrentImage;cvs=document.getElementById(cD.igmCanvas);ctx=cvs.getContext('2d');pD=document.getElementById(cD.igmPrevDiv);if(pD&&pD.igmCurrentImage){pI=pD.igmCurrentImage;}
var elapsedTime=P7_IGMgetTime(cD.p7StartTime);if(elapsedTime>=cD.p7Duration){elapsedTime=cD.p7Duration;m=true;}
x=P7_IGManim(tp,elapsedTime,cD.p7startLeft,cD.p7finishLeft-cD.p7startLeft,cD.p7Duration);y=P7_IGManim(tp,elapsedTime,cD.p7startTop,cD.p7finishTop-cD.p7startTop,cD.p7Duration);ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);ctx.drawImage(cI,x,y,cD.p7currentWidth,cD.p7currentHeight);cD.p7currentLeft=x;cD.p7currentTop=y;if(pD&&pI){xx=P7_IGManim(tp,elapsedTime,pD.p7startLeft,pD.p7finishLeft-pD.p7startLeft,cD.p7Duration);yy=P7_IGManim(tp,elapsedTime,pD.p7startTop,pD.p7finishTop-pD.p7startTop,cD.p7Duration);ctx.drawImage(pI,xx,yy,pD.p7currentWidth,pD.p7currentHeight);}
if(m){clearInterval(cD.p7CvsAnim);ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);ctx.drawImage(cI,cD.p7finishLeft,cD.p7finishTop,cD.p7currentWidth,cD.p7currentHeight);if(cb&&typeof(cb)==="function"){cb.call(cD,cba);}}}
function P7_IGMsetSlider(dv,sn,bp){var tD,vP,tA,iM,oV,iW,an,dm,st=0,sl=0,fl=0,ft=0,vw,vh,x=0,xx=0,y=0,yy=0;tD=document.getElementById(dv);vP=document.getElementById(tD.id.replace('_','imgwrapper_'));iW=document.getElementById(tD.id.replace('_','image_'));iM=document.getElementById(tD.id.replace('_','im_'));vh=vP.offsetHeight;vw=vP.offsetWidth;oV=document.getElementById(tD.id.replace('_','overlay_'));tA=tD.igmImages[sn];an=tD.p7opt[5];if(oV.p7Move){clearInterval(oV.p7Move);}
dm=P7_IGMgetImageFit(tA,iM,vP,tD.igmFixedHeight);tD.igmOVim2.src=tA.igmPreImage.src;tD.igmOVim2.style.width=dm[0]+'px';tD.igmOVim2.style.height=dm[1]+'px';if(tD.igmFixedHeight){var cA=tD.igmOVim2.parentNode;P7_IGMcenterElement(cA,cA.offsetWidth,cA.offsetHeight,vw,vh);}
if(an==6){an=Math.floor((Math.random()*4)+2);}
if(tD.igmCarousel=='prev'){if(an==2){an=3;}
else if(an==3){an=2;}
else if(an==4){an=5;}
else if(an==5){an=4;}}
if(an==2){sl=vw*-1;x=vw;oV.p7anim=[[oV.id,'left',sl,fl]];}
else if(an==3){fl=vw*-1;xx=vw;oV.p7anim=[[oV.id,'left',sl,fl]];}
else if(an==4){if(tD.igmFixedHeight){st=vh*-1;y=vh;}
else{st=dm[1]*-1;y=dm[1];}
oV.p7anim=[[oV.id,'top',st,ft]];}
else if(an==5){if(tD.igmFixedHeight){st=0;ft=vh*-1;yy=vh;}
else{st=0;ft=tD.igmOVim1.height*-1;yy=tD.igmOVim1.height;}
oV.p7anim=[[oV.id,'top',st,ft]];}
tD.igmOVdiv1.style.left=x+'px';tD.igmOVdiv1.style.top=y+'px';tD.igmOVdiv2.style.left=xx+'px';tD.igmOVdiv2.style.top=yy+'px';oV.style.left=sl+'px';oV.style.top=st+'px';iW.style.left='-9000px';iW.style.display='block';iM.style.width=dm[0]+'px';iM.style.height=dm[1]+'px';if(tD.igmFixedHeight){cA=iM.parentNode;P7_IGMcenterElement(cA,cA.offsetWidth,cA.offsetHeight,vw,vh);}
P7_IGMswitchImgSource(dv,sn,bp);oV.slideFinished=function(cba){var tD=document.getElementById(this.igmDiv);var iW=document.getElementById(tD.id.replace('_','image_'));iW.style.display='block';iW.style.left='0px';this.style.left='-9000px';P7_IGMdispD(this.igmDiv,cba[0],cba[1]);};oV.p7StartTime=P7_IGMgetTime(0);oV.p7Duration=tD.p7opt[6];oV.p7Type='quad';if(bp==1||!p7IGMa){oV.p7Duration=1;}
oV.p7Move=setInterval(function(){P7_IGMmove(oV,oV.slideFinished,[sn,bp]);},p7IGMdy);}
function P7_IGMsetCrossFader(dv,sn,bp){var tD,vP,oV,tA,iM,iMV,vh,vw,cD,dm;tD=document.getElementById(dv);vP=document.getElementById(tD.id.replace('_','imgwrapper_'));vh=vP.offsetHeight;vw=vP.offsetWidth;cD=document.getElementById(tD.id.replace('_','image_'));iM=document.getElementById(tD.id.replace('_','im_'));oV=document.getElementById(tD.id.replace('_','imagev_'));iMV=document.getElementById(tD.id.replace('_','imv_'));tA=tD.igmImages[sn];if(cD.p7fader){clearInterval(cD.p7fader);}
oV.style.left=cD.style.left;oV.style.display='block';cD.style.left='-9000px';cD.style.display='block';dm=P7_IGMgetImageFit(tA,iM,vP,tD.igmFixedHeight);if(tD.p7opt[5]==8){tA.igmPZoptions=['igmPZ',2,2,2,2,15,1,1];P7_IGMpzPosition(cD,tA.igmPZoptions,vw,vh,tA.igmPreImage.width,tA.igmPreImage.height);iM.style.width=cD.p7finishWidth+'px';iM.style.height=cD.p7startHeight+'px';cD.style.top=cD.p7finishTop+'px';}
else{cD.p7finishLeft=0;iM.style.width=dm[0]+'px';iM.style.height=dm[1]+'px';if(tD.igmFixedHeight){var cA=iM.parentNode;P7_IGMcenterElement(cA,cA.offsetWidth,cA.offsetHeight,vw,vh);}}
P7_IGMswitchImgSource(dv,sn,bp,cD.id);cD.p7StartOpacity=1;cD.p7FinishOpacity=99;oV.p7StartOpacity=99;oV.p7FinishOpacity=1;if(cD.filters){cD.style.filter='alpha(opacity='+cD.p7StartOpacity+')';oV.style.filter='alpha(opacity='+oV.p7StartOpacity+')';}
else{cD.style.opacity=cD.p7StartOpacity/100;oV.style.opacity=oV.p7StartOpacity/100;}
cD.style.left=cD.p7finishLeft+'px';cD.style.display='block';cD.fadeFinished=function(cba){var tD=document.getElementById(this.igmDiv);var oV=document.getElementById(tD.id.replace('_','imagev_'));oV.style.left='-9000px';if(this.filters){this.style.filter='';oV.style.filter='';}
else{this.style.opacity=1.0;oV.style.opacity=1.0;}
P7_IGMdispD(this.igmDiv,cba[0],cba[1]);};cD.p7FadeStartTime=P7_IGMgetTime(0);cD.p7FadeDuration=tD.p7opt[6];cD.p7Type='linear';if(tD.p7opt[5]<1||bp==1||!p7IGMa){cD.p7FadeDuration=1;}
cD.p7Fader=setInterval(function(){P7_IGMcrossFader(cD,oV,cD.fadeFinished,[sn,bp]);},p7IGMdy);}
function P7_IGMcrossFader(el,elo,cb,cba){var pi,po,m=false,elapsedTime=P7_IGMgetTime(el.p7FadeStartTime);if(elapsedTime>=el.p7FadeDuration){elapsedTime=el.p7FadeDuration;m=true;}
pi=P7_IGMlinear(elapsedTime,el.p7StartOpacity,el.p7FinishOpacity-el.p7StartOpacity,el.p7FadeDuration);po=P7_IGMlinear(elapsedTime,elo.p7StartOpacity,elo.p7FinishOpacity-elo.p7StartOpacity,el.p7FadeDuration);if(el.filters){el.style.filter='alpha(opacity='+pi+')';elo.style.filter='alpha(opacity='+po+')';}
else{el.style.opacity=pi/100;elo.style.opacity=po/100;}
if(m){clearInterval(el.p7Fader);if(cb&&typeof(cb)==="function"){cb.call(el,cba);}}}
function P7_IGMgetTime(st){var d=new Date();return d.getTime()-st;}
function P7_IGMmove(el,cb,cba){var i,ob,x,m=false;var elapsedTime=P7_IGMgetTime(el.p7StartTime);if(elapsedTime>=el.p7Duration){elapsedTime=el.p7Duration;m=true;}
for(i=0;i<el.p7anim.length;i++){ob=(el.id==el.p7anim[i][0])?el:document.getElementById(el.p7anim[i][0]);if(el.p7anim[i][2]!=el.p7anim[i][3]){x=P7_IGManim(el.p7Type,elapsedTime,el.p7anim[i][2],el.p7anim[i][3]-el.p7anim[i][2],el.p7Duration);ob.style[el.p7anim[i][1]]=x+'px';}}
if(m){clearInterval(el.p7Move);el.p7MoveRunning=false;if(cb&&typeof(cb)==="function"){cb.call(el,cba);}}}
function P7_IGMfade(el,st,fn,dur,cf,vs,cb,cba){if(el.p7Fader){clearInterval(el.p7Fader);}
el.p7StartOpacity=st;el.p7FinishOpacity=fn;el.p7FadeStartTime=P7_IGMgetTime(0);el.p7FadeDuration=dur;el.p7Fader=setInterval(function(){P7_IGMfader(el,cf,vs,cb,cba);},p7IGMdy);}
function P7_IGMfader(el,cf,vs,cb,cba){var tD,op,m=false;var elapsedTime=P7_IGMgetTime(el.p7FadeStartTime);if(elapsedTime>=el.p7FadeDuration){elapsedTime=el.p7FadeDuration;m=true;}
op=P7_IGMlinear(elapsedTime,el.p7StartOpacity,el.p7FinishOpacity-el.p7StartOpacity,el.p7FadeDuration);if(el.filters){el.style.filter='alpha(opacity='+op+')';}
else{el.style.opacity=op/100;}
if(vs&&el.style.visibility!='visible'){el.style.visibility='visible';}
if(m){clearInterval(el.p7Fader);if(cf){if(el.filters){el.style.filter='';}
else{if(el.p7FinishOpacity>98){el.style.opacity=1.0;}}}
if(cb&&typeof(cb)==="function"){cb.call(el,cba);}}}
function P7_IGManimPreLoad(dv){var tD,lD,tA,iM;tD=document.getElementById(dv);lD=document.getElementById(dv.replace('_','loading_'));tA=tD.igmImages[tD.igmCurrentSlideNum];iM=document.p7igmpre[tA.igmPreIndex];if(iM.cmp){P7_IGManimInit(dv,true);}
else{lD.style.display='block';setTimeout("P7_IGManimPreLoad('"+dv+"')",15);}}
function P7_IGManimInit(dv,init){var i,tD,el,tA,iM,vP,cD,cW,lD,cvI,m=true,nh,nw,dm,cvs,ctx,imW,cI;tD=document.getElementById(dv);if(tD.igmCvsInit){return m;}
lD=document.getElementById(dv.replace('_','loading_'));tA=tD.igmImages[tD.igmCurrentSlideNum];iM=tA.igmPreImage;if(!iM.cmp||iM.p7Status=='load_error'){return false;}
vP=document.getElementById(tD.id.replace('_','imgwrapper_'));cW=document.getElementById(tD.id.replace('_','image_'));cI=document.getElementById(tD.id.replace('_','im_'));cvI=document.getElementById(tD.id.replace('_','imv_'));tD.igmViewportWidth=vP.offsetWidth;dm=P7_IGMgetImageFit(tA,cI,vP,tD.igmFixedHeight);nw=dm[0];nh=(tD.igmFixedHeight)?tD.p7opt[19]:dm[1];if(tD.igmCanvas){cvs=document.getElementById(tD.igmCanvas);ctx=cvs.getContext('2d');cvs.width=vP.offsetWidth;if(tD.p7opt[5]==7||tD.p7opt[5]==8){cvs.height=nh;}
else{if(tD.p7opt[19]>0){vP.style.height=nh+'px';vP.style.overflow='hidden';}
else{cW.style.height=nh+'px';vP.style.height='auto';}
nh=(tD.igmFixedHeight)?tD.p7opt[19]:2000;cvs.height=nh;}
tD.igmInitImageWidth=iM.width;tD.igmInitImageHeight=iM.height;ctx.globalAlpha=1;el=document.getElementById(tD.id.replace('_','im_'));el.style.display='none';tD.igmCurrentPZ='A';}
else{dm=P7_IGMgetImageFit(tA,cI,vP,tD.igmFixedHeight);vP.style.height=nh+'px';cW.style.position='absolute';var im=[cI,cvI,tD.igmOVim1,tD.igmOVim2];for(i=0;i<im.length;i++){if(im[i]){im[i].style.maxWidth='none';im[i].style.maxHeight='none';}}
if(tD.igmFixedHeight&&tD.p7opt[5]!=8){dm=P7_IGMgetImageFit(tA,cI,vP,tD.igmFixedHeight);cW.style.width=vP.offsetWidth+'px';cI.style.width=dm[0]+'px';cI.style.height=dm[1]+'px';var cA=cI.parentNode;P7_IGMcenterElement(cA,cA.offsetWidth,cA.offsetHeight,vP.offsetWidth,vP.offsetHeight);}
else{cI.style.width=dm[0]+'px';cI.style.height=dm[1]+'px';}
tD.igmInitImageWidth=iM.width;tD.igmInitImageHeight=iM.height;}
tD.igmCvsInit=true;if(init){P7_IGMinitB(dv);}
return m;}
function P7_IGMpzParseOptions(dv,sn){var i,tD,tA,rel,pz,r,defOpt='igmPZ-0-0-0-0-15-0-0';tD=document.getElementById(dv);tA=tD.igmImages[sn];rel=tA.getAttribute('rel');rel=(rel&&rel!==''&&rel.indexOf('igmPZ'===0))?rel:defOpt;pz=rel.split('-');if(!pz.length||pz.length!=8){rel=defOpt;pz=rel.split('-');}
for(i=1;i<pz.length;i++){pz[i]=parseFloat([pz[i]]);if(i<=4&&(pz[i]<1||pz[i]>3)){pz[i]=Math.floor((Math.random()*3)+1);}
if(i==5){if(pz[i]<1||pz[i]>100){pz[i]=15;}}}
if(pz[6]===0){r=Math.floor((Math.random()*2)+1);pz[6]=(r==1)?1.1:1.6;}
if(pz[7]===0){pz[7]=(r==1)?1.6:1.1;}
tA.igmPZoptions=pz;}
function P7_IGMpzPosition(el,pz,vw,vh,iw,ih){var dm,bw,bh,sw,sh,fw,fh,st,sl,ft,fl;dm=P7_IGMfitRect(iw,ih,0,vw,vh);bw=dm[0];bh=dm[1];dm=P7_IGMfitRect(bw,bh,pz[6],vw,vh);sw=dm[0];sh=dm[1];dm=P7_IGMfitRect(bw,bh,pz[7],vw,vh);fw=dm[0];fh=dm[1];st=0;if(pz[1]==2){st=(vh-sh)/2;}
else if(pz[1]==3){st=vh-sh;}
sl=0;if(pz[2]==2){sl=(vw-sw)/2;}
else if(pz[2]==3){sl=vw-sw;}
ft=0;if(pz[3]==2){ft=(vh-fh)/2;}
else if(pz[3]==3){ft=vh-fh;}
fl=0;if(pz[4]==2){fl=(vw-fw)/2;}
else if(pz[4]==3){fl=vw-fw;}
el.p7startWidth=sw;el.p7currentWidth=sw;el.p7startHeight=el.p7currentHeight=sh;el.p7finishWidth=fw;el.p7finishHeight=fh;el.p7startLeft=el.p7currentLeft=sl;el.p7startTop=el.p7currentTop=st;el.p7finishLeft=fl;el.p7finishTop=ft;}
function P7_IGMpzSetCvs(dv,sn,bp){var tD,tA,iM,cD,pD,vP,ci,cvs,ctx,pz,vw,vh,iw,ih,cb,tp,dy,ps;tD=document.getElementById(dv);vP=document.getElementById(tD.id.replace('_','imgwrapper_'));tA=tD.igmImages[sn];iM=tA.igmPreImage;if(tD.igmCurrentPZ=='A'){cD=document.getElementById(tD.id.replace('_','imagev_'));pD=document.getElementById(tD.id.replace('_','image_'));tD.igmCurrentPZ='B';}
else{cD=document.getElementById(tD.id.replace('_','image_'));pD=document.getElementById(tD.id.replace('_','imagev_'));tD.igmCurrentPZ='A';}
cD.igmPrevDiv=pD.id;pD.igmPrevDiv=cD.id;cD.igmCurrentImage=iM;cD.igmPrevImage=pD.igmCurrentImage;dy=p7IGMdy;P7_IGMpzParseOptions(dv,sn);pz=tA.igmPZoptions;cvs=document.getElementById(tD.igmCanvas);ctx=cvs.getContext('2d');vw=cvs.width;vh=cvs.height;iw=tA.igmPreImage.width;ih=tA.igmPreImage.height;vP.igmViewportWidth=vw;ps=P7_IGMpzPosition(cD,pz,vw,vh,iw,ih);cD.p7Duration=parseInt((pz[5]*1000)/dy,10);cD.p7Time=0;cD.igmCanvas=tD.igmCanvas;cD.igmDiv=tD.id;cD.igmbp=bp;cD.p7callback=false;if(pD.p7PanZoomRunning){clearInterval(pD.p7PanZoom);pD.p7PanZoomRunning=false;}
tD.igmPanZoomDiv=cD.id;tD.igmPanZoomResume=false;if(!cD.p7PanZoomRunning){cD.p7PanZoomRunning=true;cb=false;tp='linear';cD.igmFadeTime=0;cD.igmFadeBegin=0;cD.igmFadeFinish=100;cD.igmFadeDuration=500/dy;cD.p7PanZoom=setInterval("P7_IGMpzAnimCvs('"+cD.id+"',"+cb+",'"+tp+"')",dy);}}
function P7_IGMpzAnimCvs(dv,cb,tp){var el,nl,nt,nw,nh,im,cvs,ctx,iM,obOut,imOut,pi,po;el=document.getElementById(dv);iM=el.igmCurrentImage;cvs=document.getElementById(el.igmCanvas);ctx=cvs.getContext('2d');if(el.igmFadeTime<el.igmFadeDuration){el.igmFadeTime++;obOut=document.getElementById(el.igmPrevDiv);if(obOut&&obOut.igmCurrentImage){imOut=obOut.igmCurrentImage;}
pi=P7_IGMlinear(el.igmFadeTime,el.igmFadeBegin,el.igmFadeFinish-el.igmFadeBegin,el.igmFadeDuration);po=el.igmFadeFinish-pi;if(imOut){ctx.globalAlpha=po/100;ctx.drawImage(imOut,obOut.p7currentLeft,obOut.p7currentTop,obOut.p7currentWidth,obOut.p7currentHeight);}
ctx.globalAlpha=pi/100;if(el.igmFadeTime>=el.igmFadeDuration){ctx.globalAlpha=1;ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);ctx.drawImage(iM,el.p7currentLeft,el.p7currentTop,el.p7currentWidth,el.p7currentHeight);}}
if(el.p7Time<el.p7Duration){el.p7Time++;nt=P7_IGManim(tp,el.p7Time,el.p7startTop,el.p7finishTop-el.p7startTop,el.p7Duration);nl=P7_IGManim(tp,el.p7Time,el.p7startLeft,el.p7finishLeft-el.p7startLeft,el.p7Duration);nw=P7_IGManim(tp,el.p7Time,el.p7startWidth,el.p7finishWidth-el.p7startWidth,el.p7Duration);nh=P7_IGManim(tp,el.p7Time,el.p7startHeight,el.p7finishHeight-el.p7startHeight,el.p7Duration);el.p7currentLeft=nl;el.p7currentTop=nt;el.p7currentWidth=nw;el.p7currentHeight=nh;ctx.drawImage(iM,nl,nt,nw,nh);}
else{clearInterval(el.p7CvsAnim);el.p7CvsAnimRunning=false;el.igmPanZoomResume=false;if(cb&&el.p7callback&&typeof(el.p7callback)==="function"){el.p7callback('panzoom');}}}
function P7_IGMpzSet(dv,sn,bp){var tD,vP,tA,iM,cD,pD,vw,vh,iw,ih,pz,ps;tD=document.getElementById(dv);vP=document.getElementById(tD.id.replace('_','imgwrapper_'));tA=tD.igmImages[sn];iM=tA.igmPreImage;if(tD.igmCurrentPZ=='A'){cD=document.getElementById(tD.id.replace('_','imagev_'));pD=document.getElementById(tD.id.replace('_','image_'));tD.igmCurrentPZ='B';}
else{cD=document.getElementById(tD.id.replace('_','image_'));pD=document.getElementById(tD.id.replace('_','imagev_'));tD.igmCurrentPZ='A';}
cD.igmPrevDiv=pD.id;pD.igmPrevDiv=cD.id;cD.igmCurrentImage=iM;cD.igmPrevImage=pD.igmCurrentImage;P7_IGMpzParseOptions(dv,sn);pz=tA.igmPZoptions;cD.style.visibility='hidden';cD.style.top='-5000px';cD.style.left='-5000px';cD.style.display='block';cD.style.width='auto';cD.style.height='auto';iM=cD.getElementsByTagName('IMG')[0];cD.style.zIndex=5;pD.style.zIndex=4;P7_IGMswitchImgSource(dv,sn,bp,cD.id);vw=vP.offsetWidth;vh=vP.offsetHeight;vP.igmViewportWidth=vw;iw=tA.igmPreImage.width;ih=tA.igmPreImage.height;ps=P7_IGMpzPosition(cD,pz,vw,vh,iw,ih);iM.style.width='100%';iM.style.height='auto';cD.fadeFinished=function(cba){var pD=document.getElementById(cba);pD.style.left='-5000px';pD.style.top='-5000px';pD.style.visibility='hidden';};if(pD.p7PanZoomRunning){clearInterval(pD.p7PanZoom);pD.p7PanZoomRunning=false;}
P7_IGMfade(cD,1,99,300,true,true,cD.fadeFinished,pD.id);if(!cD.p7PanZoomRunning){cD.p7PanZoomRunning=true;cD.p7StartTime=P7_IGMgetTime(0);cD.p7Duration=pz[5]*1000;cD.p7PanZoom=setInterval(function(){P7_IGMpzAnim(cD.id,'linear',false,null);},p7IGMdy);}}
function P7_IGMpzAnim(dv,tp,cb,cba){var el,nl,nt,nw,nh,m=false;el=document.getElementById(dv);var elapsedTime=P7_IGMgetTime(el.p7StartTime);if(elapsedTime>=el.p7Duration){elapsedTime=el.p7Duration;m=true;}
nt=P7_IGManim(tp,elapsedTime,el.p7startTop,el.p7finishTop-el.p7startTop,el.p7Duration);nl=P7_IGManim(tp,elapsedTime,el.p7startLeft,el.p7finishLeft-el.p7startLeft,el.p7Duration);nw=P7_IGManim(tp,elapsedTime,el.p7startWidth,el.p7finishWidth-el.p7startWidth,el.p7Duration);el.style.left=Math.round(nl)+'px';el.style.top=Math.round(nt)+'px';el.style.width=Math.round(nw)+'px';el.style.left=nl+'px';el.style.top=nt+'px';el.style.width=nw+'px';if(m){clearInterval(el.p7PanZoom);el.p7PanZoomRunning=false;el.igmPanZoomResume=false;if(cb&&typeof(cb)==="function"){cb.call(el,cba);}}}
function P7_IGMrsz(bp){var i,tD,cW,cvs,cw,ch,nw,nh,pc,dy=(bp==1)?10:300;for(i=0;i<p7IGMctl.length;i++){tD=document.getElementById(p7IGMctl[i][0]);if(tD){cW=document.getElementById(tD.id.replace('_','imgwrapper_'));nw=cW.offsetWidth;if(tD.igmViewportWidth!=nw){tD.igmViewportWidth=nw;if(tD.igmShowTimer){clearTimeout(tD.igmShowTimer);}
P7_IGMreFresh(tD,nw);}}}}
function P7_IGMreFresh(tD,nw){var nh,ch,cvs,vP,cW;if(tD.igmFullScreen){tD.p7opt[19]=tD.offsetHeight-tD.igmFullScreenChromeHeight;}
vP=document.getElementById(tD.id.replace('_','imgwrapper_'));cW=document.getElementById(tD.id.replace('_','image_'));if(tD.igmCanvas){cvs=document.getElementById(tD.id.replace('_','cvs_'));if(tD.p7opt[19]>0){nh=tD.p7opt[19];vP.style.height=tD.p7opt[19]+'px';cW.style.height='auto';}
else{if(tD.p7opt[5]==7||tD.p7opt[5]==8){nh=P7_IGMfitImg(tD.igmInitImageWidth,tD.igmInitImageHeight,nw)[1];cW.style.height='auto';}
else{nh=2000;cW.style.height=nh+'px';}
vP.style.height='auto';}
cvs.width=nw;cvs.height=nh;}
else if(tD.igmFullScreen||tD.p7opt[19]>0){vP.style.height=tD.p7opt[19]+'px';}
else if(tD.p7opt){if(tD.p7opt[5]==7||tD.p7opt[5]==8){nh=P7_IGMfitImg(tD.igmInitImageWidth,tD.igmInitImageHeight,nw)[1];vP.style.height=nh+'px';}}
P7_IGMcontrol(tD.id,tD.igmCurrentSlideNum,1);if(tD.igmShowMode=='play'){if(tD.igmShowTimer){clearTimeout(tD.igmShowTimer);}
tD.igmShowTimer=setTimeout(function(){P7_IGMcontrol(tD.id,'next',2);},tD.p7opt[15]);}}
function P7_IGMkey(evt){var tD,tg,nn,k,ac,m=true;evt=(evt)?evt:event;tg=(evt.target)?evt.target:evt.srcElement;nn=tg.nodeName.toLowerCase();if(!evt.altKey&&!evt.ctrlKey){if(nn!='input'&&nn!='textarea'){k=evt.keyCode;if(p7IGMfsd){if(k==27||(k==88&&typeof(opera)!='object')){P7_IGMfullScreen(p7IGMfsd,'normal');m=false;}
else if(k==33||k==37||k==109||k==32&&evt.shiftKey){P7_IGMcontrol(p7IGMfsd,'prev');m=false;}
else if(k==34||k==39||k==107||k==32){P7_IGMcontrol(p7IGMfsd,'next');m=false;}
else if(k==35){P7_IGMcontrol(p7IGMfsd,'last');m=false;}
else if(k==36){P7_IGMcontrol(p7IGMfsd,'first');m=false;}
else if(k==80){tD=document.getElementById(p7IGMfsd);if(tD&&tD.igmShowMode){ac=(tD.igmShowMode=='play')?'pause':'play';P7_IGMcontrol(p7IGMfsd,ac);m=false;}}}}}
if(!m){if(evt.preventDefault){evt.preventDefault();}}
return m;}
function P7_IGManim(tp,t,b,c,d){if(tp=='linear'){return(c*(t/d))+b;}
else if(tp=='quad'){if((t/=d/2)<1){return c/2*t*t+b;}
else{return-c/2*((--t)*(t-2)-1)+b;}}
else if(tp=='inquad'){var tt=t/d;return c*(tt)*(tt)+b;}}
function P7_IGMlinear(t,b,c,d){return(c*(t/d))+b;}
function P7_IGMInOutQuad(t,b,c,d){if((t/=d/2)<1){return c/2*t*t+b;}
else{return-c/2*((--t)*(t-2)-1)+b;}}
function P7_IGMresetWidth(dd,li,n){dd.style.width=(n*600)+'px';dd.style.width=(li.offsetLeft+li.offsetWidth+1000)+'px';}
function P7_IGMresetOffsets(ob){if(ob.scrollLeft!==0){ob.scrollLeft=0;}
if(ob.scrollTop!==0){ob.scrollTop=0;}}
function P7_IGMgetIEver(){var j,v=-1,nv,m=false;nv=navigator.userAgent.toLowerCase();j=nv.indexOf("msie");if(j>-1){v=parseFloat(nv.substring(j+4,j+8));if(document.documentMode){v=document.documentMode;}}
return v;}
function P7_IGMsetClass(ob,cl){if(ob){var cc,nc,r=/\s+/g;cc=ob.className;nc=cl;if(cc&&cc.length>0){if(cc.indexOf(cl)==-1){nc=cc+' '+cl;}
else{nc=cc;}}
nc=nc.replace(r,' ');ob.className=nc;}}
function P7_IGMremClass(ob,cl){if(ob){var cc,nc;cc=ob.className;if(cc&&cc.indexOf(cl>-1)){nc=cc.replace(cl,'');nc=nc.replace(/\s+/g,' ');nc=nc.replace(/\s$/,'');nc=nc.replace(/^\s/,'');ob.className=nc;}}}
function P7_IGMimageClick(a){var wH,m=false;wH=window.location.href;if(a.href!=wH&&a.href!=wH+'#'){if(a.href.search(/javas/i)!==0){}}
return m;}
function P7_IGMpenWin(a){if(a&&a.href){window.open(a.href,'igmwin');}
return false;}
function P7_IGMcopyCN(tD,tS){while(tD.childNodes.length>0){tD.removeChild(tD.childNodes[0]);}
while(tS.childNodes.length>0){tD.appendChild(tS.childNodes[0]);}}
function P7_IGMsetCC(dd,rp,ac){var d,tC;d=dd.replace('_',rp);tC=document.getElementById(d);if(tC){tC.onclick=function(){return P7_IGMcontrol(dd,ac);};}
return tC;}
function P7_IGMurl(dv){var i,h,s,x,d='igm',pn,n=dv.replace("p7IGM_","");h=document.location.search;if(h){h=h.replace('?','');s=h.split(/[=&]/g);if(s&&s.length){for(i=0;i<s.length;i+=2){if(s[i]==d){x=s[i+1];if(n!=x.charAt(0)){x=false;}
if(x&&x.length>2){P7_IGMcontrol(dv,P7_IGMparsePN(x),1);}}}}}
h=document.location.hash;if(h){x=h.substring(1,h.length);if(n!=x.charAt(3)){x=false;}
if(x&&x.indexOf(d)===0&&x.length>5){P7_IGMcontrol(dv,P7_IGMparsePN(x),1);}}}
function P7_IGMparsePN(d){var x=d.lastIndexOf('_');return parseInt(d.substr(x+1),10);}
function P7_IGMrandomize(){return 0.5-Math.random();}
function P7_IGMrandomizer(dv){var i=0,k=0,tD,tV,tU,tA,cN,sR,cD,ob,iM,imT,tt,cl,tI=[],cn;tD=document.getElementById(dv);tV=document.getElementById(tD.id.replace('_','tvp_'));tU=tV.getElementsByTagName('UL')[0];if(tU){cn=tU.childNodes;for(i=0;i<cn.length;i++){tI[i]=cn[i];}
tI.sort(P7_IGMrandomize);while(k<tI.length){tU.appendChild(tI[k]);k++;}
tA=tU.getElementsByTagName('A')[0];iM=document.getElementById(tD.id.replace('_','im_'));iM.src=tA.href;cD=document.getElementById(tD.id.replace('_','caption_'));if(cD){imT=tA.getElementsByTagName('IMG')[0];tt=imT.getAttribute('alt');ob=document.createTextNode(tt);if(cD.hasChildNodes){for(i=0;i<cD.childNodes.length;i++){cD.removeChild(cD.childNodes[i]);}}
if(ob){cD.appendChild(ob);}}
cD=document.getElementById(tD.id.replace('_','desc_'));cN=tA.parentNode.childNodes;for(i=0;i<cN.length;i++){if(cN[i].nodeType==1){cl=cN[i].className;if(cl&&cl=='p7igm_description'){sR=cN[i];break;}}}
if(sR){P7_IGMcopyCN(cD,sR);cD.p7src=sR;}}}
function P7_IGMfitRect(nw,nh,zm,vw,vh){var dW,dH,fw=0,fh=0;fw=nw*zm;fh=nh*zm;dW=vw-fw;dH=vh-fh;if(dW>0||dH>0){if(dW>=dH){fw=vw;fh=fw*(nh/nw);}
else{fh=vh;fw=fh*(nw/nh);}}
return[fw,fh];}
function P7_IGMfitImg(iw,ih,vw,vh,fvp){var nw=iw,nh=ih;if(fvp){if(ih>=vh){nh=vh;nw=nh*(iw/ih);if(nw>vw){nw=vw;nh=nw*(ih/iw);}}
else if(iw>vw){nw=vw;nh=nw*(ih/iw);if(nh>vh){nh=vh;nw=nh*(iw/ih);}}}
else{nw=vw;nh=nw*(ih/iw);}
return[nw,nh];}
function P7_IGMgetImageFit(tA,iM,vP,fh){var aw,ah,bl,bt,dm;aw=(iM.offsetLeft*2)+(iM.offsetWidth-iM.width);ah=(iM.offsetTop*2)+(iM.offsetHeight-iM.height);bl=parseInt(P7_IGMgetStyle(iM.parentNode,'borderLeftWidth','border-left-width'),10);aw=(bl)?aw+(bl*2):aw;bt=parseInt(P7_IGMgetStyle(iM.parentNode,'borderTopWidth','border-top-width'),10);ah=(bt)?ah+(bt*2):ah;dm=P7_IGMfitImg(tA.igmPreImage.width,tA.igmPreImage.height,vP.offsetWidth-aw,vP.offsetHeight-ah,fh);return dm;}
function P7_IGMcenterImage(iM,iw,ih,vw,vh){var mL,mT;mL=(vw-iw)/2;mT=(vh-ih)/2;iM.style.marginLeft=mL+'px';iM.style.marginTop=mT+'px';}
function P7_IGMcenterElement(el,w,h,vw,vh){var mL,mT;mL=(vw-w)/2;mT=(vh-h)/2;el.style.left=mL+'px';el.style.top=mT+'px';}
function P7_IGMgetStyle(el,s1,s2){var s='';if(el.currentStyle){s=el.currentStyle[s1];}
else{s=document.defaultView.getComputedStyle(el,"").getPropertyValue(s2);}
return s;}
function P7_IGMgetWinDims(){var h,w,st;if(document.documentElement&&document.documentElement.clientHeight){w=document.documentElement.clientWidth;h=document.documentElement.clientHeight;}
else if(window.innerHeight){if(document.documentElement.clientWidth){w=document.documentElement.clientWidth;}
else{w=window.innerWidth;}
h=window.innerHeight;}
else if(document.body){w=document.body.clientWidth;h=document.body.clientHeight;}
return[h,w];}
function P7_IGMgoBack(){window.history.back();return false;}
function P7_IGMtblfix(ob){var pp,sc,vp,tB,h,hh,ie,el,m=false;ie=P7_IGMgetIEver();pp=ob.parentNode;while(pp){if(pp.nodeName){if(pp.nodeName=='TD'||pp.nodeName=='TABLE'){m=true;break;}
if(pp.nodeName=='BODY'){break;}}
pp=pp.parentNode;}
if(m||(ie>4&&ie<7)){el=document.getElementById(ob.id.replace('_','thumbs_'));if(el){el.style.display='none';}
h=ob.offsetWidth;ob.style.width=h+'px';hh=ob.offsetWidth;ob.style.width=(h+(h-hh))+'px';if(el){el.style.display='block';}}}
function myFunction(slideid){var sidtxt=slideid.toString();var sid=sidtxt.split(/\s/).join('');P7_IGMfullScreen('p7IGM_'+sid,'fullscreen');}