import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import Switch from "./components/Switch.vue"
import Button from "./components/Button.vue"
import Dialog from "./components/Dialog.vue"
import Tab from "./components/Tab.vue"
import DocView from "./components/DocView.vue"
import Intro from "./views/Intro.vue"
import Start from "./views/Start.vue"
import Install from "./views/Install.vue"

const history = createWebHashHistory()

export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc , children:[
                {path:"",component:DocView},
                {path:'intro',component:Intro},
                {path:'start',component:Start},
                {path:'install',component:Install},
                {path:'switch',component:Switch},
                {path:'button',component:Button},
                {path:'dialog',component:Dialog},
                {path:'tabs',component:Tab},

            ]}
    ]
})