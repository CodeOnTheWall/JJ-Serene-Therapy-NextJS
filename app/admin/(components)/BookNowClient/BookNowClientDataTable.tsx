import Heading from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/DataTable";
import { BookNowClientColumn, Columns } from "./Columns";

interface BookNowDataTableProps {
  BookNowClientData: BookNowClientColumn[];
}

export default function BookNowClientDataTable({
  BookNowClientData,
}: BookNowDataTableProps) {
  return (
    <>
      <div className=" flex items-center justify-between">
        <Heading
          title="Clients who have booked"
          description="View clients who have submitted a book now form"
        />
      </div>
      <Separator />
      <DataTable
        searchKey="firstName"
        // columns from Column Definition in Columns
        columns={Columns}
        // data is data to be seen inside the Columns
        data={BookNowClientData}
      />
      <Separator />
    </>
  );
}
