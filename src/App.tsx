import './App.css';
import { CreatePhrasesProvider } from './context/createPhrasesContext';
import { Home } from './Pages/Home';

function App() {
	return (
		<main>
			<CreatePhrasesProvider>
				<Home />
			</CreatePhrasesProvider>
		</main>
	);
}

export default App;
