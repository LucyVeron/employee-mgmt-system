import { Button, ButtonGroup } from "@mui/material";
import React from "react";

export default function Status() {
  const [selected, setSelected] = React.useState("Added");
  const labels = ["Added", "In Check", "Approved", "Active", "Inactive"];

  const handleClick = (event: any) => {
    setSelected(event.target.value);
  };

  return (
    <ButtonGroup>
      {labels.map((label: string, index: number) => (
        <Button
          key={label}
          value={label}
          variant={selected === label ? "contained" : "outlined"}
          onClick={handleClick}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
