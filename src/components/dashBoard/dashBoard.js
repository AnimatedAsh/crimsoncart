import React, { Component } from "react";

import { getProducts } from "../../services/fakeProductService";
import { getCategories } from "../../services/fakeCategoryService";
import ProductList from "../products/productList";
import SideBar from "../../common/sideBar/sideBar";
import CarouselPanel from "../../common/carousel/carousel";
class DashBoard extends Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: null,
  };

  componentDidMount() {
    const categories = [
      { _id: "", name: "All Categories" },
      ...getCategories(),
    ];
    this.setState({ products: getProducts(), categories });
  }

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  };

  getPagedData = () => {
    const { selectedCategory, products: allProducts } = this.state;

    let filtered = allProducts;

    if (selectedCategory && selectedCategory._id)
      filtered = allProducts.filter(
        (p) => p.category._id === selectedCategory._id
      );
    const products = filtered;
    return { totalCount: filtered.length, data: products };
  };
  render() {
    const { totalCount, data: products } = this.getPagedData();
    return (
      <React.Fragment>
        <CarouselPanel />
        <br />
        <br />
        <div className="row">
          <div className="col-md-2 col-sm-4 sidebar1">
            <SideBar
              items={this.state.categories}
              selectedItem={this.state.selectedCategory}
              onItemSelect={this.handleCategorySelect}
            />
          </div>
          <div className="col-md-10 col-sm-8 main-content">
            <p>Showing {totalCount} products. </p>
            <ProductList products={products} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashBoard;
