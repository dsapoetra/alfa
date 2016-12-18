// Compiled by ClojureScript 1.9.293 {}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20259 = arguments.length;
var i__15015__auto___20260 = (0);
while(true){
if((i__15015__auto___20260 < len__15014__auto___20259)){
args__15021__auto__.push((arguments[i__15015__auto___20260]));

var G__20261 = (i__15015__auto___20260 + (1));
i__15015__auto___20260 = G__20261;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((4) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__15022__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq20254){
var G__20255 = cljs.core.first.call(null,seq20254);
var seq20254__$1 = cljs.core.next.call(null,seq20254);
var G__20256 = cljs.core.first.call(null,seq20254__$1);
var seq20254__$2 = cljs.core.next.call(null,seq20254__$1);
var G__20257 = cljs.core.first.call(null,seq20254__$2);
var seq20254__$3 = cljs.core.next.call(null,seq20254__$2);
var G__20258 = cljs.core.first.call(null,seq20254__$3);
var seq20254__$4 = cljs.core.next.call(null,seq20254__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__20255,G__20256,G__20257,G__20258,seq20254__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20270 = arguments.length;
var i__15015__auto___20271 = (0);
while(true){
if((i__15015__auto___20271 < len__15014__auto___20270)){
args__15021__auto__.push((arguments[i__15015__auto___20271]));

var G__20272 = (i__15015__auto___20271 + (1));
i__15015__auto___20271 = G__20272;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__20221__auto__,rest__20222__auto__){
var convert_case__20223__auto__ = (function (p1__20220__20224__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__20220__20224__auto__,rest__20222__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__20221__auto__,convert_case__20223__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq20262){
var G__20263 = cljs.core.first.call(null,seq20262);
var seq20262__$1 = cljs.core.next.call(null,seq20262);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__20263,seq20262__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20273 = arguments.length;
var i__15015__auto___20274 = (0);
while(true){
if((i__15015__auto___20274 < len__15014__auto___20273)){
args__15021__auto__.push((arguments[i__15015__auto___20274]));

var G__20275 = (i__15015__auto___20274 + (1));
i__15015__auto___20274 = G__20275;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq20264){
var G__20265 = cljs.core.first.call(null,seq20264);
var seq20264__$1 = cljs.core.next.call(null,seq20264);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__20265,seq20264__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20276 = arguments.length;
var i__15015__auto___20277 = (0);
while(true){
if((i__15015__auto___20277 < len__15014__auto___20276)){
args__15021__auto__.push((arguments[i__15015__auto___20277]));

var G__20278 = (i__15015__auto___20277 + (1));
i__15015__auto___20277 = G__20278;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq20266){
var G__20267 = cljs.core.first.call(null,seq20266);
var seq20266__$1 = cljs.core.next.call(null,seq20266);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__20267,seq20266__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20279 = arguments.length;
var i__15015__auto___20280 = (0);
while(true){
if((i__15015__auto___20280 < len__15014__auto___20279)){
args__15021__auto__.push((arguments[i__15015__auto___20280]));

var G__20281 = (i__15015__auto___20280 + (1));
i__15015__auto___20280 = G__20281;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq20268){
var G__20269 = cljs.core.first.call(null,seq20268);
var seq20268__$1 = cljs.core.next.call(null,seq20268);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__20269,seq20268__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20290 = arguments.length;
var i__15015__auto___20291 = (0);
while(true){
if((i__15015__auto___20291 < len__15014__auto___20290)){
args__15021__auto__.push((arguments[i__15015__auto___20291]));

var G__20292 = (i__15015__auto___20291 + (1));
i__15015__auto___20291 = G__20292;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__20221__auto__,rest__20222__auto__){
var convert_case__20223__auto__ = (function (p1__20220__20224__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__20220__20224__auto__,rest__20222__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__20221__auto__,convert_case__20223__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq20282){
var G__20283 = cljs.core.first.call(null,seq20282);
var seq20282__$1 = cljs.core.next.call(null,seq20282);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__20283,seq20282__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20293 = arguments.length;
var i__15015__auto___20294 = (0);
while(true){
if((i__15015__auto___20294 < len__15014__auto___20293)){
args__15021__auto__.push((arguments[i__15015__auto___20294]));

var G__20295 = (i__15015__auto___20294 + (1));
i__15015__auto___20294 = G__20295;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq20284){
var G__20285 = cljs.core.first.call(null,seq20284);
var seq20284__$1 = cljs.core.next.call(null,seq20284);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__20285,seq20284__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20296 = arguments.length;
var i__15015__auto___20297 = (0);
while(true){
if((i__15015__auto___20297 < len__15014__auto___20296)){
args__15021__auto__.push((arguments[i__15015__auto___20297]));

var G__20298 = (i__15015__auto___20297 + (1));
i__15015__auto___20297 = G__20298;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq20286){
var G__20287 = cljs.core.first.call(null,seq20286);
var seq20286__$1 = cljs.core.next.call(null,seq20286);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__20287,seq20286__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20299 = arguments.length;
var i__15015__auto___20300 = (0);
while(true){
if((i__15015__auto___20300 < len__15014__auto___20299)){
args__15021__auto__.push((arguments[i__15015__auto___20300]));

var G__20301 = (i__15015__auto___20300 + (1));
i__15015__auto___20300 = G__20301;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq20288){
var G__20289 = cljs.core.first.call(null,seq20288);
var seq20288__$1 = cljs.core.next.call(null,seq20288);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__20289,seq20288__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20310 = arguments.length;
var i__15015__auto___20311 = (0);
while(true){
if((i__15015__auto___20311 < len__15014__auto___20310)){
args__15021__auto__.push((arguments[i__15015__auto___20311]));

var G__20312 = (i__15015__auto___20311 + (1));
i__15015__auto___20311 = G__20312;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__20221__auto__,rest__20222__auto__){
var convert_case__20223__auto__ = (function (p1__20220__20224__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__20220__20224__auto__,rest__20222__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__20221__auto__,convert_case__20223__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq20302){
var G__20303 = cljs.core.first.call(null,seq20302);
var seq20302__$1 = cljs.core.next.call(null,seq20302);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__20303,seq20302__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20313 = arguments.length;
var i__15015__auto___20314 = (0);
while(true){
if((i__15015__auto___20314 < len__15014__auto___20313)){
args__15021__auto__.push((arguments[i__15015__auto___20314]));

var G__20315 = (i__15015__auto___20314 + (1));
i__15015__auto___20314 = G__20315;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq20304){
var G__20305 = cljs.core.first.call(null,seq20304);
var seq20304__$1 = cljs.core.next.call(null,seq20304);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__20305,seq20304__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20316 = arguments.length;
var i__15015__auto___20317 = (0);
while(true){
if((i__15015__auto___20317 < len__15014__auto___20316)){
args__15021__auto__.push((arguments[i__15015__auto___20317]));

var G__20318 = (i__15015__auto___20317 + (1));
i__15015__auto___20317 = G__20318;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq20306){
var G__20307 = cljs.core.first.call(null,seq20306);
var seq20306__$1 = cljs.core.next.call(null,seq20306);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__20307,seq20306__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20319 = arguments.length;
var i__15015__auto___20320 = (0);
while(true){
if((i__15015__auto___20320 < len__15014__auto___20319)){
args__15021__auto__.push((arguments[i__15015__auto___20320]));

var G__20321 = (i__15015__auto___20320 + (1));
i__15015__auto___20320 = G__20321;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq20308){
var G__20309 = cljs.core.first.call(null,seq20308);
var seq20308__$1 = cljs.core.next.call(null,seq20308);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__20309,seq20308__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20330 = arguments.length;
var i__15015__auto___20331 = (0);
while(true){
if((i__15015__auto___20331 < len__15014__auto___20330)){
args__15021__auto__.push((arguments[i__15015__auto___20331]));

var G__20332 = (i__15015__auto___20331 + (1));
i__15015__auto___20331 = G__20332;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__20221__auto__,rest__20222__auto__){
var convert_case__20223__auto__ = (function (p1__20220__20224__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__20220__20224__auto__,rest__20222__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__20221__auto__,convert_case__20223__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq20322){
var G__20323 = cljs.core.first.call(null,seq20322);
var seq20322__$1 = cljs.core.next.call(null,seq20322);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__20323,seq20322__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20333 = arguments.length;
var i__15015__auto___20334 = (0);
while(true){
if((i__15015__auto___20334 < len__15014__auto___20333)){
args__15021__auto__.push((arguments[i__15015__auto___20334]));

var G__20335 = (i__15015__auto___20334 + (1));
i__15015__auto___20334 = G__20335;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq20324){
var G__20325 = cljs.core.first.call(null,seq20324);
var seq20324__$1 = cljs.core.next.call(null,seq20324);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__20325,seq20324__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20336 = arguments.length;
var i__15015__auto___20337 = (0);
while(true){
if((i__15015__auto___20337 < len__15014__auto___20336)){
args__15021__auto__.push((arguments[i__15015__auto___20337]));

var G__20338 = (i__15015__auto___20337 + (1));
i__15015__auto___20337 = G__20338;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq20326){
var G__20327 = cljs.core.first.call(null,seq20326);
var seq20326__$1 = cljs.core.next.call(null,seq20326);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__20327,seq20326__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20339 = arguments.length;
var i__15015__auto___20340 = (0);
while(true){
if((i__15015__auto___20340 < len__15014__auto___20339)){
args__15021__auto__.push((arguments[i__15015__auto___20340]));

var G__20341 = (i__15015__auto___20340 + (1));
i__15015__auto___20340 = G__20341;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq20328){
var G__20329 = cljs.core.first.call(null,seq20328);
var seq20328__$1 = cljs.core.next.call(null,seq20328);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__20329,seq20328__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20350 = arguments.length;
var i__15015__auto___20351 = (0);
while(true){
if((i__15015__auto___20351 < len__15014__auto___20350)){
args__15021__auto__.push((arguments[i__15015__auto___20351]));

var G__20352 = (i__15015__auto___20351 + (1));
i__15015__auto___20351 = G__20352;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__20221__auto__,rest__20222__auto__){
var convert_case__20223__auto__ = (function (p1__20220__20224__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__20220__20224__auto__,rest__20222__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__20221__auto__,convert_case__20223__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq20342){
var G__20343 = cljs.core.first.call(null,seq20342);
var seq20342__$1 = cljs.core.next.call(null,seq20342);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__20343,seq20342__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20353 = arguments.length;
var i__15015__auto___20354 = (0);
while(true){
if((i__15015__auto___20354 < len__15014__auto___20353)){
args__15021__auto__.push((arguments[i__15015__auto___20354]));

var G__20355 = (i__15015__auto___20354 + (1));
i__15015__auto___20354 = G__20355;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq20344){
var G__20345 = cljs.core.first.call(null,seq20344);
var seq20344__$1 = cljs.core.next.call(null,seq20344);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__20345,seq20344__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20356 = arguments.length;
var i__15015__auto___20357 = (0);
while(true){
if((i__15015__auto___20357 < len__15014__auto___20356)){
args__15021__auto__.push((arguments[i__15015__auto___20357]));

var G__20358 = (i__15015__auto___20357 + (1));
i__15015__auto___20357 = G__20358;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq20346){
var G__20347 = cljs.core.first.call(null,seq20346);
var seq20346__$1 = cljs.core.next.call(null,seq20346);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__20347,seq20346__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20359 = arguments.length;
var i__15015__auto___20360 = (0);
while(true){
if((i__15015__auto___20360 < len__15014__auto___20359)){
args__15021__auto__.push((arguments[i__15015__auto___20360]));

var G__20361 = (i__15015__auto___20360 + (1));
i__15015__auto___20360 = G__20361;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq20348){
var G__20349 = cljs.core.first.call(null,seq20348);
var seq20348__$1 = cljs.core.next.call(null,seq20348);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__20349,seq20348__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20370 = arguments.length;
var i__15015__auto___20371 = (0);
while(true){
if((i__15015__auto___20371 < len__15014__auto___20370)){
args__15021__auto__.push((arguments[i__15015__auto___20371]));

var G__20372 = (i__15015__auto___20371 + (1));
i__15015__auto___20371 = G__20372;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__20221__auto__,rest__20222__auto__){
var convert_case__20223__auto__ = (function (p1__20220__20224__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__20220__20224__auto__,rest__20222__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__20221__auto__,convert_case__20223__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq20362){
var G__20363 = cljs.core.first.call(null,seq20362);
var seq20362__$1 = cljs.core.next.call(null,seq20362);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__20363,seq20362__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20373 = arguments.length;
var i__15015__auto___20374 = (0);
while(true){
if((i__15015__auto___20374 < len__15014__auto___20373)){
args__15021__auto__.push((arguments[i__15015__auto___20374]));

var G__20375 = (i__15015__auto___20374 + (1));
i__15015__auto___20374 = G__20375;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq20364){
var G__20365 = cljs.core.first.call(null,seq20364);
var seq20364__$1 = cljs.core.next.call(null,seq20364);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__20365,seq20364__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20376 = arguments.length;
var i__15015__auto___20377 = (0);
while(true){
if((i__15015__auto___20377 < len__15014__auto___20376)){
args__15021__auto__.push((arguments[i__15015__auto___20377]));

var G__20378 = (i__15015__auto___20377 + (1));
i__15015__auto___20377 = G__20378;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq20366){
var G__20367 = cljs.core.first.call(null,seq20366);
var seq20366__$1 = cljs.core.next.call(null,seq20366);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__20367,seq20366__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20379 = arguments.length;
var i__15015__auto___20380 = (0);
while(true){
if((i__15015__auto___20380 < len__15014__auto___20379)){
args__15021__auto__.push((arguments[i__15015__auto___20380]));

var G__20381 = (i__15015__auto___20380 + (1));
i__15015__auto___20380 = G__20381;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq20368){
var G__20369 = cljs.core.first.call(null,seq20368);
var seq20368__$1 = cljs.core.next.call(null,seq20368);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__20369,seq20368__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20390 = arguments.length;
var i__15015__auto___20391 = (0);
while(true){
if((i__15015__auto___20391 < len__15014__auto___20390)){
args__15021__auto__.push((arguments[i__15015__auto___20391]));

var G__20392 = (i__15015__auto___20391 + (1));
i__15015__auto___20391 = G__20392;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__20221__auto__,rest__20222__auto__){
var convert_case__20223__auto__ = (function (p1__20220__20224__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__20220__20224__auto__,rest__20222__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__20221__auto__,convert_case__20223__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq20382){
var G__20383 = cljs.core.first.call(null,seq20382);
var seq20382__$1 = cljs.core.next.call(null,seq20382);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__20383,seq20382__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20393 = arguments.length;
var i__15015__auto___20394 = (0);
while(true){
if((i__15015__auto___20394 < len__15014__auto___20393)){
args__15021__auto__.push((arguments[i__15015__auto___20394]));

var G__20395 = (i__15015__auto___20394 + (1));
i__15015__auto___20394 = G__20395;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq20384){
var G__20385 = cljs.core.first.call(null,seq20384);
var seq20384__$1 = cljs.core.next.call(null,seq20384);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__20385,seq20384__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20396 = arguments.length;
var i__15015__auto___20397 = (0);
while(true){
if((i__15015__auto___20397 < len__15014__auto___20396)){
args__15021__auto__.push((arguments[i__15015__auto___20397]));

var G__20398 = (i__15015__auto___20397 + (1));
i__15015__auto___20397 = G__20398;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq20386){
var G__20387 = cljs.core.first.call(null,seq20386);
var seq20386__$1 = cljs.core.next.call(null,seq20386);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__20387,seq20386__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20399 = arguments.length;
var i__15015__auto___20400 = (0);
while(true){
if((i__15015__auto___20400 < len__15014__auto___20399)){
args__15021__auto__.push((arguments[i__15015__auto___20400]));

var G__20401 = (i__15015__auto___20400 + (1));
i__15015__auto___20400 = G__20401;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((1) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15022__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__20226__auto__,rest__20227__auto__){
if(!((s__20226__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20226__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__20226__auto__),rest__20227__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq20388){
var G__20389 = cljs.core.first.call(null,seq20388);
var seq20388__$1 = cljs.core.next.call(null,seq20388);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__20389,seq20388__$1);
});

