import { DependencyList, useEffect, useMemo, useState } from "react";

const didAllDependenciesChange = (
  target: DependencyList,
  newDeps: DependencyList
) => target.every((dep, i) => dep !== newDeps[i]);

const useMemoAllDepsChange = <T,>(fn: () => T, deps: DependencyList): T => {
  const [changeTarget, setChangeTarget] = useState(deps);

  useEffect(() => {
    if (didAllDependenciesChange(changeTarget, deps)) {
      setChangeTarget(deps);
    }
  }, [changeTarget, deps]);

  return useMemo(fn, [changeTarget]);
};

export default useMemoAllDepsChange;
