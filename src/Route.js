import UserLogin from './components/UserLogin';
import FundooHome from './components/FundooHome';
import Note from './components/Note';

export default [
    { path: '/', component: UserLogin },
    { 
        path: '/home', component: FundooHome,
        children:[
            {path: 'note',component:Note},
        ]
    }
]