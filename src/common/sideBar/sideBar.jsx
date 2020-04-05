import React from "react";

const SideBar = props => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem
  } = props;
  return (
    <div className="left-navigation">
      <ul className="list-group">
        {items.map(item => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "sidebar-list-item active"
                : "sidebar-list-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>{" "}
    </div>
  );
};
SideBar.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};
export default SideBar;
