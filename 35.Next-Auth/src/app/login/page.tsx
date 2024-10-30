"use client"

import ButtonsProviders from "@/components/ButtonsProviders";
import FormLogin from "@/components/FormLogin";


export default function PageSignIn() {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-8">
      <FormLogin />
      <ButtonsProviders />
    </div>
  );
}

  