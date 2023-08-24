import Heading from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/DataTable";
import { InquiringClientColumn, Columns } from "./ICColumns";

interface InquiringClientDataTableProps {
  InquiringClientData: InquiringClientColumn[];
}

export default function InquiringClientDataTable({
  InquiringClientData,
}: InquiringClientDataTableProps) {
  return (
    <>
      <div className=" flex items-center justify-between">
        <Heading
          title="Inquiring Clients"
          description="View clients who have submitted a contact me form"
        />
      </div>
      <Separator />
      <DataTable
        searchKey="firstName"
        // columns from Column Definition in Columns
        columns={Columns}
        // data is data to be seen inside the Columns
        data={InquiringClientData}
      />
      <Separator />
    </>
  );
}
