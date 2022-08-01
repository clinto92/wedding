// import logo from './logo.svg';
import './App.css';
import HighlightsPhotos from './Components/HighLightsPhotos';
import DragNdrop  from './Components/DragNdrop';

function App() {
  const fileUploadProp = {
    accept: 'image/*',
    onChange: (event) => {
        if (
            event.target.files !== null &&
            event.target?.files?.length > 0
        ) {
            console.log(`Saving ${event.target.value}`)
        }
    },
    onDrop: (event) => {
        console.log(`Drop ${event.dataTransfer.files[0].name}`)
    },
  }
  return (
    <div className="App">
      <DragNdrop {...fileUploadProp} />
      <HighlightsPhotos />
    </div>
  );
}

export default App;
