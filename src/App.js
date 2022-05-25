import React, { useEffect } from 'react'
import './scss/main.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Vod from './pages/Vod'
import VodDetail from './pages/VodDetail'
import
{
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Iframe from './components/Iframe'

const App = () =>
{
	
	return (
		<BrowserRouter>
			<div className='body'>
				<Header />
				<div className='mainContent'>
				<Iframe />
					<Routes>
						<Route path="/schedule" element={ <Schedule /> } />
						<Route path="/vods" element={ <Vod /> } />
						<Route path="/vods/:league" element={ <Vod /> } />
						<Route path="/vod/:id/:game/:parameter" element={ <VodDetail /> } />
						<Route path="/" element={ <Home /> } />
						<Route path='*' element={ <Home /> } />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
