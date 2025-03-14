export interface Review {
  author: string;
  rating: number;
  comment: string;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string; // Sửa từ 'image' thành 'imageUrl'
  description: string;
  price: number;
  rating: number;
  sizes: string[];
  images: string[];  
  reviews: Review[];
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    imageUrl: '/images/product1.jpg',
    description: 'Description for product 1',
    price: 29.99,
    rating: 4.5,
    sizes: ['S', 'M', 'L', 'XL'],
    images: ['/images/product1.jpg', '/images/product1.jpg'],  
    reviews: [
      { author: 'Alice', rating: 5, comment: 'Excellent product!' },
      { author: 'Bob', rating: 4, comment: 'Very good quality.' },
    ],
  },
  {
    id: '2',
    name: 'Product 2',
    imageUrl: '/images/product2.jpg',
    description: 'Description for product 2',
    price: 39.99,
    rating: 4.0,
    sizes: ['M', 'L'],
    images: ['/images/product2.jpg', '/images/product2.jpg'],  // Sửa đường dẫn hình ảnh cho sản phẩm 2
    reviews: [],
  },
  // Thêm sản phẩm khác nếu cần
];
