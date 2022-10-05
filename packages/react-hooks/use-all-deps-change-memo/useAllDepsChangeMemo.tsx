import { useEffect, useMemo, useState } from "react";

const didAllDependenciesChange = (target: any[], newDeps: any[]) =>
  target.every((dep, i) => dep !== newDeps[i]);

const useMemoAllDepsChange = (fn: () => unknown, deps: any[]) => {
  const [changeTarget, setChangeTarget] = useState(deps);

  useEffect(() => {
    if (didAllDependenciesChange(changeTarget, deps)) {
      setChangeTarget(deps);
    }
  }, [changeTarget, deps]);

  return useMemo(fn, [fn, changeTarget]);
};

export default useMemoAllDepsChange;
