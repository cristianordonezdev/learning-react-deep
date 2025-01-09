import { useEffect, useRef, useState } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';


const storedId = JSON.parse(localStorage.getItem('placesSaved')) || [];
const storedPlaces = storedId.map(i => {
  return AVAILABLE_PLACES.find(j => j.id === i)
})

function App() {
  // const modal = useRef();
  const [modalShow, setModal] = useState(false)
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [getLocationSorted, setLocationSorted] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude)
      
      setLocationSorted(sortedPlaces);
    });
  }, [])


  function handleStartRemovePlace(id) {
    // modal.current.open();
    setModal(true)
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    // modal.current.close();
    setModal(false)
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const places_saved = JSON.parse(localStorage.getItem('placesSaved')) || [];
    if (places_saved.indexOf(id) === -1) {
      localStorage.setItem('placesSaved', JSON.stringify([id, ...places_saved]))
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    // modal.current.close();
    setModal(false)

    const places_saved = JSON.parse(localStorage.getItem('placesSaved')) || [];
    localStorage.setItem('placesSaved', JSON.stringify(places_saved.filter(i => i !== selectedPlace.current)))

  }

  return (
    <>
      <Modal open={modalShow} onCloseEvent={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={getLocationSorted}
          fallbackText={"Sorting places by your location"}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
