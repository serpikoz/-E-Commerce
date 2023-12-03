import { BillBoardClient } from "./compenents/client";

const BillBoardsPage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillBoardClient />
      </div>
    </div>
  );
};

export default BillBoardsPage;
