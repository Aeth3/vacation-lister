import { useState } from "react";
import PlaceList from "./placelist";
import Button from "./button";
import FormAddPlace from "./formAddList";

const initialPlaces = [
  {
    id: 1541,
    name: "Midway Beach",
    address: "Initao, Misamis Oriental",
    image: "https://blusandsresort.files.wordpress.com/2016/07/mg_7290.jpg",
    fee: 50,
  },
  {
    id: 1461,
    name: "Dahilayan Adventure Park",
    address: "Manolo Fortich, Bukidnon",
    image:
      "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1618553858/blog/rho7ruhlr3oajh6wotdi.webp",
    fee: 150,
  },
  {
    id: 2643,
    name: "Nay Palad Hideaway Resort",
    address: "Siargao, Surigao Del Norte",
    image:
      "https://gttp.imgix.net/292342/x/0/12-best-resorts-in-siargao-island-the-surfing-capital-of-the-philippines-15.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883",
    fee: 500,
  },
];

function App() {
  const [places, setPlaces] = useState(initialPlaces);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [fee, setFee] = useState("");

  function handleIsOpenAdd() {
    setIsOpenAdd((open) => !open);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Button onClick={handleIsOpenAdd}>
          {isOpenAdd ? "Close" : "Add place"}
        </Button>
        {isOpenAdd && (
          <FormAddPlace
            setPlaces={setPlaces}
            setIsOpenAdd={setIsOpenAdd}
            name={name}
            address={address}
            image={image}
            fee={fee}
            setName={setName}
            setAddress={setAddress}
            setImage={setImage}
            setFee={setFee}
          />
        )}
        <PlaceList
          places={places}
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
      </div>
    </div>
  );
}

export default App;
