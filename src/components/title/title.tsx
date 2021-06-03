import agent from "../../services/agent.service";

interface ComponentTitleProps{
    titleSize: number
    titleName: string
}

const ComponentTitle = (props: ComponentTitleProps) => {
    return (
        <span style={{fontSize: props.titleSize}}>{props.titleName}</span>
    )
}
export default ComponentTitle;
