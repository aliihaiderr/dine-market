import { NextRequest, NextResponse } from "next/server";
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { db, CartTable } from "@/lib/drizzle";
import { v4 as uuid } from 'uuid';
import { cookies } from "next/headers";
import {eq} from 'drizzle-orm';


cookies().get('user_id')?.value
fetch(`http:/localhost:3000/api/cart?user_id=${cookies().get('user_id')?.value}`)

export const GET = async (request : NextRequest) => {

    const req = request.nextUrl
    const uid = req.searchParams.get('user_id') as string

    
    try {
        const res = await db.select().from(CartTable).where(eq(CartTable.user_id, uid));
        // res[0].product_id
        return NextResponse.json({res});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:'somthing went wrong'});
    }
}


export const POST = async (request : NextRequest) => {

    const req = await request.json();
    const uid = uuid();      // it generate random id to store in cookies in browser. 
    const setCookies= cookies();

    // setCookies.set('user_id', uid);     for check purpose how it save user id in cookies or not.

    const user_id = cookies().get('user_id')


    if(!user_id){          // if there is no id then it show undifine and condition is true and set cookies.
        setCookies.set('user_id', uid);
    }

    try {
        const res = await db.insert(CartTable).values({
            product_id: req.product_id,
            quantity: 1,
            user_id: cookies().get('user_id')?.value as string       // we store user id in browser(cookies) because we dont have login and signup for user.
        }).returning();
        return NextResponse.json({res});
    } catch (error) {
        
    }
}