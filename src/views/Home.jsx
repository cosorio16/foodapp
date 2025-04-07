import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../data/data";
import Card from "../components/Card";
import Modal from "../components/Modal";

function Home() {
  const [products, setProducts] = useState(data.esquites);

  return (
    <div>
      <Header products={data.esquites} setProducts={setProducts} />
      <Modal />
      <div className="py-5 px-8 md:px-4 xl:px-16 items-center justify-items-center grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 font-Poppins bg-neutral-100 min-h-dvh">
        {products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product.id}
              description={product.description}
              name={product.name}
              notes={product.notes}
              price={product.price}
              image={""}
            />
          ))
        ) : (
          <div className="text-center w-full h-full">
            <p className="font-medium text-neutral-400 text-lg">No hay resultados para esta busqueda.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
