export const globalState = {
  totalResultCount: "",
  searchText: "",
  filmList: [],
};
export function setGlobalState(key, value) {
  if (Object.keys(globalState).includes(key)) {
    globalState[key] = value;
  }
}
