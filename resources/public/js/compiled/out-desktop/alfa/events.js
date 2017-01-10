// Compiled by ClojureScript 1.9.293 {}
goog.provide('alfa.events');
goog.require('cljs.core');
goog.require('alfa.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (db,_){
return alfa.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-excerpt","set-excerpt",-1850630437),(function (db,p__21018){
var vec__21019 = p__21018;
var _ = cljs.core.nth.call(null,vec__21019,(0),null);
var excerpt = cljs.core.nth.call(null,vec__21019,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"excerpt","excerpt",219850763),excerpt);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-body","set-body",1364086163),(function (db,p__21022){
var vec__21023 = p__21022;
var _ = cljs.core.nth.call(null,vec__21023,(0),null);
var body = cljs.core.nth.call(null,vec__21023,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"body","body",-2049205669),body);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-bmi","set-bmi",43327498),(function (db,p__21026){
var vec__21027 = p__21026;
var _ = cljs.core.nth.call(null,vec__21027,(0),null);
var bmi = cljs.core.nth.call(null,vec__21027,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-title","set-title",1382099860),(function (db,p__21030){
var vec__21031 = p__21030;
var _ = cljs.core.nth.call(null,vec__21031,(0),null);
var title = cljs.core.nth.call(null,vec__21031,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"title","title",636505583),title);
}));
