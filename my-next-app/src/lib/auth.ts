import type {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                return {id: "1", name: "kusa ww", email: credentials?.email};
            },
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_ID || '',
            clientSecret: process.env.KAKAO_SECRET || ''
        })
    ],
};
