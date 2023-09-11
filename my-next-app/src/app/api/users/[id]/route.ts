import {NextResponse} from 'next/server';
import {CorporateUser, getUserById} from "@/app/api/users/corporateUsersRepository";
import camelcaseKeys from 'camelcase-keys';

export async function GET(reqeust: Request, { params }: { params: { id: string } }) {
    const {data, error} = await getUserById(params.id);

    if (error) {
        return NextResponse.json({error});
    }

    // NOTE(hajae): fetch한 data는 colume name 그대로 snake case이기 때문에 camel case로 수정해준다.
    const camelCaseData = camelcaseKeys(data[0], { deep: true }) as CorporateUser;

    return NextResponse.json(camelCaseData, { status: 200 });
}
 