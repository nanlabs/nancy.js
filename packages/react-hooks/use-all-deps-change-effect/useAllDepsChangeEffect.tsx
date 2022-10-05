import { EffectCallback, useEffect, useState } from "react";

const didAllDependenciesChange = (target: any[], newDeps: any[]) =>
  target.every((dep, i) => dep !== newDeps[i]);

const useAllDepsChangeEffect = (fn: EffectCallback, deps: any[]) => {
  const [changeTarget, setChangeTarget] = useState(deps);

  useEffect(() => {
    if (didAllDependenciesChange(changeTarget, deps)) {
      setChangeTarget(deps);
    }
  }, [deps, changeTarget]);

  useEffect(fn, [fn, changeTarget]);
};

export default useAllDepsChangeEffect;
