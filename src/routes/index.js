import HelloPage from "../views/HelloPage";
import Dashboard from "../views/Vehicles"
import Detail from "../views/Peoples";

const routes=[
  {
    component:()=> <HelloPage/>,
    path:'/'
  },
  {
    component:()=><Dashboard/>,
    path:'/Vehicles'
  },
  {
    component:()=><Detail/>,
    path:'/Peoples'
  }
]

export default routes