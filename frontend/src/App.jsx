import {
	BrowserRouter as Router, Routes, Route
} from "react-router-dom"
import home from "./routes/Home"
 
function App() {
	return <Router>
		<Routes>
			<Route path={`/`} element={home()}/>
		</Routes>
	</Router>;
}

export default App