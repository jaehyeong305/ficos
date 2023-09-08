import {NextResponse} from 'next/server';
import {getUserById} from "@/app/api/users/corporateUsersRepository";

export async function GET(reqeust: Request, { params }: { params: { id: string } }) {
    const {data, error} = await getUserById(params.id);

    if (error) {
        return NextResponse.json({error});
    }
    return NextResponse.json({ data: data[0] }, { status: 200 });
}
 