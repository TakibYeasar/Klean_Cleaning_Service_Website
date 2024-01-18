import { createSlice } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment, CommentState } from '../../app/types';

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blogs: null,
        comments: [],
        comment: null,
    },
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        setComments: (state, action: PayloadAction<Comment[]>) => {
            state.comments = action.payload;
        },
        updateComment: (state, action: PayloadAction<Comment>) => {
            const { _id, comment } = action.payload;
            const index = state.comments.findIndex((comment) => comment._id === _id);
            if (index >= 0) {
                state.comments[index] = { ...state.comments[index], comment };
            }
        },
        deleteComment: (state, action: PayloadAction<string>) => {
            const index = state.comments.findIndex(
                (comment) => comment._id === action.payload
            );
            if (index >= 0) {
                state.comments.splice(index, 1);
            }
        },
    },
});

export const { setBlogs, setComments, updateComment, deleteComment } = blogSlice.actions;
export default blogSlice.reducer;

export const selectCurrentBlogs = (state) => state.blog.blogs;
