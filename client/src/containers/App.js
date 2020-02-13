import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ROUTES } from "../constants";
//import containers
import Home from "./Home";
import ResultaatContainer from "./ResultaatContainer";
import RouteContainer from "./RouteContainer";
import BelofteContainer from "./BelofteContainer";
//
import OverzichtSupporterslied from "./OverzichtSupporterslied";
import AudioInput from "./AudioInput";
//
//import TapWedstrijd from "./aaTapWedstrijd";
import TapInput from "./TapInput";
//
import SmoothieMixer from "./SmoothieMixer";
//
import PostkaartStudent from "./PostkaartStudent";
import PostkaartVakantieganger from "./PostkaartVakantieganger";
import PostkaartWerkmens from "./PostkaartWerkmens";
//
import { CSSTransitionGroup } from "react-transition-group";
//

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          {/* HOME */}
          <Route key={1} exact path={ROUTES.home}>
            <CSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}
            >
              <Home />
            </CSSTransitionGroup>
            <Helmet>
              <title>De Spelen zijn van ons</title>
              <meta
                name="description"
                content="Daag je vrienden en familie uit en geef het beste van jezelf tijdens de Olympische Spelen!"
              />
              <meta
                name="tags"
                content="campagne, sporza, olympische spelen, tokio, 2020"
              />
            </Helmet>
          </Route>
          {/* BELOFTE */}
          <RouteContainer
            key={2}
            path={ROUTES.belofte}
            routes={[
              {
                component: "uitleg",
                path: "",
                titel: "Supportificaat",
                description: "Maak een belofte gedurende de Olympische Spelen.",
                uitleg:
                  "Kies welke soort belofte je wilt aangaan. En vul vervolgens het supportificaat in. Veel succes!",
                buttons: [
                  {
                    label: "Afkick-tificaat >",
                    path: "afkick",
                    img: "afkickImg"
                  },
                  {
                    label: "Voornemen-tificaat >",
                    path: "voornemen",
                    img: "voornemenImg"
                  }
                ]
              },
              {
                component: <BelofteContainer soort={"afkick"} />,
                path: "afkick",
                titel: "Afkick-tificaat",
                description: "Gedurende de Olympische Spelen iets vermijden.",
                uitleg: "",
                buttons: ""
              },
              {
                component: <BelofteContainer soort={"voornemen"} />,
                path: "voornemen",
                titel: "Voorneem-tificaat",
                description: "Gedurende de Olympische Spelen iets doen.",
                uitleg: "",
                buttons: ""
              },
              {
                component: <ResultaatContainer soort={"afkick"} />,
                path: "resultaat",
                titel: "Jouw belofte",
                description: "Jouw belofte",
                uitleg: "",
                buttons: "",
                backgroundImg: ""
              }
            ]}
          />
          {/* SUPPORTERSLIED */}
          <RouteContainer
            key={3}
            path={ROUTES.supporterslied}
            routes={[
              {
                component: "uitleg",
                path: "",
                titel: "Supporterslied.",
                description:
                  "Maak je eigen supporterslied om de Belgische atleten op de Olympische Spelen aan te moedigen!",
                uitleg:
                  "Laat horen hoe jij iemand aanmoedigt en maak een supporterslied, alleen of samen met vrienden.",
                buttons: [{ label: "Start >", path: "overzicht" }]
              },
              {
                component: <OverzichtSupporterslied />,
                path: "overzicht",
                titel: "Overzicht fragmenten",
                description: "Overzicht van jouw geluidsfragmenten",
                uitleg: "",
                buttons: ""
              },
              {
                component: <AudioInput />,
                path: "opnemen",
                titel: "Opnemen nieuwe laag",
                description: "Opnemen nieuwe laag supporterslied",
                uitleg: "",
                buttons: ""
              },
              {
                component: <ResultaatContainer soort={"supporterslied"} />,
                path: "resultaat",
                titel: "Jouw supporterslied",
                description: "Jouw supporterslied",
                uitleg: "",
                buttons: "",
                backgroundImg: ""
              }
            ]}
          />
          {/* tapwedstrijd */}
          <RouteContainer
            key={4}
            path={ROUTES.tapWedstrijd}
            routes={[
              {
                component: "uitleg",
                path: "",
                titel: "Tapstrijd",
                description:
                  "Tap zo snel mogelijk en haal de beste score van je vrienden!",
                uitleg:
                  "Kies op welke afstand jij jezelf wilt bewijzen en tap zo snel mogelijk naar de finish!",
                buttons: [
                  {
                    label: "100 meter >",
                    path: "100",
                    img: "select_100m"
                  },
                  {
                    label: "200 meter >",
                    path: "200",
                    img: "select_200m"
                  },
                  { label: "400 meter >", path: "400", img: "select_400m" }
                ]
              },
              {
                component: <TapInput max={100} />,
                path: "100",
                titel: "100m Tapwedstrijd",
                description: "100 meter tappen",
                uitleg: "",
                buttons: ""
              },
              {
                component: <TapInput max={200} />,
                path: "200",
                titel: "200m Tapwedstrijd",
                description: "200 meter tappen",
                uitleg: "",
                buttons: ""
              },
              {
                component: <TapInput max={400} />,
                path: "400",
                titel: "400m Tapwedstrijd",
                description: "400 meter tappen",
                uitleg: "",
                buttons: ""
              },
              {
                component: <ResultaatContainer soort={"tapwedstrijd"} />,
                path: "resultaat",
                titel: "Jouw score",
                description: "Jouw score",
                uitleg: "",
                buttons: "",
                backgroundImg: ""
              }
            ]}
          />
          {/* smoothieMaker */}
          <RouteContainer
            key={5}
            path={ROUTES.smoothieMaker}
            routes={[
              {
                component: "uitleg",
                path: "",
                titel: "Smoothie Maker",
                description:
                  "Laat je inspireren voor een frisse, gezonde en Belgische smoothie!",
                uitleg:
                  "Druk op de mix knop en bekijk verrassende combinaties van fruit om in jouw smoothie te steken.",
                buttons: [{ label: "beginnen >", path: "mixer" }]
              },
              {
                component: <SmoothieMixer />,
                path: "mixer",
                titel: "Smoothie Mixer",
                description:
                  "Laat je inspireren voor een frisse, gezonde en Belgische smoothie!",
                uitleg: "",
                buttons: ""
              }
            ]}
          />
          {/* POSTKAART */}
          <RouteContainer
            key={6}
            path={ROUTES.postkaartje}
            routes={[
              {
                component: "uitleg",
                path: "",
                titel: "Postkaartje",
                description: "Stuur iemand een Olympisch postkaartje",
                uitleg:
                  "Kies naar wie je een kaartje wil sturen. Kies je favoriete design en vul een persoonlijk tekstje in.",
                buttons: [
                  { label: "de blokkende student >", path: "student" },
                  { label: "de vakantieganger >", path: "vakantieganger" },
                  { label: "de altijd-werker >", path: "werkmens" }
                ]
              },
              {
                component: <PostkaartStudent />,
                path: "student",
                titel: "De blokkende student",
                description: "Maak een kaartje voor een blokkende student.",
                uitleg: "",
                buttons: ""
              },
              {
                component: <PostkaartVakantieganger />,
                path: "vakantieganger",
                titel: "De vakantieganger",
                description: "Maak een kaartje voor iemand op vakantie.",
                uitleg: "",
                buttons: ""
              },
              {
                component: <PostkaartWerkmens />,
                path: "werkmens",
                titel: "De altijd-werker",
                description: "Maak een kaartje voor iemand die altijd werkt.",
                uitleg: "",
                buttons: ""
              },
              {
                component: <ResultaatContainer soort={"postkaartstudent"} />,
                path: "resultaat",
                titel: "Jouw persoonlijke postkaart",
                description: "Jouw persoonlijke postkaart",
                uitleg: "",
                buttons: "",
                backgroundImg: ""
              }
            ]}
          />
          ;
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
