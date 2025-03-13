import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";

export default function Handler(props: unknown) {
  return (
    <div className="stack-auth-container">
      <StackHandler fullPage app={stackServerApp} routeProps={props} />
    </div>
  );
}
