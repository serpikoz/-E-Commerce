import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { BillBoardClient } from "./compenents/client";
import { BillBoardColumn } from "./compenents/columns";

const BillBoardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billBoard.findMany({
    where: { storeId: params.storeId },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillBoards: BillBoardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "do MMMM,yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillBoardClient data={formattedBillBoards} />
      </div>
    </div>
  );
};

export default BillBoardsPage;
