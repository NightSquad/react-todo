export default (state = "All", action) => {
  switch (action.type) {

  case "SET_CATEGORY":
    return action.data

  default:
    return state
  }
}
