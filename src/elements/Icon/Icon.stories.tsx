import React from "react";
import {
  UpdateIcon,
  ExclamationMarkIcon,
  QuestionMarkIcon,
  ErrorIcon,
  ChecklistFailedIcon,
  ChecklistPassedIcon,
  CloseIcon,
  CopyIcon,
  GlobiLogoIcon,
  LivetickerIcon,
  HtmlEmbedIcon,
  ImageIcon,
  LinkboxIcon,
  PlusIcon,
  PublishIcon,
  PublishAndLeaveIcon,
  SaveAndLeaveIcon,
  SaveIcon,
  RetireIcon,
  SchorschLogoIcon,
  SearchIcon,
  SettingsIcon,
  TextboxIcon,
  CheckIcon,
  ImageGalleryIcon,
  DatawrapperIcon,
  VideoGalleryIcon,
  AudioGalleryIcon,
  PeopleIcon,
  TwitterIcon,
  EdithIcon,
  CaretIcon,
  SpinnerIcon,
} from "./Icon";

export default {
  title: "Icon",
};

/* MODIFIER */
export const SuccessModifer = () => <UpdateIcon modifier="success" />;
export const DangerModifer = () => <UpdateIcon modifier="danger" />;
export const InfoModifer = () => <UpdateIcon modifier="info" />;

/* ICONS*/
export const Update = () => <UpdateIcon />;
export const ExclamationMark = () => <ExclamationMarkIcon />;
export const QuestionMark = () => <QuestionMarkIcon />;
export const Error = () => <ErrorIcon />;
export const ChecklistFailed = () => <ChecklistFailedIcon />;
export const ChecklistPassed = () => <ChecklistPassedIcon />;
export const Close = () => <CloseIcon />;
export const Copy = () => <CopyIcon />;
export const GlobiLogo = () => <GlobiLogoIcon />;
export const HtmlEmbed = () => <HtmlEmbedIcon />;
export const Liveticker = () => <LivetickerIcon />;
export const Image = () => <ImageIcon />;
export const Linkbox = () => <LinkboxIcon />;
export const Plus = () => <PlusIcon />;
export const Publish = () => <PublishIcon />;
export const PublishAndLeave = () => <PublishAndLeaveIcon />;
export const Save = () => <SaveIcon />;
export const Retire = () => <RetireIcon />;
export const SchorschLogo = () => <SchorschLogoIcon />;
export const Search = () => <SearchIcon />;
export const Settings = () => <SettingsIcon />;
export const Textbox = () => <TextboxIcon />;
export const Check = () => <CheckIcon />;
export const Datawrapper = () => <DatawrapperIcon />;
export const ImageGallery = () => <ImageGalleryIcon />;
export const VideoGallery = () => <VideoGalleryIcon />;
export const AudioGallery = () => <AudioGalleryIcon />;
export const People = () => <PeopleIcon />;
export const Twitter = () => <TwitterIcon />;
export const Edith = () => <EdithIcon />;
export const Caret = () => <CaretIcon />;
export const Spinner = () => <SpinnerIcon />;
export const SpinnerWithBrandColor = () => <SpinnerIcon modifier="branding" />;

//export const Settings = () => <SettingsIcon />;
