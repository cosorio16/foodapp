import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../data/data";
import Card from "../components/Card";
import Modal from "../components/Modal";

function Home() {
  return (
    <div>
      <Header />
      <Modal/>
      <div className="py-5 px-4 xl:px-16 items-center justify-items-center grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 font-Poppins bg-neutral-100">
        {data.esquites.map((product) => (
          <Card
            key={product.id}
            description={product.description}
            name={product.name}
            notes={product.notes}
            price={product.price}
            image={""}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
