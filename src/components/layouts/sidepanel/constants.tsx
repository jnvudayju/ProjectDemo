import Icon from "../../shared/icon/Icon";
import { ReactComponent as ChatIcon } from "../../../assets/icons/chat-icon.svg";
import { ReactComponent as ExploreIcon } from "../../../assets/icons/explore-icon.svg";
import { ReactComponent as TaskIcon } from "../../../assets/icons/task-icon.svg";
import { ReactComponent as CommunityIcon } from "../../../assets/icons/community-icon.svg";

export const sidepanelMenuOptions = [
  {
    icon: <ChatIcon />,
    title: "Chat",
    key: "chat",
  },
  {
    icon: <ExploreIcon />,
    title: "Explore",
    key: "explore",
  },
  {
    icon: <TaskIcon />,
    title: "Tasks",
    key: "tasks",
  },
  {
    icon: <CommunityIcon />,
    title: "Community",
    key: "community",
  },
];
