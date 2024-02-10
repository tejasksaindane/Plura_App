import { Tabs, TabsList } from "@/components/ui/tabs";
import { db } from "@/lib/db";
import { getLanesWithTicketsAndTags, getPipelineDetails } from "@/lib/queries";
import { LaneDetail } from "@/lib/types";
import { redirect } from "next/navigation";
import React from "react";
import PipelineInfoBar from "../_components/pipeline_infobar";

type Props = {
  params: {
    subaccountId: string;
    pipelineId: string;
  };
};

const PipelinePage = async ({ params }: Props) => {
  const pipelineDetails = await getPipelineDetails(params.pipelineId);

  if (!pipelineDetails)
    return redirect(`/subaccount/${params.subaccountId}/pipelines`);

  const pipelines = await db.pipeline.findMany({
    where: {
      subAccountId: params.subaccountId,
    },
  });

  const lanes = (await getLanesWithTicketsAndTags(
    params.pipelineId
  )) as LaneDetail[];
  return (
    <Tabs defaultValue="view" className="w-full">
      <TabsList className="bg-transparent border-b-2 h-16 w-full justify-between mb-4">
        <PipelineInfoBar
          pipelineId={params.pipelineId}
          subAccountId={params.subaccountId}
          pipelines={pipelines}
        />
      </TabsList>
    </Tabs>
  );
};

export default PipelinePage;
