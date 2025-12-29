import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ClassProps from './customcard/classprops.jsx';

function App() {
  return (
    <>
      <ClassProps
        name="example1"
        email="john.doe@example.com"
        url="https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-art-1080p-2k-4k-5k-hd-wallpapers-free-download-background-image_16123072.jpg"
        button="Click Me"
      />

      <ClassProps
        name="example2"
        email="john.doe@example.com"
        url="https://i.pinimg.com/236x/7b/7e/4e/7b7e4e85ccdfe0ebfb485b8af343d715.jpg"
        button="Click Me"
      />
      <ClassProps
        name="example3"
        email="john.doe@example.com"
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGKMVbT_jWsqWbM6H5bq3xkPdi8lhmwmrzw&s"
        button="Click Me"
      />
    </>
  );
}

export default App;

