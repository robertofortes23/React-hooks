export function numberAdd2(dispatch) {
    
    fetch('url')
        .then(resp => resp.json())
        .then(json => dispatch({type: 'userListReady', payload: json}))

    dispatch({ type: 'numberAdd2'})
}