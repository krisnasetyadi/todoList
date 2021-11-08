import Login from "../component/login/login";
import Register from "../component/register/register";
import TodoPage from "../component/todo/todoPage";
// import Todo from "../component/todolist/todo";

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
        component:<TodoPage/>
    }
]
export default routes