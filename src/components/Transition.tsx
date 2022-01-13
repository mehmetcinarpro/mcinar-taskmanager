/**
 * https://gist.github.com/adamwathan/e0a791aa0419098a7ece70028b2e641e
 */
import {
    Children, cloneElement, createContext, PropsWithChildren, useContext, useEffect, useRef
} from "react";
import { CSSTransition as ReactCSSTransition } from "react-transition-group";

type TransitionState = {
  parent: {
    appear?: string;
    show?: boolean;
    isInitialRender?: boolean;
  };
};

const TransitionContext = createContext<TransitionState>({
  parent: {},
});

function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

type TransitionProps = {
  show?: boolean;
  enter?: string;
  enterFrom?: string;
  enterTo?: string;
  leave?: string;
  leaveFrom?: string;
  leaveTo?: string;
  appear?: string;
  unmountOnExit?: boolean;
  tag?: string;
  className?: string;
};

const CSSTransition = ({
  show,
  enter = "",
  enterFrom = "",
  enterTo = "",
  leave = "",
  leaveFrom = "",
  leaveTo = "",
  appear,
  className,
  children,
}: PropsWithChildren<TransitionProps>) => {
  const enterClasses = enter.split(" ").filter((s) => s.length);
  const enterFromClasses = enterFrom.split(" ").filter((s) => s.length);
  const enterToClasses = enterTo.split(" ").filter((s) => s.length);
  const leaveClasses = leave.split(" ").filter((s) => s.length);
  const leaveFromClasses = leaveFrom.split(" ").filter((s) => s.length);
  const leaveToClasses = leaveTo.split(" ").filter((s) => s.length);

  function addClasses(node: HTMLElement, classes: string[]) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node: HTMLElement, classes: string[]) {
    classes.length && node.classList.remove(...classes);
  }

  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <ReactCSSTransition
      nodeRef={nodeRef}
      appear={appear}
      unmountOnExit={true}
      in={show}
      addEndListener={(done) => {
        nodeRef.current?.addEventListener("transitionend", done, false);
      }}
      onEnter={() => {
        if (nodeRef.current) {
          addClasses(nodeRef.current, [...enterClasses, ...enterFromClasses]);
        }
      }}
      onEntering={() => {
        if (nodeRef.current) {
          removeClasses(nodeRef.current, enterFromClasses);
          addClasses(nodeRef.current, enterToClasses);
        }
      }}
      onEntered={() => {
        if (nodeRef.current) {
          removeClasses(nodeRef.current, [...enterToClasses, ...enterClasses]);
        }
      }}
      onExit={() => {
        if (nodeRef.current) {
          addClasses(nodeRef.current, [...leaveClasses, ...leaveFromClasses]);
        }
      }}
      onExiting={() => {
        if (nodeRef.current) {
          removeClasses(nodeRef.current, leaveFromClasses);
          addClasses(nodeRef.current, leaveToClasses);
        }
      }}
      onExited={() => {
        if (nodeRef.current) {
          removeClasses(nodeRef.current, [...leaveToClasses, ...leaveClasses]);
        }
      }}
    >
      <div className={className} ref={nodeRef}>
        {children}
      </div>
    </ReactCSSTransition>
  );
};

const Transition = ({ show, appear, ...rest }: PropsWithChildren<TransitionProps>) => {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return <CSSTransition appear={parent.appear} show={parent.show} {...rest} />;
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  );
};

export default Transition;
