 (ns alfa.system
   (:require
     [com.stuartsierra.component :as component]
     [alfa.server :as server]
     [alfa.handler :as handler]))

(def config
  {:server {:path "/" :host "localhost"}})

(defn create-system
  []
  (let [{:keys [path host]} (:server config)]
    (component/system-map
      :server (component/using
                (server/make path host)
                [:handler])
      :handler (handler/make))))