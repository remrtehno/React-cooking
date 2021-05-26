import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  UUID: any;
};

export type Category = {
  __typename?: 'Category';
  alias: Scalars['String'];
  contents?: Maybe<ContentEdge>;
  id: Scalars['ID'];
  localizations?: Maybe<Array<I18nCategory>>;
  name: Scalars['String'];
  priority: Scalars['Int'];
  type: Scalars['String'];
};


export type CategoryContentsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type CategoryLocalizationsArgs = {
  lang: Array<Scalars['String']>;
};

export type ContentEdge = {
  __typename?: 'ContentEdge';
  contents?: Maybe<Array<Content>>;
  count: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

export type I18nCategory = {
  __typename?: 'I18nCategory';
  id: Scalars['ID'];
  lang: Scalars['String'];
  name: Scalars['String'];
};

export type I18nContent = {
  __typename?: 'I18nContent';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lang: Scalars['String'];
  link: Scalars['String'];
  name: Scalars['String'];
};

export type I18nMetaContentParam = {
  __typename?: 'I18nMetaContentParam';
  id: Scalars['ID'];
  lang: Scalars['String'];
  value: Scalars['String'];
};

export type I18nTag = {
  __typename?: 'I18nTag';
  displayName: Scalars['String'];
  id: Scalars['ID'];
  lang: Scalars['String'];
};

export type Content = {
  __typename?: 'Content';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link: Scalars['String'];
  localizations?: Maybe<Array<I18nContent>>;
  metaContentParams?: Maybe<Array<MetaContentParam>>;
  name: Scalars['String'];
  previews?: Maybe<Array<Preview>>;
  priority: Scalars['Int'];
  protected: Scalars['Boolean'];
  tags?: Maybe<Array<Tag>>;
  type: Scalars['String'];
};


export type ContentLocalizationsArgs = {
  lang: Array<Scalars['String']>;
};

export type Preview = {
  __typename?: 'Preview';
  id: Scalars['ID'];
  link: Scalars['String'];
  priority: Scalars['Int'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  category?: Maybe<Category>;
  compact?: Maybe<Service>;
  content?: Maybe<Content>;
  searchContentByName?: Maybe<ContentEdge>;
  searchContentByTag?: Maybe<ContentEdge>;
  tag?: Maybe<Tag>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryContentArgs = {
  id: Scalars['ID'];
};


export type QuerySearchContentByNameArgs = {
  first?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  offset?: Maybe<Scalars['Int']>;
};


export type QuerySearchContentByTagArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  tagName: Scalars['String'];
};


export type QueryTagArgs = {
  id: Scalars['ID'];
};

export type Service = {
  __typename?: 'Service';
  alias: Scalars['String'];
  categories?: Maybe<Array<Category>>;
  flowURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  sskey: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  contents?: Maybe<ContentEdge>;
  displayName: Scalars['String'];
  id: Scalars['ID'];
  localizations?: Maybe<Array<I18nTag>>;
  name: Scalars['String'];
  priority: Scalars['Int'];
};


export type TagContentsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TagLocalizationsArgs = {
  lang: Array<Scalars['String']>;
};



export type MetaContentParam = {
  __typename?: 'MetaContentParam';
  id: Scalars['ID'];
  localizations?: Maybe<Array<I18nMetaContentParam>>;
  paramName: Scalars['String'];
  value: Scalars['String'];
};


export type MetaContentParamLocalizationsArgs = {
  lang: Array<Scalars['String']>;
};

export type ByCategoryIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ByCategoryIdQuery = (
  { __typename?: 'Query' }
  & { content?: Maybe<(
    { __typename?: 'Content' }
    & Pick<Content, 'id' | 'name' | 'link'>
    & { metaContentParams?: Maybe<Array<(
      { __typename?: 'MetaContentParam' }
      & Pick<MetaContentParam, 'paramName' | 'value'>
    )>> }
  )> }
);

export type CompactQueryVariables = Exact<{ [key: string]: never; }>;


export type CompactQuery = (
  { __typename?: 'Query' }
  & { compact?: Maybe<(
    { __typename?: 'Service' }
    & Pick<Service, 'flowURL' | 'name' | 'id'>
    & { categories?: Maybe<Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'alias' | 'id' | 'name'>
      & { contents?: Maybe<(
        { __typename?: 'ContentEdge' }
        & { contents?: Maybe<Array<(
          { __typename?: 'Content' }
          & Pick<Content, 'description' | 'id' | 'name'>
          & { previews?: Maybe<Array<(
            { __typename?: 'Preview' }
            & Pick<Preview, 'id' | 'link' | 'type'>
          )>> }
        )>> }
      )> }
    )>> }
  )> }
);


export const ByCategoryIdDocument = gql`
    query ByCategoryID($id: ID!) {
  content(id: $id) {
    id
    name
    link
    metaContentParams {
      paramName
      value
    }
  }
}
    `;

/**
 * __useByCategoryIdQuery__
 *
 * To run a query within a React component, call `useByCategoryIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useByCategoryIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useByCategoryIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useByCategoryIdQuery(baseOptions: Apollo.QueryHookOptions<ByCategoryIdQuery, ByCategoryIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ByCategoryIdQuery, ByCategoryIdQueryVariables>(ByCategoryIdDocument, options);
      }
export function useByCategoryIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ByCategoryIdQuery, ByCategoryIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ByCategoryIdQuery, ByCategoryIdQueryVariables>(ByCategoryIdDocument, options);
        }
export type ByCategoryIdQueryHookResult = ReturnType<typeof useByCategoryIdQuery>;
export type ByCategoryIdLazyQueryHookResult = ReturnType<typeof useByCategoryIdLazyQuery>;
export type ByCategoryIdQueryResult = Apollo.QueryResult<ByCategoryIdQuery, ByCategoryIdQueryVariables>;
export const CompactDocument = gql`
    query compact {
  compact {
    flowURL
    name
    id
    categories {
      alias
      id
      name
      contents {
        contents {
          previews {
            id
            link
            type
          }
          description
          id
          name
          previews {
            link
          }
        }
      }
    }
  }
}
    `;

/**
 * __useCompactQuery__
 *
 * To run a query within a React component, call `useCompactQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompactQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompactQuery({
 *   variables: {
 *   },
 * });
 */
export function useCompactQuery(baseOptions?: Apollo.QueryHookOptions<CompactQuery, CompactQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CompactQuery, CompactQueryVariables>(CompactDocument, options);
      }
export function useCompactLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompactQuery, CompactQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CompactQuery, CompactQueryVariables>(CompactDocument, options);
        }
export type CompactQueryHookResult = ReturnType<typeof useCompactQuery>;
export type CompactLazyQueryHookResult = ReturnType<typeof useCompactLazyQuery>;
export type CompactQueryResult = Apollo.QueryResult<CompactQuery, CompactQueryVariables>;