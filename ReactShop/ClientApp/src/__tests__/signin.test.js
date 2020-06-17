import React from "react";
import { Router } from "react-router-dom";
import { mount } from "enzyme";
import { rootReducer } from "../store/index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import history from "../history";
import { Provider } from "react-redux";
import { SignIn } from "../components";
import { Button } from "@material-ui/core";

const store = createStore(rootReducer, applyMiddleware(thunk));

describe("SignIn component tests", () => {
  // const mockDispatch = jest.fn();
  // jest.mock("react-redux", () => ({
  //   useSelector: jest.fn(),
  //   useDispatch: () => mockDispatch,
  // }));
  const wrapper = mount(
    <Provider store={store}>
      <Router history={history}>
        <SignIn />
      </Router>
    </Provider>
  );

  it("should have a btn component", () => {
    //There should be only one button
    expect(wrapper.find(Button)).toHaveLength(1);
    //Button should have matching text
    expect(wrapper.find(Button).text()).toEqual("Sign In");

    //There should be two input elements
    expect(wrapper.find("input#email")).toHaveLength(1);
    expect(wrapper.find("input#password")).toHaveLength(1);
  });

  it("should have an empty email and password state variable", () => {
    //test to check if password and email are empty strings on setup
    expect(wrapper.find("input#email").text()).toEqual("");
    expect(wrapper.find("input#password").text()).toEqual("");
  });

  it("should have an no empty email and password state variable", () => {
    const email = wrapper.find("input#email");
    email.props().value = "test@email.com";
    expect(email.props().value).toEqual("test@email.com");

    const password = wrapper.find("input#password");
    password.props().value = "passwOrd";
    expect(password.props().value).toEqual("passwOrd");
  });
});
