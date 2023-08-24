import Heading from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/DataTable";
import { BookNowClientColumn, Columns } from "./Columns";

interface BookNowClientDataTableProps {
  BookNowClientData: BookNowClientColumn[];
}

export default function BookNowClientDataTable({
  BookNowClientData,
}: BookNowClientDataTableProps) {
  return (
    <>
      <div className=" flex items-center justify-between">
        <Heading
          title="Book Now Clients"
          description="View clients who have booked an appointment and filled out the Book Now form"
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
