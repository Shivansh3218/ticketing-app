import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const body = await req.body.json();
        const ticketData =  body.formData;
        await Ticket.create(ticketData);
        return NextResponse.json({message:"Ticket Created"}, {status:201});
    
    }catch(err){
        return NextResponse.json({message:"Error",err}, {status:500});
    }
}