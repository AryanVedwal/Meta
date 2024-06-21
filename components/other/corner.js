const Corner = () => (
  <>
    <div
      className="absolute z-20 -top-0 -right-0 aspect-square h-[40px] rounded-full"
      style={{
        boxShadow: "4px -4px 0 #fff",
      }}
    />

    <div className="absolute -top-0 -right-0 aspect-square h-[40px] rounded-tr-3xl bg-db z-30 " />

    <div
      className="absolute z-10 -top-0.5 -right-0.5 aspect-square h-[30px] rounded-full"
      style={{
        boxShadow: "10px -10px 0 #08111c",
      }}
    />
  </>
);

export default Corner;
