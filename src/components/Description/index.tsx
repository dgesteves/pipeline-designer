import { PIPELINE_DESIGNER } from "../../constants";
import { Text } from "./styles";

export default function Description() {
  return (
    <Text
      tabIndex={0}
      role="contentinfo"
      aria-label="Lorem ipsum text as placeholder"
    >
      Lorem ipsum dolor sit amet, <span>{PIPELINE_DESIGNER}</span> consectetur
      adipisicing elit. Amet consequuntur cum debitis dignissimos ducimus minima
      obcaecati praesentium, reiciendis <span>{PIPELINE_DESIGNER}</span> saepe
      veritatis voluptas voluptatibus? Blanditiis ipsam iste magnam neque nulla
      totam!
    </Text>
  );
}
