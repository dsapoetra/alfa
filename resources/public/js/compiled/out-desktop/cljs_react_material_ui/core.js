// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,cljs.core.partial.call(null,camel_snake_kebab.extras.transform_keys,camel_snake_kebab.core.__GT_camelCase));
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var args20494 = [];
var len__15014__auto___20497 = arguments.length;
var i__15015__auto___20498 = (0);
while(true){
if((i__15015__auto___20498 < len__15014__auto___20497)){
args20494.push((arguments[i__15015__auto___20498]));

var G__20499 = (i__15015__auto___20498 + (1));
i__15015__auto___20498 = G__20499;
continue;
} else {
}
break;
}

var G__20496 = args20494.length;
switch (G__20496) {
case 2:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20494.length)].join('')));

}
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2 = (function (react_class,args){
var first_arg = cljs.core.first.call(null,args);
var args__$1 = (((cljs.core.map_QMARK_.call(null,first_arg)) || ((first_arg == null)))?args:cljs.core.cons.call(null,cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.call(null,React.createElement,react_class,cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,cljs.core.first.call(null,args__$1)),cljs.core.rest.call(null,args__$1));
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3 = (function (root_obj,type,args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,(root_obj[type]),args);
});

cljs_react_material_ui.core.create_mui_cmp.cljs$lang$maxFixedArity = 3;

cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var args20501 = [];
var len__15014__auto___20504 = arguments.length;
var i__15015__auto___20505 = (0);
while(true){
if((i__15015__auto___20505 < len__15014__auto___20504)){
args20501.push((arguments[i__15015__auto___20505]));

var G__20506 = (i__15015__auto___20505 + (1));
i__15015__auto___20505 = G__20506;
continue;
} else {
}
break;
}

var G__20503 = args20501.length;
switch (G__20503) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20501.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.call(null,null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.getMuiTheme(cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,raw_theme));
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][camel_snake_kebab.core.__GT_camelCaseString.call(null,color_key)]);
});
cljs_react_material_ui.core.make_selectable = (MaterialUI["makeSelectable"]);
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.call(null,cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.css_transition_group = (function cljs_react_material_ui$core$css_transition_group(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20509 = arguments.length;
var i__15015__auto___20510 = (0);
while(true){
if((i__15015__auto___20510 < len__15014__auto___20509)){
args__15021__auto__.push((arguments[i__15015__auto___20510]));

var G__20511 = (i__15015__auto___20510 + (1));
i__15015__auto___20510 = G__20511;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"CSSTransitionGroup",args);
});

cljs_react_material_ui.core.css_transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.css_transition_group.cljs$lang$applyTo = (function (seq20508){
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20508));
});

cljs_react_material_ui.core.transition_group = (function cljs_react_material_ui$core$transition_group(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20513 = arguments.length;
var i__15015__auto___20514 = (0);
while(true){
if((i__15015__auto___20514 < len__15014__auto___20513)){
args__15021__auto__.push((arguments[i__15015__auto___20514]));

var G__20515 = (i__15015__auto___20514 + (1));
i__15015__auto___20514 = G__20515;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"TransitionGroup",args);
});

cljs_react_material_ui.core.transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.transition_group.cljs$lang$applyTo = (function (seq20512){
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20512));
});

cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20517 = arguments.length;
var i__15015__auto___20518 = (0);
while(true){
if((i__15015__auto___20518 < len__15014__auto___20517)){
args__15021__auto__.push((arguments[i__15015__auto___20518]));

var G__20519 = (i__15015__auto___20518 + (1));
i__15015__auto___20518 = G__20519;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,cljs_react_material_ui.core.make_selectable.call(null,(MaterialUI["List"])),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq20516){
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20516));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20521 = arguments.length;
var i__15015__auto___20522 = (0);
while(true){
if((i__15015__auto___20522 < len__15014__auto___20521)){
args__15021__auto__.push((arguments[i__15015__auto___20522]));

var G__20523 = (i__15015__auto___20522 + (1));
i__15015__auto___20522 = G__20523;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq20520){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20520));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20525 = arguments.length;
var i__15015__auto___20526 = (0);
while(true){
if((i__15015__auto___20526 < len__15014__auto___20525)){
args__15021__auto__.push((arguments[i__15015__auto___20526]));

var G__20527 = (i__15015__auto___20526 + (1));
i__15015__auto___20526 = G__20527;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args);
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq20524){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20524));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20529 = arguments.length;
var i__15015__auto___20530 = (0);
while(true){
if((i__15015__auto___20530 < len__15014__auto___20529)){
args__15021__auto__.push((arguments[i__15015__auto___20530]));

var G__20531 = (i__15015__auto___20530 + (1));
i__15015__auto___20530 = G__20531;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq20528){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20528));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20533 = arguments.length;
var i__15015__auto___20534 = (0);
while(true){
if((i__15015__auto___20534 < len__15014__auto___20533)){
args__15021__auto__.push((arguments[i__15015__auto___20534]));

var G__20535 = (i__15015__auto___20534 + (1));
i__15015__auto___20534 = G__20535;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq20532){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20532));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20537 = arguments.length;
var i__15015__auto___20538 = (0);
while(true){
if((i__15015__auto___20538 < len__15014__auto___20537)){
args__15021__auto__.push((arguments[i__15015__auto___20538]));

var G__20539 = (i__15015__auto___20538 + (1));
i__15015__auto___20538 = G__20539;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args);
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq20536){
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20536));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20541 = arguments.length;
var i__15015__auto___20542 = (0);
while(true){
if((i__15015__auto___20542 < len__15014__auto___20541)){
args__15021__auto__.push((arguments[i__15015__auto___20542]));

var G__20543 = (i__15015__auto___20542 + (1));
i__15015__auto___20542 = G__20543;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq20540){
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20540));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20545 = arguments.length;
var i__15015__auto___20546 = (0);
while(true){
if((i__15015__auto___20546 < len__15014__auto___20545)){
args__15021__auto__.push((arguments[i__15015__auto___20546]));

var G__20547 = (i__15015__auto___20546 + (1));
i__15015__auto___20546 = G__20547;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq20544){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20544));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20549 = arguments.length;
var i__15015__auto___20550 = (0);
while(true){
if((i__15015__auto___20550 < len__15014__auto___20549)){
args__15021__auto__.push((arguments[i__15015__auto___20550]));

var G__20551 = (i__15015__auto___20550 + (1));
i__15015__auto___20550 = G__20551;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq20548){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20548));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20553 = arguments.length;
var i__15015__auto___20554 = (0);
while(true){
if((i__15015__auto___20554 < len__15014__auto___20553)){
args__15021__auto__.push((arguments[i__15015__auto___20554]));

var G__20555 = (i__15015__auto___20554 + (1));
i__15015__auto___20554 = G__20555;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq20552){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20552));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20557 = arguments.length;
var i__15015__auto___20558 = (0);
while(true){
if((i__15015__auto___20558 < len__15014__auto___20557)){
args__15021__auto__.push((arguments[i__15015__auto___20558]));

var G__20559 = (i__15015__auto___20558 + (1));
i__15015__auto___20558 = G__20559;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq20556){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20556));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20561 = arguments.length;
var i__15015__auto___20562 = (0);
while(true){
if((i__15015__auto___20562 < len__15014__auto___20561)){
args__15021__auto__.push((arguments[i__15015__auto___20562]));

var G__20563 = (i__15015__auto___20562 + (1));
i__15015__auto___20562 = G__20563;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args);
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq20560){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20560));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20565 = arguments.length;
var i__15015__auto___20566 = (0);
while(true){
if((i__15015__auto___20566 < len__15014__auto___20565)){
args__15021__auto__.push((arguments[i__15015__auto___20566]));

var G__20567 = (i__15015__auto___20566 + (1));
i__15015__auto___20566 = G__20567;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args);
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq20564){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20564));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20569 = arguments.length;
var i__15015__auto___20570 = (0);
while(true){
if((i__15015__auto___20570 < len__15014__auto___20569)){
args__15021__auto__.push((arguments[i__15015__auto___20570]));

var G__20571 = (i__15015__auto___20570 + (1));
i__15015__auto___20570 = G__20571;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq20568){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20568));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20573 = arguments.length;
var i__15015__auto___20574 = (0);
while(true){
if((i__15015__auto___20574 < len__15014__auto___20573)){
args__15021__auto__.push((arguments[i__15015__auto___20574]));

var G__20575 = (i__15015__auto___20574 + (1));
i__15015__auto___20574 = G__20575;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq20572){
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20572));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20577 = arguments.length;
var i__15015__auto___20578 = (0);
while(true){
if((i__15015__auto___20578 < len__15014__auto___20577)){
args__15021__auto__.push((arguments[i__15015__auto___20578]));

var G__20579 = (i__15015__auto___20578 + (1));
i__15015__auto___20578 = G__20579;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq20576){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20576));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20581 = arguments.length;
var i__15015__auto___20582 = (0);
while(true){
if((i__15015__auto___20582 < len__15014__auto___20581)){
args__15021__auto__.push((arguments[i__15015__auto___20582]));

var G__20583 = (i__15015__auto___20582 + (1));
i__15015__auto___20582 = G__20583;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args);
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq20580){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20580));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20585 = arguments.length;
var i__15015__auto___20586 = (0);
while(true){
if((i__15015__auto___20586 < len__15014__auto___20585)){
args__15021__auto__.push((arguments[i__15015__auto___20586]));

var G__20587 = (i__15015__auto___20586 + (1));
i__15015__auto___20586 = G__20587;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq20584){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20584));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20589 = arguments.length;
var i__15015__auto___20590 = (0);
while(true){
if((i__15015__auto___20590 < len__15014__auto___20589)){
args__15021__auto__.push((arguments[i__15015__auto___20590]));

var G__20591 = (i__15015__auto___20590 + (1));
i__15015__auto___20590 = G__20591;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq20588){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20588));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20593 = arguments.length;
var i__15015__auto___20594 = (0);
while(true){
if((i__15015__auto___20594 < len__15014__auto___20593)){
args__15021__auto__.push((arguments[i__15015__auto___20594]));

var G__20595 = (i__15015__auto___20594 + (1));
i__15015__auto___20594 = G__20595;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq20592){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20592));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20597 = arguments.length;
var i__15015__auto___20598 = (0);
while(true){
if((i__15015__auto___20598 < len__15014__auto___20597)){
args__15021__auto__.push((arguments[i__15015__auto___20598]));

var G__20599 = (i__15015__auto___20598 + (1));
i__15015__auto___20598 = G__20599;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args);
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq20596){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20596));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20601 = arguments.length;
var i__15015__auto___20602 = (0);
while(true){
if((i__15015__auto___20602 < len__15014__auto___20601)){
args__15021__auto__.push((arguments[i__15015__auto___20602]));

var G__20603 = (i__15015__auto___20602 + (1));
i__15015__auto___20602 = G__20603;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args);
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq20600){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20600));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20605 = arguments.length;
var i__15015__auto___20606 = (0);
while(true){
if((i__15015__auto___20606 < len__15014__auto___20605)){
args__15021__auto__.push((arguments[i__15015__auto___20606]));

var G__20607 = (i__15015__auto___20606 + (1));
i__15015__auto___20606 = G__20607;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args);
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq20604){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20604));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20609 = arguments.length;
var i__15015__auto___20610 = (0);
while(true){
if((i__15015__auto___20610 < len__15014__auto___20609)){
args__15021__auto__.push((arguments[i__15015__auto___20610]));

var G__20611 = (i__15015__auto___20610 + (1));
i__15015__auto___20610 = G__20611;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args);
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq20608){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20608));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20613 = arguments.length;
var i__15015__auto___20614 = (0);
while(true){
if((i__15015__auto___20614 < len__15014__auto___20613)){
args__15021__auto__.push((arguments[i__15015__auto___20614]));

var G__20615 = (i__15015__auto___20614 + (1));
i__15015__auto___20614 = G__20615;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq20612){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20612));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20617 = arguments.length;
var i__15015__auto___20618 = (0);
while(true){
if((i__15015__auto___20618 < len__15014__auto___20617)){
args__15021__auto__.push((arguments[i__15015__auto___20618]));

var G__20619 = (i__15015__auto___20618 + (1));
i__15015__auto___20618 = G__20619;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args);
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq20616){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20616));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20621 = arguments.length;
var i__15015__auto___20622 = (0);
while(true){
if((i__15015__auto___20622 < len__15014__auto___20621)){
args__15021__auto__.push((arguments[i__15015__auto___20622]));

var G__20623 = (i__15015__auto___20622 + (1));
i__15015__auto___20622 = G__20623;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq20620){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20620));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20625 = arguments.length;
var i__15015__auto___20626 = (0);
while(true){
if((i__15015__auto___20626 < len__15014__auto___20625)){
args__15021__auto__.push((arguments[i__15015__auto___20626]));

var G__20627 = (i__15015__auto___20626 + (1));
i__15015__auto___20626 = G__20627;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args);
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq20624){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20624));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20629 = arguments.length;
var i__15015__auto___20630 = (0);
while(true){
if((i__15015__auto___20630 < len__15014__auto___20629)){
args__15021__auto__.push((arguments[i__15015__auto___20630]));

var G__20631 = (i__15015__auto___20630 + (1));
i__15015__auto___20630 = G__20631;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq20628){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20628));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20633 = arguments.length;
var i__15015__auto___20634 = (0);
while(true){
if((i__15015__auto___20634 < len__15014__auto___20633)){
args__15021__auto__.push((arguments[i__15015__auto___20634]));

var G__20635 = (i__15015__auto___20634 + (1));
i__15015__auto___20634 = G__20635;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq20632){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20632));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20637 = arguments.length;
var i__15015__auto___20638 = (0);
while(true){
if((i__15015__auto___20638 < len__15014__auto___20637)){
args__15021__auto__.push((arguments[i__15015__auto___20638]));

var G__20639 = (i__15015__auto___20638 + (1));
i__15015__auto___20638 = G__20639;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq20636){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20636));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20641 = arguments.length;
var i__15015__auto___20642 = (0);
while(true){
if((i__15015__auto___20642 < len__15014__auto___20641)){
args__15021__auto__.push((arguments[i__15015__auto___20642]));

var G__20643 = (i__15015__auto___20642 + (1));
i__15015__auto___20642 = G__20643;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq20640){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20640));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20645 = arguments.length;
var i__15015__auto___20646 = (0);
while(true){
if((i__15015__auto___20646 < len__15014__auto___20645)){
args__15021__auto__.push((arguments[i__15015__auto___20646]));

var G__20647 = (i__15015__auto___20646 + (1));
i__15015__auto___20646 = G__20647;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq20644){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20644));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20649 = arguments.length;
var i__15015__auto___20650 = (0);
while(true){
if((i__15015__auto___20650 < len__15014__auto___20649)){
args__15021__auto__.push((arguments[i__15015__auto___20650]));

var G__20651 = (i__15015__auto___20650 + (1));
i__15015__auto___20650 = G__20651;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq20648){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20648));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20653 = arguments.length;
var i__15015__auto___20654 = (0);
while(true){
if((i__15015__auto___20654 < len__15014__auto___20653)){
args__15021__auto__.push((arguments[i__15015__auto___20654]));

var G__20655 = (i__15015__auto___20654 + (1));
i__15015__auto___20654 = G__20655;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq20652){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20652));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20657 = arguments.length;
var i__15015__auto___20658 = (0);
while(true){
if((i__15015__auto___20658 < len__15014__auto___20657)){
args__15021__auto__.push((arguments[i__15015__auto___20658]));

var G__20659 = (i__15015__auto___20658 + (1));
i__15015__auto___20658 = G__20659;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq20656){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20656));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20661 = arguments.length;
var i__15015__auto___20662 = (0);
while(true){
if((i__15015__auto___20662 < len__15014__auto___20661)){
args__15021__auto__.push((arguments[i__15015__auto___20662]));

var G__20663 = (i__15015__auto___20662 + (1));
i__15015__auto___20662 = G__20663;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args);
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq20660){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20660));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20665 = arguments.length;
var i__15015__auto___20666 = (0);
while(true){
if((i__15015__auto___20666 < len__15014__auto___20665)){
args__15021__auto__.push((arguments[i__15015__auto___20666]));

var G__20667 = (i__15015__auto___20666 + (1));
i__15015__auto___20666 = G__20667;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args);
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq20664){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20664));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20669 = arguments.length;
var i__15015__auto___20670 = (0);
while(true){
if((i__15015__auto___20670 < len__15014__auto___20669)){
args__15021__auto__.push((arguments[i__15015__auto___20670]));

var G__20671 = (i__15015__auto___20670 + (1));
i__15015__auto___20670 = G__20671;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args);
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq20668){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20668));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20673 = arguments.length;
var i__15015__auto___20674 = (0);
while(true){
if((i__15015__auto___20674 < len__15014__auto___20673)){
args__15021__auto__.push((arguments[i__15015__auto___20674]));

var G__20675 = (i__15015__auto___20674 + (1));
i__15015__auto___20674 = G__20675;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args);
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq20672){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20672));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20677 = arguments.length;
var i__15015__auto___20678 = (0);
while(true){
if((i__15015__auto___20678 < len__15014__auto___20677)){
args__15021__auto__.push((arguments[i__15015__auto___20678]));

var G__20679 = (i__15015__auto___20678 + (1));
i__15015__auto___20678 = G__20679;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args);
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq20676){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20676));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20681 = arguments.length;
var i__15015__auto___20682 = (0);
while(true){
if((i__15015__auto___20682 < len__15014__auto___20681)){
args__15021__auto__.push((arguments[i__15015__auto___20682]));

var G__20683 = (i__15015__auto___20682 + (1));
i__15015__auto___20682 = G__20683;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args);
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq20680){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20680));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20685 = arguments.length;
var i__15015__auto___20686 = (0);
while(true){
if((i__15015__auto___20686 < len__15014__auto___20685)){
args__15021__auto__.push((arguments[i__15015__auto___20686]));

var G__20687 = (i__15015__auto___20686 + (1));
i__15015__auto___20686 = G__20687;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args);
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq20684){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20684));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20689 = arguments.length;
var i__15015__auto___20690 = (0);
while(true){
if((i__15015__auto___20690 < len__15014__auto___20689)){
args__15021__auto__.push((arguments[i__15015__auto___20690]));

var G__20691 = (i__15015__auto___20690 + (1));
i__15015__auto___20690 = G__20691;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq20688){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20688));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20693 = arguments.length;
var i__15015__auto___20694 = (0);
while(true){
if((i__15015__auto___20694 < len__15014__auto___20693)){
args__15021__auto__.push((arguments[i__15015__auto___20694]));

var G__20695 = (i__15015__auto___20694 + (1));
i__15015__auto___20694 = G__20695;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq20692){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20692));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20697 = arguments.length;
var i__15015__auto___20698 = (0);
while(true){
if((i__15015__auto___20698 < len__15014__auto___20697)){
args__15021__auto__.push((arguments[i__15015__auto___20698]));

var G__20699 = (i__15015__auto___20698 + (1));
i__15015__auto___20698 = G__20699;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq20696){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20696));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20701 = arguments.length;
var i__15015__auto___20702 = (0);
while(true){
if((i__15015__auto___20702 < len__15014__auto___20701)){
args__15021__auto__.push((arguments[i__15015__auto___20702]));

var G__20703 = (i__15015__auto___20702 + (1));
i__15015__auto___20702 = G__20703;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq20700){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20700));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20705 = arguments.length;
var i__15015__auto___20706 = (0);
while(true){
if((i__15015__auto___20706 < len__15014__auto___20705)){
args__15021__auto__.push((arguments[i__15015__auto___20706]));

var G__20707 = (i__15015__auto___20706 + (1));
i__15015__auto___20706 = G__20707;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq20704){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20704));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20709 = arguments.length;
var i__15015__auto___20710 = (0);
while(true){
if((i__15015__auto___20710 < len__15014__auto___20709)){
args__15021__auto__.push((arguments[i__15015__auto___20710]));

var G__20711 = (i__15015__auto___20710 + (1));
i__15015__auto___20710 = G__20711;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq20708){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20708));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20713 = arguments.length;
var i__15015__auto___20714 = (0);
while(true){
if((i__15015__auto___20714 < len__15014__auto___20713)){
args__15021__auto__.push((arguments[i__15015__auto___20714]));

var G__20715 = (i__15015__auto___20714 + (1));
i__15015__auto___20714 = G__20715;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq20712){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20712));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20717 = arguments.length;
var i__15015__auto___20718 = (0);
while(true){
if((i__15015__auto___20718 < len__15014__auto___20717)){
args__15021__auto__.push((arguments[i__15015__auto___20718]));

var G__20719 = (i__15015__auto___20718 + (1));
i__15015__auto___20718 = G__20719;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq20716){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20716));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20721 = arguments.length;
var i__15015__auto___20722 = (0);
while(true){
if((i__15015__auto___20722 < len__15014__auto___20721)){
args__15021__auto__.push((arguments[i__15015__auto___20722]));

var G__20723 = (i__15015__auto___20722 + (1));
i__15015__auto___20722 = G__20723;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq20720){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20720));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20725 = arguments.length;
var i__15015__auto___20726 = (0);
while(true){
if((i__15015__auto___20726 < len__15014__auto___20725)){
args__15021__auto__.push((arguments[i__15015__auto___20726]));

var G__20727 = (i__15015__auto___20726 + (1));
i__15015__auto___20726 = G__20727;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq20724){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20724));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20729 = arguments.length;
var i__15015__auto___20730 = (0);
while(true){
if((i__15015__auto___20730 < len__15014__auto___20729)){
args__15021__auto__.push((arguments[i__15015__auto___20730]));

var G__20731 = (i__15015__auto___20730 + (1));
i__15015__auto___20730 = G__20731;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq20728){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20728));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20733 = arguments.length;
var i__15015__auto___20734 = (0);
while(true){
if((i__15015__auto___20734 < len__15014__auto___20733)){
args__15021__auto__.push((arguments[i__15015__auto___20734]));

var G__20735 = (i__15015__auto___20734 + (1));
i__15015__auto___20734 = G__20735;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq20732){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20732));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20737 = arguments.length;
var i__15015__auto___20738 = (0);
while(true){
if((i__15015__auto___20738 < len__15014__auto___20737)){
args__15021__auto__.push((arguments[i__15015__auto___20738]));

var G__20739 = (i__15015__auto___20738 + (1));
i__15015__auto___20738 = G__20739;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args);
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq20736){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20736));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20741 = arguments.length;
var i__15015__auto___20742 = (0);
while(true){
if((i__15015__auto___20742 < len__15014__auto___20741)){
args__15021__auto__.push((arguments[i__15015__auto___20742]));

var G__20743 = (i__15015__auto___20742 + (1));
i__15015__auto___20742 = G__20743;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args);
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq20740){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20740));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20745 = arguments.length;
var i__15015__auto___20746 = (0);
while(true){
if((i__15015__auto___20746 < len__15014__auto___20745)){
args__15021__auto__.push((arguments[i__15015__auto___20746]));

var G__20747 = (i__15015__auto___20746 + (1));
i__15015__auto___20746 = G__20747;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq20744){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20744));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20749 = arguments.length;
var i__15015__auto___20750 = (0);
while(true){
if((i__15015__auto___20750 < len__15014__auto___20749)){
args__15021__auto__.push((arguments[i__15015__auto___20750]));

var G__20751 = (i__15015__auto___20750 + (1));
i__15015__auto___20750 = G__20751;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args);
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq20748){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20748));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20753 = arguments.length;
var i__15015__auto___20754 = (0);
while(true){
if((i__15015__auto___20754 < len__15014__auto___20753)){
args__15021__auto__.push((arguments[i__15015__auto___20754]));

var G__20755 = (i__15015__auto___20754 + (1));
i__15015__auto___20754 = G__20755;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq20752){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20752));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20757 = arguments.length;
var i__15015__auto___20758 = (0);
while(true){
if((i__15015__auto___20758 < len__15014__auto___20757)){
args__15021__auto__.push((arguments[i__15015__auto___20758]));

var G__20759 = (i__15015__auto___20758 + (1));
i__15015__auto___20758 = G__20759;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args);
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq20756){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20756));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20761 = arguments.length;
var i__15015__auto___20762 = (0);
while(true){
if((i__15015__auto___20762 < len__15014__auto___20761)){
args__15021__auto__.push((arguments[i__15015__auto___20762]));

var G__20763 = (i__15015__auto___20762 + (1));
i__15015__auto___20762 = G__20763;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args);
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq20760){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20760));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20765 = arguments.length;
var i__15015__auto___20766 = (0);
while(true){
if((i__15015__auto___20766 < len__15014__auto___20765)){
args__15021__auto__.push((arguments[i__15015__auto___20766]));

var G__20767 = (i__15015__auto___20766 + (1));
i__15015__auto___20766 = G__20767;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq20764){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20764));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20769 = arguments.length;
var i__15015__auto___20770 = (0);
while(true){
if((i__15015__auto___20770 < len__15014__auto___20769)){
args__15021__auto__.push((arguments[i__15015__auto___20770]));

var G__20771 = (i__15015__auto___20770 + (1));
i__15015__auto___20770 = G__20771;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args);
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq20768){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20768));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20773 = arguments.length;
var i__15015__auto___20774 = (0);
while(true){
if((i__15015__auto___20774 < len__15014__auto___20773)){
args__15021__auto__.push((arguments[i__15015__auto___20774]));

var G__20775 = (i__15015__auto___20774 + (1));
i__15015__auto___20774 = G__20775;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args);
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq20772){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20772));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20777 = arguments.length;
var i__15015__auto___20778 = (0);
while(true){
if((i__15015__auto___20778 < len__15014__auto___20777)){
args__15021__auto__.push((arguments[i__15015__auto___20778]));

var G__20779 = (i__15015__auto___20778 + (1));
i__15015__auto___20778 = G__20779;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((0) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__15022__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args);
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq20776){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20776));
});

