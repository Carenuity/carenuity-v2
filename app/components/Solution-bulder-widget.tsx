import React from "react";

const SolutionWidget = ({ solutionId }: { solutionId: string }) => {
  const solutionsWidgetUrl =
    "https://solutions.carenuity.com/widgets/solutions/";

  return (
    <>
      <div
        className="position-relative w-100 rounded-4 overflow-hidden mb-2 mt-1"
        style={{ height: "19rem" }}
      >
        {/* <div style={{ height: 0, paddingTop: '56.25%' }}> */}
        <iframe
          src={solutionsWidgetUrl + solutionId}
          allow="usb *; serial *;"
          loading="lazy"
          className="w-100 h-100 position-absolute top-0 start-0"
        />
        {/* </div> */}
      </div>
    </>
  );
};

export default SolutionWidget;
