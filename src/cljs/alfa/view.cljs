 (ns alfa.view
   (:require
     [re-frame.core :as re]
     [reagent.core :as rc]
     [cljs-react-material-ui.core :as ui]
     [cljs-react-material-ui.icons :as ic]
     [cljs-react-material-ui.reagent :as rui]))


(def data (rc/atom {1 "Lorem Ipsum"
                 2 "Lorem ipsum 2"
                 3 "Lorem ipsum 3"}))

 (def counter (rc/atom 0))

 (def toogle-state (rc/atom false))

 (defn handle-toggle []
   (swap! toogle-state not))

(defn excerpt-2
  []
  (if (> @counter (apply max (keys @data)))
    (do
      (reset! counter 0)
      [:h1 "resetting"])
    (do
      (swap! counter inc)
      (if (or (empty? (@data @counter)) (nil? (@data @counter)))
        [:h1 "Just hit it again"]
        [:h1 (str (@data @counter) @counter)]))))


(defn bmi
  []
  (fn
    []
    (let [w (re/subscribe [:bmi])]
      [:div
       [:p (str @w)]
       [rui/slider
        {:name "nama"
         :max 5
         :min 0
         :value 2
         :on-change #(re/dispatch
                      [:set-bmi
                       (-> % .-target .-value)])}]])))

(defn header
  []
  (fn []
    (let [tit (re/subscribe [:title])]
      [:center
       [rui/app-bar
        {:title              "Dsapoetra"
         :icon-element-right (ui/icon-button
                               {:on-mouse-over #(handle-toggle)}
                               (ic/action-autorenew))
         :style {:backgroundColor "black"
                 :color "black"
                 :width "100%"}}]])))

 (defn badan-1
   []
   (fn []
     (let [exc (re/subscribe [:excerpt])]
       [rui/tabs
        [rui/tab
         {:label "Basic info"
          :style {:background "#DA7F36"}}
         [:center
          (if (or (nil? @exc) (empty? @exc))
            [:h1 "Begin"]
            @exc)
          [rui/raised-button
           {:label "Previous"
            :style {:margin-right 100}
            :backgroundColor "grey"
            :textColor "white"
            :on-click #(re/dispatch
                        [:set-excerpt (excerpt-2)])}]
          [rui/raised-button
           {:label "Next"
            :style {:margin-left 100}
            :backgroundColor "grey"
            :textColor "white"
            :on-click #(re/dispatch
                        [:set-excerpt (excerpt-2)])}]]]
        [rui/tab
         {:label "Blog"
          :style {:background "#DA7F36"}}
         [rui/text-field
          {:hint-text "put it here"}]]
        [rui/tab
         {:label "Contact"
          :style {:background "#DA7F36"}}]
        [rui/tab
         {:label "Contact 2"
          :style {:background "#DA7F36"}}]])))

(defn badan-2
  []
(fn []
  [rui/tabs
   [rui/tab
    {:label "App #1"
     :style {:background "#DA7F36"}}
    [bmi]]
   [rui/tab
    {:label "App #2"
     :style {:background "#DA7F36"}}]
   [rui/tab
    {:label "App #3"
     :style {:background "#DA7F36"}}]]))




(defn body
  []
  (fn []
    (let [badan (re/subscribe [:body])]
      [:div
       [rui/drawer
        {:open @toogle-state
         :docked false
         :on-request-change #(re/dispatch
                              (handle-toggle))}
        [rui/menu-item
         {:primary-text "About"
          :on-touch-tap #(re/dispatch
                      [:set-body [badan-1]])}]
        [rui/menu-item
         {:primary-text "Apps"
          :on-touch-tap #(re/dispatch
                          [:set-body [badan-2]])}]]
       (if (nil? @badan)
         [badan-1]
         @badan)])))


 (defn footer
   []
   (fn []
     [:footer
      {:style {:position "absolute"
               :bottom 0
               :width "99%"
               :height "60px"
               :background "#F46828"}}
      [:center
       [:p "Footer"]]]))

(defn main-panel
  []
  [rui/mui-theme-provider
   {:mui-theme (ui/get-mui-theme)}
   [:div
    [header]
    [body]
    [footer]]])


