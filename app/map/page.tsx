import { MapSet } from "@/utils/jsmaps/jsmap";

export default function Home(){
  const mapSet = MapSet();

    return(
        <>
        <h1>Map Functions</h1>
        <h2>Map Set</h2>
        <div>{JSON.stringify(mapSet.get("name"))}</div>
        </>
    )
}