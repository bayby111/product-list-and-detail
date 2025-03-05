import axios from "axios";


// Truy vấn GraphQL
const GET_PRODUCT_DAILY_SALES = `
  query getProductDailySales($filter: DailySaleFilterInput, $pageSize: Int, $currentPage: Int) {
    DailySales(filter: $filter, pageSize: $pageSize, currentPage: $currentPage) {
      items {
        identifier
        items {
          product {
            sku
            name
            url_key
            image {
              url
            }
          }
          sale_price
          price_original
        }
      }
      page_info {
        current_page
        page_size
        total_pages
      }
      total_count
    }
  }
`;

export const fetchProducts = async (pageSize = 10, currentPage = 1) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_URL_API,
      {
        query: GET_PRODUCT_DAILY_SALES,
        variables: {
          filter: {
            sale_type: {
              eq: "thuong-hieu",
            },
          },
          pageSize,
          currentPage,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Dữ liệu trả về:", response.data);
    return response.data.data?.DailySales || {};
  } catch (error) {
    console.error("Lỗi khi gọi API:", error.response ? error.response.data : error.message);
    return {};
  }
};

