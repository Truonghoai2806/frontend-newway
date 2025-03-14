module.exports = {
  images: {
    domains: ['via.placeholder.com', 'user-service', 'api-core.dsp.one'], // Thêm nguồn ảnh vào đây
  },
  async rewrites() {
    return [
      {
        source: '/api/login', // URL nội bộ bạn gọi
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_API_LOGIN}`, // Sử dụng biến môi trường
      },
      {
        source: '/api/register', // URL nội bộ bạn gọi cho register
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_API_REGISTER}`, // Sử dụng biến môi trường
      },
      {
        source: '/api/user-profile/:id',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_API_USER_PROFILE}/:id`, // Sử dụng biến môi trường
      },
      {
        source: '/api/order/myorderhistory',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_API_ORDER_HISTORY}`, // Sử dụng biến môi trường
      },
      {
        source: '/api/logout',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_API_LOGOUT}`, // Sử dụng biến môi trường
      },
      {
        source: '/cart/:id', // Sử dụng tham số động :id
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_API_CART}/:id`, // Sử dụng biến môi trường
      },
      {
        source: '/update-quantity/:cart_detail_id', // Sử dụng tham số động :id
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_API_UPDATE_QUANTITY}/:cart_detail_id`, // Sử dụng biến môi trường
      },
      {
        source: '/api/auth/cart/remove/:cartDetailId',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_API_REMOVE_CART_ITEM}/:cartDetailId`, // Sử dụng biến môi trường
      },
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/:path*`
      },
    ];
  },
};
