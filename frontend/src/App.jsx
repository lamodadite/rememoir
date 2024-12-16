import {
	BrowserRouter as Router, Routes, Route
} from "react-router-dom"
import Home from "./routes/Home"
import Review from "./routes/Review"

function App() {
	return <Router>
		<Routes>
			<Route path={`/review/:id`} element={ <Review />}/>
			<Route path={`/`} element={ < Home /> }/>
		</Routes>
	</Router>;
}
	
export default App