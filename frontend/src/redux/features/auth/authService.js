import { apiSlice } from "../../api/apiSlice";
import { User, RegisterUser, LoginUser } from './type';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<User, RegisterUser>({
            query: (body) => ({
                url: 'api/authapi/register-user',
                method: 'POST',
                body,
            }),
        }),
        loginUser: builder.mutation<User, LoginUser>({
            query: (body) => ({
                url: 'api/authapi/login',
                method: 'POST',
                body,
            }),
        }),
        logoutUser: builder.mutation<void, void>({
            query: () => ({
                url: 'api/authapi/logout',
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useLogoutUserMutation,
} = authApiSlice;
