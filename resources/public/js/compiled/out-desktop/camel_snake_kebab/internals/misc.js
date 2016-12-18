// Compiled by ClojureScript 1.9.293 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__15021__auto__ = [];
var len__15014__auto___20076 = arguments.length;
var i__15015__auto___20077 = (0);
while(true){
if((i__15015__auto___20077 < len__15014__auto___20076)){
args__15021__auto__.push((arguments[i__15015__auto___20077]));

var G__20078 = (i__15015__auto___20077 + (1));
i__15015__auto___20077 = G__20078;
continue;
} else {
}
break;
}

var argseq__15022__auto__ = ((((4) < args__15021__auto__.length))?(new cljs.core.IndexedSeq(args__15021__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__15022__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__20070){
var map__20071 = p__20070;
var map__20071__$1 = ((((!((map__20071 == null)))?((((map__20071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20071):map__20071);
var separator = cljs.core.get.call(null,map__20071__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__20073 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__20074 = cljs.core.seq.call(null,vec__20073);
var first__20075 = cljs.core.first.call(null,seq__20074);
var seq__20074__$1 = cljs.core.next.call(null,seq__20074);
var first = first__20075;
var rest = seq__20074__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq20065){
var G__20066 = cljs.core.first.call(null,seq20065);
var seq20065__$1 = cljs.core.next.call(null,seq20065);
var G__20067 = cljs.core.first.call(null,seq20065__$1);
var seq20065__$2 = cljs.core.next.call(null,seq20065__$1);
var G__20068 = cljs.core.first.call(null,seq20065__$2);
var seq20065__$3 = cljs.core.next.call(null,seq20065__$2);
var G__20069 = cljs.core.first.call(null,seq20065__$3);
var seq20065__$4 = cljs.core.next.call(null,seq20065__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__20066,G__20067,G__20068,G__20069,seq20065__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__13906__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__13906__auto__)){
return or__13906__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});
