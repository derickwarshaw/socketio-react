import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { simpleAction } from '../../state/actions/simpleAction';

interface ISimpleActionResult {
  result: string;
}

interface IStore {
  simpleReducer: ISimpleActionResult;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const result = useSelector((state: IStore) => state);

  const handleButtonClick = () => {
    dispatch(simpleAction());
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Test redux action</button>
      <pre>{JSON.stringify(result)}</pre>
    </div>
  );
};

export default Home;
