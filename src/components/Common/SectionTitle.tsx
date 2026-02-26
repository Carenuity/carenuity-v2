const SectionTitle = ({
  title,
  paragraph,
  button,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  button?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[32px] dark:text-white">
          {title}
        </h2>
        <p className="dark:text-green text-body-color text-base leading-relaxed! md:text-lg">
          {paragraph}
        </p>
        <button className="shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 mt-4 hidden rounded-full px-8 py-1 text-base font-medium text-white transition duration-300 md:block md:px-4 lg:px-4 xl:px-4">
          {button}
        </button>
      </div>
    </>
  );
};

export default SectionTitle;
