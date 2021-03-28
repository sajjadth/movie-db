import { configureStore, createSlice } from "@reduxjs/toolkit";
import $ from "jquery";

/*
select(state, action) {
  if (e === "#/movie") {
    $("#dropdown-basic").text("movie");
  } else if (e === "#/series") {
    $("#dropdown-basic").text("series");
  } else if (e === "#/episode") {
    $("#dropdown-basic").text("episode");
  }
}
*/

const searchSlice = createSlice({
  name: "search",
  initialState: {
    loading: "idle",
    data: [],
  },
  reducers: {
    dataLoading(state, action) {
      if (state.loading === "idle" || "done") {
        state.loading = "loading";
        state.data = [];
      }
    },
    dataReceived(state, action) {
      if (state.loading === "loading") {
        state.loading = "done";
        state.data = action.payload;
      }
    },
    selectVal(state, action) {
      if (action.payload === "#/movie") {
        $("#dropdown-basic").text("movie");
      } else if (action.payload === "#/series") {
        $("#dropdown-basic").text("series");
      } else if (action.payload === "#/episode") {
        $("#dropdown-basic").text("episode");
      }
    },
  },
});

const { dataLoading, dataReceived, selectVal } = searchSlice.actions;

export const fetchData = (e) => async (dispatch) => {
  dispatch(dataLoading());
  e.preventDefault();
  const title = "&t=" + $("#title").val();
  const year = "&y=" + $("#year").val();
  var type = "&type=";
  type +=
    $("#dropdown-basic").text() === "Select" ? "" : $("#dropdown-basic").text();
  const fetchLink =
    "https://www.omdbapi.com/?apikey=3bdcd579" + title + type + year;

  const response = await fetch(fetchLink);
  const data = await response.json();
  if (response.status === 200) {
    setTimeout(() => dispatch(dataReceived(data)), 2000);
  }
};

export const selectValue = (e) => (dispatch) => {
  dispatch(selectVal(e));
};

export const store = configureStore({
  reducer: searchSlice.reducer,
});
