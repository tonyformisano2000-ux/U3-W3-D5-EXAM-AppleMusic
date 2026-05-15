import { ArrowRightCircle } from "react-bootstrap-icons";
const Esplora = () => {
  const lables = [
    "Esplora per Genere",
    "Decenni",
    "Attività e stati d'animo",
    "Worldwide",
    "Classifiche",
    "Audio Spaziale",
    "Video Musicali",
    "Nuovi Artisti",
    "Hit del passato",
  ];
  return lables.map((label) => {
    return (
      <div className="col-12 col-md-4 g-4">
        <div className="rounded-2 bg-dark-subtle d-flex justify-content-between align-content-center p-2">
          <h6 className="img-fluid">{label}</h6>
          <ArrowRightCircle className="fs-6 img-fluid"></ArrowRightCircle>
        </div>
      </div>
    );
  });
};
export default Esplora;
