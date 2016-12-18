 (ns alfa.events
   (:require
     [alfa.db :refer [default-db]]
     [re-frame.core :as re]))

(re/reg-event-db
  :initialize-db
  (fn [db whatever]
    default-db))

(re/reg-event-db
  :set-user
  (fn [db [_ username]]
    (assoc db :username username)))

(re/reg-event-db
  :set-score
  (fn [db [_ score]]
    (assoc db :score score)))

 (re/reg-event-db
   :set-excerpt
   (fn [db [_ excerpt]]
     (assoc db :excerpt excerpt)))

(re/reg-event-db
  :set-body
  (fn [db [_ body]]
    (assoc db :body body)))

(re/reg-event-db
  :set-bmi
  (fn [db [_ bmi]]
    (assoc db :bmi bmi)))

(re/reg-event-db
  :set-title
  (fn [db [_ title]]
    (assoc db :title title)))