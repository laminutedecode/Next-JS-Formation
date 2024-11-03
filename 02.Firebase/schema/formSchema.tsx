import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  lastName: yup.string().trim().required("Le nom est requis"),
  firstName: yup.string().trim().required("Le prénom est requis"),
  email: yup.string().trim().email("L'adresse e-mail n'est pas valide").required("L'adresse e-mail est requise"),
  phone: yup.number().typeError("Le numéro de téléphone doit être un nombre").required("Le numéro de téléphone est requis"),
  image: yup.string(), 
  adress: yup.string().trim().required("L'adresse est requise"),
  cp: yup.number().typeError("Le code postal doit être un nombre").required("Le code postal est requis"),
  city: yup.string().trim().required("La ville est requise"),
  country: yup.string().trim().required("Le pays est requis"),
});
