import React, { FC } from 'react';
import { match } from "react-router-dom";
import cx from 'classnames';
import { useByCategoryIdQuery, useCompactQuery } from '../../generated/graphql';
import Loader from "../../components/Loader/Loader";
import API from "../../constants/constants";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import s from './CategoryItemPage.module.scss';
import Tile from "../../components/Tile/Tile";
import { getImage, getLink } from "../../helpers/getLinks";
import Back from "../../ui/Back/Back";
import randomFromArray from "../../helpers/randomFromArray";

declare namespace CategoryItemPageProps {
  export type Props = {
    match: match<{ alias: string, id: string }>,
  }
}

const CategoryItemPage:FC<CategoryItemPageProps.Props> = (props) => {
  const { alias, id } = props.match.params;

  const { data, loading } = useByCategoryIdQuery({
    variables: {
      lang: ['ua'],
      id: `${alias}/${id}`,
    },
  });

  const compact = useCompactQuery({
    variables: {
      lang: ['ua'],
    },
  });

  if (loading || !data || !compact) {
    return <Loader />;
  }

  if (!data?.verify) {
    window.location.href = compact.data?.compact?.flowURL || '';
  }

  const currentCategory = compact.data?.compact?.categories?.find((item) => item.alias === alias)
  const currentCategoryContents = currentCategory?.contents?.contents;

  return (
    <>
      <div className={cx(s.CategoryItemPage)}>
        <div className={s.CategoryItemVideo}>
          <Back />
          <div className={s.CategoryItemVideoTitle}>
            {
              data?.content?.localizations?.length && data?.content?.localizations[0]?.name
            }
          </div>
          <VideoPlayer src={`${API.CONTENT}${
            data.content?.localizations?.length
              ? data.content?.localizations[0].link
              : data.content?.link
          }`}
          />
        </div>
        <div className={s.CategoryItemSidebar}>
          <div className={s.CategoryItemSidebarScrolled}>
            <div className={s.CategoryItemSidebarWrapper}>
              {/* eslint-disable-next-line max-len */}
              {randomFromArray(currentCategoryContents, 5).map((item, index) => item.localizations && (
                <Tile
                  isBig={!index}
                  key={item.id}
                  img={getImage(item.previews ? item.previews[0].link : '')}
                  link={getLink(item.id, alias)}
                  name={item.localizations[0].name}
                  description={item.localizations[0].description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryItemPage;
