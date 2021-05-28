import React from 'react';
import { useCompactQuery } from '../../generated/graphql';
import Page from '../../components/Page/Page';
import Categories from '../../components/Categories/Categories';
import CategoryItems from '../../components/CategoryItems/CategoryItems';
import Loader from "../../components/Loader/Loader";
import { MAIN_CATEGORY } from "../../constants/constants";

function MainPage() {
  const { data, loading } = useCompactQuery();

  if (loading || !data?.compact) {
    return <Loader />;
  }

  const { categories } = data?.compact;

  return (
    <Page>
      <Categories categories={categories} alias={MAIN_CATEGORY} />
      <CategoryItems content={categories?.find((item) => item.alias === MAIN_CATEGORY)} />
    </Page>
  );
}

export default MainPage;
