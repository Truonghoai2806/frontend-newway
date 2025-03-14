"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Pricing() {
    const [activeTab, setActiveTab] = useState(null);  // Sử dụng categoryId để theo dõi tab đang chọn
    const [categories, setCategories] = useState(new Map()); // Lưu trữ danh mục theo id
    const [products, setProducts] = useState([]); // Lưu trữ sản phẩm
    const [loading, setLoading] = useState(true);

    // Hàm lấy sản phẩm từ API
    const loadProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api-core.dsp.one/api/client/product");
            const data = await response.json();
            const fetchedProducts = data.data.data;
            console.log(data.data.data);
            
    
            // Kiểm tra xem fetchedProducts có phải là một mảng không
            if (Array.isArray(fetchedProducts)) {
                // Lọc các sản phẩm có danh mục
                const productCategories = new Map();
    
                // Xây dựng danh sách danh mục từ sản phẩm
                fetchedProducts.forEach((product) => {
                    if (product.category && product.category.id && !productCategories.has(product.category.id)) {
                        productCategories.set(product.category.id, product.category.name);
                    }
                });
    
                setCategories(productCategories);
                setProducts(fetchedProducts);
    
                // Đặt danh mục đầu tiên làm mặc định nếu có
                const firstCategoryId = productCategories.size > 0 ? productCategories.keys().next().value : null;
    
                // Chỉ gán nếu firstCategoryId có giá trị hợp lệ (không phải undefined)
                if (firstCategoryId !== undefined) {
                    setActiveTab(firstCategoryId);  // Gán giá trị đầu tiên của categoryId cho activeTab
                }
            } else {
                console.error("Dữ liệu trả về không phải là mảng:", fetchedProducts);
            }
    
        } catch (error) {
            console.error("Lỗi khi lấy sản phẩm:", error);
        }
        setLoading(false);
    };
    

    // Lấy sản phẩm khi component được render
    useEffect(() => {
        loadProducts();
    }, []);

    // Lọc sản phẩm theo danh mục được chọn
    const filteredProducts = activeTab
        ? products.filter((product) => product.category?.id === activeTab) // Kiểm tra category có tồn tại hay không
        : products;

    const renderProducts = (products) => {
        return products.map((product) => (
            <div key={product.id} className="w-full md:w-1/2 p-4">
                <div className="pricing-card bg-white flex items-center justify-between p-2 overflow-hidden">
                    <div className="pricing-card__left flex items-center gap-4">
                        <div className="pricing-card__image flex-shrink-0 flex items-center justify-center">
                            <Image width={72} height={60} src={product.thumbnail?.path ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/file/${product.thumbnail.path}` : "/images/default-product.png"} alt={product.thumbnail?.filename || "Product Image"} className="w-19 h-60" />
                        </div>

                        <div className="pricing-card__name">
                            <h4 className="pricing-card__title truncate"><a href="/page/product-detail" className="block">{product.name}</a></h4>
                            <span className="pricing-card__package text-gray-600 whitespace-nowrap text-sm">vacuum package</span>
                        </div>
                    </div>
                    <div className="pricing-card__right flex justify-between items-center text-sm sm:text-xs">
                        <div className="pricing-card__weight"><span>{product.height}</span>g</div>
                        <div className="pricing-card__price">$<span>{product.price}</span></div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <>
            <section className="page-header relative" style={{ height: '320px' }}>
                <div className="page-header__bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/backgrounds/page-header-bg.jpg')" }}></div>

                <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
                    <h2 className="page-header__title font-bold text-white text-center">pricing plan</h2>
                    <ul className="boskery-breadcrumb flex text-white list-unstyled text-[16px]">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><span>pricing plan</span></li>
                    </ul>
                </div>
            </section>

            <section className="pricing-one section-space" id="pricing">
                <div className="pricing-one__bg" style={{ backgroundImage: 'url(/assets/images/shapes/pricing-bg-1.png)' }}></div>

                <div className="container mx-auto">
                    <div className="sec-title sec-title--center">
                        <Image width={72} height={21} src="/assets/images/shapes/sec-title-s-1.png" alt="meat assortment" className="sec-title__img" />
                        <h6 className="sec-title__tagline">meat assortment</h6>
                        <h2 className="sec-title__title">Products price</h2>
                    </div>
                    <div className="pricing-one__main-tab-box tabs-box">
                        <ul className="tab-buttons">
                            {Array.from(categories.entries()).map(([categoryId, categoryName]) => (
                                <li
                                    key={categoryId}
                                    className={`tab-btn boskery-btn ${activeTab === categoryId ? "active-btn" : ""}`}
                                    onClick={() => setActiveTab(categoryId)}
                                >
                                    <span>{categoryName}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="tabs-content">
                            <div className={`tab ${activeTab ? "active-tab" : ""}`}>
                                <div className="flex flex-wrap">
                                    {loading ? <p>Loading...</p> : renderProducts(filteredProducts)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
