import React from 'react';
import { useCompactQuery } from '../../generated/graphql';
import Page from '../../components/Page/Page';
import Categories from '../../components/Categories/Categories';
import CategoryItems from '../../components/CategoryItems/CategoryItems';
import Loader from "../../components/Loader/Loader";

function MainPage() {
  const { data, loading } = useCompactQuery();

  if (loading || !data?.compact) {
    return <Loader />;
  }

  const { categories } = data?.compact;

  return (
    <Page>
      <Categories categories={categories} />
      <CategoryItems content={categories?.find((item) => item.alias === 'salati')} />
    </Page>
  );
}

export default MainPage;
