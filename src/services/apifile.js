// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
  const header = {"Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Accept": "application/json",}
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ayuradmin.stackerbee.com/api/' }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url:'Categories',
        method:'GET'
      })
    }),
    getAllProductByCategory: builder.query({
        query: (cate) => ({
          url: `Category/${cate}`,
          method:'GET'
        })
      }),
    getAllBlogs: builder.query({
        query: () => ({
          url:'blogs/1',
          method:'GET'
        })
      }),
      getFiveCateName: builder.query({
        query: () => ({
          url:'menu',
          method:'GET'
        })
      }),
      getSocailMedia: builder.query({
        query: () => ({
          url:'Websitesettings',
          method:'GET'
        })
      }),
      getBannerImg: builder.query({
        query: () => ({
          url:'Banners',
          method:'GET'
        })
      }),
      getcontactinfo: builder.query({
        query: () => ({
          url:'contact',
          method:'GET'
        })
      }),
      getspecialofferinfo: builder.query({
        query: () => ({
          url:'specialoffer',
          method:'GET'
        })
      }),
      getAllProductStatus: builder.query({
        query: () => ({
          url:'productstatus/featured-products',
          method:'GET'
        })
      }),
      getSingleProductByName: builder.query({
        query: (pname) => ({
          url: `product/${pname}`,
          method:'GET'
        })
      }),
      getProductByName: builder.query({
        query: (name) => ({
          url: `search/${name}`,
          method:'GET'
        })
      }),
      getSingleBlog: builder.query({
        query: (title) => ({
          url: `blogdetails/${title}`,
          method:'GET'
        })
      }),
      getSingleproduct: builder.query({
        query: (product) => ({
          url: `product/${product}`,
          method:'GET'
        })
      }),
      getUserInfoHere: builder.query({
        query: (user) => ({
          url: `userinfo/${user}`,
          method:'GET'
        })
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCategoriesQuery, useGetAllProductByCategoryQuery, useGetAllBlogsQuery, useGetSingleProductByNameQuery, useGetSocailMediaQuery, useGetSingleBlogQuery, useGetSingleproductQuery ,useGetBannerImgQuery, useGetAllProductStatusQuery, useGetcontactinfoQuery, useGetspecialofferinfoQuery, useGetUserInfoHereQuery, useGetFiveCateNameQuery,useGetProductByNameQuery} = postApi