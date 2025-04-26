import { collection, addDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "../../../db/configFirebase";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const bcrypt = require("bcrypt");
    const hashedPassword = await bcrypt.hash(password, 10);

    const usersCollection = collection(db, "users");
    const userRef = await addDoc(usersCollection, {
      email: email,
      password: hashedPassword
    });

    return NextResponse.json({ success: "Compte ajouté ", userId: userRef.id }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
