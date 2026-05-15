import { House, MenuApp, Signal } from "react-bootstrap-icons";
import logoMusic from "../assets/logos/music.svg";
const SideBar = () => {
  return (
    <>
      <div className="border-1 border-white p-4 text-white">
        <img
          src={logoMusic}
          alt="AppleMusic logo"
          className="d-block"
          style={{ filter: "brightness(0) invert(1)" }}
        ></img>
        <input
          type="text"
          placeholder="Cerca"
          className=" mr-sm-2 bg-dark my-3"
        ></input>
        <div className=" d-flex justify-content-start align-content-center img-fluid rounded-2">
          <House /> <h6 className="mx-1">Home</h6>
        </div>
        <div className=" d-flex justify-content-start align-content-center img-fluid rounded-2">
          <MenuApp /> <h6 className="mx-1">Novità</h6>
        </div>
        <div className=" d-flex justify-content-start align-content-center img-fluid rounded-2">
          <Signal /> <h6 className="mx-1">Radio</h6>
        </div>
      </div>
    </>
  );
};
export default SideBar;
