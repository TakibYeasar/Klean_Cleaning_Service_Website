import { apiSlice } from "../../redux/apiSlice";
import {
    setComments,
    updateComment,
    deleteComment,
} from './commentSlice';
import { CreateComment, Comment, DeleteComment } from '../../../app/types';

export const blogApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBlog: builder.query({
            query: (blogId) => `/blog/${blogId}`,
            providesTags: ["blogs"],
        }),
        getBlogs: builder.query({
            query: () => "/blog",
            providesTags: ["blogs"],
        }),
        addBlog: builder.mutation({
            query: (blogData) => ({
                url: "/blog",
                method: "POST",
                body: { ...blogData },
            }),
            invalidatesTags: ["blogs"],
        }),
        updateBlog: builder.mutation({
            query: (args) => {
                const { blogId, ...blogData } = args;
                return {
                    url: `/blog/${blogId}`,
                    method: "PUT",
                    body: { ...blogData },
                };
            },
            invalidatesTags: ["blogs"],
        }),
        deleteBlog: builder.mutation({
            query: (blogId) => ({
                url: `/blog/${blogId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["blogs"],
        }),
        commentBlog: builder.mutation({
            query: (args) => {
                const { blogId, comment } = args;
                return {
                    url: `/blog/comment/${blogId}`,
                    method: "PUT",
                    body: { comment },
                };
            },
            invalidatesTags: ["blogs"],
        }),
        deleteCommentBlog: builder.mutation({
            query: (args) => {
                const { blogId, commentId } = args;
                return {
                    url: `/blog/comment/${blogId}/${commentId}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["blogs"],
        }),
        createComment: builder.mutation<Comment, CreateComment>({
            query: ({ postId, comment }) => ({
                url: `posts/${postId + URL}`,
                method: 'POST',
                body: { comment },
            }),
            invalidatesTags: [
                { type: 'Comment', id: 'LIST' },
                { type: 'Comment', id: 'USER' },
                { type: 'Post', id: 'LIST' },
                { type: 'Post', id: 'LIKED' },
                { type: 'Post', id: 'TEAM' },
                { type: 'Post', id: 'USER' },
            ],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                dispatch(
                    setComments([...store.getState().comment.comments, result.data])
                );
            },
        }),
        deleteComment: builder.mutation<void, DeleteComment>({
            query: ({ postId, commentId }) => ({
                url: `posts/${postId + URL}/${commentId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [
                { type: 'Comment', id: 'LIST' },
                { type: 'Comment', id: 'USER' },
                { type: 'Post', id: 'LIST' },
                { type: 'Post', id: 'LIKED' },
                { type: 'Post', id: 'TEAM' },
                { type: 'Post', id: 'USER' },
            ],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                dispatch(deleteComment(arg.commentId));
            },
        }),
        updateComment: builder.mutation<Comment, Comment>({
            query: ({ post: postId, _id, comment }) => ({
                url: `posts/${postId}/${URL}/${_id}`,
                method: 'PUT',
                body: { comment },
            }),
            invalidatesTags: [
                { type: 'Comment', id: 'LIST' },
                { type: 'Comment', id: 'USER' },
                { type: 'Post', id: 'List' },
                { type: 'Post', id: 'LIKED' },
                { type: 'Post', id: 'TEAM' },
                { type: 'Post', id: 'USER' },
            ],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                dispatch(updateComment(result.data));
            },
        }),
    }),
});

export const {
    useGetBlogQuery,
    useGetBlogsQuery,
    useAddBlogMutation,
    useUpdateBlogMutation,
    useDeleteBlogMutation,
    useCommentBlogMutation,
    useDeleteCommentBlogMutation,
} = blogApiSlice;
