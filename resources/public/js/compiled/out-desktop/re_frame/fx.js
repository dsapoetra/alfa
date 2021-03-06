// Compiled by ClojureScript 1.9.293 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__24700){
var vec__24701 = p__24700;
var k = cljs.core.nth.call(null,vec__24701,(0),null);
var value = cljs.core.nth.call(null,vec__24701,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__24704 = cljs.core.seq.call(null,value);
var chunk__24705 = null;
var count__24706 = (0);
var i__24707 = (0);
while(true){
if((i__24707 < count__24706)){
var map__24708 = cljs.core._nth.call(null,chunk__24705,i__24707);
var map__24708__$1 = ((((!((map__24708 == null)))?((((map__24708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24708):map__24708);
var effect = map__24708__$1;
var ms = cljs.core.get.call(null,map__24708__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24708__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24704,chunk__24705,count__24706,i__24707,map__24708,map__24708__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24704,chunk__24705,count__24706,i__24707,map__24708,map__24708__$1,effect,ms,dispatch))
,ms);
}

var G__24712 = seq__24704;
var G__24713 = chunk__24705;
var G__24714 = count__24706;
var G__24715 = (i__24707 + (1));
seq__24704 = G__24712;
chunk__24705 = G__24713;
count__24706 = G__24714;
i__24707 = G__24715;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24704);
if(temp__4657__auto__){
var seq__24704__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24704__$1)){
var c__14720__auto__ = cljs.core.chunk_first.call(null,seq__24704__$1);
var G__24716 = cljs.core.chunk_rest.call(null,seq__24704__$1);
var G__24717 = c__14720__auto__;
var G__24718 = cljs.core.count.call(null,c__14720__auto__);
var G__24719 = (0);
seq__24704 = G__24716;
chunk__24705 = G__24717;
count__24706 = G__24718;
i__24707 = G__24719;
continue;
} else {
var map__24710 = cljs.core.first.call(null,seq__24704__$1);
var map__24710__$1 = ((((!((map__24710 == null)))?((((map__24710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24710):map__24710);
var effect = map__24710__$1;
var ms = cljs.core.get.call(null,map__24710__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24710__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24704,chunk__24705,count__24706,i__24707,map__24710,map__24710__$1,effect,ms,dispatch,seq__24704__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24704,chunk__24705,count__24706,i__24707,map__24710,map__24710__$1,effect,ms,dispatch,seq__24704__$1,temp__4657__auto__))
,ms);
}

var G__24720 = cljs.core.next.call(null,seq__24704__$1);
var G__24721 = null;
var G__24722 = (0);
var G__24723 = (0);
seq__24704 = G__24720;
chunk__24705 = G__24721;
count__24706 = G__24722;
i__24707 = G__24723;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__24724 = cljs.core.seq.call(null,value);
var chunk__24725 = null;
var count__24726 = (0);
var i__24727 = (0);
while(true){
if((i__24727 < count__24726)){
var event = cljs.core._nth.call(null,chunk__24725,i__24727);
re_frame.router.dispatch.call(null,event);

var G__24728 = seq__24724;
var G__24729 = chunk__24725;
var G__24730 = count__24726;
var G__24731 = (i__24727 + (1));
seq__24724 = G__24728;
chunk__24725 = G__24729;
count__24726 = G__24730;
i__24727 = G__24731;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24724);
if(temp__4657__auto__){
var seq__24724__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24724__$1)){
var c__14720__auto__ = cljs.core.chunk_first.call(null,seq__24724__$1);
var G__24732 = cljs.core.chunk_rest.call(null,seq__24724__$1);
var G__24733 = c__14720__auto__;
var G__24734 = cljs.core.count.call(null,c__14720__auto__);
var G__24735 = (0);
seq__24724 = G__24732;
chunk__24725 = G__24733;
count__24726 = G__24734;
i__24727 = G__24735;
continue;
} else {
var event = cljs.core.first.call(null,seq__24724__$1);
re_frame.router.dispatch.call(null,event);

var G__24736 = cljs.core.next.call(null,seq__24724__$1);
var G__24737 = null;
var G__24738 = (0);
var G__24739 = (0);
seq__24724 = G__24736;
chunk__24725 = G__24737;
count__24726 = G__24738;
i__24727 = G__24739;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));
