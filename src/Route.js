import UserLogin from './components/UserLogin';
import FundooHome from './components/FundooHome';
import Note from './components/Note';
import Trash from './components/Trash';

export default [
    { path: '/', component: UserLogin },
    { 
        path: '/home', component: FundooHome,
        children:[
            {path: 'note',component:Note},
            {path: 'trash',component:Trash}
        ]
    }
]