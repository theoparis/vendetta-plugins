(function(p,v,r,R,F,m,l){"use strict";const{FormText:S}=m.Forms;function I(t){let{guildId:n}=t;return l.React.createElement(l.ReactNative.View,{style:{flex:1}},l.React.createElement(S,null,"Safety Setup"),l.React.createElement(S,null,"We're in ",n))}const{FormDivider:T,FormRow:g}=m.Forms,h=v.findByName("GuildSettingsModal",!1),A=v.findByName("GuildSettingsModalLanding",!1);function _(){const t=new Array;return t.push(r.after("default",h,function(n,o){o.props.screens={...o.props.screens,SAFETY_SETUP:{title:"Safety Setup",render:I}}})),t.push(r.after("default",A,function(n,o){r.after("type",o,function(G,U){var u;const a=R.findInReactTree(U?.props,function(i){var e;return((e=i.type)===null||e===void 0?void 0:e.name)==="SettingsSection"});!(a==null||(u=a.props)===null||u===void 0)&&u.canManageGuild&&r.after("type",a,function(i,e){var c,d,s,f;const{guild:E,pushScreen:y}=i?.[0];console.log(E,y);const w=e==null||(d=e.props)===null||d===void 0||(c=d.children)===null||c===void 0?void 0:c.findIndex(function(B){return B?.key==="moderation"});e==null||(f=e.props)===null||f===void 0||(s=f.children)===null||s===void 0||s.splice(w+1,0,React.createElement(React.Fragment,null,React.createElement(T,null),React.createElement(g,{leading:React.createElement(g.Icon,{source:F.getAssetIDByName("ic_robot_24px")}),label:"Safety Setup",onPress:function(){return y("SAFETY_SETUP",{guildId:E.id})}})))},!0)},!0)})),function(){return t.forEach(function(n){return n()})}}const x=[_()],N=function(){return x.forEach(function(t){return t()})};return p.onUnload=N,p})({},vendetta.metro,vendetta.patcher,vendetta.utils,vendetta.ui.assets,vendetta.ui.components,vendetta.metro.common);
