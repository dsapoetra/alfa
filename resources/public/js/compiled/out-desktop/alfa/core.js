// Compiled by ClojureScript 1.9.293 {}
goog.provide('alfa.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('alfa.view');
alfa.core.mount_root = (function alfa$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alfa.view.main_panel], null),document.getElementById("app"));
});
alfa.core.init = (function alfa$core$init(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return alfa.core.mount_root.call(null);
});
alfa.core.init.call(null);
