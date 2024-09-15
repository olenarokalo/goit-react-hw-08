export const selectTokenAuth = (state) => state.auth.token;

export const selectIsLoggedInAuth = (state) => state.auth.isLoggedIn;

export const selectIsRefreshingAuth = (state) => state.auth.isRefreshing;

export const selectLoadingAuth = (state) => state.auth.loading;

export const selectErrorAuth = (state) => state.auth.error;

export const selectUserAuth = (state) => state.auth.user;
