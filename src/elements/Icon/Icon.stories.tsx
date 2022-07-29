import React from "react";
import {
  AddColumnIcon,
  AddRowIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ArticleIcon,
  AudioFeedIcon,
  AudioGalleryIcon,
  AudioIcon,
  AudioeditorIcon,
  BoldIcon,
  CHMapIcon,
  CaretIcon,
  CheckIcon,
  ChecklistFailedIcon,
  ChecklistPassedIcon,
  CheckmarkIcon,
  CloseIcon,
  CommentIcon,
  CopyIcon,
  CropIcon,
  DangerIcon,
  DatawrapperIcon,
  DeleteColumnIcon,
  DeleteRowIcon,
  DropAddIcon,
  DropDeleteIcon,
  DropDownIcon,
  DropUpIcon,
  EditArticleIcon,
  EditTickerItemIcon,
  EdithIcon,
  EmptyIcon,
  ErrorIcon,
  ExclamationMarkIcon,
  ExternalLinkIcon,
  FacebookIcon,
  FavoriteIcon,
  FavoriteRemovedIcon,
  FederalVotesIcon,
  FeedIcon,
  FocusIcon,
  ForbiddenIcon,
  FormIcon,
  GlobiLogoIcon,
  HeadingIcon,
  HtmlEmbedIcon,
  IconModifiers,
  ImageGalleryIcon,
  ImageIcon,
  ImportImageIcon,
  InstagramIcon,
  InvisibleIcon,
  ItalicIcon,
  LinkIcon,
  LinkboxIcon,
  LiveIcon,
  LivetickerIcon,
  LockIcon,
  LongformIcon,
  MaterialBoxIcon,
  MegaphonIcon,
  MeteoMapIcon,
  ModerateIcon,
  NewsGraphicIcon,
  OpinionIcon,
  OrderedListIcon,
  PeopleIcon,
  PlusCircleIcon,
  PlusIcon,
  PodcastIcon,
  PolisMapIcon,
  PollIcon,
  PreviewIcon,
  PublishAndLeaveIcon,
  PublishIcon,
  PushIcon,
  QuestionMarkIcon,
  QuoteIcon,
  RawHTMLIcon,
  RemoveIcon,
  ReplyIcon,
  RespondIcon,
  RetireIcon,
  RevertIcon,
  ReviewIcon,
  ReviewRemovedIcon,
  RotateBackIcon,
  RotateForwardIcon,
  SaveAndLeaveIcon,
  SaveIcon,
  SchorschLogoIcon,
  SearchIcon,
  SettingsIcon,
  SortArrowsIcon,
  SpinnerIcon,
  SuccessIcon,
  TVIcon,
  TableHeadIcon,
  TableIcon,
  TableWidthIcon,
  TeaserIcon,
  TextboxIcon,
  ThreadIcon,
  TimeIcon,
  TrashcanIcon,
  TwitterIcon,
  UnlinkIcon,
  UnorderedListIcon,
  UpdateIcon,
  VideoFeedIcon,
  VideoGalleryIcon,
  VideoIcon,
  VideoeditorIcon,
  WarningIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "./Icon";

import '../../foundation/globals.scss';

export default {
  title: "Icon",
  args: {
    modifier: undefined,
    alt: undefined,
  },
  argTypes: {
    modifier: {
      options: ["", ...IconModifiers],
      control: { type: "multi-select" },
    },
    alt: {
      control: {
        type: "text",
      },
    },
  },
};

/* MODIFIER */
const ModifierTemplate = (args) => <ExclamationMarkIcon {...args} />;

export const SuccessModifier = ModifierTemplate.bind({});
SuccessModifier.args = {
  modifier: "success",
};
export const DangerModifier = ModifierTemplate.bind({});
DangerModifier.args = {
  modifier: "danger",
};
export const InfoModifier = ModifierTemplate.bind({});
InfoModifier.args = {
  modifier: "info",
};
export const SmallModifier = ModifierTemplate.bind({});
SmallModifier.args = {
  modifier: "small",
};
export const TinyModifier = ModifierTemplate.bind({});
TinyModifier.args = {
  modifier: "tiny",
};
export const RotatableModifier = ModifierTemplate.bind({});
RotatableModifier.args = {
  modifier: "rotatable",
};
export const Rotated45Modifier = ModifierTemplate.bind({});
Rotated45Modifier.args = {
  modifier: "rotated-45",
};
export const Rotated180Modifier = ModifierTemplate.bind({});
Rotated180Modifier.args = {
  modifier: "rotated-180",
};
export const MultipleModifiers = ModifierTemplate.bind({});
MultipleModifiers.args = {
  modifier: ["info", "small"],
};

/* ALT-TEXT */
export const ExampleWithAltText = (args) => <TwitterIcon {...args} />;
ExampleWithAltText.args = {
  alt: "A little bird",
};

/* ICONS */
export const AddColumn = (args) => <AddColumnIcon {...args} />;
export const AddRow = (args) => <AddRowIcon {...args} />;
export const ArrowDown = (args) => <ArrowDownIcon {...args} />;
export const ArrowUp = (args) => <ArrowUpIcon {...args} />;
export const Article = (args) => <ArticleIcon {...args} />;
export const Audio = (args) => <AudioIcon {...args} />;
export const AudioFeed = (args) => <AudioFeedIcon {...args} />;
export const AudioGallery = (args) => <AudioGalleryIcon {...args} />;
export const Audioeditor = (args) => <AudioeditorIcon {...args} />;
export const Bold = (args) => <BoldIcon {...args} />;
export const CHMap = (args) => <CHMapIcon {...args} />;
export const Caret = (args) => <CaretIcon {...args} />;
export const Check = (args) => <CheckIcon {...args} />;
export const ChecklistFailed = (args) => <ChecklistFailedIcon {...args} />;
export const ChecklistPassed = (args) => <ChecklistPassedIcon {...args} />;
export const Checkmark = (args) => <CheckmarkIcon {...args} />;
export const Close = (args) => <CloseIcon {...args} />;
export const Comment = (args) => <CommentIcon {...args} />;
export const Copy = (args) => <CopyIcon {...args} />;
export const Crop = (args) => <CropIcon {...args} />;
export const Danger = (args) => <DangerIcon {...args} />;
export const Datawrapper = (args) => <DatawrapperIcon {...args} />;
export const DeleteColumn = (args) => <DeleteColumnIcon {...args} />;
export const DeleteRow = (args) => <DeleteRowIcon {...args} />;
export const DropAdd = (args) => <DropAddIcon {...args} />;
export const DropDelete = (args) => <DropDeleteIcon {...args} />;
export const DropDown = (args) => <DropDownIcon {...args} />;
export const DropUp = (args) => <DropUpIcon {...args} />;
export const EditArticle = (args) => <EditArticleIcon {...args} />;
export const EditTickerItem = (args) => <EditTickerItemIcon {...args} />;
export const Edith = (args) => <EdithIcon {...args} />;
export const Empty = (args) => <EmptyIcon {...args} />;
export const Error = (args) => <ErrorIcon {...args} />;
export const ExclamationMark = (args) => <ExclamationMarkIcon {...args} />;
export const ExternalLink = (args) => <ExternalLinkIcon {...args} />;
export const Facebook = (args) => <FacebookIcon {...args} />;
export const Favorite = (args) => <FavoriteIcon {...args} />;
export const FavoriteRemoved = (args) => <FavoriteRemovedIcon {...args} />;
export const FederalVotes = (args) => <FederalVotesIcon {...args} />;
export const Feed = (args) => <FeedIcon {...args} />;
export const Focus = (args) => <FocusIcon {...args} />;
export const Forbidden = (args) => <ForbiddenIcon {...args} />;
export const Form = (args) => <FormIcon {...args} />;
export const GlobiLogo = (args) => <GlobiLogoIcon {...args} />;
export const Heading = (args) => <HeadingIcon {...args} />;
export const HtmlEmbed = (args) => <HtmlEmbedIcon {...args} />;
export const Image = (args) => <ImageIcon {...args} />;
export const ImageGallery = (args) => <ImageGalleryIcon {...args} />;
export const ImportImage = (args) => <ImportImageIcon {...args} />;
export const Instagram = (args) => <InstagramIcon {...args} />;
export const Invisible = (args) => <InvisibleIcon {...args} />;
export const Italic = (args) => <ItalicIcon {...args} />;
export const Link = (args) => <LinkIcon {...args} />;
export const Linkbox = (args) => <LinkboxIcon {...args} />;
export const Live = (args) => <LiveIcon {...args} />;
export const Liveticker = (args) => <LivetickerIcon {...args} />;
export const Lock = (args) => <LockIcon {...args} />;
export const Longform = (args) => <LongformIcon {...args} />;
export const MaterialBox = (args) => <MaterialBoxIcon {...args} />;
export const Megaphon = (args) => <MegaphonIcon {...args} />;
export const MeteoMap = (args) => <MeteoMapIcon {...args} />;
export const Moderate = (args) => <ModerateIcon {...args} />;
export const NewsGraphic = (args) => <NewsGraphicIcon {...args} />;
export const Opinion = (args) => <OpinionIcon {...args} />;
export const OrderedList = (args) => <OrderedListIcon {...args} />;
export const People = (args) => <PeopleIcon {...args} />;
export const Plus = (args) => <PlusIcon {...args} />;
export const PlusCircle = (args) => <PlusCircleIcon {...args} />;
export const Podcast = (args) => <PodcastIcon {...args} />;
export const PolisMap = (args) => <PolisMapIcon {...args} />;
export const Poll = (args) => <PollIcon {...args} />;
export const Preview = (args) => <PreviewIcon {...args} />;
export const Publish = (args) => <PublishIcon {...args} />;
export const PublishAndLeave = (args) => <PublishAndLeaveIcon {...args} />;
export const Push = (args) => <PushIcon {...args} />;
export const QuestionMark = (args) => <QuestionMarkIcon {...args} />;
export const Quote = (args) => <QuoteIcon {...args} />;
export const RawHTML = (args) => <RawHTMLIcon {...args} />;
export const Remove = (args) => <RemoveIcon {...args} />;
export const Reply = (args) => <ReplyIcon {...args} />;
export const Respond = (args) => <RespondIcon {...args} />;
export const Retire = (args) => <RetireIcon {...args} />;
export const Revert = (args) => <RevertIcon {...args} />;
export const Review = (args) => <ReviewIcon {...args} />;
export const ReviewRemoved = (args) => <ReviewRemovedIcon {...args} />;
export const RotateBack = (args) => <RotateBackIcon {...args} />;
export const RotateForward = (args) => <RotateForwardIcon {...args} />;
export const Save = (args) => <SaveIcon {...args} />;
export const SaveandLeave = (args) => <SaveAndLeaveIcon {...args} />;
export const SchorschLogo = (args) => <SchorschLogoIcon {...args} />;
export const Search = (args) => <SearchIcon {...args} />;
export const Settings = (args) => <SettingsIcon {...args} />;
export const SortArrows = (args) => <SortArrowsIcon {...args} />;
export const Spinner = (args) => <SpinnerIcon {...args} />;
export const SpinnerWithBrandColor = (args) => <SpinnerIcon {...args} />;
SpinnerWithBrandColor.args = { modifier: "branding" };
export const Success = (args) => <SuccessIcon {...args} />;
export const TV = (args) => <TVIcon {...args} />;
export const Table = (args) => <TableIcon {...args} />;
export const TableHead = (args) => <TableHeadIcon {...args} />;
export const TableWidth = (args) => <TableWidthIcon {...args} />;
export const Teaser = (args) => <TeaserIcon {...args} />;
export const Textbox = (args) => <TextboxIcon {...args} />;
export const Thread = (args) => <ThreadIcon {...args} />;
export const Time = (args) => <TimeIcon {...args} />;
export const Trashcan = (args) => <TrashcanIcon {...args} />;
export const Twitter = (args) => <TwitterIcon {...args} />;
export const Unlink = (args) => <UnlinkIcon {...args} />;
export const UnorderedList = (args) => <UnorderedListIcon {...args} />;
export const Update = (args) => <UpdateIcon {...args} />;
export const Video = (args) => <VideoIcon {...args} />;
export const VideoFeed = (args) => <VideoFeedIcon {...args} />;
export const VideoGallery = (args) => <VideoGalleryIcon {...args} />;
export const Videoeditor = (args) => <VideoeditorIcon {...args} />;
export const Warning = (args) => <WarningIcon {...args} />;
export const ZoomIn = (args) => <ZoomInIcon {...args} />;
export const ZoomOut = (args) => <ZoomOutIcon {...args} />;
