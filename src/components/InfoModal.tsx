import React, { ReactNode } from "react";
import styles from "./InfoModal.module.css";
import { IconButton, Grid, styled } from "@mui/material";
import Close from "@mui/icons-material/Close";

interface InfoModalProps {
  isOpen: boolean;
  closeModal: () => void;
  id: any;
  content: ReactNode;
  title: any;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  closeModal,
  content,
  title,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  const Title = styled("h2")({
    textAlign: "center",
    margin: "0",
    paddingBottom: "1rem",
  });

  return (
    <div className={styles["modal-container"]}>
      <div>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid>
            <Title id="modal-title">{title}</Title>
            {children}
          </Grid>
          <Grid>
            <div className={styles["modal-header"]}>
              <IconButton
                style={{ background: "#C6685D" }}
                onClick={closeModal}
              >
                <Close />
              </IconButton>
            </div>
          </Grid>
        </Grid>

        <p className={styles["modal-content"]}>{content}</p>
      </div>
    </div>
  );
};
