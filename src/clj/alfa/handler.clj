 (ns alfa.handler
   (:require
     [compojure.core :refer [GET POST routes] :as compo]
     [compojure.route :as croute]
     [com.stuartsierra.component :as component]
     [alfa.pages :as page]))

(declare spa-routes)

(defrecord Handler []
  component/Lifecycle
  (start [this]
    (assoc this
      :routes (spa-routes)))
  (stop [this]
    (dissoc this :routes)))

(defn make []
  (map->Handler {}))


(defn spa-routes
  []
  (routes
    (GET "/" req (page/spa))
    (croute/resources "/")
    (croute/not-found "Not found dudes")))
