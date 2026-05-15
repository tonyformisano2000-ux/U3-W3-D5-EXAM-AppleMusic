const Footer = () => {
  const date = new Date();
  return (
    <>
      <a>Italia | English (UK)</a>
      <p className="text-dark-emphasis">
        Copyright - {date.getFullYear}{" "}
        <span className="text-white opacity-75">Apple Inc.</span> Tutti diritti
        riservati.{" "}
      </p>
      <div className="d-block ">
        <p className="mx-3 fs-6 text-white opacity-75">
          Condizioni dei servizi internet
        </p>{" "}
        <p className="mx-3 fs-6 text-white opacity-75">Apple Music e privacy</p>
        <p className="mx-3 fs-6 text-white opacity-75">Avviso sui cookie</p>
        <p className="mx-3 fs-6 text-white opacity-75">Supporto</p>
        <p className="mx-3 fs-6 text-white opacity-75">Feedback</p>
      </div>
    </>
  );
};
export default Footer;
