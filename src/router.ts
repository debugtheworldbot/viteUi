import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import Switch from "./components/Switch.vue"
import Button from "./components/Button.vue"
import Dialog from "./components/Dialog.vue"
import Tab from "./components/Tab.vue"
import DocView from "./components/DocView.vue"
import { h } from "vue"
import Markdown from './components/Markdown.vue'

const history = createWebHashHistory()
const md =(filename)=>{
       return  h(Markdown,{path:`../markdown/${filename}`,key:filename})
}
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc , children:[
                {path:"",redirect:'/doc/intro'},
                {path:'intro',component:md('intro.md')},
                {path:'start',component:md('start.md')},
                {path:'install',component:md('install.md')},
                {path:'switch',component:Switch},
                {path:'button',component:Button},
                {path:'dialog',component:Dialog},
                {path:'tabs',component:Tab},

            ]}
    ]
})