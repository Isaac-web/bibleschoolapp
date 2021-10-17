const createModule = (data, onSetCurrentModule) => async dispatch => {
    dispatch({type: "CREATE_MODULE", payload: data})
    onSetCurrentModule(data);
}

export default {
    createModule
}