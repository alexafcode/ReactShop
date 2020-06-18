import React from "react";
import { Router } from "react-router-dom";
import { mount } from "enzyme";
import { rootReducer } from "../store/index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import history from "../history";
import { Provider } from "react-redux";
import { Header } from "../components";
import { setAuth } from "../store/user/actions";
import { Button, Typography, IconButton } from "@material-ui/core";

const store = createStore(rootReducer, applyMiddleware(thunk));

describe("Header component tests", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router history={history}>
        <Header />
      </Router>
    </Provider>
  );

  it("should have a Typography component", () => {
    //There should be only one button
    expect(wrapper.find(Typography)).toHaveLength(1);
    //Button should have matching text
    expect(wrapper.find(Typography).text()).toEqual("React Shop");

    //There should be two IconButton elements
    expect(wrapper.find(IconButton)).toHaveLength(2);
  });

  it("should have a IconButton component", () => {
    //There should be two IconButton elements
    expect(wrapper.find(IconButton)).toHaveLength(2);
  });

  it("should have a Button component", () => {
    //There should be two IconButton elements
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Button).text()).toEqual("Login");
    // console.log("mount", wrapper.find(IconButton).debug());
  });

  it("should not have a Button component and add IconButton component (AccountCircle) after authorization", () => {
    //There should be one Button elements
    expect(wrapper.find(Button)).toHaveLength(1);
    store.dispatch(setAuth());

    wrapper.update();
    //There should no have Button elements
    expect(wrapper.find(Button)).toHaveLength(0);
    //There should be three IconButton elements
    expect(wrapper.find(IconButton)).toHaveLength(3);
  });
});
