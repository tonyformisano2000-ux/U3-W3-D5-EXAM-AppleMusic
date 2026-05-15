import { House, MenuApp, Signal } from "react-bootstrap-icons";
import logoMusic from "../assets/logos/music.svg";

const SideBar = () => {
  return (
    <>
      <div className="border-end border-white p-4 text-white h-100">
        <img
          src={logoMusic}
          alt="AppleMusic logo"
          className="d-block"
          style={{ filter: "brightness(0) invert(1)", height: "30px" }}
        />

        <input
          type="text"
          placeholder="Cerca"
          className="w-100 bg-dark my-3 text-white border-secondary p-2 rounded-1"
          style={{ outline: "none" }}
        />

        <div className="d-flex justify-content-start align-items-center mb-3">
          <House size={20} /> <h6 className="mx-2 mb-0">Home</h6>
        </div>

        <div className="d-flex justify-content-start align-items-center mb-3">
          <MenuApp size={20} /> <h6 className="mx-2 mb-0">Novità</h6>
        </div>

        <div className="d-flex justify-content-start align-items-center mb-3">
          <Signal size={20} /> <h6 className="mx-2 mb-0">Radio</h6>
        </div>
      </div>
    </>
  );
};

export default SideBar;
