import UserLogin from './components/UserLogin';
import FundooHome from './components/FundooHome';
import Note from './components/Note';
import Trash from './components/Trash';
import Archive from './components/Archive';

export default [
    { path: '/', component: UserLogin },
    {
        path: '/home', component: FundooHome,
        children: [
            {
                path: 'note',
                component: Note,
                beforeEnter(to, from, next) {
                    if (localStorage.getItem("token") == undefined) {
                        next({
                            path: '/'
                        })
                    } else {
                        next()
                    }
                }
            },
            {
                path: 'trash',
                component: Trash,
                beforeEnter(to, from, next) {
                    if (localStorage.getItem("token") == undefined) {
                        next({
                            path: '/'
                        })
                    } else {
                        next()
                    }
                }
            },
            {
                path: 'archive', 
                component: Archive,
                beforeEnter(to, from, next) {
                    if (localStorage.getItem("token") == undefined) {
                        next({
                            path: '/'
                        })
                    } else {
                        next()
                    }
                }
            },
        ]
    }
]