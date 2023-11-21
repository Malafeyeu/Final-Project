import { ITab, Tabs } from "../../../types";

const Tab = (props: ITab) => {
  const {onClick, text, style, id, isActive=false} = props;

  return (
    <li
      id={id}
      className={isActive ? Tabs.ACTIVE : Tabs.DISABLED}
      onClick={onClick}
      style={style}
    >
      <span>
        {text}
      </span>
    </li>
  )
}

export { Tab }