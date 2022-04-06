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
  FederalVotesIcon,
  FeedIcon,
  FocusIcon,
  ForbiddenIcon,
  FormIcon,
  GlobiLogoIcon,
  HeadingIcon,
  HtmlEmbedIcon,
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
  LongformIcon,
  MaterialBoxIcon,
  MeteoMapIcon,
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
  RetireIcon,
  RevertIcon,
  RotateBackIcon,
  RotateForwardIcon,
  SaveAndLeaveIcon,
  SaveIcon,
  SchorschLogoIcon,
  SearchIcon,
  SettingsIcon,
  SpinnerIcon,
  SuccessIcon,
  TVIcon,
  TableHeadIcon,
  TableIcon,
  TableWidthIcon,
  TeaserIcon,
  TextboxIcon,
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

export default {
  title: "Icon",
};

/* MODIFIER */
export const SuccessModifier = () => <UpdateIcon modifier="success" />;
export const DangerModifier = () => <UpdateIcon modifier="danger" />;
export const InfoModifier = () => <UpdateIcon modifier="info" />;

export const WithAltText = () => <TwitterIcon alt="A little bird" />;

/* ICONS*/
export const AddColumn = () => <AddColumnIcon />;
export const AddRow = () => <AddRowIcon />;
export const ArrowDown = () => <ArrowDownIcon />;
export const ArrowUp = () => <ArrowUpIcon />;
export const Article = () => <ArticleIcon />;
export const Audio = () => <AudioIcon />;
export const AudioFeed = () => <AudioFeedIcon />;
export const AudioGallery = () => <AudioGalleryIcon />;
export const Audioeditor = () => <AudioeditorIcon />;
export const Bold = () => <BoldIcon />;
export const CHMap = () => <CHMapIcon />;
export const Caret = () => <CaretIcon />;
export const Check = () => <CheckIcon />;
export const ChecklistFailed = () => <ChecklistFailedIcon />;
export const ChecklistPassed = () => <ChecklistPassedIcon />;
export const Checkmark = () => <CheckmarkIcon />;
export const Close = () => <CloseIcon />;
export const Comment = () => <CommentIcon />;
export const Copy = () => <CopyIcon />;
export const Crop = () => <CropIcon />;
export const Danger = () => <DangerIcon />;
export const Datawrapper = () => <DatawrapperIcon />;
export const DeleteColumn = () => <DeleteColumnIcon />;
export const DeleteRow = () => <DeleteRowIcon />;
export const DropAdd = () => <DropAddIcon />;
export const DropDelete = () => <DropDeleteIcon />;
export const DropDown = () => <DropDownIcon />;
export const DropUp = () => <DropUpIcon />;
export const EditArticle = () => <EditArticleIcon />;
export const EditTickerItem = () => <EditTickerItemIcon />;
export const Edith = () => <EdithIcon />;
export const Empty = () => <EmptyIcon />;
export const Error = () => <ErrorIcon />;
export const ExclamationMark = () => <ExclamationMarkIcon />;
export const ExternalLink = () => <ExternalLinkIcon />;
export const Facebook = () => <FacebookIcon />;
export const FederalVotes = () => <FederalVotesIcon />;
export const Feed = () => <FeedIcon />;
export const Focus = () => <FocusIcon />;
export const Forbidden = () => <ForbiddenIcon />;
export const Form = () => <FormIcon />;
export const GlobiLogo = () => <GlobiLogoIcon />;
export const Heading = () => <HeadingIcon />;
export const HtmlEmbed = () => <HtmlEmbedIcon />;
export const Image = () => <ImageIcon />;
export const ImageGallery = () => <ImageGalleryIcon />;
export const ImportImage = () => <ImportImageIcon />;
export const Instagram = () => <InstagramIcon />;
export const Invisible = () => <InvisibleIcon />;
export const Italic = () => <ItalicIcon />;
export const Link = () => <LinkIcon />;
export const Linkbox = () => <LinkboxIcon />;
export const Live = () => <LiveIcon />;
export const Liveticker = () => <LivetickerIcon />;
export const Longform = () => <LongformIcon />;
export const MaterialBox = () => <MaterialBoxIcon />;
export const MeteoMap = () => <MeteoMapIcon />;
export const NewsGraphic = () => <NewsGraphicIcon />;
export const Opinion = () => <OpinionIcon />;
export const OrderedList = () => <OrderedListIcon />;
export const People = () => <PeopleIcon />;
export const Plus = () => <PlusIcon />;
export const PlusCircle = () => <PlusCircleIcon />;
export const Podcast = () => <PodcastIcon />;
export const PolisMap = () => <PolisMapIcon />;
export const Poll = () => <PollIcon />;
export const Preview = () => <PreviewIcon />;
export const Publish = () => <PublishIcon />;
export const PublishAndLeave = () => <PublishAndLeaveIcon />;
export const Push = () => <PushIcon />;
export const QuestionMark = () => <QuestionMarkIcon />;
export const Quote = () => <QuoteIcon />;
export const RawHTML = () => <RawHTMLIcon />;
export const Retire = () => <RetireIcon />;
export const Revert = () => <RevertIcon />;
export const RotateBack = () => <RotateBackIcon />;
export const RotateForward = () => <RotateForwardIcon />;
export const Save = () => <SaveIcon />;
export const SaveandLeave = () => <SaveAndLeaveIcon />;
export const SchorschLogo = () => <SchorschLogoIcon />;
export const Search = () => <SearchIcon />;
export const Settings = () => <SettingsIcon />;
export const Spinner = () => <SpinnerIcon />;
export const SpinnerWithBrandColor = () => <SpinnerIcon modifier="branding" />;
export const Success = () => <SuccessIcon />;
export const TV = () => <TVIcon />;
export const Table = () => <TableIcon />;
export const TableHead = () => <TableHeadIcon />;
export const TableWidth = () => <TableWidthIcon />;
export const Teaser = () => <TeaserIcon />;
export const Textbox = () => <TextboxIcon />;
export const Time = () => <TimeIcon />;
export const Trashcan = () => <TrashcanIcon />;
export const Twitter = () => <TwitterIcon />;
export const Unlink = () => <UnlinkIcon />;
export const UnorderedList = () => <UnorderedListIcon />;
export const Update = () => <UpdateIcon />;
export const Video = () => <VideoIcon />;
export const VideoFeed = () => <VideoFeedIcon />;
export const VideoGallery = () => <VideoGalleryIcon />;
export const Videoeditor = () => <VideoeditorIcon />;
export const Warning = () => <WarningIcon />;
export const ZoomIn = () => <ZoomInIcon />;
export const ZoomOut = () => <ZoomOutIcon />;
