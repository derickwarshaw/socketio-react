export default (state = {}, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
