import { DESIGNER_OPTIONS } from "../../constants";
import Draggable from "../../assets/icons/Draggable";
import { DesignerSection, Option } from "./styles";
import { DragEvent, useCallback } from "react";
import { TName } from "../../services/types";

export default function Designer() {
  const onDragStart = useCallback(
    (e: DragEvent<HTMLDivElement>, name: TName) => {
      e.dataTransfer.setData("name", name);
    },
    []
  );

  return (
    <DesignerSection data-testid="designer-test">
      {DESIGNER_OPTIONS.map(({ name, id }) => (
        <Option
          data-testid={`draggable-option`}
          key={id}
          draggable
          onDragStart={(e) => onDragStart(e, name)}
        >
          <p>{name}</p>
          <Draggable />
        </Option>
      ))}
    </DesignerSection>
  );
}
