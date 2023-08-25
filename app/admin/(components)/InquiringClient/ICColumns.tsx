"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./ICCellAction";

// Data table from shadcn
// this is step 1 Column Definitions
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type InquiringClientColumn = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  id: string;
};

// header is what is shown
export const Columns: ColumnDef<InquiringClientColumn>[] = [
  {
    // accessorKeys correspond to the key in the data object (inquiringClientData)
    // that contains the value for that column
    // hence firstName etc are types of the inquiringClientData
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "message",
    header: "Message",
  },
  {
    accessorKey: "createdAt",
    header: "When Client Submitted Form",
  },
  {
    id: "actions",
    // row represents a row of data in the data table, and row.original
    // provides access to the original data object associated with
    // that row. These properties are used in the code to pass the
    // row's original data to the CellAction component for further
    // processing or rendering.
    // the original data object is the BillboardColumn type
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
