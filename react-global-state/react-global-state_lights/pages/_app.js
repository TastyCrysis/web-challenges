import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import {useState} from "react";

const initialLights = [
  {id: 1, name: "Living Room", isOn: false},
  {id: 2, name: "Kitchen", isOn: false},
  {id: 3, name: "Bedroom", isOn: false},
  {id: 4, name: "Bathroom", isOn: false},
  {id: 5, name: "Garage", isOn: false},
  {id: 6, name: "Porch", isOn: false},
  {id: 7, name: "Garden", isOn: false},
  {id: 8, name: "Office", isOn: false},
];

export default function App({Component, pageProps}) {
  const [lights, setLights] = useState(initialLights);

  const countLightsOn = lights.filter(({isOn}) => isOn).length;

  function toggleLight(id) {
    setLights((lights) =>
      lights.map((light) =>
        light.id === id ? {...light, isOn: !light.isOn} : light
      )
    );
  }

  function turnAllLightsOn() {
    setLights((lights) =>
      lights.map((light) => {
        return {...light, isOn: true};
      })
    );
  }

  function turnAllLightsOff() {
    setLights((lights) =>
      lights.map((light) => {
        return {...light, isOn: false};
      })
    );
  }

  return (
    <Layout isDimmed={countLightsOn === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        countLightsOn={countLightsOn}
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
      />
    </Layout>
  );
}
