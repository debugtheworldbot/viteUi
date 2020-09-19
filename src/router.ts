import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import Switch from "./components/Switch.vue"
import Button from "./components/Button.vue"
import Dialog from "./components/Dialog.vue"
import Tab from "./components/Tab.vue"
import DocView from "./components/DocView.vue"

const history = createWebHashHistory()

export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc , children:[
                {path:"",component:DocView},
                {path:'switch',component:Switch},
                {path:'button',component:Button},
                {path:'dialog',component:Dialog},
                {path:'tabs',component:Tab},

            ]}
    ]
})