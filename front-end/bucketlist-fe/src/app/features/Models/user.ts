export interface UserDTO {
    userID: number;
    username: string;
    password: string;
    admin: boolean;
}

export interface UserNoIDDTO {
    username: string;
    password: string;
    admin: boolean;
}