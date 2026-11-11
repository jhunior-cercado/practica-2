interface ApiProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description: string;
}

const mapProduct = (item: ApiProduct): Product => {
  return {
    id: item.id,
    name: item.title,
    price: item.price,
    imageUrl: item.image,
    category: item.category,
    description: item.description,
  };
};