import React, { FC } from 'react';
import cx from 'classnames';
import s from './CategoryItems.module.scss';
import Tile from "../Tile/Tile";
import { getImage, getLink } from "../../helpers/getLinks";

declare namespace CategoryItemsProps {
  export type Props = {
    content?: any
  };
}

const CategoryItems: FC<CategoryItemsProps.Props> = ({ content }) => (
  <>
    <div className="container">
      <h1 className={s.Title}>{content.name}</h1>
    </div>
    <div className={s.CategoryItems}>
      {content?.contents && content?.contents?.contents?.map((item: any, index: number) => (
        <Tile
          className={cx(index === 0 ? s.BigTile : '', index === 4 ? s.BigTileRow : '')}
          isBig={!index || index === 4}
          img={getImage(item.previews[0].link)}
          link={getLink(item.id, content.alias)}
          name={item.name}
          description={item.description}
          type={item.type}
          key={item.id}
        />
      ))}
    </div>
  </>
);

export default CategoryItems;
