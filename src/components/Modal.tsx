import React from "react";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<any>>;
  // content: ReactNode;
  content: any;
  btnText: any;
  title: any;
  customClass: any;
  customHeader: any;
}

export const Modal: React.FC<Props> = ({
  setModal,
  content,
  title,
  btnText,
  customClass,
  customHeader,
}) => {
  return (
    <div>
      <div className="bac__modal">
        <div
          className="bac__modal-overlay"
          onClick={() => setModal(false)}
        ></div>
        <div className={`bac__modal-content ${customClass}`}>
          <h2 className={`bac__modal-content-title ${customHeader}`}>
            {" "}
            {title}
          </h2>
          <h3 className="bac__modal-content-body">{content}</h3>
          <button
            className="bac__modal-content-btn"
            onClick={() => setModal(false)}
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};
