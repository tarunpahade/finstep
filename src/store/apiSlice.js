import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://backend-5ig7.onrender.com/";
//const baseUrl = "http://192.168.106.253:5000/";

export const appSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: [
    "Task",
    "Student fund",
    "Parent fund",
    "Login",
    "Transaction",
    "notification",
  ],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: (id) => `tasks/${id}`,
      providesTags: ["Task"],
    }),
    getTransaction: builder.query({
      query: (id) => `transactions/${id}`,
      providesTags: ["Transaction"],
    }),
    redoTask: builder.mutation({
      query: (id) => ({
        url: "tasks/redoTask",
        method: "POST",
        body: id,
      }),
      invalidatesTags: ["Task"],
    }),
    
    newAccount: builder.mutation({
      query: (id) => ({
        url: "/login/new-account",
        method: "POST",
        body: id,
      }),
      invalidatesTags: ["Login"],
    }),
    getAnalytics: builder.query({
      query: (id) => `transactions/analytics/${id}`,
    }),
    
    getSavingTransactions: builder.query({
      query: (id) => `transactions/getSavingTransactions/${id}`,
    }),
    getParentFund: builder.query({
      query: (id) => `parentFund/${id}`,
      providesTags: ["Parent fund"],
    }),
    getLoginDetails: builder.query({
      query: (id) => `login/${id}`,
      providesTags: ["Login", "Task", "Transaction"],
    }),
    getStoredNotification: builder.query({
      query: (id) => `notification/storedNotifcations/${id}`,
      providesTags: ["notification"],
    }),
    getStudentFund: builder.query({
      query: (id) => `studentFund/${id}`,
      providesTags: ["Student fund"],
    }),
    //orders
    createTask: builder.mutation({
      query: (createTask) => ({
        url: "tasks",
        method: "POST",
        body: createTask,
      }),
      invalidatesTags: ["Task"],
    }),
    createParentFund: builder.mutation({
      query: (ParentFund) => ({
        url: "parentFund",
        method: "POST",
        body: ParentFund,
      }),
      invalidatesTags: ["Parent fund"],
    }),
    createFund: builder.mutation({
      query: (createFund) => ({
        url: "studentFund",
        method: "POST",
        body: createFund,
      }),
      invalidatesTags: ["Student fund"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Login"],
    }),
    addChild: builder.mutation({
      query: (data) => ({
        url: "login/addChild",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Login"],
    }),
    approveTask: builder.mutation({
      query: (approveTask) => ({
        url: "tasks/approved",
        method: "POST",
        body: approveTask,
      }),
      invalidatesTags: ["Task"],
    }),

    addMoneyToPot: builder.mutation({
      query: (potDetails) => ({
        url: "studentFund/moneyAddedToPot",
        method: "POST",
        body: potDetails,
      }),
      invalidatesTags: ["Login","Parent fund","Student fund","Transaction"],
    }),

    addMoneyToParentPot: builder.mutation({
      query: (potDetails) => ({
        url: "parentFund/moneyAddedToPot",
        method: "POST",
        body: potDetails,
      }),
      invalidatesTags: ["Parent Fund"],
    }),

    sendMoney: builder.mutation({
      query: (approveTask) => ({
        url: "tasks/sendMoney",
        method: "POST",
        body: approveTask,
      }),
      invalidatesTags: ["Task", "Transaction"],
    }),
    studentPays: builder.mutation({
      query: (approveTask) => ({
        url: "transactions/studentPays",
        method: "POST",
        body: approveTask,
      }),
      invalidatesTags: ["Transaction"],
    }),

    parentToChild: builder.mutation({
      query: (approveTask) => ({
        url: "transactions/parentToChild",
        method: "POST",
        body: approveTask,
      }),
      invalidatesTags: ["Transaction"],
    }),

    uploadImage: builder.mutation({
      query: (uploadImage) => ({
        url: "tasks/image",
        method: "POST",
        body: uploadImage,
      }),
      invalidatesTags: ["Task"],
    }),

    storeNotification: builder.mutation({
      query: (notification) => ({
        url: "notification/storeNotifications",
        method: "POST",
        body: notification,
      }),
    }),

    deleteNotification: builder.mutation({
      query: (id) => ({
        url: "notification/deleteNotification",
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["notification"],
    }),

    sendNotification: builder.mutation({
      query: (uploadImage) => ({
        url: "notification",
        method: "POST",
        body: uploadImage,
      }),
    }),
  }),
});

export const {
  useSendMoneyMutation,
  useGetAnalyticsQuery,
  useRedoTaskMutation,
  useGetStudentFundQuery,
  useUploadImageMutation,
  useGetTransactionQuery,
  useGetParentFundQuery,
  useCreateTaskMutation,
  useApproveTaskMutation,
  useGetTasksQuery,
  useGetLoginDetailsQuery,
  useLoginMutation,
  useCreateParentFundMutation,
  useCreateFundMutation,
  useAddChildMutation,
  useStudentPaysMutation,
  useParentToChildMutation,
  useDeleteNotificationMutation,
  useStoreNotificationMutation,
  useGetStoredNotificationQuery,
  useAddMoneyToPotMutation,
  useAddMoneyToParentPotMutation,
  useGetSavingTransactionsQuery
,useNewAccountMutation
} = appSlice;
