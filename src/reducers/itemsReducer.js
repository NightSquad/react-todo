const items = []

export default (state = items, action) => {
  switch (action.type) {

  case "ADD_ITEM":
    return state.concat(action.data)

  case "SET_ITEM":
    return state.map(el => el.id === action.data.id ? action.data : el)

  case "DELETE_ITEM":
    return state.filter(el => el.id !== action.data.id)

  default:
    return state
  }
}
