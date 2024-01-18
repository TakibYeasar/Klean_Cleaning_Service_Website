import { apiSlice } from "../../api/apiSlice";
import { User, RegisterUser, LoginUser } from './type';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation < User, RegisterUser> ({
            query: (body) => ({
                url: 'api/authapi/register-user',
                method: 'POST',
                body,
            }),
        }),
        loginUser: builder.mutation < User, LoginUser> ({
            query: (body) => ({
                url: 'api/authapi/login',
                method: 'POST',
                body,
            }),
        }),
    logoutUser: builder.mutation < void, void> ({
        query: () => ({
            url: 'api/authapi/logout',
            method: 'POST',
        }),
    }),
    getProfile: builder.mutation < User, string > ({
        query: (body, userId) => ({
            url: `api/authapi/profile-view/${userId}`,
            method: 'GET',
            body,
        }),
    }),
    updateProfile: builder.mutation < User, User > ({
        query: (args) => {
            const { userId, ...userData } = args;
            return {
                url: `api/authapi/profile-view/${userId}`,
                method: "PUT",
                body: { ...userData },
            };
        },
    }),
    deleteProfile: builder.mutation < void, void> ({
        query: (body, userId) => ({
            url: `api/authapi/profile-view/${userId}`,
            method: 'DELETE',
            body,
        }),
    }),
    }),
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useLogoutUserMutation,
    useGetProfileMutation,
    useUpdateProfileMutation,
    useDeleteProfileMutation,
} = authApiSlice;
