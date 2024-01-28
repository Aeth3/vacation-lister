import { useState } from "react";
import Button from "./button";

export default function Place({
    place,
    setName,
    setAddress,
    setImage,
    setFee,
    name,
    address,
    image,
    fee,
    setPlaces,
  }) {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState(null);
    function handleIsEditOpen(place) {
      setSelectedPlace((current) => (current?.id === place.id ? null : place));
      setIsEditOpen((open) => !open);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      if (
        name.replace(/\s/g, "") === "" ||
        address.replace(/\s/g, "") === "" ||
        image.replace(/\s/g, "") === ""
      )
        return;
      console.log(selectedPlace);
      setPlaces((currentPlaces) =>
        currentPlaces.map((p) =>
          p.id === selectedPlace.id
            ? { ...p, name: name, address: address, image: image, fee: fee }
            : p
        )
      );
      setName("");
      setAddress("");
      setImage("");
      setFee("");
      setIsEditOpen(false);
    }
  
    function handleCancelEdit() {
      setName(name);
      setAddress(address);
      setImage(image);
      setFee(fee);
      setIsEditOpen(false);
    }
  
    function handleDelete(place) {
      setPlaces((current) => current.filter((p) => p.id !== place.id));
    }
  
    return (
      <li>
        <img src={place.image} alt={place.name} />
        {isEditOpen ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={place.name}
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={place.address}
            />
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder={place.image}
            />
            <input
              type="number"
              value={fee}
              onChange={(e) => setFee(Number(e.target.value))}
              placeholder={place.fee}
            />
            <Button>Submit</Button>
            <Button onClick={handleCancelEdit}>Cancel</Button>
          </form>
        ) : (
          <>
            <h3>{place.name}</h3>
            <p>{place.address}</p>
            <h5>Fee: {place.fee}</h5>
  
            <Button onClick={() => handleIsEditOpen(place)}>Edit</Button>
            <Button onClick={() => handleDelete(place)}>Delete</Button>
          </>
        )}
      </li>
    );
  }