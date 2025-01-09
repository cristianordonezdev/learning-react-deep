import { useEffect, useRef, useState } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const [getLocationSorted, setLocationSorted] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude)
      
      setLocationSorted(sortedPlaces);

      const places_saved = JSON.parse(localStorage.getItem('placesSaved')) || [];
      const placesSaved = []
      places_saved.map(i => {
        placesSaved.push(AVAILABLE_PLACES.find(j => j.id === i))
      })
      setPickedPlaces(placesSaved);
    });
  }, [])


  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
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
    modal.current.close();

    const places_saved = JSON.parse(localStorage.getItem('placesSaved')) || [];
    localStorage.setItem('placesSaved', JSON.stringify(places_saved.filter(i => i !== selectedPlace.current)))

  }

  return (
    <>
      <Modal ref={modal}>
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
