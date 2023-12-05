import { render } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import ResData from "../../mocks/resCard.json";
import { fireEvent, screen } from "@testing-library/react";

it("Check that restaurant title loaded ", ()=> {
    render(
        <RestaurantCard resData={ResData}/> 
    );

    const resTitle  = screen.getByText("The Burger Company");
    expect(resTitle).toBeInTheDocument();
});

