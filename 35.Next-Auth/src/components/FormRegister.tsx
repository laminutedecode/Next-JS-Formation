import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../app/db/configFirebase"; 
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
      message: "Ce champs est requis",
    })
    .email("Format e-mail invalide")
    .max(300, {
      message: "Votre e-mail doit faire moins de 300 caracteres",
    }),
  password: z
    .string()
    .min(6, { message: "Le mot de passe doit faire minimun 6 caracteres de long" }),
  confirmPassword: z.string().min(6, {
    message: "Confirmer votre mot de passe",
  }),
}).refine(({ confirmPassword, password }) => {
  return confirmPassword === password;
}, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

async function addUserToFirestore(userId: string, email: string) {
  try {
   
    const userRef = doc(db, "users", userId);

    
    await setDoc(userRef, {
      email: email,
    });
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'utilisateur à Firestore :", error);

  }
}

export default function FormRegister() {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredential.user;


      await addUserToFirestore(user.uid, values.email);

      router.push("/dashboard");


      toast.success("Compte créé avec succès!");
    } catch (error: any) {
      toast.error(error.message);
    }
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

        <label className="text-slate-900">Confirmer mot de passe</label>
        <input
          type="password"
          {...register("confirmPassword")}
          className="h-10 border border-slate-900 rounded p-4"
        />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

        <button
          type="submit"
          className="bg-gray-600 px-3 py-1.5 text-white my-3 rounded hover:bg-gray-700"
        >
          Inscription
        </button>

        <a onClick={() => router.push('/login')} href="#" className="text-red-500 hover:text-red-900" >
          Déjà un compte ? Connectez-vous
        </a>
      </form>
    </>
  );
}
