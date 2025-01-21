import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("Error");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function ISSTracker() {
  const {
    data: coords,
    error,
    isLoading,
    mutate,
  } = useSWR(URL, fetcher, {refreshInterval: 5000});

  /* const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  }); */

  /* async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({longitude: data.longitude, latitude: data.latitude});
      }
    } catch (error) {
      console.error(error);
    }
  } */

  /* useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000); */

  /*  return () => {
      clearInterval(timer);
    };
  }, []); */

  if (isLoading || !coords) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
