 (ns alfa.pages
   (:require
     [hiccup.core :as hc]
     [hiccup.page :as hp])
   (:gen-class))

(defn spa []
  (hp/html5
    [:head]
    [:body
     [:div {:id "app"}]
     (hp/include-js "/js/app.js")]))
