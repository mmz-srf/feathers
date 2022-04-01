import React from "react";
import classNames from "classnames";

import { IconProps } from "./Icon.types";

import Update from "./Images/Update.svg";
import ExclamationMark from "./Images/ExclamationMark.svg";
import QuestionMark from "./Images/QuestionMark.svg";
import Error from "./Images/Error.svg";
import ChecklistFailed from "./Images/ChecklistFailed.svg";
import ChecklistPassed from "./Images/ChecklistPassed.svg";
import Close from "./Images/Close.svg";
import Copy from "./Images/Copy.svg";
import GlobiLogo from "./Images/GlobiLogo.svg";
import HtmlEmbed from "./Images/HtmlEmbed.svg";
import Liveticker from "./Images/Liveticker.svg";
import Image from "./Images/Image.svg";
import Linkbox from "./Images/Linkbox.svg";
import Plus from "./Images/Plus.svg";
import Publish from "./Images/Publish.svg";
import PublishAndLeave from "./Images/PublishAndLeave.svg";
import SaveAndLeave from "./Images/SaveAndLeave.svg";
import Save from "./Images/Save.svg";
import Retire from "./Images/Retire.svg";
import SchorschLogo from "./Images/SchorschLogo.svg";
import Search from "./Images/Search.svg";
import Settings from "./Images/Settings.svg";
import Textbox from "./Images/Textbox.svg";
import Check from "./Images/Check.svg";
import Datawrapper from "./Images/Datawrapper.svg";
import ImageGallery from "./Images/ImageGallery.svg";
import VideoGallery from "./Images/VideoGallery.svg";
import AudioGallery from "./Images/AudioGallery.svg";
import People from "./Images/People.svg";


import "./Icon.scss";

const Icon: React.FC<IconProps> = ({ modifier, children }) => (
  <div
    data-testid="Icon"
    className={classNames("f-icon", {
      "f-icon--success": modifier === "success",
      "f-icon--danger": modifier === "danger",
      "f-icon--info": modifier === "info",
    })}
  >
    {children}
  </div>
);

export const UpdateIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Update />
  </Icon>
);

export const ExclamationMarkIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <ExclamationMark />
  </Icon>
);

export const QuestionMarkIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <QuestionMark />
  </Icon>
);

export const ErrorIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Error />
  </Icon>
);

export const ChecklistFailedIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <ChecklistFailed />
  </Icon>
);

export const ChecklistPassedIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <ChecklistPassed />
  </Icon>
);

export const CloseIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Close />
  </Icon>
);

export const CopyIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Copy />
  </Icon>
);

export const GlobiLogoIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <GlobiLogo />
  </Icon>
);

export const HtmlEmbedIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <HtmlEmbed />
  </Icon>
);

export const LivetickerIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Liveticker />
  </Icon>
);

export const ImageIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Image />
  </Icon>
);

export const LinkboxIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Linkbox />
  </Icon>
);

export const PlusIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Plus />
  </Icon>
);

export const PublishIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Publish />
  </Icon>
);

export const PublishAndLeaveIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <PublishAndLeave />
  </Icon>
);

export const SaveAndLeaveIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <SaveAndLeave />
  </Icon>
);

export const SaveIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Save />
  </Icon>
);

export const RetireIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Retire />
  </Icon>
);

export const SchorschLogoIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <SchorschLogo />
  </Icon>
);

export const SearchIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Search />
  </Icon>
);

export const SettingsIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Settings />
  </Icon>
);

export const TextboxIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Textbox />
  </Icon>
);

export const CheckIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Check />
  </Icon>
);

export const DatawrapperIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Datawrapper />
  </Icon>
);

export const ImageGalleryIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <ImageGallery />
  </Icon>
);

export const VideoGalleryIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <VideoGallery />
  </Icon>
);

export const AudioGalleryIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <AudioGallery />
  </Icon>
);

export const PeopleIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <People />
  </Icon>
);

export default Icon;
