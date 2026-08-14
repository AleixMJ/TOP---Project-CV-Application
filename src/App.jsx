import './styles/App.css'
import General from './components/General.jsx'
import Work from './components/Work.jsx'
import Education from './components/Education.jsx'

function App() {
  return (
    <main>
      <div className="top-bar">
        <h1>CV Application</h1>
        <button type="button" onClick={() => window.print()} className="download-btn">
          📄 Download PDF
        </button>
      </div>

      <General/>
      <Work />
      <Education />
    </main>
  );
}

export default App
