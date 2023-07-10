import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 const baseUrl = "http://192.168.129.253:5000/";
//const baseUrl="http://localhost:5000/"
export const appSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
     getTasks: builder.query({
      query: (id) => `tasks/${id}`,
    }),
    getTransaction: builder.query({
        query: (id) => `transactions/${id}`,
      }),
      getParentFund: builder.query({
        query: (id) => `parentFund/${id}`,
      }),
      getStudentFund: builder.query({
        query: (id) => `studentFund/${id}`,
      }),
    //orders
    createTask: builder.mutation({
      query: (createTask) => ({
        url: "tasks",
        method: "POST",
        body: createTask,
      })
    }),
    approveTask: builder.mutation({
      query: (approveTask) => ({
        url: "tasks/approved",
        method: "POST",
        body: approveTask,
      }),   
  }),
    uploadImage: builder.mutation({
      query: (uploadImage) => ({
        url: "tasks/image",
        method: "POST",
        body: uploadImage,
      }),
    }),
     
   
 
 
})
})
export const { useGetStudentFundQuery,useUploadImageMutation, useGetTransactionQuery,useGetParentFundQuery, useCreateTaskMutation,useApproveTaskMutation,useGetTasksQuery } = appSlice;