import { Switch, Route } from 'react-router-dom'
import Home from './component/Home'
import './App.css'

export default function App() {
  
  return (
    <>
      <Switch>
      <Route path="/" component={Home}/>
      </Switch>
    </>
  )
}


