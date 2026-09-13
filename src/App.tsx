import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import type IData from "./type";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/footer";
import { ToastContainer, toast } from "react-toastify";


const DataPromise = async (): Promise<IData[]> => {
  const response = await fetch("/data.json");
  const data = await response.json();

  return data;
};

function App() {
const [data] = useState(() => DataPromise());
  // console.log(data);

  const [stack, setStack] = useState<IData[]>([]);

const handleAddToStack = (technology: IData) => {
  const alreadyAdded = stack.filter(
    (item) => item.id === technology.id
  );

  if (alreadyAdded.length > 0) {
    toast.warning(`${technology.name} is already in your stack`, {
      position: "top-center",
      autoClose: 5000,
      theme: "light",
    
    });
    return;
  }

  setStack([...stack, technology]);

  toast.success(`${technology.name} added to your stack`, {
    position: "top-center",
    autoClose: 5000,
    theme: "light",
   
  });
};



const handleRemoveFromStack = (id: string ) => {
  const technology = stack.filter(
    (technology) => technology.id === id
  );

  const remainingStack =  stack.filter(
    (technology) => technology.id !== id
  );

  setStack(remainingStack);

  toast.info(`${technology[0].name}  removed from your stack`, {
    position: "top-center",
    autoClose: 5000,
    theme: "light",
    
  });
};
 const handleRemoveAll = () => {
  setStack([]);

  toast.info("All technologies removed from your stack", {
    position: "top-center",
    autoClose: 5000,
    theme: "light",

  });
};

  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={<div>Loading..</div>}>
 <Technologies
  data={data}
  stack={stack}
  handleAddToStack={handleAddToStack}
  handleRemoveFromStack={handleRemoveFromStack}
  handleRemoveAll={handleRemoveAll}
/>
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;