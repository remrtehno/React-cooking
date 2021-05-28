import React, { FC } from 'react';
import { match } from "react-router-dom";
import Page from "../../components/Page/Page";
import Categories from "../../components/Categories/Categories";
import { useCompactQuery } from "../../generated/graphql";
import CategoryItems from "../../components/CategoryItems/CategoryItems";
import Loader from "../../components/Loader/Loader";

declare namespace CategoryProps {
  export type Props = {
    match: match<{ alias: string }>,
  };
}

const CategoryPage:FC<CategoryProps.Props> = (props) => {
  const { data, loading } = useCompactQuery();

  if (loading || !data?.compact) {
    return <Loader />;
  }

  const { categories } = data?.compact;
  const { alias } = props.match.params;

  return (
    <Page>
      <Categories categories={categories} alias={alias} />
      <CategoryItems content={categories?.find((item) => item.alias === alias)} />
    </Page>
  );
};

export default CategoryPage;
