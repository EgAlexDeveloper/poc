export type User = {
    token: string
};

export class AuthState {
    user: User | null = null;
    isLoggedIn: boolean = false;
    updateAuthContext = (user: User, isLoggedIn?: boolean): void => { }
}

