import { Heading, Main, Section } from "./styles";
import { PIPELINE_DESIGNER } from "../constants";
import Description from "../components/Description";
import Designer from "../components/Designer";
import Pipeline from "../components/Pipeline";

export default function PipelinePage() {
  return (
    <Main>
      <Heading tabIndex={0} role="heading" aria-label="page main heading">
        {PIPELINE_DESIGNER}
      </Heading>
      <Description />
      <Section>
        <Designer />
        <Pipeline />
      </Section>
    </Main>
  );
}
