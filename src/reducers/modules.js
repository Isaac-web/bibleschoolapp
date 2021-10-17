

const modules = (state = [], action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            return [...state, action.payload];
        default:
            return state;
    }
}


export default modules;