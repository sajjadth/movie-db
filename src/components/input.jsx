import React from "react";
//import $ from "jquery";
import { Dropdown } from "react-bootstrap";
import { fetchData, store, selectValue } from "../reducer";
import { connect } from "react-redux";
selectValue
class Input extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-sm">
          <div
            className=" d-flex justify-content-center align-items-center row"
            id="input"
          >
            {/*<form
              className="row col-md-6"
              onSubmit={(e) => store.dispatch(submit(e))}
            >
              <input
                type="text"
                placeholder="enter title"
                className="form-control col m-1"
                id="title"
              />
              <div className="w-100"></div>
              <input
                type="number"
                placeholder="year: 1997"
                className="form-control col m-1"
                id="year"
                min="1800"
                max={new Date().getFullYear()}
              />
              <Dropdown
                className="m-1"
                onSelect={(e) => store.dispatch(selectValue(e))}
              >
                <Dropdown.Toggle
                  variant="dark"
                  id="dropdown-basic"
                  className="col bg-outline-dark"
                >
                  Select
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/movie">movie</Dropdown.Item>
                  <Dropdown.Item href="#/series">series</Dropdown.Item>
                  <Dropdown.Item href="#/episode">episode</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button
                type="submit"
                className="btn btn-dark col m-1 button"
                id="submit"
                onClick={(e) => store.dispatch(fetchData(e))}
              >
                <i className="bi bi-search"></i>
              </button>
            </form>*/}
            <form
              className="ml-3 mr-3 w-100 d-flex flex-row"
              onSubmit={(e) => store.dispatch(submit(e))}
              id="form"
            >
                <input
                  type="text"
                  placeholder="enter title"
                  className="form-control"
                  id="title"
                />
                <Dropdown onSelect={(e) => store.dispatch(selectValue(e))}>
                  <Dropdown.Toggle
                    variant="flat"
                    id="dropdown-basic"
                    className="rounded-0 h-100 d-flex justify-content-center align-items-center"
                  >
                    Select
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/movie">movie</Dropdown.Item>
                    <Dropdown.Item href="#/series">series</Dropdown.Item>
                    <Dropdown.Item href="#/episode">episode</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <button
                  type="submit"
                  className="btn button d-flex justify-content-center align-items-center"
                  id="submit"
                  onClick={(e) => store.dispatch(fetchData(e))}
                >
                  <i className="bi bi-search"></i>
                </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Input);
