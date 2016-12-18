// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__13906__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__13906__auto__)){
return or__13906__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_19845 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_19845){
return (function (){
var _STAR_always_update_STAR_19846 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_19846;
}});})(_STAR_always_update_STAR_19845))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_19845;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args19847 = [];
var len__15014__auto___19850 = arguments.length;
var i__15015__auto___19851 = (0);
while(true){
if((i__15015__auto___19851 < len__15014__auto___19850)){
args19847.push((arguments[i__15015__auto___19851]));

var G__19852 = (i__15015__auto___19851 + (1));
i__15015__auto___19851 = G__19852;
continue;
} else {
}
break;
}

var G__19849 = args19847.length;
switch (G__19849) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19847.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__19858_19862 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__19859_19863 = null;
var count__19860_19864 = (0);
var i__19861_19865 = (0);
while(true){
if((i__19861_19865 < count__19860_19864)){
var v_19866 = cljs.core._nth.call(null,chunk__19859_19863,i__19861_19865);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_19866);

var G__19867 = seq__19858_19862;
var G__19868 = chunk__19859_19863;
var G__19869 = count__19860_19864;
var G__19870 = (i__19861_19865 + (1));
seq__19858_19862 = G__19867;
chunk__19859_19863 = G__19868;
count__19860_19864 = G__19869;
i__19861_19865 = G__19870;
continue;
} else {
var temp__4657__auto___19871 = cljs.core.seq.call(null,seq__19858_19862);
if(temp__4657__auto___19871){
var seq__19858_19872__$1 = temp__4657__auto___19871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19858_19872__$1)){
var c__14720__auto___19873 = cljs.core.chunk_first.call(null,seq__19858_19872__$1);
var G__19874 = cljs.core.chunk_rest.call(null,seq__19858_19872__$1);
var G__19875 = c__14720__auto___19873;
var G__19876 = cljs.core.count.call(null,c__14720__auto___19873);
var G__19877 = (0);
seq__19858_19862 = G__19874;
chunk__19859_19863 = G__19875;
count__19860_19864 = G__19876;
i__19861_19865 = G__19877;
continue;
} else {
var v_19878 = cljs.core.first.call(null,seq__19858_19872__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_19878);

var G__19879 = cljs.core.next.call(null,seq__19858_19872__$1);
var G__19880 = null;
var G__19881 = (0);
var G__19882 = (0);
seq__19858_19862 = G__19879;
chunk__19859_19863 = G__19880;
count__19860_19864 = G__19881;
i__19861_19865 = G__19882;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
