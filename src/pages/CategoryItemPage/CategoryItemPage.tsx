import React, { FC } from 'react';
import { match } from "react-router-dom";
import cx from 'classnames';
import { useByCategoryIdQuery, useCompactQuery } from '../../generated/graphql';
import Page from '../../components/Page/Page';
import Loader from "../../components/Loader/Loader";
import API from "../../constants/constants";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import s from './CategoryItemPage.module.scss';
import Tile from "../../components/Tile/Tile";
import { getImage, getLink } from "../../helpers/getLinks";
import Back from "../../ui/Back/Back";

declare namespace CategoryItemPageProps {
  export type Props = {
    match: match<{ alias: string, id: string }>,
  }
}

const CategoryItemPage:FC<CategoryItemPageProps.Props> = (props) => {
  const { alias, id } = props.match.params;
  const { data, loading } = useByCategoryIdQuery({
    variables: {
      id: `${alias}/${id}`,
    },
  });

  const compact = useCompactQuery();

  if (loading || !data || !compact) {
    return <Loader />;
  }

  const currentCategory = compact.data?.compact?.categories?.find((item) => item.alias === alias)
  const currentCategoryContents = currentCategory?.contents?.contents;

  return (
    <Page>

      <div className={cx(s.CategoryItemPage)}>
        <div className={s.CategoryItemVideo}>
          <Back />
          <div className={s.CategoryItemVideoTitle}>{data?.content?.name}</div>
          <VideoPlayer src={`${API.CONTENT}${data.content?.link}`} />
        </div>
        <div className={s.CategoryItemSidebar}>
          <div className={s.CategoryItemSidebarScrolled}>
            <div className={s.CategoryItemSidebarWrapper}>
              {currentCategoryContents?.slice(0, 30).map((item, index) => (
                <Tile
                  isBig={!index}
                  key={item.id}
                  img={getImage(item.previews ? item.previews[0].link : '')}
                  link={getLink(item.id, alias)}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default CategoryItemPage;
