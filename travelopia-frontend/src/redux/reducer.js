const initialState = {
    loading: false,
    loaded: false,
    order: "",
    forms: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "INP_REQ": {
            return { ...state, loading: true }
        }
        case "INP_SUC": {
            return { ...state, loading: false, loaded: true, order: payload }
        }
        case "INP_DATA": {
            return { ...state, loading: false, forms: [...payload] }
        }
        default: {
            return state;
        }
    }
}

export { reducer }