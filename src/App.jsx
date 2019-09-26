import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchHeroes } from "./store/starWarsModule/starWarsAction";

import { DataTable } from "react-data-components";
import "react-data-components/css/table-twbs.css";

function App() {
  const store = useSelector(state => state.heroes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeroes);
  }, [dispatch]);

  var columns = [
    { title: "Name", prop: "name" },
    { title: "Height", prop: "height" },
    { title: "Gender", prop: "gender" },
    { title: "Homeworld", prop: "homeworld" }
  ];
  console.log(store);

  return store.heroes ? (
    <DataTable
      className="container"
      columns={columns}
      initialData={store.heroes}
      initialPageLength={5}
      initialSortBy={{ prop: "name", order: "descending" }}
      pageLengthOptions={[2, 4, 6]}
    />
  ) : (
    <div>Wczytuję...</div>
  );
}

export default App;
