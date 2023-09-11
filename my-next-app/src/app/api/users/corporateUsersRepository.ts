import {selectBySQL} from "@/lib/db";

export type CorporateUser = {
    corporateUserId: number,
    corporateId: number,
    fullName: string,
    email: string,
    password: string,
    createdAt: string,
}

export const getUserById = (id: string): Promise<{ data: CorporateUser[]; error: string | null }> => {
    const sql = `SELECT * from corporate_users where corporate_user_id = ${id}`;
    return selectBySQL(sql);
}