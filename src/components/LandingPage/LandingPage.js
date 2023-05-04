import { useState } from "react";
import {
  Route,
  Switch,
  useHistory,
  Redirect,
  useLocation,
} from "react-router-dom";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import Stats from "./Stats/Stats";
import TabsPills from "./TabsPills/TabsPills";
import React from "react";
import "./LandingPage.css";
import Navbar from "./Navbar/Navbar";
import CreateNewEmailList from "./CreateNewEmailList/CreateNewEmailList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AllEmailLists from "./AllEmailLists/AllEmailLists";
import RaiseTicketForm from "./RaiseTicketForm/RaiseTicketForm";
import RenameListModal from "../Modals/RenameListModal/RenameListModal";
import Footer from "./Footer/Footer";
import BreadCrumb2 from "./BreadCrumb2/BreadCrumb2";
import Title from "./Title/Title";
import Insights from "./Insights/Insights";
import DetailedReportTable from "./DetailedReportTable/DetailedReportTable";

const LandingPage = function () {
  const history = useHistory("/");
  const location = useLocation();
  const [showRenameListModal, setShowRenameListModal] = useState(false);
  const showRenameListModalHandler = function () {
    setShowRenameListModal(true);
  };
  const hideRenameListModalHandler = function () {
    setShowRenameListModal(false);
  };
  const showDetailedReportHandler = function () {
    history.push("/dashboard/detailedReport");
  };
  return (
    <div className="wrapper">
      {location.pathname === "/" && <Redirect to="/dashboard" />}
      {showRenameListModal && <RenameListModal />}

      <Navbar />
      <Switch>
        <Route path="/dashboard" exact>
          <BreadCrumb />
          <div
            className="nimmu-content-area"
            style={{
              position: "relative",
              marginLeft: "2rem",
              marginTop: "-6rem",
            }}
          >
            <Container fluid>
              <Stats />
            </Container>
          </div>

          <Container>
            <Row>
              <CreateNewEmailList />
              <AllEmailLists
                onShow={showRenameListModalHandler}
                onShowDetailedReport={showDetailedReportHandler}
              />
              <RaiseTicketForm />
            </Row>
          </Container>
          <Footer />
        </Route>
        <Route path="/dashboard/detailedReport">
          <div className="wrapper">
            <BreadCrumb2 />
            <Title />
            <Insights />
            <DetailedReportTable />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default LandingPage;
