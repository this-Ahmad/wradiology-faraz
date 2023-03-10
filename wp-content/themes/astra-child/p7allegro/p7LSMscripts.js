var p7LSMHLP='Help: Keyboard Shortcuts';var p7LSMHelp=[];p7LSMHelp[0]='To advance to the next box click the VCR controls in the header or press your Space Bar.';p7LSMHelp[1]='You can move forward or backward with the Left Arrow, Right Arrow, Page Up and Page Down keys.';p7LSMHelp[2]='The "P" key toggles the Pause and Play mode.';p7LSMHelp[3]='The "T" key toggles the Table of Contents.';p7LSMHelp[4]='To close the presentation press "X", "ESC", or click off the presentation box.';p7LSMHelp[5]='Use the "H" key to toggle this Help screen.';var p7LSMTOC='Table of Contents';var p7LSMminwidth=200;var p7lsmdly=500;var p7LSMi=false,p7LSMf=false,p7LSMctl=[],p7LSMcshow=[],p7LSMmode='pause',p7LSMantmr,p7LSMimtmr,p7LSMoptmr,p7LSMshowtmr,p7LSMan=false;var p7LSMstat=false,p7lsmA=navigator.userAgent.toLowerCase(),p7LSMcan=true,p7LSMnextMode='',p7LSMtocActive=false,p7LSMhlpActive=false;if(!document.getElementById||typeof document.appendChild=='undefined'||p7lsmA.indexOf('msie 5')>-1){p7LSMcan=false;}
function P7_LSMset(){var i,h,sh,hd,x,v;if(!p7LSMcan){return;}
sh='.p7lsm_link {display:none;}\n';sh+='.p7lsm_description {display:none;}\n';sh+='.p7lsm_content {display:none;}\n';sh+='.p7lsm_link {display:none;}\n';sh+='#p7LSM_ovr {position:absolute;top:0px;left:0px;display:none;z-index:9999900;}\n';sh+='#p7lsm_overlay {position:fixed;width:100%;height:100%;left:0px;top:0px;z-index:9999900;display:none;}\n';sh+='#p7LSM_box {position:absolute;display:block;top:0px;left:-9000px;width:100px;overflow:hidden;z-index:9999930;}\n';sh+='#p7lsm_abox {position:absolute;top:0px;left:0px;display:none;z-index:9999960;}\n';sh+='#p7LSM_loading {display:none;position:absolute;top:0px;left:0px;z-index:9999980;}\n';sh+='#p7LSM_helpbox {display:block;position:absolute;top:0px;left:-9000px;z-index:9999990;}\n';sh+='#p7LSM_tocbox {display:block;position:absolute;top:0px;left:-9000px;z-index:9999995;}\n';sh+='#p7LSM_descboxW {display:block;position:absolute;top:0px;left:-9000px;z-index:9999985;overflow:hidden;}\n';if(P7_LSMisIE8()){sh+='#p7lsm_overlay {position:absolute;}\n';}
if(document.styleSheets){h='\n<st'+'yle type="text/css">\n'+sh+'\n</s'+'tyle>';document.write(h);}
else{h=document.createElement('style');h.type='text/css';h.appendChild(document.createTextNode(sh));hd=document.getElementsByTagName('head');hd[0].appendChild(h);}}
P7_LSMset();function P7_LSMaddLoad(){if(!p7LSMcan){return;}
if(window.addEventListener){window.addEventListener("load",P7_LSMinit,false);window.addEventListener("resize",P7_LSMrsz,false);window.addEventListener("unload",P7_LSMclose,false);document.addEventListener("keydown",P7_LSMkey,false);}
else if(window.attachEvent){window.attachEvent("onload",P7_LSMinit);window.attachEvent("onresize",P7_LSMrsz);window.attachEvent("onunload",P7_LSMclose);document.attachEvent("onkeydown",P7_LSMkey);}}
P7_LSMaddLoad();function P7_LSMop(){if(!document.getElementById||!p7LSMcan){return;}
p7LSMctl[p7LSMctl.length]=arguments;}
function P7_LSMinit(){var i,j,x=0,el,ob,h,tx,tD,tA,cntr=0,tIM,tB,bA,li,ul,tR,obb;if(p7LSMi||!p7LSMcan){return;}
p7LSMi=true;P7_LSMbuildpop();el=document.createElement('div');el.setAttribute("id","p7lsm_abox");document.getElementsByTagName('body')[0].appendChild(el);el=document.createElement('div');el.setAttribute("id","p7lsm_overlay");document.getElementsByTagName('body')[0].appendChild(el);el=document.createElement('div');el.setAttribute("id","p7LSM_ovr");ob=document.createElement('img');ob.setAttribute('id','p7LSM_ovrimg');el.appendChild(ob);document.getElementsByTagName('body')[0].appendChild(el);el=document.createElement('div');ob=document.createElement('a');ob.appendChild(document.createTextNode("X"));ob.setAttribute("href","javascript:;");ob.setAttribute("title","Close Box");ob.onclick=function(){return P7_LSMhelp();};obb=document.createElement('div');obb.setAttribute("class","p7LSM_helpbox_close");obb.appendChild(ob);el.appendChild(obb);ob=document.createElement('p');ob.appendChild(document.createTextNode(p7LSMHLP));el.appendChild(ob);ob=document.createElement('ul');for(i=0;i<p7LSMHelp.length;i++){li=document.createElement('li');li.appendChild(document.createTextNode(p7LSMHelp[i]));ob.appendChild(li);}
el.appendChild(ob);el.setAttribute("id","p7LSM_helpbox");el.p7status="closed";document.getElementsByTagName('body')[0].appendChild(el);el=document.createElement('div');ob=document.createElement('a');ob.appendChild(document.createTextNode("X"));ob.setAttribute("href","javascript:;");ob.setAttribute("title","Close Box");ob.onclick=function(){return P7_LSMtoc();};obb=document.createElement('div');obb.setAttribute("class","p7LSM_tocbox_close");obb.appendChild(ob);el.appendChild(obb);ob=document.createElement('p');ob.appendChild(document.createTextNode(p7LSMTOC));el.appendChild(ob);el.setAttribute("id","p7LSM_tocbox");el.p7status="closed";document.getElementsByTagName('body')[0].appendChild(el);el=document.createElement('div');el.setAttribute("id","p7LSM_descboxW");el.p7status="closed";obb=document.createElement('div');obb.setAttribute("id","p7LSM_descboxInner");el.appendChild(obb);ob=document.createElement('div');ob.setAttribute("id","p7LSM_descbox");obb.appendChild(ob);document.getElementsByTagName('body')[0].appendChild(el);bA=document.getElementById("p7LSM_box");bA.p7status="closed";bA=document.getElementById("p7LSM_help");if(bA){bA.onclick=function(){return P7_LSMhelp();};}
bA=document.getElementById("p7LSM_toc");if(bA){bA.onclick=function(){return P7_LSMtoc();};}
bA=document.getElementById("p7LSM_first");if(bA){bA.onclick=function(){return P7_LSMctrl('first');};}
bA=document.getElementById("p7LSM_prev");if(bA){bA.onclick=function(){return P7_LSMctrl('previous');};}
bA=document.getElementById("p7LSM_next");if(bA){bA.onclick=function(){return P7_LSMctrl('next');};}
bA=document.getElementById("p7LSM_last");if(bA){bA.onclick=function(){return P7_LSMctrl('last');};}
bA=document.getElementById("p7LSM_pauseplay");if(bA){bA.onclick=function(){return P7_LSMppTrig();};}
bA=document.getElementById("p7LSM_close");if(bA){bA.onclick=function(){return P7_LSMclose();};}
bA=document.getElementById("p7lsm_overlay");if(bA){bA.onclick=function(){return P7_LSMclose();};}
document.p7lsmpre=[];document.getElementById("p7LSM_desc").p7src=false;document.getElementById("p7LSM_cnt").p7src=false;for(j=0;j<p7LSMctl.length;j++){tD=document.getElementById(p7LSMctl[j][0]);if(tD){cntr=-1;tD.p7opt=p7LSMctl[j];tD.p7slides=[];tR=document.getElementById(tD.id.replace("_","trg_"));tA=tR.getElementsByTagName("a");for(i=0;i<tA.length;i++){if(tA[i].className&&tA[i].className.indexOf("p7lsm_type")>-1){cntr++;tD.p7slides[cntr]=tA[i];tA[i].onclick=function(){return P7_LSMshow(this);};tA[i].parentNode.onmouseover=function(){this.className="over";};tA[i].parentNode.onmouseout=function(){this.className="";};tA[i].p7lsmdiv=tD.id;tA[i].p7lsmsnum=cntr+1;if(tA[i].className=="p7lsm_type_img"){if(tD.p7opt[10]==1){tA[i].onmouseover=function(){P7_LSMrollover(this);};tA[i].onmouseout=P7_LSMrollout;}
document.p7lsmpre[x]=new Image();document.p7lsmpre[x].cmp=false;document.p7lsmpre[x].onload=function(){this.cmp=true;};document.p7lsmpre[x].onerror=function(){this.cmp=true;this.width=300;this.height=300;};tA[i].p7imindex=x;x++;}}}
tD.p7lsmnum=tD.p7slides.length;}}
P7_LSMpause(1);p7LSMf=true;}
function P7_LSMrollover(a){var tp,rD,rI,tI,dm,rw,rh,tt,tl;tp=a.className;if(tp&&tp.indexOf("_img")>-1){rD=document.getElementById("p7LSM_ovr");rI=document.getElementById("p7LSM_ovrimg");tI=a.getElementsByTagName("img");dm=P7_LSMdims(a);rI.setAttribute("src",tI[0].getAttribute("src"));rD.style.visibility="hidden";rD.style.display="block";rw=rD.offsetWidth;rh=rD.offsetHeight;tt=dm[1]-rh;tl=dm[0]-((rw-dm[2])/2);tt-=5;if(tt<0){tt=dm[1]+a.offsetHeight+2;}
if(tl<0){tl=0;}
rD.style.top=tt+"px";rD.style.left=tl+"px";rD.style.visibility="visible";}}
function P7_LSMrollout(){var rD=document.getElementById("p7LSM_ovr");rD.style.display="none";}
function P7_LSMctrl(ag,sd,bp){var n,x,cDB,toc,op;if(!p7LSMf){return false;}
if(!ag){ag='next';}
if(ag=='pause'){P7_LSMpause();return false;}
if(ag=='play'){P7_LSMplay();return false;}
if(ag=='close'){P7_LSMclose();return false;}
if(!sd){if(p7LSMcshow[0]){sd=p7LSMcshow[0];}
else{sd=p7LSMctl[0][0];}}
if(!p7LSMcshow[0]){p7LSMcshow[0]=sd;p7LSMcshow[1]=1;}
cDB=document.getElementById(sd);if(!cDB||!cDB.p7lsmnum){return false;}
if(sd!=p7LSMcshow[0]){p7LSMcshow[1]=1;}
op=P7_LSMopts();if(ag=='first'){n=1;if(op[5]==3&&sd!=p7LSMctl[0][0]){sd=p7LSMctl[0][0];cDB=document.getElementById(sd);P7_LSMtochelpStat();P7_LSMclose();}
else{if(n==p7LSMcshow[1]&&cDB.p7status=='open'){return false;}}}
else if(ag=='last'){n=cDB.p7lsmnum;if(op[5]==3&&sd!=p7LSMctl[0][p7LSMctl.length-1]){sd=p7LSMctl[p7LSMctl.length-1][0];cDB=document.getElementById(sd);n=cDB.p7lsmnum;P7_LSMtochelpStat();P7_LSMclose();}
else{if(n==p7LSMcshow[1]&&cDB.p7status=='open'){return false;}}}
else if(ag=='next'){n=p7LSMcshow[1]+1;if(n>cDB.p7lsmnum){if(op[5]===0){return false;}
else if(cDB.p7opt[5]==1){n=1;}
else if(cDB.p7opt[5]==2){return false;}
else if(op[5]==3){x=P7_LSMnextShow();sd=p7LSMctl[x][0];cDB=document.getElementById(sd);n=1;if(p7LSMmode=="auto"){p7LSMnextMode='auto';}
P7_LSMtochelpStat();P7_LSMclose();}}}
else if(ag=='previous'){n=p7LSMcshow[1]-1;if(n<1){if(op[5]===0){return false;}
else if(cDB.p7opt[5]==1){n=cDB.p7lsmnum;}
else if(cDB.p7opt[5]==2){return false;}
else if(op[5]==3){x=P7_LSMprevShow();sd=p7LSMctl[x][0];cDB=document.getElementById(sd);n=cDB.p7lsmnum;P7_LSMtochelpStat();P7_LSMclose();}
else{return false;}}}
else{n=parseInt(ag,10);}
if(!n||n<1){n=1;}
else if(n>cDB.p7lsmnum){n=cDB.p7lsmnum;}
n--;if(op[8]==1&&p7LSMnextMode!='auto'&&bp!=1){P7_LSMpause();}
P7_LSMshow(cDB.p7slides[n]);return false;}
function P7_LSMppTrig(){if(!p7LSMf){return false;}
var a=document.getElementById('p7LSM_pauseplay');if(a.p7state=='play'){P7_LSMpause();}
else{P7_LSMplay();}
return false;}
function P7_LSMplay(bp){var n,b=document.getElementById('p7LSM_pauseplay');if(p7LSMmode=='auto'&&bp!=1){return;}
b.p7state='play';p7LSMmode='auto';b.title='Pause';b.className='p7LSM_pause';if(bp!=1){P7_LSMctrl('next','',1);}}
function P7_LSMpause(bp){var b=document.getElementById('p7LSM_pauseplay');if(p7LSMshowtmr){clearTimeout(p7LSMshowtmr);}
if(b){b.p7state='pause';if(bp!=1){p7LSMmode='pause';}
b.title='Play';b.className='p7LSM_play';}}
function P7_LSMdescpop(ac,bp){var dP,dPC,op,tl,tt,th,tw,cl,ct,cw,ch;dP=document.getElementById("p7LSM_descboxW");dPC=document.getElementById("p7LSM_descbox");op=P7_LSMopts();if(ac=='show'){dP.p7status="open";if(op[1]>1&&bp!=1){dP.style.width=dP.offsetWidth+"px";dP.style.visibility="hidden";dP.style.height="auto";P7_LSMposdesc();tt=parseInt(dP.style.top,10);th=dP.offsetHeight;ct=tt+th-1;ch=1;dP.lsmCurrentTop=ct;dP.lsmTargetTop=tt;dP.lsmCurrentHeight=ch;dP.lsmTargetHeight=th;dP.lsmDirection='open';dP.style.height=ch+"px";dP.style.top=ct+"px";dP.style.visibility="visible";if(!dP.lsmGlideRunning){dP.lsmGlideRunning=true;dP.lsmGlide=setInterval("P7_LSMglideBox('"+dP.id+"')",10);}}
else{P7_LSMposdesc();P7_LSMshow_fin2();}}
else{if(op[1]>1&&bp!=1){ct=parseInt(dP.style.top,10);ch=dP.offsetHeight;th=0;tt=ct+ch;dP.lsmCurrentTop=ct;dP.lsmTargetTop=tt;dP.lsmCurrentHeight=ch;dP.lsmTargetHeight=th;dP.lsmDirection='close';if(!dP.lsmGlideRunning){dP.lsmGlideRunning=true;dP.lsmGlide=setInterval("P7_LSMglideBox('"+dP.id+"')",10);}}
else{dP.p7status="closed";dP.style.left="-9000px";dP.style.top="0px";dP.style.height="10px";if(bp==2){P7_LSMshowB();}}}}
function P7_LSMhelp(ac){var hp,tR,tB;hp=document.getElementById("p7LSM_helpbox");tR=document.getElementById('p7LSM_help');if(null==ac){ac=(hp.p7status=='closed')?'show':'hide';}
if(ac=='show'){hp.p7status="open";if(tR){tR.className='down';}
tB=document.getElementById(p7LSMcshow[0]);if(!tB){tB=document.getElementById(p7LSMctl[0][0]);}
hp.className=tB.className;P7_LSMposhelp();}
else{if(tR){tR.className='';}
hp.style.left="-9000px";hp.style.top="0px";hp.style.height="10px";hp.p7status="closed";}
return false;}
function P7_LSMtitle(a){var tt,im,nt='Item';tt=a.getAttribute("title");if(!tt||tt===''){im=a.getElementsByTagName("img");if(im&&im[0]){tt=im[0].getAttribute("alt");}
else{tt=a.textContent;if(!tt||tt===''){tt=a.innerText;}
if(!tt||tt===''){tt=a.innerHTML;}}}
if(tt&&tt!==''){nt=tt;}
return nt;}
function P7_LSMtoc(ac,sd){var i,x=0,toc,wd,h,t,tB,tLI,tt,ea,ol,li,tIM,tA,tx,tR,tD,tSP,cDB;toc=document.getElementById("p7LSM_tocbox");if(ac==null){ac=(toc.p7status=='closed')?'show':'hide';}
tR=document.getElementById('p7LSM_toc');if(ac=='show'){P7_LSMclrtag(toc,'ol');if(!sd){tB=document.getElementById(p7LSMcshow[0]);if(!tB){tB=document.getElementById(p7LSMctl[0][0]);}}
else{tB=document.getElementById(sd);}
toc.className=tB.className;ol=document.createElement('ol');tD=document.getElementById(tB.id.replace("_","trg_"));tA=tD.getElementsByTagName("a");for(i=0;i<tA.length;i++){if(tA[i].className&&tA[i].className.indexOf('p7lsm_type')>-1){tt=P7_LSMtitle(tA[i]);ea=document.createElement('a');ea.appendChild(document.createTextNode(tt));ea.setAttribute("href","javascript:;");ea.p7num=(x);x++;ea.onclick=function(){P7_LSMctrl(this.p7num+1,sd);return false;};li=document.createElement("li");li.appendChild(ea);ol.appendChild(li);}}
toc.appendChild(ol);toc.p7status="open";if(tR){tR.className='down';}
P7_LSMsetTOC();P7_LSMpostoc();}
else{toc.style.left="-9000px";toc.style.top="0px";toc.p7status="closed";if(tR){tR.className='';}
P7_LSMclrtag(toc,'ol');}
return false;}
function P7_LSMsetTOC(){var i,tT,tA,cI;cI=p7LSMcshow[1]-1;tT=document.getElementById('p7LSM_tocbox');tA=tT.getElementsByTagName("a");if(tA&&tA.length>cI){for(i=0;i<tA.length;i++){if((i-1)==cI){tA[i].className='down';}
else{tA[i].className='';}}}}
function P7_LSMtochelpStat(){var tD=document.getElementById('p7LSM_tocbox');if(tD.p7status=="open"){p7LSMtocActive=true;}
else{p7LSMtocActive=false;}
tD=document.getElementById('p7LSM_helpbox');if(tD.p7status=="open"){p7LSMhlpActive=true;}
else{p7LSMhlpActive=false;}}
function P7_LSMclrtag(ob,tg){var i,tG;tG=ob.getElementsByTagName(tg);if(tG&&tG[0]){ob.removeChild(tG[0]);}}
function P7_LSMshow(a){var pB,op;if(!p7LSMf){return false;}
P7_LSMrollout();if(p7LSMantmr){clearTimeout(p7LSMantmr);}
if(p7LSMoptmr){clearTimeout(p7LSMoptmr);}
if(p7LSMimtmr){clearTimeout(p7LSMimtmr);}
if(p7LSMshowtmr){clearTimeout(p7LSMshowtmr);}
document.getElementById('p7LSM_loading').style.display="none";p7LSMcshow[0]=a.p7lsmdiv;p7LSMcshow[1]=a.p7lsmsnum;p7LSMcshow[2]=a;op=P7_LSMopts();pB=document.getElementById('p7LSM_descboxW');if(pB.p7status=="open"&&op[17]!=1){P7_LSMdescpop('hide',2);}
else{P7_LSMshowB();}
return false;}
function P7_LSMshowB(){var i,a,cAB,cOV,cDB,sD,bw=0,bh=0,x,pI,prg,op,opp;a=p7LSMcshow[2];P7_LSMsetTOC();op=P7_LSMopts();P7_LSMbuttons();if(op[19]===0){P7_LSMsetdsp('p7LSM_toolbar','none');document.getElementById("p7LSM_container").className="hideToolbar";}
else{P7_LSMsetdsp('p7LSM_toolbar','block');document.getElementById("p7LSM_container").className="";}
cAB=document.getElementById('p7lsm_abox');cOV=document.getElementById('p7lsm_overlay');cDB=document.getElementById('p7LSM_box');if(cDB.p7status=='closed'){if(op[9]==1||p7LSMnextMode=='auto'){if(p7LSMmode!="auto"){p7LSMmode="auto";P7_LSMplay(1);}}}
p7LSMnextMode='';cDB.style.display="block";P7_LSMhsel('hide');cOV.style.display="block";p7LSMstat=true;opp=1.00;if(!cAB.filters){cAB.style.opacity=opp;}
else{cAB.style.zoom="100%";cAB.style.filter='alpha(opacity='+opp*100+')';}
if(cDB.p7status=='open'){cDB.p7new=false;bw=cDB.offsetWidth;bh=cDB.offsetHeight;cDB.p7bl=parseInt(cDB.style.left,10);cDB.p7bt=parseInt(cDB.style.top,10);cDB.p7status='closed';}
else{cDB.p7new=true;sD=document.getElementById(p7LSMcshow[0]);cDB.className=sD.className;cAB.className=sD.className;cOV.className=sD.className;document.getElementById('p7LSM_helpbox').className=sD.className;document.getElementById('p7LSM_tocbox').className=sD.className;document.getElementById('p7LSM_descboxW').className=sD.className;if(op[13]==1||p7LSMtocActive){P7_LSMtoc('show');p7LSMtocActive=false;}
if(op[16]==1||p7LSMhlpActive){P7_LSMhelp('show');p7LSMhlpActive=false;}}
if(op[1]==1||op[1]>1&&op[7]==1){cAB.style.height=bh+"px";cAB.style.width=bw+"px";cAB.style.display="block";P7_LSMpos(cAB.id);}
if(op[1]>0){cDB.style.left="-9000px";}
cDB.p7bw=bw;cDB.p7bh=bh;cDB.style.height="auto";if(a.className=='p7lsm_type_img'){x=a.p7imindex;pI=document.p7lsmpre[x];if(!pI.cmp){P7_LSMposldng();pI.src=a.href;P7_LSMload_img(x);}
else{if(op[1]>0){p7LSMantmr=setTimeout("P7_LSMshow_dsp()",p7lsmdly);}
else{P7_LSMshow_dsp();}}}
else if(a.className=='p7lsm_type_cnt'){if(op[1]>0){p7LSMantmr=setTimeout("P7_LSMshow_dsp()",p7lsmdly);}
else{P7_LSMshow_dsp();}}}
function P7_LSMshow_dsp(){var i,a,cF,cB,cAB,cDB,cIM,cTM,an,el,ob,cN,tA,w,op,th,tw,cl,ct,cw,ch,fd,hs,sc,tl,tt,t,tSP,pB,pBC,cp;a=p7LSMcshow[2];P7_LSMrestore();cDB=document.getElementById('p7LSM_box');cAB=document.getElementById('p7lsm_abox');pB=document.getElementById('p7LSM_descboxW');pBC=document.getElementById('p7LSM_descbox');cB=document.getElementById(p7LSMcshow[0]);cN=a.parentNode.childNodes;an=cB.p7opt[1];if(cB.p7opt[6]==1){el=P7_LSMsetdsp('p7LSM_counter','block');ob=document.createTextNode('Slide '+a.p7lsmsnum+' of '+cB.p7lsmnum);if(el.hasChildNodes){for(i=0;i<el.childNodes.length;i++){el.removeChild(el.childNodes[i]);}}
el.appendChild(ob);}
else{P7_LSMsetdsp('p7LSM_counter','none');}
if(cB.p7opt[12]==1){el=P7_LSMsetdsp('p7LSM_caption','block');ob=document.createTextNode(P7_LSMtitle(a));if(el.hasChildNodes){for(i=0;i<el.childNodes.length;i++){el.removeChild(el.childNodes[i]);}}
el.appendChild(ob);}
else{P7_LSMsetdsp('p7LSM_caption','none');}
tw=cB.p7opt[4];cDB.style.width=tw+"px";P7_LSMsetdsp('p7LSM_cnt','none');P7_LSMsetdsp('p7LSM_img','none');P7_LSMsetdsp('p7LSM_desc','none');if(a.className=='p7lsm_type_img'){cIM=document.getElementById('p7LSMfsim');cIM.src=a.href;cIM.setAttribute("width",document.p7lsmpre[a.p7imindex].width);cIM.setAttribute("height",document.p7lsmpre[a.p7imindex].height);P7_LSMsetdsp('p7LSM_img','block');P7_LSMsetdsp('p7LSM_toolbar','none');P7_LSMsetdsp('p7LSM_info','none');cTM=a.getElementsByTagName("img")[0];cIM.setAttribute("alt",cTM.getAttribute("alt"));cDB.style.width="auto";tw=cDB.offsetWidth;cDB.style.width=tw+"px";if(cB.p7opt[19]!==0){P7_LSMsetdsp('p7LSM_toolbar','block');}
P7_LSMsetdsp('p7LSM_info','block');tA=document.getElementById('p7LSMfslink');tA.removeAttribute("href");tA.setAttribute("title","");tA.onclick=null;for(i=0;i<cN.length;i++){if(cN[i].className&&cN[i].className=='p7lsm_link'){el=cN[i].getElementsByTagName("a");if(el&&el[0]){tA.setAttribute("title",P7_LSMtitle(el[0]));tA.setAttribute("href",el[0].getAttribute("href"));if(el[0].onclick){tA.onclick=el[0].onclick;}}}}}
else{hs=a.hash;if(hs&&hs.length>1){ob=document.getElementById(hs.substring(1));if(ob){el=P7_LSMsetdsp('p7LSM_cnt','block');P7_LSMcopyCN(el,ob);el.p7src=ob;if(typeof P7_TPMrsz=='function'){P7_TPMrsz();}}}}
pB.p7show=false;for(i=0;i<cN.length;i++){if(cN[i].className&&cN[i].className=='p7lsm_description'){if(cB.p7opt[15]==1){P7_LSMcopyCN(pBC,cN[i]);pBC.p7src=cN[i];pB.p7show=true;}
else{el=P7_LSMsetdsp('p7LSM_desc','block');P7_LSMcopyCN(el,cN[i]);el.p7src=cN[i];}}}
if(cB.p7opt[15]==1){if(cB.p7opt[17]==1&&pB.p7status=='open'){P7_LSMposdesc();}}
th=cDB.offsetHeight;if(cB.p7opt[19]!==0&&cDB.offsetWidth<p7LSMminwidth){if(!cB.p7hideButtons){cDB.style.width=p7LSMminwidth+"px";tw=p7LSMminwidth;}}
if(an===0){P7_LSMpos('p7LSM_box');cDB.p7status="open";P7_LSMshow_fin();}
else if(an==1){cDB.style.visiblity="hidden";P7_LSMpos('p7LSM_box');cAB.style.top=cDB.style.top;cAB.style.left=cDB.style.left;cAB.style.height=cDB.offsetHeight+"px";cAB.style.width=cDB.offsetWidth+"px";cDB.style.visbility="visible";cp=0.99;cAB.lsmCurrentOpacity=cp;if(!cAB.filters){cAB.style.opacity=cp;}
else{cAB.style.filter='alpha(opacity='+cp*100+')';}
if(!cAB.lsmFadeRunning){cAB.lsmFadeRunning=true;cAB.lsmFade=setInterval("P7_LSMfadeBox('"+cAB.id+"')",10);}}
else if(an>1){if(an==2||an==3){cw=6;ch=20;}
else{cw=tw;ch=th;}
if(cB.p7opt[7]==1&&!cDB.p7new){ch=(cDB.p7bh>10)?cDB.p7bh:ch;cw=(cDB.p7bw>20)?cDB.p7bw:cw;}
else{cAB.style.width=cw+"px";cAB.style.height=ch+"px";cAB.style.display="block";P7_LSMpos(cAB.id);}
cl=parseInt(cAB.style.left,10);ct=parseInt(cAB.style.top,10);cDB.style.visibility="hidden";P7_LSMpos(cDB.id);tl=parseInt(cDB.style.left,10);tt=parseInt(cDB.style.top,10);fd=0;if(cB.p7opt[2]==1){fd=1;if(cB.p7opt[7]!=1||cDB.p7new){ct=parseInt(ct-(ch/2)+(th/2),10);fd=0;}}
else if(cB.p7opt[2]==2){fd=2;if(cB.p7opt[7]!=1||cDB.p7new){cl=parseInt(cl-(cw/2)+(tw/2),10);fd=0;}}
else if(cB.p7opt[2]==3){fd=3;if(cB.p7opt[7]!=1||cDB.p7new){cl=parseInt(cl-(cw/2)+(tw/2),10);ct=parseInt(ct-(ch/2)+(th/2),10);fd=0;}}
cAB.lsmCurrentLeft=cl;cAB.lsmTargetleft=tl;cAB.lsmCurrentTop=ct;cAB.lsmTargetTop=tt;cAB.lsmCurrentHeight=ch;cAB.lsmTargetHeight=th;cAB.lsmCurrentWidth=cw;cAB.lsmTargetWidth=tw;cAB.lsmAnimOpt=an;cAB.lsmFD=fd;if(!cAB.lsmGrowRunning){cAB.lsmGrowRunning=true;cAB.lsmGrow=setInterval("P7_LSMgrowBox('"+cAB.id+"')",10);}}}
function P7_LSMshow_fin(){var pB,op=P7_LSMopts();p7LSMan=false;if(op[15]==1){pB=document.getElementById('p7LSM_descboxW');if((pB.p7show&&op[17]!=1)||(op[17]==1&&pB.p7status!='open')){P7_LSMdescpop('show');}
else{if(op[17]==1){pB.p7status='open';}
P7_LSMshow_fin2();}}
else{P7_LSMshow_fin2();}}
function P7_LSMshow_fin2(){var i,j,cn,n,nn,tn,op,nA,tS,tB,tA,im,px,sd,m=false;p7LSMan=false;tB=document.getElementById('p7LSM_box');tB.p7status='open';tB.p7new=false;P7_LSMrsz();tS=document.getElementById(p7LSMcshow[0]);op=tS.p7opt;nn=p7LSMcshow[1]+1;n=nn;sd=p7LSMcshow[0];if(op[14]==1){if(nn>tS.p7lsmnum){if(op[5]==1){nA=tS.p7slides[0];}
else if(op[5]==3){j=P7_LSMnextShow();sd=p7LSMctl[j][0];nA=document.getElementById(sd).p7slides[0];}
else{nA=null;}}
else{nA=tS.p7slides[nn-1];}
if(nA&&nA.p7imindex){px=nA.p7imindex;im=document.p7lsmpre[px];if(!im.cmp){im.src=nA.href;}}}
if(p7LSMmode=="auto"){if(n>tS.p7lsmnum&&op[5]===0){P7_LSMpause();}
else if(n>tS.p7lsmnum&&op[5]==2){p7LSMshowtmr=setTimeout("P7_LSMclose()",op[11]*1000);}
else{p7LSMshowtmr=setTimeout("P7_LSMctrl('next','',1)",op[11]*1000);}}}
function P7_LSMnextShow(){var i,cs,j=-1;cs=p7LSMcshow[0];for(i=0;i<p7LSMctl.length;i++){if(p7LSMctl[i][0]==cs){if(i>=p7LSMctl.length-1){j=0;}
else{j=i+1;}
break;}}
return j;}
function P7_LSMprevShow(){var i,cs,j=-1;cs=p7LSMcshow[0];for(i=0;i<p7LSMctl.length;i++){if(p7LSMctl[i][0]==cs){if(i===0){j=p7LSMctl.length-1;}
else{j=i-1;}
break;}}
return j;}
function P7_LSMrestore(){var el;el=document.getElementById("p7LSM_cnt");if(el.p7src){P7_LSMcopyCN(el.p7src,el);}
el.p7src=false;el=document.getElementById("p7LSM_desc");if(el.p7src){P7_LSMcopyCN(el.p7src,el);}
el.p7src=false;el=document.getElementById("p7LSM_descbox");if(el.p7src){P7_LSMcopyCN(el.p7src,el);}
el.p7src=false;}
function P7_LSMload_img(ix,kn){var pR,op,im=document.p7lsmpre[ix];kn=(kn)?kn:0;if(im.cmp){im.cmp=true;document.getElementById("p7LSM_loading").style.display="none";p7LSMantmr=setTimeout("P7_LSMshow_dsp()",p7lsmdly);}
else{if(p7LSMimtmr){clearTimeout(p7LSMimtmr);}
kn++;if(kn<500){p7LSMimtmr=setTimeout("P7_LSMload_img("+ix+","+kn+")",60);}
else{document.getElementById("p7LSM_loading").style.display="none";im.cmp=true;im.width=300;im.height=300;op=P7_LSMopts();if(op[1]>0){p7LSMantmr=setTimeout("P7_LSMshow_dsp()",p7lsmdly);}
else{P7_LSMshow_dsp();}}}}
function P7_LSMbuttons(){var i,tS,tn,opt;tS=document.getElementById(p7LSMcshow[0]);tn=tS.p7lsmnum;if(tn==1){tS.p7hideButtons=true;P7_LSMsetdsp('p7LSM_toc','none');P7_LSMsetdsp('p7LSM_first','none');P7_LSMsetdsp('p7LSM_prev','none');P7_LSMsetdsp('p7LSM_pauseplay','none');P7_LSMsetdsp('p7LSM_next','none');P7_LSMsetdsp('p7LSM_last','none');P7_LSMsetdsp('p7LSM_help','none');}
else{tS.p7hideButtons=false;P7_LSMsetdsp('p7LSM_toc','block');P7_LSMsetdsp('p7LSM_first','block');P7_LSMsetdsp('p7LSM_prev','block');P7_LSMsetdsp('p7LSM_pauseplay','block');P7_LSMsetdsp('p7LSM_next','block');P7_LSMsetdsp('p7LSM_last','block');P7_LSMsetdsp('p7LSM_help','block');}}
function P7_LSMclose(){var i,cAB,cOV,cDB,j,v;if(p7LSMctl.length<1||!p7LSMstat){return;}
if(p7LSMantmr){clearTimeout(p7LSMantmr);}
if(p7LSMoptmr){clearTimeout(p7LSMoptmr);}
if(p7LSMimtmr){clearTimeout(p7LSMimtmr);}
if(p7LSMshowtmr){clearTimeout(p7LSMshowtmr);}
P7_LSMpause();p7LSMstat=false;P7_LSMtoc('hide');P7_LSMhelp('hide');P7_LSMdescpop('hide',1);cAB=document.getElementById('p7lsm_abox');cOV=document.getElementById('p7lsm_overlay');cDB=document.getElementById('p7LSM_box');if(cAB.lsmGrowRunning){cAB.lsmGrowRunning=false;clearInterval(cAB.lsmGrow);}
if(cAB.lsmFadeRunning){cAB.lsmFadeRunning=false;clearInterval(cAB.lsmFade);}
cDB.p7status="closed";cDB.style.left="-9000px";cDB.style.height="10px";cDB.style.top="0px";P7_LSMrestore();cAB.style.display="none";document.getElementById("p7LSM_loading").style.display="none";P7_LSMhsel('show');cOV.style.display="none";if(P7_LSMisIE8()){cOV.style.height="10px";}
return false;}
function P7_LSMopts(){var sd,tD;if(!p7LSMcshow[0]){p7LSMcshow[0]=p7LSMctl[0][0];p7LSMcshow[1]=1;}
tD=document.getElementById(p7LSMcshow[0]);if(tD&&tD.p7opt){return tD.p7opt;}
else{return['',0,0,0,0,0];}}
function P7_LSMrsz(){var tB=document.getElementById('p7LSM_box');if(tB&&tB.p7status=='open'&&!p7LSMan){P7_LSMpos('p7LSM_box');P7_LSMpostoc();P7_LSMposhelp();P7_LSMposdesc();}}
function P7_LSMpostoc(){var tB,h,t,wd,sc,l=10;tB=document.getElementById("p7LSM_tocbox");wd=P7_LSMwin();if(tB.p7status=="open"){tB.style.height="auto";h=tB.offsetHeight;t=wd[0]-h-20;if(t<10){h=wd[0]-20;t=10;tB.style.height=h+"px";}
sc=P7_LSMsclb();t+=sc[1];l+=sc[0];t=(t<0)?0:t;tB.style.top=t+"px";tB.style.left=l+"px";}}
function P7_LSMposhelp(){var tB,h,w,t,l,wd,sc;tB=document.getElementById("p7LSM_helpbox");wd=P7_LSMwin();if(tB.p7status=="open"){tB.style.height="auto";h=tB.offsetHeight;w=tB.offsetWidth;t=wd[0]-h-20;l=wd[1]-w-20;sc=P7_LSMsclb();t+=sc[1];l+=sc[0];t=(t<0)?0:t;tB.style.top=t+"px";tB.style.left=l+"px";}}
function P7_LSMposdesc(){var tB,tBC,h,w,t,l,wd,sc,lm;tB=document.getElementById("p7LSM_descboxW");tBC=document.getElementById("p7LSM_descbox");wd=P7_LSMwin();if(tB.p7status=="open"){tB.style.height="auto";h=tB.offsetHeight;w=tB.offsetWidth;t=wd[0]-h-20;l=wd[1]-w-20;sc=P7_LSMsclb();t+=sc[1];l+=sc[0];t=(t<0)?0:t;lm=P7_LSMminleft();l=(l<lm)?lm:l;tB.style.top=t+"px";tB.style.left=l+"px";}}
function P7_LSMposldng(){var tD,dB,wd,x,y,lw,sc;tD=document.getElementById('p7LSM_loading');dB=document.getElementById('p7LSM_box');tD.style.visibility="hidden";tD.style.display="block";if(!dB.p7new&&dB.p7bl){x=parseInt(dB.p7bl,10)+((dB.p7bw-tD.offsetWidth)/2);y=parseInt(dB.p7bt,10)+((dB.p7bh-tD.offsetHeight)/2);}
else{sc=P7_LSMsclb();wd=P7_LSMwin();x=((wd[1]-tD.offsetWidth)/2)+sc[0];y=((wd[0]-tD.offsetHeight)/2)+sc[1];}
tD.style.left=x+"px";tD.style.top=y+"px";tD.style.visibility="visible";}
function P7_LSMminleft(){var d=document.getElementById('p7LSM_box');return parseInt(d.style.left,10)+d.offsetWidth+5;}
function P7_LSMpos(d){var x,y,wd,tB,dB,h,w,sh,oD,op,v,j,t,bx,by,bh,bw,sc;wd=P7_LSMwin();tB=document.getElementById(d);op=P7_LSMopts();w=tB.offsetWidth;h=tB.offsetHeight;x=parseInt((wd[1]-w)/2,10);x=(x<0)?0:x;y=parseInt((wd[0]-h)/2,10);y=(y<0)?0:y;if(op[2]==1){y=op[3];}
else if(op[2]==2){x=op[18];}
else if(op[2]==3){y=op[3];x=op[18];}
sc=P7_LSMsclb();if(op[2]!=3){if(op[2]!=2){x+=sc[0];}
if(op[2]!=1){y+=sc[1];}}
tB.style.left=x+"px";tB.style.top=y+"px";if(P7_LSMisIE8()){sh=document.body.parentNode.scrollHeight;oD=document.getElementById('p7lsm_overlay');h=(wd[0]>0)?wd[0]:h;h=(h>sh)?h:sh;oD.style.height=h+"px";oD.style.position="absolute";}}
function P7_LSMdims(ob){var pp,h,w,l=0,t=0,r=[4];pp=ob;while(pp){l+=(pp.offsetLeft)?pp.offsetLeft:0;t+=(pp.offsetTop)?pp.offsetTop:0;if(typeof(opera)!='undefined'||navigator.userAgent.indexOf("Safari")>-1){if(pp.nodeName=="BODY"){l-=(pp.offsetLeft)?pp.offsetLeft:0;t-=(pp.offsetTop)?pp.offsetTop:0;}}
pp=pp.offsetParent;}
r[0]=l;r[1]=t;r[2]=ob.offsetWidth;r[3]=ob.offsetHeight;return r;}
function P7_LSMsclb(){var x,y;y=document.body.parentNode.scrollTop;if(!y){y=document.body.scrollTop;}
y=(y)?y:0;x=document.body.parentNode.scrollLeft;if(!x){x=document.body.scrollLeft;}
x=(x)?x:0;return[x,y];}
function P7_LSMglideBox(dd){var inc,ct,tt,ch,th,dr,pc=0.08,tv,dV;dV=document.getElementById(dd);p7LSMan=true;ct=dV.lsmCurrentTop;tt=dV.lsmTargetTop;ch=dV.lsmCurrentHeight;th=dV.lsmTargetHeight;dr=dV.lsmDirection;tv=Math.abs(parseInt(Math.abs(ct)-Math.abs(tt),10));inc=tv*pc;inc=(inc<=2)?2:inc;inc=(dr!='open')?inc:inc*-1;if(ct==tt){p7LSMan=false;clearInterval(dV.lsmGlide);dV.lsmGlideRunning=false;if(dr=='open'){dV.style.height="auto";if(dV.id=='p7LSM_descboxW'){P7_LSMshow_fin2();}}
else{dV.style.left="-9000px";dV.style.height="10px";dV.style.top="0px";if(dV.id=='p7LSM_descboxW'){dV.p7status="closed";P7_LSMshowB();}}}
else{ct+=inc;ch-=inc;if(dr=='open'&&ct<tt){ct=tt;ch=th;}
if(dr=='close'&&ct>tt){ct=tt;ch=th;}
dV.lsmCurrentTop=ct;dV.lsmCurrentHeight=ch;dV.style.top=ct+'px';dV.style.height=ch+'px';}}
function P7_LSMgrowBox(dd){var cl,tl,ct,tt,ch,th,cw,tw,op,il=10,it=10,ih=1,iw=1,cD,nw=0,nh=0,nl=0,nt=0,tv,pc=0.10,cp;p7LSMan=true;cD=document.getElementById(dd);cl=cD.lsmCurrentLeft;tl=cD.lsmTargetleft;ct=cD.lsmCurrentTop;tt=cD.lsmTargetTop;ch=cD.lsmCurrentHeight;th=cD.lsmTargetHeight;cw=cD.lsmCurrentWidth;tw=cD.lsmTargetWidth;op=cD.lsmAnimOpt;tv=Math.abs(parseInt(Math.abs(th)-Math.abs(ch),10));ih=tv*pc;ih=(ih<=1)?1:ih;tv=Math.abs(parseInt(Math.abs(tw)-Math.abs(cw),10));iw=tv*pc;iw=(iw<=1)?1:iw;il=iw/2;it=ih/2;if(tw<cw){iw=iw*-1;}
if(th<ch){ih=ih*-1;}
if(tt<ct){it=it*-1;}
if(tl<cl){il=il*-1;}
if(ch==th&&cw==tw&&ct==tt&&cl==tl){clearInterval(cD.lsmGrow);cD.lsmGrowRunning=false;document.getElementById('p7LSM_box').style.visibility="visible";if(op==3){cp=0.99;cD.lsmCurrentOpacity=cp;if(!cD.filters){cD.style.opacity=cp;}
else{cD.style.filter='alpha(opacity='+cp*100+')';}
if(!cD.lsmFadeRunning){cD.lsmFadeRunning=true;cD.lsmFade=setInterval("P7_LSMfadeBox('"+cD.id+"')",10);}}
else{cD.style.display='none';P7_LSMshow_fin();}}
else{nl=cl+il;nt=ct+it;if(op==2||op==3){nw=cw+iw;if(cw==tw){nh=ch+ih;}
else{nh=ch;nt=ct;}}
if(ih<0){nh=(nh<=th)?th:nh;}
else{nh=(nh>=th)?th:nh;}
if(iw<0){nw=(nw<=tw)?tw:nw;}
else{nw=(nw>=tw)?tw:nw;}
if(it<0){nt=(nt<=tt)?tt:nt;}
else{nt=(nt>=tt)?tt:nt;}
if(il<0){nl=(nl<=tl)?tl:nl;}
else{nl=(nl>=tl)?tl:nl;}
cD.lsmCurrentLeft=nl;cD.lsmCurrentTop=nt;cD.lsmCurrentHeight=nh;cD.lsmCurrentWidth=nw;cD.style.left=nl+"px";cD.style.top=nt+"px";cD.style.height=nh+'px';cD.style.width=nw+'px';}}
function P7_LSMfadeBox(dd){var cp,lm=0.01,tD,inc=0.04;p7LSMan=true;tD=document.getElementById(dd);cp=tD.lsmCurrentOpacity;if(cp==lm){clearInterval(tD.lsmFade);tD.lsmFadeRunning=false;tD.style.display="none";P7_LSMpos('p7LSM_box');P7_LSMshow_fin();}
else{cp-=inc;cp=(cp<=lm)?lm:cp;tD.lsmCurrentOpacity=cp;if(!tD.filters){tD.style.opacity=cp;}
else{tD.style.filter='alpha(opacity='+cp*100+')';}}}
function P7_LSMkey(evt){var k,tg,nn,pp,m=true,tb=false,i,dB,tA;if(p7LSMstat){evt=(evt)?evt:event;tg=(evt.target)?evt.target:evt.srcElement;nn=tg.nodeName.toLowerCase();if(!evt.altKey&&!evt.ctrlKey){if(nn!='input'&&nn!='textarea'){k=evt.keyCode;if(k==33||k==37||k==109||k==32&&evt.shiftKey){P7_LSMctrl('previous');m=false;}
else if(k==34||k==39||k==107||k==32){P7_LSMctrl('next');m=false;}
else if(k==35){P7_LSMctrl('last');m=false;}
else if(k==36){P7_LSMctrl('first');m=false;}
else if(k==80){P7_LSMppTrig();m=false;}
else if(k==27||(k==88&&typeof(opera)!='object')){P7_LSMclose();m=false;}
else if(k==72&&typeof(opera)!='object'){P7_LSMhelp();m=false;}
else if(k==84){P7_LSMtoc();m=false;}}}}
if(!m){if(evt.preventDefault){evt.preventDefault();}}
return m;}
function P7_LSMwin(){var h,w;if(window.innerHeight){if(document.documentElement.clientWidth){w=document.documentElement.clientWidth;}
else{w=window.innerWidth;}
h=window.innerHeight;}
else if(document.documentElement&&document.documentElement.clientHeight){w=document.documentElement.clientWidth;h=document.documentElement.clientHeight;}
else if(document.body){w=document.body.clientWidth;h=document.body.clientHeight;}
return[h,w];}
function P7_LSMsetdsp(dd,dt){var el=document.getElementById(dd);if(el){el.style.display=dt;}
return el;}
function P7_LSMcopyCN(tD,tS){while(tD.childNodes.length>0){tD.removeChild(tD.childNodes[0]);}
while(tS.childNodes.length>0){tD.appendChild(tS.childNodes[0]);}}
function P7_LSMbuildpop(){var el,a,i,li,ul,ob,tb,bx,cn;tb=document.createElement('div');tb.setAttribute('id','p7LSM_toolbar');i=document.createElement('i');i.appendChild(document.createTextNode('contents'));a=document.createElement('a');a.appendChild(i);a.setAttribute('id','p7LSM_toc');a.setAttribute('href','#');a.setAttribute('title','Table of Contents');ob=document.createElement('div');ob.setAttribute('id','p7LSM_toolbartoc');ob.appendChild(a);tb.appendChild(ob);ul=document.createElement('ul');i=document.createElement('i');i.appendChild(document.createTextNode('first'));a=document.createElement('a');a.appendChild(i);a.setAttribute('id','p7LSM_first');a.setAttribute('href','#');a.setAttribute('title','First');li=document.createElement('li');li.appendChild(a);ul.appendChild(li);i=document.createElement('i');i.appendChild(document.createTextNode('previous'));a=document.createElement('a');a.appendChild(i);a.setAttribute('id','p7LSM_prev');a.setAttribute('href','#');a.setAttribute('title','Previous');li=document.createElement('li');li.appendChild(a);ul.appendChild(li);i=document.createElement('i');i.appendChild(document.createTextNode('pause/play'));a=document.createElement('a');a.appendChild(i);a.setAttribute('id','p7LSM_pauseplay');a.setAttribute('href','#');a.setAttribute('title','Play');a.setAttribute('class','p7LSM_play');li=document.createElement('li');li.appendChild(a);ul.appendChild(li);i=document.createElement('i');i.appendChild(document.createTextNode('next'));a=document.createElement('a');a.appendChild(i);a.setAttribute('id','p7LSM_next');a.setAttribute('href','#');a.setAttribute('title','Next');li=document.createElement('li');li.appendChild(a);ul.appendChild(li);i=document.createElement('i');i.appendChild(document.createTextNode('last'));a=document.createElement('a');a.appendChild(i);a.setAttribute('id','p7LSM_last');a.setAttribute('href','#');a.setAttribute('title','Last');li=document.createElement('li');li.appendChild(a);ul.appendChild(li);ob=document.createElement('div');ob.setAttribute('id','p7LSM_vcr');ob.appendChild(ul);tb.appendChild(ob);i=document.createElement('i');i.appendChild(document.createTextNode('help'));a=document.createElement('a');a.appendChild(i);a.setAttribute('id','p7LSM_help');a.setAttribute('href','#');a.setAttribute('title','Help for Keyboard Users');ob=document.createElement('div');ob.setAttribute('id','p7LSM_toolbarhelp');ob.appendChild(a);tb.appendChild(ob);i=document.createElement('i');i.appendChild(document.createTextNode('close'));a=document.createElement('a');a.appendChild(i);a.setAttribute('id','p7LSM_close');a.setAttribute('href','#');a.setAttribute('title','Close');ob=document.createElement('div');ob.setAttribute('id','p7LSM_toolbarclose');ob.appendChild(a);tb.appendChild(ob);cn=document.createElement('div');cn.setAttribute('id','p7LSM_container');cn.appendChild(tb);ob=document.createElement('div');ob.setAttribute('id','p7LSM_cnt');cn.appendChild(ob);ob=document.createElement('div');ob.setAttribute('id','p7LSM_img');cn.appendChild(ob);bx=document.createElement('div');bx.setAttribute('id','p7LSM_box');bx.appendChild(cn);el=document.createElement('div');el.setAttribute('id','p7LSM_info');ob=document.createElement('div');ob.setAttribute('id','p7LSM_caption');el.appendChild(ob);ob=document.createElement('div');ob.setAttribute('id','p7LSM_desc');el.appendChild(ob);ob=document.createElement('div');ob.setAttribute('id','p7LSM_counter');el.appendChild(ob);cn.appendChild(el);document.getElementsByTagName('body')[0].appendChild(bx);el=document.createElement('div');el.setAttribute("id","p7LSM_loading");document.getElementsByTagName('body')[0].appendChild(el);el=document.createElement('a');el.setAttribute("id","p7LSMfslink");ob=document.createElement('img');ob.setAttribute("id","p7LSMfsim");el.appendChild(ob);document.getElementById('p7LSM_img').appendChild(el);}
function P7_LSMhsel(ac){var i,tg,vs;if(P7_LSMisIE6()){tg=document.getElementsByTagName("select");if(tg){vs=(ac=='hide')?'hidden':'visible';for(i=0;i<tg.length;i++){tg[i].style.visibility=vs;}}}}
function P7_LSMisIE6(){var j,v,m=false;j=p7lsmA.indexOf("msie");v=parseInt(p7lsmA.substring(j+4,j+6),10);if(v<7){m=true;}
return m;}
function P7_LSMisIE8(){var j,v,m=false;j=p7lsmA.indexOf("msie");v=parseInt(p7lsmA.substring(j+4,j+6),10);if(v<9){m=true;}
return m;}