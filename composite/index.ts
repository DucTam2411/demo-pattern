import Rect from "./Rect";
import Group from "./Group";

const group1 = new Group("G1");

const group2 = new Group("G2");
group2.add(new Rect("R1"));
group2.add(new Rect("R2"));

group1.add(group2);
group1.add(new Rect("R3"));
group1.move();
