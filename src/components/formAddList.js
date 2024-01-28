import Button from "./button";

export default function FormAddPlace({
    setPlaces,
    setIsOpenAdd,
    name,
    address,
    image,
    fee,
    setName,
    setAddress,
    setImage,
    setFee,
  }) {
    function handleSubmit(e) {
      e.preventDefault();
  
      if (
        name.replace(/\s/g, "") === "" ||
        address.replace(/\s/g, "") === "" ||
        image.replace(/\s/g, "") === ""
      )
        return;
      const id = crypto.randomUUID();
      const newPlace = {
        id: id,
        name: name,
        address: address,
        image: image,
        fee: fee,
      };
  
      setPlaces((currentPlaces) => [...currentPlaces, newPlace]);
      setName("");
      setAddress("");
      setImage("https://wallpaperaccess.com/full/377638.jpg");
      setFee("");
      setIsOpenAdd(false);
    }
    return (
      <form className="form-add-place" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Fee</label>
        <input
          type="number"
          value={fee}
          onChange={(e) => setFee(Number(e.target.value))}
        />
        <Button>Add place</Button>
      </form>
    );
  }