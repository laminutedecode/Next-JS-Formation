import CookieContent from "./components/CookieContent";
import ComponentCookiesServer from "./components/ComponentCookiesServer";

export default function Home() {


  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
      <h1 className="text-3xl font-black uppercase">Cookies</h1>
      <CookieContent/>
      <ComponentCookiesServer/>
  </div>
  );
}
