export const increaseVoteCount = (data) => {
    debugger
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/pictures/1/votes/${data.pictureId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(vote => dispatch({ type: 'INCREASE_COUNT', payload: vote }));
    };
}



