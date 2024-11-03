"use client"

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'react-toastify';
import {useRouter} from "next/navigation"
import { signIn } from "next-auth/react";
import 'react-toastify/dist/ReactToastify.css';


interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email requis",
    })
    .email("Format non valide")
    ,
  password: z
    .string()
    .min(6, { message: "mot de passe requis" }),
});


export default function FormLogin() {


  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });


  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (!response?.error) {
        router.push("/dashboard");
    }

    toast.success("Vous etes connecter!");
  }

  return (
    <>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[800px] flex flex-col gap-2 bg-slate-50 p-5 rounded shadow-md"
      >
        <label className="text-slate-900">Email</label>
        <input
          type="email"
          {...register("email")}
          className="h-10 border border-slate-900 rounded p-4"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <label className="text-slate-900">Mot de passe</label>
        <input
          type="password"
          {...register("password")}
          className="h-10 border border-slate-900 rounded p-4"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

       

        <button
          type="submit"
          className="bg-gray-600 px-3 py-1.5 text-white my-3 rounded hover:bg-gray-700"
        >
          Connexion
          
        </button>

        <a onClick={() => router.push('/register')} href="#" className="text-red-500 hover:text-red-900" >
          Pas de compte ? Inscrivez vous des maintenant
        </a>
      </form>
    </>
  );
}