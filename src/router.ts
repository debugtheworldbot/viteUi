import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import Switch from "./components/Switch.vue"
import Button from "./components/Button.vue"
import Dialog from "./components/Dialog.vue"
import Tab from "./components/Tab.vue"
import { h } from "vue"
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import start from './markdown/start.md'

const history = createWebHashHistory()
const md =(component)=>{
       return  h(Markdown,{component:component,key:component})
}
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc , children:[
                {path:"",redirect:'/doc/intro'},
                {path:'intro',component:md(intro)},
                {path:'start',component:md(start)},
                {path:'install',component:md(install)},
                {path:'switch',component:Switch},
                {path:'button',component:Button},
                {path:'dialog',component:Dialog},
                {path:'tabs',component:Tab},

            ]}
    ]
})