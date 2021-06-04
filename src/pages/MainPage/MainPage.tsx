import React from 'react';
import { useCompactQuery } from '../../generated/graphql';
import CategoryItems from '../../components/CategoryItems/CategoryItems';
import Loader from "../../components/Loader/Loader";
import { MAIN_CATEGORY } from "../../constants/constants";

function MainPage() {
  const { data, loading } = useCompactQuery({
    variables: {
      lang: ['ua'],
    },
  });

  if (loading || !data?.compact) {
    return <Loader />;
  }

  const { categories } = data?.compact;

  return (
    <CategoryItems content={categories?.find((item) => item.alias === MAIN_CATEGORY)} />
  );
}

export default MainPage;
