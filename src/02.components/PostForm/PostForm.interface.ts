import { UseToggleProps } from "@/01.shared/hooks/useToggle";

export interface UploadImageProps {
  id: number;
  file: File;
}

export interface UploadAudioProps extends UploadImageProps {
  title: string;
  author: string;
}

export interface TransitFileUploadProps {
  handleAddFile: (file: UploadImageProps | UploadAudioProps) => void;
  handleAddMultipleFiles: (
    fileList: UploadImageProps[] | UploadAudioProps[]
  ) => void;
  handleRemoveFile: (id: number) => void;
  files: (UploadImageProps | UploadAudioProps)[];
}

export interface PostFormMediaAudioModalProps {
  isModal: UseToggleProps;
  data: TransitFileUploadProps;
  selectedFile: File | undefined;
}
