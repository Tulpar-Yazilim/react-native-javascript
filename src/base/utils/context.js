import * as React from "react";
import { createContainer } from "react-tracked";

export const initialGlobalState = {
  TokenInfo: null,
  UserInfo: null,
  IsLoggedIn: false,
};

const useValue = () =>
  React.useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    initialGlobalState
  );

export const { Provider, useTracked } = createContainer(useValue);

export const GlobalStateProvider = ({ children }) => (
  <Provider useValue={useValue}>{children}</Provider>
);
