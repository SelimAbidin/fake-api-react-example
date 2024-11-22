import "./index.css";

type Props = {
  description: string;
  title: string;
};

export const ProductCard = (p: Props) => {
  return (
    <div className="product-card">
      <h3>{p.title}</h3>
      <p>{p.description}</p>
    </div>
  );
};
