import React from "react";
import { UpdateIcon, ExclamationMarkIcon } from "./Icon";

export default {
    title: "Icon"
};

export const SuccessModifer = () => <UpdateIcon modifier='success' />;
export const DangerModifer = () => <UpdateIcon modifier='danger' />;
export const InfoModifer = () => <UpdateIcon modifier='info' />;
export const Update = () => <UpdateIcon />;
export const ExclamationMark = () => <ExclamationMarkIcon />;
