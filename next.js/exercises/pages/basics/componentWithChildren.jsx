import Item from "../../components/Item";
import List from "../../components/list";

export default function componentsWithChildren() {
    return (
        <div>
            <List>
                <Item content="Item #01" />
                <Item content="Item #02" />
                <Item content="Item #03" />
                <Item content="Item #04" />
                <Item content="Item #05" />
                <Item content="Item #06" />
            </List>
        </div>
    )
}