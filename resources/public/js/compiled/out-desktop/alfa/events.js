// Compiled by ClojureScript 1.9.293 {}
goog.provide('alfa.events');
goog.require('cljs.core');
goog.require('alfa.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (db,whatever){
return alfa.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-user","set-user",444398487),(function (db,p__22742){
var vec__22743 = p__22742;
var _ = cljs.core.nth.call(null,vec__22743,(0),null);
var username = cljs.core.nth.call(null,vec__22743,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"username","username",1605666410),username);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-score","set-score",498798389),(function (db,p__22746){
var vec__22747 = p__22746;
var _ = cljs.core.nth.call(null,vec__22747,(0),null);
var score = cljs.core.nth.call(null,vec__22747,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"score","score",-1963588780),score);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-excerpt","set-excerpt",-1850630437),(function (db,p__22750){
var vec__22751 = p__22750;
var _ = cljs.core.nth.call(null,vec__22751,(0),null);
var excerpt = cljs.core.nth.call(null,vec__22751,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"excerpt","excerpt",219850763),excerpt);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-body","set-body",1364086163),(function (db,p__22754){
var vec__22755 = p__22754;
var _ = cljs.core.nth.call(null,vec__22755,(0),null);
var body = cljs.core.nth.call(null,vec__22755,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"body","body",-2049205669),body);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-bmi","set-bmi",43327498),(function (db,p__22758){
var vec__22759 = p__22758;
var _ = cljs.core.nth.call(null,vec__22759,(0),null);
var bmi = cljs.core.nth.call(null,vec__22759,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-title","set-title",1382099860),(function (db,p__22762){
var vec__22763 = p__22762;
var _ = cljs.core.nth.call(null,vec__22763,(0),null);
var title = cljs.core.nth.call(null,vec__22763,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"title","title",636505583),title);
}));
