import Place from "./place";

export default function PlaceList({
    places,
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
    return (
      <ul>
        {places.map((place) => (
          <Place
            key={place.id}
            place={place}
            setName={setName}
            setAddress={setAddress}
            setImage={setImage}
            setFee={setFee}
            name={name}
            address={address}
            image={image}
            fee={fee}
            setPlaces={setPlaces}
          />
        ))}
      </ul>
    );
  }