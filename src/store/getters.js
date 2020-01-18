export const scroll = (state) => { 
    if(typeof state.scroll === "object") {
        return state.scroll;
    } else {
        return JSON.parse(state.scroll);
    }
}

export const width = (state) => {
    return state.width;
}