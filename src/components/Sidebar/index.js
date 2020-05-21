import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import {
  VerticalNavigation,
  VerticalSection,
  VerticalItem,
} from "react-rainbow-components";
import SidebarWrapper from "./SidebarStyle";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: "item 1",
    };
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect(e, selectedItem) {
    return this.setState({ selectedItem });
  }

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { links, sidebarOpen, handleSidebar } = value;
          return (
            <React.Fragment>
              <SidebarWrapper show={sidebarOpen}>
                {/*show es un prop que se utiliza en SidebarStyle */}
                <VerticalNavigation
                  selectedItem={this.state.selectedItem}
                  onSelect={this.handleOnSelect}
                >
                  <VerticalSection>
                    {links.map((link) => {
                      return (
                        <Link
                          to={link.path}
                          style={{
                            textDecoration: "none",
                          }}
                          key={link.id}
                        >
                          <VerticalItem
                            name={`item-${link.id}`}
                            label={link.text}
                            onClick={handleSidebar}
                          />
                        </Link>
                      );
                    })}
                    {/*<VerticalItem name="item-1" label="Home" />
                    <VerticalItem name="item-2" label="About" />
                    <VerticalItem name="item-3" label="Products" />
                    <VerticalItem name="item-4" label="Contact" />
                    <VerticalItem name="item-5" label="Cart" />*/}
                  </VerticalSection>
                </VerticalNavigation>
              </SidebarWrapper>
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Sidebar;
