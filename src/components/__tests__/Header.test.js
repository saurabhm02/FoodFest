import { render } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";

test("it should load the  login/sigin button in the header component", () => {
    const header = render(
        <BrowserRouter>
            <Provider store={store}>
                <Header/> 
            </Provider>
        </BrowserRouter>
    );
   const loginbutton = screen.getByRole("button", {name: "signin"});
   expect(loginbutton).toBeInTheDocument();
});

test("it should load the cart in the header component", () => {
    const header = render(
        <BrowserRouter>
            <Provider store={store}>
                <Header/> 
            </Provider>
        </BrowserRouter>
    );
   const cartItem = screen.getByText(/cart/);
   expect(cartItem).toBeInTheDocument();
});