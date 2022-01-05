import React, { FC } from 'react';
import './styles.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';
import { Tile } from '../../state/reducers/formReducer';
import PostsTile from './PostsTile';

const Posts: FC = () => {
  const data: Tile[] = useSelector((state: RootState) => state.form.formData);

  const tiles = data && data.map((item: Tile, i) => (
    <PostsTile
      key={i}
      item={item}
    />
  ));

  return (
    <React.Fragment>
      <ul className="posts">
        {tiles}
      </ul>
    </React.Fragment>
  );
}

export default Posts;

