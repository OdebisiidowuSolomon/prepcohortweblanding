/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function HomeAccordionArea() {
  // <!-- Start Accordion Area  -->
  return (
    <div className="rbt-accordion-area accordion-style-1 rbt-accordion-color-white bg-color-darker rbt-section-gapBottom pt--60 pt_sm--0 overflow-hidden position-relative top-circle-shape-top overlpping-call-to-action">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-sm-12">
            <div className="section-title text-center pb--60">
              <span className="subtitle bg-secondary-opacity">
                Check out our FAQ section to see if we can help.
              </span>
              <h2 className="title mb_sm--0 text-center color-white-off">
                Do you have any Question
              </h2>
            </div>

            <AccordionItem />
            <AccordionItem />
            <AccordionItem />

            {/* <div className="rbt-accordion-style rbt-accordion-02 accordion">
              <div className="accordion" id="accordionExamplea1">
                <div className="accordion-item card">
                  <h2 className="accordion-header card-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is PrepCohort? How does it work?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    // className="accordion-collapse collapsel show"
                    className="accordion-collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExamplea1"
                  >
                    <div className="accordion-body card-body">
                      <p className="text-white" style={{ color: "red" }}>
                        Lorem Lorem Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Sapiente iste harum optio recusandae!
                        Neque at, adipisci ipsa sequi corporis rem deleniti
                        facilis.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    /* <!-- End Accordion Area  --> */
  );
}

export default HomeAccordionArea;

const AccordionItem = ({
  label,
  subLabel,
}: {
  label?: string;
  subLabel?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  const handleToggleExpandHeight = () => {
    const current = divRef.current;
    if (current) {
      const { scrollHeight } = current;
      const _height = isOpen ? 0 : scrollHeight;
      setIsOpen((p) => !p);
      setHeight(_height);
    }
  };

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center! pb-4 cursor-pointer"
        style={{ borderBottom: "1.5px solid", borderColor: "#A1A9AC" }}
        onClick={handleToggleExpandHeight}
      >
        <p
          className={`text-3xl font-bold text-[#A1A9AC] ${
            isOpen && "text-white"
          }`}
          style={{ margin: 0, padding: 0 }}
        >
          {label || "What is PrepCohort? How does it work?"}
        </p>
        {isOpen ? <FaAngleUp /> : <FaAngleDown color="#A1A9AC" />}
      </div>
      <div
        className={`pt-4 text-[#A1A9AC] transition-all ${
          isOpen && "text-white "
        } ${!isOpen && "overflow-hidden"}`}
        style={{ height }}
        ref={divRef}
      >
        {subLabel ||
          `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
        natus repudiandae commodi perspiciatis doloribus id assumenda
        consequatur quia necessitatibus sunt aspernatur, sapiente nobis? Quasi?`}
      </div>
    </div>
  );
};
