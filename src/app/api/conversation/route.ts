// import { db } from "@/lib/db"
// import { auth } from "@clerk/nextjs/server"
// import { NextResponse } from "next/server"

// export async function POST (
//     req: Request,
// ) {
//     try {
//         const { userId } = await auth();
//         const { title, reply } = await req.json();

//         if(!userId) {
//             return new Response("Unauthorized", { status: 401 });
//         }

//         const conversation = await db.conversation.create({
//             data: {
//                 userId,
//                 title: title,
//                 reply: reply,
//             }
//         });

//         return NextResponse.json(conversation);
//     } catch (error) {
//         console.log("CONVERSATION ERROR: ", error);
//         return new NextResponse("Internal Error", { status: 500 });
//     }
// }