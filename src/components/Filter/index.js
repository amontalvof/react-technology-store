import React from "react";
import { ProductConsumer } from "../../context";
import { FilterWrapper } from "./FilterStyle";
import { Picklist, PicklistOption } from "react-rainbow-components";
import { Slider } from "react-rainbow-components";
import { Input } from "react-rainbow-components";
import { FaSearch } from "react-icons/fa";

export default function index() {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          filteredProducts,
          search,
          maxPri,
          company,
          price,
          shipping,
          handleChange,
          handleCompany,
          storedProducts,
        } = value;

        // extraer companies sin tener repetidos
        let companies = new Set();
        companies.add("all");
        for (let product in storedProducts) {
          companies.add(storedProducts[product]["company"]);
        }
        companies = [...companies];
        //console.log(companies);

        const initialState = {
          value: { name: `company-${company}`, label: company.toUpperCase() },
        };
        //console.log(shipping);

        return (
          <FilterWrapper>
            <div className="fila-grande-columna">
              <div className="fila-peque">
                <Input
                  className="rainbow-p-around_medium"
                  label="Search Products"
                  placeholder=""
                  icon={<FaSearch className="rainbow-color_gray-3" />}
                  name="search"
                  onChange={handleChange}
                  value={search}
                />
              </div>
              <div className="fila-peque">
                <Picklist
                  className="rainbow-p-around_medium"
                  id="company"
                  onChange={handleCompany}
                  value={initialState.value}
                  label="Pick a Company"
                >
                  <PicklistOption
                    name="header"
                    label="Companies"
                    variant="header"
                  />
                  {companies.map((item, index) => {
                    return (
                      <PicklistOption
                        key={index}
                        name={`company-${item}`}
                        label={item.toUpperCase()}
                        value={item}
                      />
                    );
                  })}
                  {/*<PicklistOption
                    name="option 1"
                    label="Experimental Building"
                  />
                  <PicklistOption name="option 2" label="Empire State" />
                  <PicklistOption name="option 3" label="Central Park" />*/}
                </Picklist>
              </div>
              <div className="fila-peque">
                <Slider
                  className="rainbow-p-around_medium"
                  label="Product Price"
                  max={maxPri}
                  value={price}
                  onChange={handleChange}
                  name="price"
                />
              </div>
              <div className="fila-peque">
                <h1
                  style={{ color: "#80deea", fontSize: "0.1rem", opacity: "0" }}
                  className="rainbow-m-around_medium"
                >
                  escondido
                </h1>
                <Input
                  className="rainbow-m-around_medium"
                  type="checkbox"
                  label="Free Shipping"
                  name="shipping"
                  onChange={handleChange}
                  checked={shipping && true}
                />
              </div>
            </div>
            <div
              className="text-title"
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                color: "#a6a6a6",
                marginBottom: "50px",
                marginTop: "50px",
              }}
            >
              total products: {filteredProducts.length}
            </div>
          </FilterWrapper>
        );
      }}
    </ProductConsumer>
  );
}
