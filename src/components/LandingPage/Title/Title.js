import "./Title.css";

const Title = function () {
  return (
    <div
      className="alert alert-defaul nimmu-alert-defaul"
      role="alert"
      style={{
        position: "relative",
        top: "-2rem",
        maxHeight: "3rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      Your Report is Ready.
    </div>
  );
};

export default Title;
