const Page = ({
  params,
}: {
  params: { id: string; userId: string; categoryId: string };
}) => {
  return (
    <>
      <div className="m-4 font-bold">Blog ID:{params.id} </div>
      <div className="m-4 font-bold">User ID:{params.userId} </div>
      <div className="m-4 font-bold">Category ID: {params.categoryId} </div>
    </>
  );
};

export default Page;
