import { Button, ButtonGroup } from "@mui/material";
import React from "react";

export default function Status(props: any) {
  const [selected, setSelected] = React.useState("Added");
  const labels = ["Added", "In Check", "Approved", "Active", "Inactive"];

  const handleClick = (event: any, id: number) => {
    setSelected(event.target.value);
    props.change(event.target.value, id);
  };

  return (
    <ButtonGroup>
      {labels.map((label: string, index: number) => (
        <Button
          key={label}
          value={label}
          variant={selected === label ? "contained" : "outlined"}
          onClick={(event) => handleClick(event, props.employee.id)}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
