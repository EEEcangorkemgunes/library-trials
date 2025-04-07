import { ArrayForEach, ArrayMap, ArrayFilter, ArraySome } from "@/utils/jsarrays/arrayfunctions";
import ListReturn from "@/utils/jsfunctions/functionreturn";
import { MapSet } from "@/utils/jsmaps/jsmap";

export default function Home() {
  const ForEach = ArrayForEach();
  const arrMap = ArrayMap();
  const Filter = ArrayFilter();
  const Lists = ListReturn();
  const map = MapSet();
  const some  = ArraySome();
  return (
    <>
      <h1>Array Functions</h1>
      <h2>Array ForEach</h2>
      <div>{JSON.stringify(ForEach)}</div>
      <h2>Array Map</h2>
      <div>{JSON.stringify(arrMap)}</div>
      <h2>Array Filter</h2>
      <div>{JSON.stringify(Filter)}</div>
      <br />
      <br />
      <div>{JSON.stringify(Lists)}</div>
      <br />
      <br />
      <h2>Map Set</h2>
      <div>{JSON.stringify(map)}</div>
      <br />
      <h2>Array Some</h2>
      <div>{JSON.stringify(some)}</div>
    </>
  );
}
