// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__19452__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19453__i = 0, G__19453__a = new Array(arguments.length -  0);
while (G__19453__i < G__19453__a.length) {G__19453__a[G__19453__i] = arguments[G__19453__i + 0]; ++G__19453__i;}
  args = new cljs.core.IndexedSeq(G__19453__a,0);
} 
return G__19452__delegate.call(this,args);};
G__19452.cljs$lang$maxFixedArity = 0;
G__19452.cljs$lang$applyTo = (function (arglist__19454){
var args = cljs.core.seq(arglist__19454);
return G__19452__delegate(args);
});
G__19452.cljs$core$IFn$_invoke$arity$variadic = G__19452__delegate;
return G__19452;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19455__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19456__i = 0, G__19456__a = new Array(arguments.length -  0);
while (G__19456__i < G__19456__a.length) {G__19456__a[G__19456__i] = arguments[G__19456__i + 0]; ++G__19456__i;}
  args = new cljs.core.IndexedSeq(G__19456__a,0);
} 
return G__19455__delegate.call(this,args);};
G__19455.cljs$lang$maxFixedArity = 0;
G__19455.cljs$lang$applyTo = (function (arglist__19457){
var args = cljs.core.seq(arglist__19457);
return G__19455__delegate(args);
});
G__19455.cljs$core$IFn$_invoke$arity$variadic = G__19455__delegate;
return G__19455;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
