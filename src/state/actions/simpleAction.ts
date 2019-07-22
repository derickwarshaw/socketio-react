export const simpleAction = () => (dispatch: any) => {
  dispatch({
    payload: 'result_of_simple_action',
    type: 'SIMPLE_ACTION'
  });
};
