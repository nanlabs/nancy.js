import { DependencyList, EffectCallback, useEffect, useState } from "react";

const didAllDependenciesChange = (
  target: DependencyList,
  newDeps: DependencyList
) => target.every((dep, i) => dep !== newDeps[i]);

const useAllDepsChangeEffect = (fn: EffectCallback, deps: DependencyList) => {
  const [changeTarget, setChangeTarget] = useState(deps);

  useEffect(() => {
    if (didAllDependenciesChange(changeTarget, deps)) {
      setChangeTarget(deps);
    }
  }, [deps, changeTarget]);

  useEffect(fn, [changeTarget]);
};

export default useAllDepsChangeEffect;
