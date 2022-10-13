const reducer = (state, action) => {
  if (action.type === 'HANDLE_SIZE') {
    return { ...state, windowWidth: window.innerWidth };
  }

  if (action.type === 'OPENMOBILENAV') {
    return { ...state, openModal: true };
  }

  if (action.type === 'CLOSEMOBILENAV') {
    return { ...state, openModal: false };
  }

  if (action.type === 'SHOW_MORE') {
    return { ...state, showMoreBtn: false };
  }

  if (action.type === 'FILTER_BY_TITLE') {
    const input = action.payload.target.value;

    return { ...state, query: input };
  }

  if (action.type === 'HANDLE_KEY_PRESS') {
    if (action.payload.charCode === 13) {
      const keys = ['company', 'position'];
      const search = (data) => {
        return data.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(state.query))
        );
      };
      const newItems = search(state.original);
      return { ...state, data: newItems, showMoreBtn: false };
    }
    return state;
  }

  if (action.type === 'HANDLE_KEY_PRESS_FILTER') {
    if (action.payload.charCode === 13) {
      const keys = ['location'];
      const search = (data) => {
        return data.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(state.query))
        );
      };
      const newItems = search(state.original);
      return { ...state, data: newItems, showMoreBtn: false };
    }
    return state;
  }
  if (action.type === 'HANDLE_KEY_PRESS_FILTER2') {
    if (action.payload.charCode === 13) {
      const keys = ['location'];
      const search = (data) => {
        return data.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(state.query))
        );
      };
      const newItems = search(state.original);
      return {
        ...state,
        data: newItems,
        openModal: false,
        showMoreBtn: false,
      };
    }
    return state;
  }

  if (action.type === 'HANDLE_CLICK') {
    const keys = ['contract', 'company', 'position', 'location'];
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(state.query))
      );
    };
    const newItems = search(state.original);
    return {
      ...state,
      data: newItems,
      openModal: false,
      showMoreBtn: false,
    };
  }

  if (action.type === 'RESET') {
    let items = state.original;
    return { ...state, data: items, showMoreBtn: true };
  }

  // if (action.type === 'FILTER_BY_CONTRACT') {
  //   let input = action.payload.target.value;
  //   let newItems = state.original.filter(
  //     (data) => data.contract.toLowerCase() === input
  //   );
  //   return { ...state, data: newItems };
  // }
  return state;
};

export default reducer;
