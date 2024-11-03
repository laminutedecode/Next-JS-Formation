import TasksTab from "./components/TasksTab";
import AddForm from "@/app/components/AddForm";

export default async function Home() {

  return (
   <div className="h-screen w-full flex items-center justify-center flex-col pt-10">
      <AddForm/>
      <TasksTab/>
   </div>
  );
}
