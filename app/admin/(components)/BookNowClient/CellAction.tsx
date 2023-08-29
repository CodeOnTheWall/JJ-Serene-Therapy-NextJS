"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { MoreHorizontal, Trash, Edit } from "lucide-react";
import AlertModal from "@/components/modals/AlertModal";

interface CellActionProps {
  data: BookNowClientColumn;
}

export default function CellAction({ data }: CellActionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await fetch(`/api/booknowclient/${data.id}/`, {
        method: "DELETE",
      });
      router.refresh();
      toast.success("Book Now Client Deleted");
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
          <DropdownMenuItem
            // we have the id since the passed in data gets the id automatically
            // from the row
            onClick={() => router.push(`/booknow/${data.id}`)}
          >
            <Edit className=" mr-2 h-4 w-4" />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsOpen(true)}>
            <Trash className=" mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
