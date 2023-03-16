import { UseToggleProps } from "@/01.shared/hooks/useToggle";
import Toggle from "@/02.components/UI/Toggle/Toggle";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";

const PostModal = (props: UseToggleProps) => {
  const { toggle, value } = props;

  return (
    <motion.ul
      className="modal-box"
      initial={{ opacity: 0, scale: 0, rotate: 45 }}
      animate={{ opacity: 1, scale: 1, rotate: 0, y: "100%" }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <li className="modal-option group">
        <span className="text-red-500">Удалить</span>
        <MdDelete className="text-red-500" size={18} />
      </li>
      <li className="modal-option" onClick={toggle}>
        <span className="">Комментарии</span>
        <Toggle {...props} />
      </li>
    </motion.ul>
  );
};

export default PostModal;
