import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Case from '@/components/Case'
import Music from '@/components/Music'
import Photo from '@/components/Photo'
import PhotoList from '@/components/PhotoList/PhotoList'
import Demo from '@/components/Demo'
import Movie from '@/components/Movie'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'Home',
    	component: Home
    },
    {
    	path: '/case',
    	name: 'Case',
    	component: Case
    },
    {
        path: '/music',
        name: 'Music',
        component: Music
    },
    {
        path: '/photo',
        name: 'Photo',
        component: Photo
    },
    {
        path: '/photo/photoList', 
        name: "PhotoList",
        component: PhotoList 
    },
    {
        path: '/demo',
        name: 'Demo',
        component: Demo
    },
    {
        path: '/movie',
        name: 'Movie',
        component: Movie
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
  ]
})
