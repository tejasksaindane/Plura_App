"use client";
import { useModal } from "@/providers/modal-provider";
import React from "react";
import { Button } from "../ui/button";
import CustomModal from "../global/custom-modal";
import UploadMediaForm from "../forms/upload-media";

type Props = {
  subaccountId: string;
};

const MediaUploadButton = ({ subaccountId }: Props) => {
  const { isOpen, setOpen, setClose } = useModal();
  return (
    <Button
      onClick={() => {
        setOpen(
          <CustomModal
            title="upload media"
            subheading="upload a file to your media bucket"
            >
                <UploadMediaForm subaccountId={subaccountId}>

                </UploadMediaForm>
          </CustomModal>
        );
      }}
    >
      upload
    </Button>
  );
};

export default MediaUploadButton;
