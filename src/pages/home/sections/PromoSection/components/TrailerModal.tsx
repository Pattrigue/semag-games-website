import { AspectRatio, Modal } from "@mantine/core";
import classes from "./TrailerModal.module.css";

const TRAILER_EMBED_URL =
  "https://www.youtube-nocookie.com/embed/c2SyZstvJmc?autoplay=1&rel=0";

interface TrailerModalProps {
  opened: boolean;
  onClose: () => void;
}

export function TrailerModal({ opened, onClose }: TrailerModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="auto"
      centered
      padding={0}
      radius="lg"
      withCloseButton={false}
      classNames={{ content: classes.content }}
    >
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={TRAILER_EMBED_URL}
          title="Vibrant Venture trailer"
          className={classes.frame}
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </AspectRatio>
    </Modal>
  );
}
