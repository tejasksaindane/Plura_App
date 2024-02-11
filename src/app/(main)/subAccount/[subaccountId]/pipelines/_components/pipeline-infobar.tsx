import CreatePipelineForm from "@/components/forms/create-pipeline-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { useModal } from "@/providers/modal-provider";
import { Pipeline } from "@prisma/client";
import { ChevronsUpDown } from "lucide-react";
import React, { useState } from "react";

type Props = {
  subAccountId: string;
  pipelines: Pipeline[];
  pipelineId: string;
};

const PipelineInfoBar = ({ pipelineId, pipelines, subAccountId }: Props) => {
  const { setOpen: setOpenModal, setClose } = useModal();
  const [open, setOpen] = useState(false);
    const [value, setValue] = useState(pipelineId);
    const handleClickCreatePipeline = () => {
        setOpenModal(
            <CustomModal
                title="Create a pipeline"
                subheading="Pipelines allows you to group tickets into lanes and track your business processes all in one place">
            <CreatePipelineForm subAccountId={subAccountId} />
                <div></div>
            </CustomModal>
        )
    }


  return (
    <div>
      <div className="flex items-end gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? pipelines.find((pipeline) => pipeline.id === value)?.name
                              : "select a pipeline..."}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
            </Button>
          </PopoverTrigger>
        </Popover>
      </div>
    </div>
  );
};

export default PipelineInfoBar;
