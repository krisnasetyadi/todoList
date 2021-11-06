import Login from "../component/login/login";
import Register from "../component/register/register";
import Todo from "../component/todolist/todo";

const routes =[
    {
        path:'/register',
        component: <Register/>,
        exact:true,
    },
    {
        path:'/login',
        component:<Login/>
    },
    {
        path:'/todo',
        component:<Todo/>
    }
]
export default routes