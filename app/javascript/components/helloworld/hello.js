import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/helloworld';

function getHelloFromAPI() {
  return axios.get(API_URL).then((response) => response.data);
}

export const GET_HELLO = 'GET_HELLO';

const helloReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case GET_HELLO: {
      return { greeting: action.json.message };
    }
    default: {
      return state;
    }
  }
};

export default helloReducer;

export const getHello = (data) => ({
  type: GET_HELLO,
  payload: data,
});

export const getHelloDispatcher = () => async (dispatch) => {
  const hello = await getHelloFromAPI();
  const a = getHello(hello);
  dispatch(a);
};
