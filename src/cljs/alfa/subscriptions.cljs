(ns alfa.subscriptions
  (:require
    [re-frame.core :as re]))

(re/reg-sub
  :excerpt
  (fn [db _] (:excerpt db)))

(re/reg-sub
  :body
  (fn [db _] (:body db)))

(re/reg-sub
  :title
  (fn [db _] (:title db)))

(re/reg-sub
  :bmi
  (fn [db _] (:bmi db)))

