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
import Twitter from "./Images/Twitter.svg";
import Edith from "./Images/Edith.svg";
import Caret from "./Images/Caret.svg";
import Spinner from "./Images/Spinner.svg";
import Checkmark from "./Images/Checkmark.svg";
import Trashcan from "./Images/Trashcan.svg";
import Danger from "./Images/Danger.svg";
import Warning from "./Images/Warning.svg";
import Success from "./Images/Success.svg";
import EditArticle from "./Images/EditArticle.svg";
import EditTickerItem from "./Images/EditTickerItem.svg";
import Revert from "./Images/Revert.svg";
import Forbidden from "./Images/Forbidden.svg";
import PlusCircle from "./Images/PlusCircle.svg";
import Preview from "./Images/Preview.svg";
import Podcast from "./Images/Podcast.svg";
import Focus from "./Images/Focus.svg";
import RotateBack from "./Images/RotateBack.svg";
import RotateForward from "./Images/RotateForward.svg";
import ZoomIn from "./Images/ZoomIn.svg";
import ZoomOut from "./Images/ZoomOut.svg";
import DropAdd from "./Images/DropAdd.svg";
import DropDown from "./Images/DropDown.svg";
import DropUp from "./Images/DropUp.svg";
import DropDelete from "./Images/DropDelete.svg";
import Audio from "./Images/Audio.svg";
import Video from "./Images/Video.svg";
import MeteoMap from "./Images/MeteoMap.svg";
import Videoeditor from "./Images/Videoeditor.svg";
import Audioeditor from "./Images/Audioeditor.svg";
import Article from "./Images/Article.svg";
import AudioFeed from "./Images/AudioFeed.svg";
import Feed from "./Images/Feed.svg";
import Teaser from "./Images/Teaser.svg";
import VideoFeed from "./Images/VideoFeed.svg";
import Empty from "./Images/Empty.svg";
import Opinion from "./Images/Opinion.svg";
import Longform from "./Images/Longform.svg";
import Live from "./Images/Live.svg";
import TV from "./Images/TV.svg";
import Facebook from "./Images/Facebook.svg";
import Time from "./Images/Time.svg";
import Invisible from "./Images/Invisible.svg";
import Heading from "./Images/Heading.svg";
import Bold from "./Images/Bold.svg";
import Italic from "./Images/Italic.svg";
import UnorderedList from "./Images/UnorderedList.svg";
import OrderedList from "./Images/OrderedList.svg";
import Link from "./Images/Link.svg";
import Unlink from "./Images/Unlink.svg";
import Comment from "./Images/Comment.svg";
import PolisMap from "./Images/PolisMap.svg";
import FederalVotes from "./Images/FederalVotes.svg";
import CHMap from "./Images/CHMap.svg";
import Crop from "./Images/Crop.svg";
import Push from "./Images/Push.svg";
import MaterialBox from "./Images/MaterialBox.svg";
import Quote from "./Images/Quote.svg";
import ExternalLink from "./Images/ExternalLink.svg";
import ImportImage from "./Images/ImportImage.svg";
import RawHTML from "./Images/RawHTML.svg";
import Form from "./Images/Form.svg";
import NewsGraphic from "./Images/NewsGraphic.svg";
import Poll from "./Images/Poll.svg";
import Table from "./Images/Table.svg";
import AddRow from "./Images/AddRow.svg";
import DeleteRow from "./Images/DeleteRow.svg";
import AddColumn from "./Images/AddColumn.svg";
import DeleteColumn from "./Images/DeleteColumn.svg";
import TableHead from "./Images/TableHead.svg";
import TableWidth from "./Images/TableWidth.svg";
import Instagram from "./Images/Instagram.svg";
import ArrowDown from "./Images/ArrowDown.svg";
import ArrowUp from "./Images/ArrowUp.svg";

import "./Icon.scss";

const Icon: React.FC<IconProps> = ({ modifier, noStroke, children }) => (
  <div
    data-testid="Icon"
    className={classNames("f-icon", {
      "f-icon--success": modifier === "success",
      "f-icon--danger": modifier === "danger",
      "f-icon--info": modifier === "info",
      "f-icon--no-stroke": noStroke,
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

export const TwitterIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Twitter",
}) => (
  <Icon {...{ modifier }}>
    <Twitter title={alt} />
  </Icon>
);

export const EdithIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Edith />
  </Icon>
);

export const CaretIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Caret />
  </Icon>
);

export const SpinnerIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    {modifier && modifier === "branding" ? (
      <Spinner className="f-icon-spinner f-icon-spinner--with-brand-color" />
    ) : (
      <Spinner />
    )}
  </Icon>
);

export const CheckmarkIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Checkmark />
  </Icon>
);

export const TrashcanIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Trashcan />
  </Icon>
);

export const DangerIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon noStroke={true} {...{ modifier }}>
    <Danger />
  </Icon>
);

export const WarningIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon noStroke={true} {...{ modifier }}>
    <Warning />
  </Icon>
);

export const SuccessIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon noStroke={true} {...{ modifier }}>
    <Success />
  </Icon>
);

export const EditArticleIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <EditArticle />
  </Icon>
);

export const EditTickerItemIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <EditTickerItem />
  </Icon>
);

export const RevertIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Revert />
  </Icon>
);

export const ForbiddenIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Forbidden />
  </Icon>
);

export const PlusCircleIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <PlusCircle />
  </Icon>
);

export const PreviewIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Preview />
  </Icon>
);

export const PodcastIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Podcast />
  </Icon>
);

export const FocusIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Focus />
  </Icon>
);

export const RotateBackIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <RotateBack />
  </Icon>
);

export const RotateForwardIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <RotateForward />
  </Icon>
);

export const ZoomInIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <ZoomIn />
  </Icon>
);

export const ZoomOutIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <ZoomOut />
  </Icon>
);

export const DropAddIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <DropAdd />
  </Icon>
);

export const DropDownIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <DropDown />
  </Icon>
);

export const DropUpIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <DropUp />
  </Icon>
);

export const DropDeleteIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <DropDelete />
  </Icon>
);

export const AudioIcon: React.FC<IconProps> = ({ modifier, alt = "Audio" }) => (
  <Icon noStroke={true} {...{ modifier }}>
    <Audio title={alt} />
  </Icon>
);

export const VideoIcon: React.FC<IconProps> = ({ modifier, alt = "Video" }) => (
  <Icon noStroke={true} {...{ modifier }}>
    <Video title={alt} />
  </Icon>
);

export const MeteoMapIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <MeteoMap />
  </Icon>
);

export const VideoeditorIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Videoeditor />
  </Icon>
);

export const AudioeditorIcon: React.FC<IconProps> = ({ modifier }) => (
  <Icon {...{ modifier }}>
    <Audioeditor />
  </Icon>
);

export const ArticleIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Article",
}) => (
  <Icon {...{ modifier }}>
    <Article title={alt} />
  </Icon>
);

export const AudioFeedIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Audio-Feed",
}) => (
  <Icon {...{ modifier }}>
    <AudioFeed title={alt} />
  </Icon>
);

export const FeedIcon: React.FC<IconProps> = ({ modifier, alt = "Feed" }) => (
  <Icon {...{ modifier }}>
    <Feed title={alt} />
  </Icon>
);

export const TeaserIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Teaser",
}) => (
  <Icon {...{ modifier }}>
    <Teaser title={alt} />
  </Icon>
);

export const VideoFeedIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Video-Feed",
}) => (
  <Icon {...{ modifier }}>
    <VideoFeed title={alt} />
  </Icon>
);

export const EmptyIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <Empty title={alt} />
  </Icon>
);

export const OpinionIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <Opinion title={alt} />
  </Icon>
);

export const LongformIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <Longform title={alt} />
  </Icon>
);

export const LiveIcon: React.FC<IconProps> = ({ modifier, alt = "Live" }) => (
  <Icon {...{ modifier }}>
    <Live title={alt} />
  </Icon>
);

export const TVIcon: React.FC<IconProps> = ({ modifier, alt = "TV" }) => (
  <Icon {...{ modifier }}>
    <TV title={alt} />
  </Icon>
);

export const FacebookIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Facebook",
}) => (
  <Icon {...{ modifier }}>
    <Facebook title={alt} />
  </Icon>
);

export const TimeIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <Time title={alt} />
  </Icon>
);

export const InvisibleIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <Invisible title={alt} />
  </Icon>
);

export const HeadingIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Überschrift",
}) => (
  <Icon {...{ modifier }}>
    <Heading title={alt} />
  </Icon>
);

export const BoldIcon: React.FC<IconProps> = ({ modifier, alt = "Fett" }) => (
  <Icon {...{ modifier }}>
    <Bold title={alt} />
  </Icon>
);

export const ItalicIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Kursiv",
}) => (
  <Icon {...{ modifier }}>
    <Italic title={alt} />
  </Icon>
);

export const UnorderedListIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Liste mit Punkten",
}) => (
  <Icon {...{ modifier }}>
    <UnorderedList title={alt} />
  </Icon>
);

export const OrderedListIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Nummerierte Liste",
}) => (
  <Icon {...{ modifier }}>
    <OrderedList title={alt} />
  </Icon>
);

export const LinkIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Verlinkung erstellen",
}) => (
  <Icon {...{ modifier }}>
    <Link title={alt} />
  </Icon>
);

export const UnlinkIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Verlinkung aufheben",
}) => (
  <Icon {...{ modifier }}>
    <Unlink title={alt} />
  </Icon>
);

export const CommentIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Kommentare",
}) => (
  <Icon {...{ modifier }}>
    <Comment title={alt} />
  </Icon>
);

export const PolisMapIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <PolisMap title={alt} />
  </Icon>
);

export const FederalVotesIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <FederalVotes title={alt} />
  </Icon>
);

export const CHMapIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <CHMap title={alt} />
  </Icon>
);

export const CropIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <Crop title={alt} />
  </Icon>
);

export const PushIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <Push title={alt} />
  </Icon>
);

export const MaterialBoxIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Materialbox",
}) => (
  <Icon {...{ modifier }}>
    <MaterialBox title={alt} />
  </Icon>
);

export const QuoteIcon: React.FC<IconProps> = ({ modifier, alt = "Zitat" }) => (
  <Icon {...{ modifier }}>
    <Quote title={alt} />
  </Icon>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <ExternalLink title={alt} />
  </Icon>
);

export const ImportImageIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Bild importieren",
}) => (
  <Icon {...{ modifier }}>
    <ImportImage title={alt} />
  </Icon>
);

export const ArrowDownIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <ArrowDown />
  </Icon>
);

export const ArrowUpIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <ArrowUp />
  </Icon>
);

export const RawHTMLIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <RawHTML title={alt} />
  </Icon>
);

export const FormIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Formular",
}) => (
  <Icon {...{ modifier }}>
    <Form title={alt} />
  </Icon>
);

export const NewsGraphicIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <NewsGraphic title={alt} />
  </Icon>
);

export const PollIcon: React.FC<IconProps> = ({ modifier, alt = "Poll" }) => (
  <Icon {...{ modifier }}>
    <Poll title={alt} />
  </Icon>
);

export const TableIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Tabelle",
}) => (
  <Icon {...{ modifier }}>
    <Table title={alt} />
  </Icon>
);

export const AddRowIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Zeile hinzufügen",
}) => (
  <Icon {...{ modifier }}>
    <AddRow title={alt} />
  </Icon>
);

export const DeleteRowIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Zeile entfernen",
}) => (
  <Icon {...{ modifier }}>
    <DeleteRow title={alt} />
  </Icon>
);

export const AddColumnIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Spalte hinzufügen",
}) => (
  <Icon {...{ modifier }}>
    <AddColumn title={alt} />
  </Icon>
);

export const DeleteColumnIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Spalte entfernen",
}) => (
  <Icon {...{ modifier }}>
    <DeleteColumn title={alt} />
  </Icon>
);

export const TableHeadIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <TableHead title={alt} />
  </Icon>
);

export const TableWidthIcon: React.FC<IconProps> = ({ modifier, alt }) => (
  <Icon {...{ modifier }}>
    <TableWidth title={alt} />
  </Icon>
);

export const InstagramIcon: React.FC<IconProps> = ({
  modifier,
  alt = "Instagram",
}) => (
  <Icon {...{ modifier }}>
    <Instagram title={alt} />
  </Icon>
);

export default Icon;
