import { ArrayForEach, ArrayMap, ArrayFilter } from "@/utils/jsarrays/arrayfunctions";
import ListReturn from "@/utils/jsfunctions/functionreturn";

export default function Home() {
  const ForEach = ArrayForEach();
  const Map = ArrayMap();
  const Filter = ArrayFilter();
  const Lists = ListReturn();
  return (
    <>
      <h1>Array Functions</h1>
      <h2>Array ForEach</h2>
      <div>{JSON.stringify(ForEach)}</div>
      <h2>Array Map</h2>
      <div>{JSON.stringify(Map)}</div>
      <h2>Array Filter</h2>
      <div>{JSON.stringify(Filter)}</div>
      <br />
      <br />
      <div>{JSON.stringify(Lists)}</div>
    </>
  );
}
