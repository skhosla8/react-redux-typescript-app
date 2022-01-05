import React, { FC } from 'react';
import { Tile } from '../../state/reducers/formReducer';

interface IPostsTileProps {
  item: Tile;
}

const PostsTile: FC<IPostsTileProps> = ({ item }) => {
  return (
    <li className="posts-item-wrapper">
      <div className="posts-item">
        <ul>
          <li className="posts-item-heading">{item.heading}</li>
          <li className="posts-item-subheading">{item['sub-heading']}</li>
          <li className="posts-item-summary">
            <textarea readOnly value={item.summary}></textarea>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default PostsTile;