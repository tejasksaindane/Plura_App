import { TicketWithTags } from "@/lib/types";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  setAllTickets: Dispatch<SetStateAction<TicketWithTags>>;
  ticket: TicketWithTags[0];
  subaccountId: string;
  allTickets: TicketWithTags;
  index: number;
};

const PipelineTicket = (props: Props) => {
  return <Draggable draggableId={ticket.id.toString()}></Draggable>;
};

export default PipelineTicket;
