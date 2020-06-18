const _state: string = "user";
export const loadState = (): any => {
  try {
    const serializedState = localStorage.getItem(_state);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: object): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(_state, serializedState);
  } catch (err) {
    console.error(err);
  }
};
