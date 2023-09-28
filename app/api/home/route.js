import { NextResponse } from "next/server"
var posts = []
export const GET = ()=>{
    let data={
        title : 'Umar '
        ,
        description: 'hello'
    }
    return NextResponse.json(data)
}

// export const POST = async (req)=>{
//     console.log(req.body); 
//     const { title, description } = req.body;
// posts.push({
//     title,description
// })
// console.log(title ,description);
//     return NextResponse.json({
//         message: "Post " ,data: title , description
//     })
// }
export const POST = (req)=>{

    const title =new URL(req.url).searchParams.get('title')  
  

    // database
    
    // some working
    return NextResponse.json({message:"post method call",data:title })
}