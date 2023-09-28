import { NextResponse } from "next/server"


export const GET = (req,route)=>{
console.log('route',route.params);
    return NextResponse.json({message:'get method is call',data:route.params})
}
export const POST = ()=>{

    return NextResponse.json({message:'POST method is call'})
}
export const DELETE = ()=>{

    return NextResponse.json({message:'DELLETE method is call'})
}