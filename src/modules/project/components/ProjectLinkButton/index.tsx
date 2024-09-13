import React, { FC } from "react";
import Button from "components/Button";
import { TFunction } from "i18next";

interface ProjectLinkButtonProps {
  href: string;
  translate: TFunction;
}

const ProjectLinkButton: FC<ProjectLinkButtonProps> = ({ href, translate }) => (
  <Button title={translate("projectLink")} href={href} />
);

export default ProjectLinkButton;
