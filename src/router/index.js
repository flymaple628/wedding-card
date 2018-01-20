import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPhoto from '@/components/MainPhoto'
import MainList from '@/components/MainList'
import Infomation from '@/components/Infomation'
import Map from '@/components/Map'

import NavIcons from '@/components/NavIcons'

Vue.component('nav-icons', NavIcons)

Vue.use(Router)
    /* eslint-disable */
export default new Router({
    routes: [{
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/photo',
            name: 'MainPhoto',
            component: MainPhoto
        },
        {
            path: '/list',
            name: 'MainList',
            component: MainList
        },
        {
            path: '/info',
            name: 'Infomation',
            component: Infomation
        },
        {
            path: '/map',
            name: 'Map',
            component: Map
        },

    ]
})