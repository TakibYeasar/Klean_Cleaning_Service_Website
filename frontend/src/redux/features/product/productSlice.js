import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note, NoteState, CreateNote } from '../../app/types';
import { Post, PostState } from '../../app/types';

const noteSlice = createSlice({
    name: 'note',
    initialState: {
        posts: [],
        post: null,
        teamPosts: [],
        likedPosts: [],
        userPosts: [],
    } as PostState,
    reducers: {
        setPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
        updatePost: (state, action: PayloadAction<Post>) => {
            const { _id, text } = action.payload;
            const index = state.posts.findIndex((post) => post._id === _id);
            if (index >= 0) {
                state.posts[index] = { ...state.posts[index], text };
            }
        },
        deletePost: (state, action: PayloadAction<string>) => {
            const index = state.posts.findIndex(
                (post) => post._id === action.payload
            );
            if (index >= 0) {
                state.posts.splice(index, 1);
            }
        },
        setTeamPosts: (state, action: PayloadAction<Post[]>) => {
            state.teamPosts = action.payload;
        },
        setLikedPosts: (state, action: PayloadAction<Post[]>) => {
            state.likedPosts = action.payload;
        },
        setUserPosts: (state, action: PayloadAction<Post[]>) => {
            state.userPosts = action.payload;
        },
        setNotes: (state, action: PayloadAction<Note[]>) => {
            state.notes = action.payload;
        },
        setNote: (state, action: PayloadAction<Note>) => {
            state.notes.push(action.payload);
        },
        updateNote: (state, action: PayloadAction<Note>) => {
            const { ticketId: id, text } = action.payload as unknown as CreateNote;
            const index = state.notes.findIndex((note) => note._id === id);
            if (index >= 0) {
                state.notes[index] = { ...state.notes[index], text };
            }
        },
        removeNote: (state, action: PayloadAction<number>) => {
            const index = state.notes.findIndex(
                (note) => note._id === (action.payload as unknown as string)
            );
            if (index >= 0) {
                state.notes.splice(index, 1);
            }
        },
    },
});

export const { setNote, setNotes, updateNote, removeNote } = noteSlice.actions;

export default noteSlice.reducer;