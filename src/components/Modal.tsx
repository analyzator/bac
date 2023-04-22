import React, { ReactNode } from "react";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<any>>;
  content: ReactNode;
  btnText: string;
  title: any;
}

export const Modal: React.FC<Props> = ({
  setModal,
  content,
  title,
  btnText,
}) => {
  return (
    <div>
      <div className="bac__modal">
        <div
          className="bac__modal-overlay"
          onClick={() => setModal(false)}
        ></div>
        <div className="bac__modal-content">
          <h2 className="bac__modal-content-title"> {title}</h2>
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
