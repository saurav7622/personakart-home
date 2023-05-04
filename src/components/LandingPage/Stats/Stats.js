import "./Stats.css";

const Stats = function () {
  return (
    <div
      className="ecommerce-analytic-area"
      style={{
        position: "relative",
        width: "100%",
        top: "4rem",
        left: "-4rem",
        marginBottom: "25rem",
      }}
    >
      <div
        className="single-card mb-xl-0"
        style={{ position: "relative", margin: "2% 0.2%" }}
      >
        <div className="left ecommerce-sales-analytic">
          <p>Total Emails Remaining</p>
          <h3>60982</h3>
        </div>
        <div className="right">
          <img src="barchart1.png" className="img-fluid" alt="" />
        </div>
      </div>
      <div
        className="single-card mb-xl-0"
        style={{ position: "relative", margin: "2% 0.2%" }}
      >
        <div className="left ecommerce-order-analytic">
          <p>Total Emails Uploaded</p>
          <h3>100982</h3>
        </div>
        <div className="right">
          <img src="barchart2.png" className="img-fluid" alt="" />
        </div>
      </div>
      <div
        className="single-card mb-xl-0"
        style={{ position: "relative", margin: "2% 0.2%" }}
      >
        <div className="left ecommerce-revenue-analytic">
          <p>Data Found</p>
          <h3>60982</h3>
        </div>
        <div className="right">
          <img src="barchart4.png" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
