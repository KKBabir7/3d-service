// utils/useSSRId.js
import { useId, useMemo } from 'react';

export function useSSRId(prefix = 'id') {
  const reactId = useId();
  const safeId = useMemo(() => `${prefix}_${reactId}`, [prefix, reactId]);
  return safeId;
}
