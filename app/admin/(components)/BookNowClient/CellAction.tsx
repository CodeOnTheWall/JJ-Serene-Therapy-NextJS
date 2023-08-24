"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BookNowClientColumn } from "./Columns";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Trash } from "lucide-react";
import AlertModal from "@/components/modals/AlertModal";
import connectToDB from "@/utils/database";
import BookNowClient from "@/models/booknowclient";

interface CellActionProps {
  data: BookNowClientColumn;
}

export default function CellAction({ data }: CellActionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const params = useParams();

  const bookNowClientDB = async () => {
    try {
      connectToDB();
      const bookNowClientRes = await BookNowClient.deleteOne({
        name: "Eddard Stark",
      });
      return bookNowClientRes; // Return the query results
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await fetch(`/api/inquiringClient/${params.inquiringClientId}/`, {
        method: "DELETE",
      });
      router.refresh();
      toast.success("Inquring Client Deleted");
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setIsLoading(false);
      setIsOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={onDelete}
        isLoading={isLoading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className=" h-8 w-8 p-0">
            {/* sr for screen readers */}
            <span className=" sr-only">Open Menu</span>
            <MoreHorizontal className=" h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setIsOpen(true)}>
            <Trash className=" mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
