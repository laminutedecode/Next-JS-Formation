"use client"

import ButtonsProviders from "@/components/ButtonsProviders";
import FormRegister from "@/components/FormRegister";


export default function RegisterPage() {

  
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-8">
      <FormRegister />
      <ButtonsProviders />
    </div>
  );
}