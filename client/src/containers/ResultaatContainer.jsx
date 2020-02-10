import React from "react";
import ResultaatAfkick from "../components/ResultaatAfkick";
import ResultaatLied from "../components/ResultaatLied";
import ResultaatTap from "../components/ResultaatTap";
import ResultaatStudent from "../components/ResultaatStudent";

const ResultaatContainer = ({ soort }) => {
  if (soort === "afkick") {
    return <ResultaatAfkick />;
  }

  if (soort === "supporterslied") {
    return <ResultaatLied />;
  }

  if (soort === "tapwedstrijd") {
    return <ResultaatTap />;
  }

  if (soort === "postkaartstudent") {
    return <ResultaatStudent />;
  }
};

// Sporza.propTypes = {
//   sporzaStore: PropTypes.observableObject.isRequired
// };

export default ResultaatContainer;
