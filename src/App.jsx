import './App.css';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">CJAOT Token Viewer</h1>
        <InputForm />
      </div>
    </div>
  );
}

export default App;