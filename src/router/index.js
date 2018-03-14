import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Case from '@/components/Case'
import Music from '@/components/Music'
import MusicList from '@/components/MusicList/MusicList'
import MusicPlay from '@/components/MusicList/MusicPlay'
import Photo from '@/components/Photo'
import PhotoList from '@/components/PhotoList/PhotoList'
import Demo from '@/components/Demo'
import Movie from '@/components/Movie'
import Contact from '@/components/Contact'
import Test from '@/components/Test'
import Swiper from '@/components/Swiper'

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
        path: '/music/MusicList',
        name: 'MusicList',
        component: MusicList
    },
    {
        path: '/music/MusicList/MusciPlay',
        name: 'MusicPlay',
        component: MusicPlay
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
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/swiper',
        name: 'Swiper',
        component: Swiper
    }
  ]
})
