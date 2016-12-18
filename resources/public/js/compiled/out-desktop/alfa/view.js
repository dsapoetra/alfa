// Compiled by ClojureScript 1.9.293 {}
goog.provide('alfa.view');
goog.require('cljs.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('reagent.core');
goog.require('cljs_react_material_ui.icons');
goog.require('re_frame.core');
goog.require('cljs_react_material_ui.core');
alfa.view.excerpt = (function alfa$view$excerpt(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"LOREM IPSUM"], null);
});
alfa.view.data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [(1),"Lorem Ipsum",(2),"Lorem ipsum 2",(3),"Lorem ipsum 3"], null));
alfa.view.counter = reagent.core.atom.call(null,(0));
alfa.view.toogle_state = reagent.core.atom.call(null,false);
alfa.view.handle_toggle = (function alfa$view$handle_toggle(){
return cljs.core.swap_BANG_.call(null,alfa.view.toogle_state,cljs.core.not);
});
alfa.view.excerpt_2 = (function alfa$view$excerpt_2(){
if((cljs.core.deref.call(null,alfa.view.counter) > cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,cljs.core.deref.call(null,alfa.view.data))))){
cljs.core.reset_BANG_.call(null,alfa.view.counter,(0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"resetting"], null);
} else {
cljs.core.swap_BANG_.call(null,alfa.view.counter,cljs.core.inc);

if((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,alfa.view.data).call(null,cljs.core.deref.call(null,alfa.view.counter)))) || ((cljs.core.deref.call(null,alfa.view.data).call(null,cljs.core.deref.call(null,alfa.view.counter)) == null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Just hit it again"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),[cljs.core.str(cljs.core.deref.call(null,alfa.view.data).call(null,cljs.core.deref.call(null,alfa.view.counter))),cljs.core.str(cljs.core.deref.call(null,alfa.view.counter))].join('')], null);
}
}
});
alfa.view.bmi_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null));
alfa.view.bmi = (function alfa$view$bmi(){
return (function (){
var w = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bmi","bmi",1421979636)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(cljs.core.deref.call(null,w))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"nama",new cljs.core.Keyword(null,"max","max",61366548),(5),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"value","value",305978217),(2),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (w){
return (function (p1__23179_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bmi","set-bmi",43327498),p1__23179_SHARP_.target.value], null));
});})(w))
], null)], null)], null);
});
});
alfa.view.header = (function alfa$view$header(){
return (function (){
var tit = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.app_bar,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Dsapoetra",new cljs.core.Keyword(null,"icon-element-left","icon-element-left",-392309508),cljs_react_material_ui.core.icon_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tit){
return (function (){
return re_frame.core.dispatch.call(null,alfa.view.handle_toggle.call(null));
});})(tit))
], null),cljs_react_material_ui.icons.action_view_headline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tit){
return (function (){
return re_frame.core.dispatch.call(null,alfa.view.handle_toggle.call(null));
});})(tit))
], null))),new cljs.core.Keyword(null,"icon-element-right","icon-element-right",-2138850585),cljs_react_material_ui.core.icon_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tit){
return (function (){
return re_frame.core.dispatch.call(null,alfa.view.handle_toggle.call(null));
});})(tit))
], null),cljs_react_material_ui.icons.action_autorenew.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tit){
return (function (){
return re_frame.core.dispatch.call(null,alfa.view.handle_toggle.call(null));
});})(tit))
], null))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#F46828",new cljs.core.Keyword(null,"color","color",1011675173),"#F46828",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], null)], null);
});
});
alfa.view.badan_1 = (function alfa$view$badan_1(){
return (function (){
var exc = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"excerpt","excerpt",219850763)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.tabs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.tab,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Basic info",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#DA7F36"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),((((cljs.core.deref.call(null,exc) == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,exc))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Begin"], null):cljs.core.deref.call(null,exc)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.raised_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Previous",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(100)], null),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"grey",new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (exc){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-excerpt","set-excerpt",-1850630437),alfa.view.excerpt_2.call(null)], null));
});})(exc))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.raised_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Next",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(100)], null),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"grey",new cljs.core.Keyword(null,"textColor","textColor",-680658062),"white",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (exc){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-excerpt","set-excerpt",-1850630437),alfa.view.excerpt_2.call(null)], null));
});})(exc))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.tab,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Blog",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#DA7F36"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.tab,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Contact",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#DA7F36"], null)], null)], null)], null);
});
});
alfa.view.badan_2 = (function alfa$view$badan_2(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.tabs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.tab,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"App #1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#DA7F36"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alfa.view.bmi], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.tab,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"App #2",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#DA7F36"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.tab,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"App #3",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#DA7F36"], null)], null)], null)], null);
});
alfa.view.body = (function alfa$view$body(){
return (function (){
var username = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username","username",1605666410)], null));
var badan = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.drawer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref.call(null,alfa.view.toogle_state),new cljs.core.Keyword(null,"docked","docked",185761331),false,new cljs.core.Keyword(null,"on-request-change","on-request-change",1300547909),((function (username,badan){
return (function (){
return re_frame.core.dispatch.call(null,alfa.view.handle_toggle.call(null));
});})(username,badan))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary-text","primary-text",146474209),"About",new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),((function (username,badan){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-body","set-body",1364086163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alfa.view.badan_1], null)], null));
});})(username,badan))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary-text","primary-text",146474209),"Apps",new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),((function (username,badan){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-body","set-body",1364086163),alfa.view.badan_2.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-title","set-title",1382099860),"Apps"], null));
});})(username,badan))
], null)], null)], null),(((cljs.core.deref.call(null,badan) == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alfa.view.badan_1], null):cljs.core.deref.call(null,badan))], null);
});
});
alfa.view.footer = (function alfa$view$footer(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"width","width",-384071477),"99%",new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"background","background",-863952629),"#F46828"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Footer"], null)], null)], null);
});
});
alfa.view.main_panel = (function alfa$view$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alfa.view.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alfa.view.body], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alfa.view.footer], null)], null)], null);
});
