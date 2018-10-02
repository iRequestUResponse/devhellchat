Yogurt.ThemeMananger=OBJECT({init:(o,t)=>{void 0===Yogurt.Theme&&(Yogurt.Theme={}),Yogurt.Theme=EXTEND({origin:{wrapperStyle:{backgroundColor:"#fff",color:"#000",fontSize:16},menuLayoutMenuWidth:200,menuLayoutHideMenuWinWidth:800,menuLayoutMenuBackgroundColor:"#222",buttonColor:"#eee",buttonTitleColor:"#333",buttonMouseoverColor:"#333",buttonMouseoverTitleColor:"#eee",inputBorderColor:"#666",rangeTrackColor:"#999",rangeThumbColor:"#666",toolbarBackground:void 0,toolbarBackgroundImage:void 0,toolbarColor:"#333",toolbarTextColor:"#fff",bottomBarColor:"#666",bottomBarTextColor:"#fff",bottomBarHeight:70},extend:Yogurt.Theme})}}),Yogurt.Wrapper=CLASS({preset:()=>{return NODE},init:(o,t,e)=>{o.setDom(DIV({style:Yogurt.Theme.wrapperStyle}))}}),Yogurt.Alert=CLASS({preset:()=>{return UUI.ALERT},params:()=>{return{style:{backgroundColor:"#fff",color:"#333",textAlign:"center",border:"1px solid #333",borderRadius:5,boxShadow:"0 0 5px rgba(0,0,0,0.3)",onDisplayResize:(o,t)=>{return o>300?{width:280}:{width:"90%"}}},contentStyle:{padding:20,fontSize:20},buttonStyle:{borderTop:"1px solid #999",padding:15,fontSize:20}}},init:(o,t)=>{t.getButton().on("mouseover",(o,t)=>{t.addStyle({color:Yogurt.Theme.buttonMouseoverTitleColor,backgroundColor:Yogurt.Theme.buttonMouseoverColor,borderRadius:"0 0 5px 5px"})}),t.getButton().on("mouseout",(o,t)=>{t.addStyle({color:"inherit",backgroundColor:"transparent",borderRadius:"0 0 5px 5px"})})}}),Yogurt.Confirm=CLASS({preset:()=>{return UUI.CONFIRM},params:()=>{return{style:{backgroundColor:"#fff",color:"#333",textAlign:"center",border:"1px solid #333",borderRadius:5,boxShadow:"0 0 5px rgba(0,0,0,0.3)",onDisplayResize:(o,t)=>{return o>300?{width:280}:{width:"90%"}}},contentStyle:{padding:20,fontSize:20},okButtonStyle:{flt:"left",borderTop:"1px solid #999",padding:"15px 0",width:"50%",fontSize:20},cancelButtonStyle:{flt:"right",marginLeft:-1,borderLeft:"1px solid #999",borderTop:"1px solid #999",padding:"15px 0",width:"50%",fontSize:20}}},init:(o,t)=>{t.getOkButton().on("mouseover",(o,t)=>{t.addStyle({color:Yogurt.Theme.buttonMouseoverTitleColor,backgroundColor:Yogurt.Theme.buttonMouseoverColor,borderRadius:"0 0 0 5px"})}),t.getOkButton().on("mouseout",(o,t)=>{t.addStyle({color:"inherit",backgroundColor:"transparent",borderRadius:"0 0 0 5px"})}),t.getCancelButton().on("mouseover",(o,t)=>{t.addStyle({color:Yogurt.Theme.buttonMouseoverTitleColor,backgroundColor:Yogurt.Theme.buttonMouseoverColor,borderRadius:"0 0 5px 0"})}),t.getCancelButton().on("mouseout",(o,t)=>{t.addStyle({color:"inherit",backgroundColor:"transparent",borderRadius:"0 0 5px 0"})})}}),Yogurt.Prompt=CLASS({preset:()=>{return UUI.PROMPT},params:()=>{return{style:{backgroundColor:"#fff",color:"#333",textAlign:"center",border:"1px solid #333",borderRadius:5,boxShadow:"0 0 5px rgba(0,0,0,0.3)",onDisplayResize:(o,t)=>{return o>300?{width:280}:{width:"90%"}}},contentStyle:{padding:20,fontSize:20},inputStyle:{borderTop:"1px solid #999",padding:15,fontSize:20},okButtonStyle:{flt:"left",borderTop:"1px solid #999",padding:"15px 0",width:"50%",fontSize:20},cancelButtonStyle:{flt:"right",marginLeft:-1,borderLeft:"1px solid #999",borderTop:"1px solid #999",padding:"15px 0",width:"50%",fontSize:20}}},init:(o,t)=>{t.getOkButton().on("mouseover",(o,t)=>{t.addStyle({color:Yogurt.Theme.buttonMouseoverTitleColor,backgroundColor:Yogurt.Theme.buttonMouseoverColor,borderRadius:"0 0 0 5px"})}),t.getOkButton().on("mouseout",(o,t)=>{t.addStyle({color:"inherit",backgroundColor:"transparent",borderRadius:"0 0 0 5px"})}),t.getCancelButton().on("mouseover",(o,t)=>{t.addStyle({color:Yogurt.Theme.buttonMouseoverTitleColor,backgroundColor:Yogurt.Theme.buttonMouseoverColor,borderRadius:"0 0 5px 0"})}),t.getCancelButton().on("mouseout",(o,t)=>{t.addStyle({color:"inherit",backgroundColor:"transparent",borderRadius:"0 0 5px 0"})})}}),Yogurt.AppButton=CLASS({preset:()=>{return UUI.BUTTON},params:()=>{return{style:{fontSize:16},spacing:5}},init:(o,t,e)=>{let n=e.icon;n.addStyle({width:80,backgroundColor:"#fff",borderRadius:10})}}),Yogurt.Button=CLASS({preset:()=>{return UUI.BUTTON},params:()=>{return{style:{padding:"10px 20px",color:Yogurt.Theme.buttonTitleColor,fontSize:20,borderRadius:5,backgroundColor:Yogurt.Theme.buttonColor},spacing:5,on:{mouseover:(o,t)=>{t.addStyle({color:Yogurt.Theme.buttonMouseoverTitleColor,backgroundColor:Yogurt.Theme.buttonMouseoverColor})},mouseout:(o,t)=>{t.addStyle({color:Yogurt.Theme.buttonTitleColor,backgroundColor:Yogurt.Theme.buttonColor})}}}}}),Yogurt.Calendar=CLASS({preset:()=>{return UUI.CALENDAR},params:()=>{return{style:{borderBottom:"10px solid "+Yogurt.Theme.toolbarColor},headerStyle:{backgroundColor:Yogurt.Theme.toolbarColor,fontSize:20,color:Yogurt.Theme.toolbarTextColor,padding:"10px 15px",fontWeight:"bold"},leftArrowIcon:FontAwesome.GetIcon("chevron-left"),rightArrowIcon:FontAwesome.GetIcon("chevron-right"),dayStyle:{backgroundColor:"#999",color:"#fff",padding:5,textAlign:"center",fontWeight:"bold"},dateStyle:{backgroundColor:"#eee",fontSize:15,color:"#000",fontWeight:"bold",padding:"8px 0",border:"1px solid #fff",textAlign:"center",backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},todayDateStyle:{backgroundColor:"#ccc"},selectedDateStyle:{backgroundColor:"#999"},otherMonthDateStyle:{backgroundColor:"#eee",fontSize:15,color:"#ccc",padding:"8px 0",border:"1px solid #fff",textAlign:"center",cursor:"pointer"}}}}),Yogurt.Checkbox=CLASS({preset:()=>{return UUI.FULL_CHECKBOX},params:()=>{return{style:{padding:5}}}}),Yogurt.Input=CLASS({preset:()=>{return UUI.FULL_INPUT},params:()=>{return{style:{padding:5,backgroundColor:"#fff",position:"relative",border:"1px solid "+Yogurt.Theme.inputBorderColor}}}}),Yogurt.Range=CLASS({preset:()=>{return UUI.RANGE},params:()=>{return{thumbStyle:{backgroundColor:Yogurt.Theme.rangeThumbColor,height:20,width:20,borderRadius:10},trackStyle:{height:3,backgroundColor:Yogurt.Theme.rangeTrackColor}}}}),Yogurt.Select=CLASS({preset:()=>{return UUI.FULL_SELECT},params:()=>{return{style:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid "+Yogurt.Theme.inputBorderColor,borderLeft:"5px solid "+Yogurt.Theme.inputBorderColor}}}}),Yogurt.Slide=CLASS({preset:()=>{return UUI.PANEL}}),Yogurt.Slider=CLASS({preset:()=>{return NODE},init:(o,t,e)=>{let n,r,u,i,d,l,a=e.slides,g=e.contentStyle,c=e.isNotUsingDots,f=void 0===e.dotColor?"rgba(128, 128, 128, 0.3)":e.dotColor,h=void 0===e.dotHighlightColor?"#000":e.dotHighlightColor,m=[],s=0,p=DIV({c:[DIV({style:{position:"relative"},c:[n=DIV({style:{overflowX:"hidden"},c:i=DIV({c:RUN(()=>{let o=[];return EACH(a,t=>{o.push(t)}),o.push(CLEAR_BOTH()),o})})}),r=DIV({style:{position:"absolute",left:0,top:0,width:20,height:"100%",textAlign:"center",cursor:"pointer"},c:UUI.V_CENTER({style:{height:"100%",color:"#fff"},c:FontAwesome.GetIcon("chevron-left")}),on:{tap:()=>{y(s-1)}}}),u=DIV({style:{position:"absolute",right:0,top:0,width:20,height:"100%",textAlign:"center",cursor:"pointer"},c:UUI.V_CENTER({style:{height:"100%",color:"#fff"},c:FontAwesome.GetIcon("chevron-right")}),on:{tap:()=>{y(s+1)}}})]}),c===!0?"":UUI.V_CENTER({style:{height:20},c:DIV({style:{width:12*a.length,margin:"auto"},c:RUN(()=>{let o=[];return REPEAT(a.length,t=>{let e;o.push(e=UUI.PANEL({style:{flt:"left",padding:"0 2px"},contentStyle:{backgroundColor:0===t?h:f,width:8,height:8,borderRadius:4,cursor:"pointer"},on:{tap:()=>{y(t)}}})),m.push(e)}),o.push(CLEAR_BOTH()),o})})})]});o.setWrapperDom(p),o.setContentDom(i);let T=EVENT("resize",()=>{d=t.getWidth(),t.addContentStyle({width:d*a.length}),EACH(a,o=>{o.addStyle({flt:"left",width:d})})});t.on("show",()=>{T.fire()}),t.on("remove",()=>{T.remove(),T=void 0}),r.hide(),1===a.length&&u.hide();let y=t.scrollTo=(o=>{a.length>1&&(o<=0?r.hide():r.show(),o>=a.length-1?u.hide():u.show(),o>=0&&o<a.length&&(c!==!0&&m[s].addContentStyle({backgroundColor:f}),void 0!==l&&(l.remove(),l=void 0),s<o?(s=o,l=INTERVAL(()=>{return n.getEl().scrollLeft>=s*d?(n.getEl().scrollLeft=s*d,!1):void(n.getEl().scrollLeft+=d/50)})):s>o&&(s=o,l=INTERVAL(()=>{return n.getEl().scrollLeft<=s*d?(n.getEl().scrollLeft=s*d,!1):void(n.getEl().scrollLeft-=d/50)})),c!==!0&&m[s].addContentStyle({backgroundColor:h}),EVENT.fireAll({node:t,name:"scroll"})))});t.on("touchstart",o=>{let e,r,u=n.getEl().scrollLeft,i=o.getLeft();t.on("touchmove",e=(o=>{o.stop(),n.getEl().scrollLeft=u+i-o.getLeft()})),t.on("touchend",r=(o=>{n.getEl().scrollLeft;i-o.getLeft()<0?y(s-1):i-o.getLeft()>0&&y(s+1),o.stopBubbling(),t.off("touchmove",e),t.off("touchend",r),t.off("mouseout",r)})),t.on("mouseout",r),o.stopBubbling()});let b=t.addContentStyle=(o=>{i.addStyle(o)});void 0!==g&&b(g);t.getPage=(()=>{return s})}}),Yogurt.Submit=CLASS({preset:()=>{return UUI.FULL_SUBMIT},params:()=>{return{style:{display:"block",textAlign:"center",padding:"15px 0",cursor:"pointer",textDecoration:"none",color:Yogurt.Theme.buttonTitleColor,fontSize:20,borderRadius:5,touchCallout:"none",userSelect:"none",backgroundColor:Yogurt.Theme.buttonColor,width:"100%"},on:{mouseover:(o,t)=>{t.addStyle({color:Yogurt.Theme.buttonMouseoverTitleColor,backgroundColor:Yogurt.Theme.buttonMouseoverColor})},mouseout:(o,t)=>{t.addStyle({color:Yogurt.Theme.buttonTitleColor,backgroundColor:Yogurt.Theme.buttonColor})}}}}}),Yogurt.Textarea=CLASS({preset:()=>{return UUI.FULL_TEXTAREA},params:()=>{return{style:{padding:5,backgroundColor:"#fff",position:"relative",border:"1px solid "+Yogurt.Theme.inputBorderColor}}}}),Yogurt.MenuLayout=CLASS({preset:()=>{return NODE},init:(o,t,e)=>{let n,r,u,i,d,l,a,g,c,f=e.toolbar,h=e.leftMenu,m=e.rightMenu,s=e.bottomBar,p=!0,T=!0,y=0;void 0!==h&&(y+=1),void 0!==m&&(y+=1);let b=DIV({c:[void 0!==h?u=DIV({style:{position:"fixed",top:0,backgroundColor:Yogurt.Theme.menuLayoutMenuBackgroundColor,width:Yogurt.Theme.menuLayoutMenuWidth,height:"100%",overflowY:"auto",zIndex:999999,onDisplayResize:(o,t)=>{return o>Yogurt.Theme.menuLayoutHideMenuWinWidth?{left:0}:{left:-Yogurt.Theme.menuLayoutMenuWidth}}},c:h}):"",void 0!==m?i=DIV({style:{position:"fixed",top:0,backgroundColor:Yogurt.Theme.menuLayoutMenuBackgroundColor,width:Yogurt.Theme.menuLayoutMenuWidth,height:"100%",overflowY:"auto",zIndex:999999,onDisplayResize:(o,t)=>{return o>Yogurt.Theme.menuLayoutHideMenuWinWidth?{right:0}:{right:-Yogurt.Theme.menuLayoutMenuWidth}}},c:m}):"",f,d=DIV({style:{onDisplayResize:(o,t)=>{return o>Yogurt.Theme.menuLayoutHideMenuWinWidth?{marginLeft:void 0===h?0:Yogurt.Theme.menuLayoutMenuWidth,width:BODY.getWidth()-Yogurt.Theme.menuLayoutMenuWidth*y}:{marginLeft:0,width:"100%"}}}})]});f.addContentStyle({onDisplayResize:(o,t)=>{return o>Yogurt.Theme.menuLayoutHideMenuWinWidth?{left:void 0===h?0:Yogurt.Theme.menuLayoutMenuWidth,width:BODY.getWidth()-(void 0===h?0:Yogurt.Theme.menuLayoutMenuWidth)-(void 0===m?0:Yogurt.Theme.menuLayoutMenuWidth)}:{left:0,width:"100%"}}}),o.setWrapperDom(b),o.setContentDom(d);let C=t.setBottomBar=(o=>{s=o,s.addContentStyle({onDisplayResize:(o,t)=>{return o>Yogurt.Theme.menuLayoutHideMenuWinWidth?{left:Yogurt.Theme.menuLayoutMenuWidth,width:BODY.getWidth()-2*Yogurt.Theme.menuLayoutMenuWidth}:{left:0,width:"100%"}}}),b.append(s)});void 0!==s&&C(s);let S=(t.removeBottomBar=(()=>{s.remove(),s=void 0}),t.showLeftMenu=(()=>{WIN_WIDTH()>Yogurt.Theme.menuLayoutHideMenuWinWidth||p===!0&&n!==!0&&(scrollTo(0,0),void 0!==l&&l.remove(),d.append(l=DIV({style:{position:"absolute",left:Yogurt.Theme.menuLayoutMenuWidth,top:0,width:"100%",height:"100%",zIndex:999999},on:{tap:()=>{v()}}})),ANIMATE({node:d,keyframes:{from:{marginLeft:0},to:{marginLeft:Yogurt.Theme.menuLayoutMenuWidth}}},()=>{n=!0}),ANIMATE({node:f.getContentDom(),keyframes:{from:{left:0},to:{left:Yogurt.Theme.menuLayoutMenuWidth}}}),ANIMATE({node:u,keyframes:{from:{left:-Yogurt.Theme.menuLayoutMenuWidth},to:{left:0}}}),void 0!==s&&ANIMATE({node:s.getContentDom(),keyframes:{from:{left:0},to:{left:Yogurt.Theme.menuLayoutMenuWidth}}}),p=!1,a=EVENT({node:f,name:"touchend"},o=>{L()}),g=EVENT({node:d,name:"touchend"},o=>{L()}),void 0!==s&&(c=EVENT({node:s,name:"touchend"},o=>{L()})))})),v=t.hideLeftMenu=(()=>{WIN_WIDTH()>Yogurt.Theme.menuLayoutHideMenuWinWidth?void 0!==l&&(l.remove(),l=void 0):p!==!0&&n===!0&&(void 0!==l&&(l.remove(),l=void 0),ANIMATE({node:d,keyframes:{from:{marginLeft:Yogurt.Theme.menuLayoutMenuWidth},to:{marginLeft:0}}},()=>{p=!0}),ANIMATE({node:f.getContentDom(),keyframes:{from:{left:Yogurt.Theme.menuLayoutMenuWidth},to:{left:0}}}),ANIMATE({node:u,keyframes:{from:{left:0},to:{left:-Yogurt.Theme.menuLayoutMenuWidth}}}),void 0!==s&&ANIMATE({node:s.getContentDom(),keyframes:{from:{left:Yogurt.Theme.menuLayoutMenuWidth},to:{left:0}}}),n=!1,a.remove(),g.remove(),void 0!==c&&c.remove())}),L=t.toggleLeftMenu=(()=>{WIN_WIDTH()>Yogurt.Theme.menuLayoutHideMenuWinWidth||(p===!0&&n!==!0&&S(),p!==!0&&n===!0&&v())}),Y=t.showRightMenu=(()=>{WIN_WIDTH()>Yogurt.Theme.menuLayoutHideMenuWinWidth||T===!0&&r!==!0&&(scrollTo(0,0),void 0!==l&&l.remove(),d.append(l=DIV({style:{position:"absolute",left:-Yogurt.Theme.menuLayoutMenuWidth,top:0,width:"100%",height:"100%",zIndex:999999},on:{tap:()=>{A()}}})),ANIMATE({node:d,keyframes:{from:{marginLeft:0},to:{marginLeft:-Yogurt.Theme.menuLayoutMenuWidth}}},()=>{r=!0}),ANIMATE({node:f.getContentDom(),keyframes:{from:{left:0},to:{left:-Yogurt.Theme.menuLayoutMenuWidth}}}),ANIMATE({node:i,keyframes:{from:{right:-Yogurt.Theme.menuLayoutMenuWidth},to:{right:0}}}),void 0!==s&&ANIMATE({node:s.getContentDom(),keyframes:{from:{left:0},to:{left:-Yogurt.Theme.menuLayoutMenuWidth}}}),T=!1,a=EVENT({node:f,name:"touchend"},o=>{I()}),g=EVENT({node:d,name:"touchend"},o=>{I()}),void 0!==s&&(c=EVENT({node:s,name:"touchend"},o=>{I()})))}),A=t.hideRightMenu=(()=>{WIN_WIDTH()>Yogurt.Theme.menuLayoutHideMenuWinWidth?void 0!==l&&(l.remove(),l=void 0):T!==!0&&r===!0&&(void 0!==l&&(l.remove(),l=void 0),ANIMATE({node:d,keyframes:{from:{marginLeft:-Yogurt.Theme.menuLayoutMenuWidth},to:{marginLeft:0}}},()=>{T=!0}),ANIMATE({node:f.getContentDom(),keyframes:{from:{left:-Yogurt.Theme.menuLayoutMenuWidth},to:{left:0}}}),ANIMATE({node:i,keyframes:{from:{right:0},to:{right:-Yogurt.Theme.menuLayoutMenuWidth}}}),void 0!==s&&ANIMATE({node:s.getContentDom(),keyframes:{from:{left:-Yogurt.Theme.menuLayoutMenuWidth},to:{left:0}}}),r=!1,a.remove(),g.remove(),void 0!==c&&c.remove())}),I=t.toggleRightMenu=(()=>{WIN_WIDTH()>Yogurt.Theme.menuLayoutHideMenuWinWidth||(T===!0&&r!==!0&&Y(),T!==!0&&r===!0&&A())})}}),Yogurt.BackButton=CLASS({preset:()=>{return Yogurt.ToolbarButton},params:()=>{return{icon:FontAwesome.GetIcon("chevron-left")}}}),Yogurt.BottomBar=CLASS(o=>{return{preset:()=>{return NODE},init:(o,t,e)=>{let n,r=e.buttons,u=e.contentStyle,i=DIV({style:{height:Yogurt.Theme.bottomBarHeight},c:n=DIV({style:{position:"fixed",left:0,bottom:0,backgroundColor:Yogurt.Theme.bottomBarColor,width:"100%"},c:DIV({style:{width:Yogurt.BottomButton.getWidth()*r.length,margin:"auto",padding:"12px 0",color:Yogurt.Theme.bottomBarTextColor},c:RUN(()=>{let o=[];return EACH(r,t=>{o.push(t)}),o.push(CLEAR_BOTH()),o})})})});o.setWrapperDom(i),o.setContentDom(n);let d=t.addContentStyle=(o=>{n.addStyle(o)});void 0!==u&&d(u)}}}),Yogurt.BottomButton=CLASS(o=>{let t=60,e=24;o.getWidth=(()=>{return t});return{preset:()=>{return NODE},init:(o,n,r)=>{let u,i=r.icon,d=r.title,l=r.href,a=r.target,g=A({style:{flt:"left",display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none",fontSize:12,width:t},href:l,target:a});void 0!==d&&g.prepend(u=DIV({c:void 0===d?"":d})),void 0!==i&&(g.prepend(DIV({style:{marginBottom:void 0!==d?5:0,fontSize:26},c:i})),i.addStyle({height:e})),o.setDom(g);n.setTitle=(o=>{u.empty(),u.append(o)}),n.getIcon=(()=>{return i}),n.tap=(()=>{EVENT.fireAll({node:n,name:"tap"})})}}}),Yogurt.Toolbar=CLASS(o=>{const t=999,e=48;return{preset:()=>{return NODE},init:(o,n,r)=>{let u=void 0===r?void 0:r.left,i=void 0===r?void 0:r.title,d=void 0===r?void 0:r.right,l=void 0===r?void 0:r.height;void 0===l&&(l=e);let a,g,c=void 0===r?void 0:r.contentStyle,f=DIV({style:{height:l},c:g=DIV({style:{position:"fixed",top:0,background:Yogurt.Theme.toolbarBackground,backgroundColor:Yogurt.Theme.toolbarColor,backgroundImage:Yogurt.Theme.toolbarBackgroundImage,height:l,width:"100%",zIndex:t,color:Yogurt.Theme.toolbarTextColor,boxShadow:"0 2px 4px rgba(0, 0, 0, .5)"},c:[void 0===u?"":DIV({style:{position:"absolute",top:0,left:0},c:u}),a=H1({style:{paddingTop:11,fontSize:20,textAlign:"center",fontWeight:"bold"},c:void 0===i?"":i}),void 0===d?"":DIV({style:{position:"absolute",top:0,right:0},c:d})]})});o.setWrapperDom(f),o.setContentDom(g);let h=n.addContentStyle=(o=>{g.addStyle(o)});void 0!==c&&h(c);n.setTitle=(o=>{a.empty(),a.append(o)})}}}),Yogurt.ToolbarButton=CLASS({preset:()=>{return NODE},init:(o,t,e)=>{let n,r,u=e.icon,i=e.title,d=e.href,l=e.target,a=A({style:{display:"block",padding:"16px 10px",cursor:"pointer",fontSize:16},href:d,target:l,c:[n=DIV({style:{flt:"left",marginTop:-3},c:r=SPAN({c:void 0===i?"":i})}),CLEAR_BOTH()]});if(void 0!==u){u.addStyle({flt:"left"}),void 0===u.getStyle("margin")&&void 0===u.getStyle("marginRight")&&void 0!==i&&u.addStyle({marginRight:7}),a.prepend(u);let o=EVENT({node:u,name:"load"},t=>{n.addStyle({marginTop:(u.getHeight()-n.getHeight())/2}),o.remove()})}o.setDom(a);t.setTitle=(o=>{r.empty(),r.append(o)}),t.getIcon=(()=>{return u}),t.tap=(()=>{EVENT.fireAll({node:t,name:"tap"})})}});