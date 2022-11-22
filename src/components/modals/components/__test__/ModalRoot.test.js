import React from "react";
import {render, screen} from '@testing-library/react'
import ModalRoot from "../ModalRoot";

it("renders without crashing", ()=>{
    render(
        <ModalRoot  />
    );
    expect(screen.getByTestId("modal-root")).toBeTruthy();
});

