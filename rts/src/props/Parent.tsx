import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC onClick={() => console.log("Clicked!!!")} color="red">
      <div>Lol</div>
    </ChildAsFC>
  );
};
export default Parent;
