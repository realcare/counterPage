export const counter = (number) => {
    return (dispatch) => {
        dispatch({
            type: 'COUNTER',
            number: number,
        });
    };
};