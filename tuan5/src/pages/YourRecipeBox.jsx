import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CartProduct from "../components/CartProduct";

import Breadcrumb from "../components/Breadcrumb";
import Pagination from "../components/Pagination";
import avatar2 from "../assets/images/avatar2.jpg";


const breadcrumbLinks = [
  { label: "Home", url: "#" },
  { label: "Your Recipe Box" },
];

const ITEMS_PER_PAGE = 8; // Số món ăn hiển thị trên mỗi trang

const YourRecipeBox = () => {
  const [activeTab, setActiveTab] = useState("Save Recipes");
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesTabSaved, setRecipesTabSaved] = useState([]);

  useEffect(() => {
    // Hàm fetch dữ liệu từ API
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://67c83d8b0acf98d070858fb8.mockapi.io/api/tuan-4/product"
        );
        if (!response.ok) {
          throw new Error("HTTP error: " + response.status);
        }
        const data = await response.json();

        console.log(data)
        // Map dữ liệu từ API sang định dạng mong muốn cho recipesTabSaved
        // Giả sử API trả về một mảng đối tượng có các thuộc tính: id, name, time, image.
        const mappedRecipes = data.map((item) => ({
          id: item.id,
          title: item.title || "Unknown Dish",
          time: item.time || "Unknown Time",
          image: item.image || snackCakes, // Dùng ảnh mặc định nếu API không có ảnh
        }));

        // Cập nhật state với dữ liệu lấy từ API
        setRecipesTabSaved(mappedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const getRecipesByTab = () => {
    switch (activeTab) {
      case "Save Recipes":
        return recipesTabSaved;
      case "Folders":
        // return recipesTabFolder;
        return "";
      case "Recipes by Genevie":
        // return recipesTabGenevie;
        return "";
      default:
        return [];
    }
  };

  // Danh sách món ăn của tab hiện tại
  const recipes = getRecipesByTab();
  const totalPages = Math.ceil(recipes.length / ITEMS_PER_PAGE);

  // Xác định vị trí cắt danh sách món ăn
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentRecipes = recipes.slice(startIndex, endIndex); // Cắt đúng số lượng

  // Chuyển trang
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="main-content">
        <div className="position-relative container mt-6">
          
          {/* Breadcrumb */}
          <Breadcrumb links={breadcrumbLinks} />

          <div>
            <h2 className="fw-bold">Emma Gonzalez's Recipe Box</h2>
            <div className="d-flex gap-5 mt-4">
              <img
                src={avatar2}
                alt={avatar2}
                style={{
                  width: "164px",
                  height: "164px",
                  borderRadius: "50%",
                  objectFit: "fill",
                }}
              />
              <div className="py-3 d-flex flex-column justify-content-between">
                <p className="text-muted">
                  Emma Gonzalez is a deputy editor at Cheffy, bringing her
                  expertise as a former cooking editor at the Los Angeles Times.
                  She is also an accomplished author, contributing to numerous
                  cookbooks and food publications. Originally from East Los
                  Angeles, Emma now resides in New York City, where she explores
                  a wide range of culinary delights.
                </p>

                <div className="">
                  <a
                    href=""
                    className="text-pink me-4 text-decoration-none"
                  >
                    6.5k Subscribers
                  </a>

                  <button
                    style={{ borderRadius: "15px" }}
                    className="btn btn-pink"
                  >
                    Share <i className="ms-1 bi bi-arrow-90deg-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="d-flex my-4" style={{borderBottom: "1px solid #ccc", fontSize: "14px"}}>
            {["Save Recipes", "Folders", "Recipes by Genevie"].map((tab) => (
              <button
                key={tab}
                style={{ padding: "15px 12px", border: "none"}}
                className={` ${
                  activeTab === tab ? "text-pink custom-active-tab fw-bold" : "text-muted bg-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Danh sách món ăn theo từng tab */}
          <div className="row g-4 mt-3">
            {currentRecipes.map((recipe, index) => (
              <CartProduct key={index} recipe={recipe} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default YourRecipeBox;
