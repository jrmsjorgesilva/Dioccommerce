"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("./components/store");
var routes_1 = require("./routes");
var core_1 = require("@material-ui/core/");
var Header_1 = require("./components/Header");
var App = function () {
    var localCart = JSON.parse(localStorage.getItem("dioshopping: cart") || "");
    if (!localCart) {
        store_1["default"].dispatch({ type: "CHANGE_CART", localCart: localCart });
    }
    return (<react_redux_1.Provider store={store_1["default"]}>
      <core_1.Container maxWidth="xl">
        <react_router_dom_1.BrowserRouter>
          <Header_1["default"] />
          <routes_1["default"] />
        </react_router_dom_1.BrowserRouter>
      </core_1.Container>
    </react_redux_1.Provider>);
};
exports["default"] = App;
