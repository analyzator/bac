import React from "react"

interface Props {
  setModal: React.Dispatch<React.SetStateAction<any>>
}

export const Modal: React.FC<Props> = ({ setModal }) => {
  return (
    <div>
      <div className="bac__modal">
        <div
          className="bac__modal-overlay"
          onClick={() => setModal(false)}
        ></div>
        <div className="bac__modal-content">
          <h2 className="bac__modal-content-title"> Pozor!</h2>
          <h3 className="bac__modal-content-body" style={{font: 'revert'}}>
          Je to hypotéza, informácia ktorá by sa nemala používať na rozhodnútie kedy sadnúť za volant!
          </h3>
          <button
            className="bac__modal-content-btn"
            onClick={() => setModal(false)}
          >
            Vložiť
          </button>
        </div>
      </div>
    </div>
  )
}
