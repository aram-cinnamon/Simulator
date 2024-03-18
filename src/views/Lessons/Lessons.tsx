import styled from "styled-components";
import { FC } from "react";
import { PageHeading } from "../../ui/PageHeading/PageHeading";
import { UnderConstruction } from "../../components/UnderConstruction/UnderConstruction";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex-grow: 1;
`;

export const Lessons: FC = () => {
  return (
    <Wrap>
      <PageHeading
        backgroundType="pink-1"
        markerText="Lessons 1-5"
        heading="Simulator lessons"
        description="The simulator has been produced by a group of software engineers at Bloomberg in association with FIRST UK. It's simple solve every."
      />
      <UnderConstruction title="Lessons page under construction" />
    </Wrap>
  );
};
