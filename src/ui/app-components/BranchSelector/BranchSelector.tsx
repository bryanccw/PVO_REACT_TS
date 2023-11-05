import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux-hooks';
import type { BranchModel } from '../../../sdk/type';
import { frameworkActions } from '../../../sdk/store/frameworkActions';
import styles from './BranchSelector.module.scss';

export const BranchSelector = () => {
  const dispatch = useAppDispatch();

  const { branches, selectedBranch } = useAppSelector(s => s.framework);

  useEffect(() => {
    const selected = JSON.parse(localStorage.getItem('selectedBranch') || '{}');
    if (selected['_id']) {
      dispatch(frameworkActions.setSelectedBranch(selected));
    }
  }, []);

  const changeBranch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = branches?.find((b: BranchModel) => b.branchCode === e.target.value);
    localStorage.setItem('selectedBranch', JSON.stringify(selected));
    dispatch(frameworkActions.setSelectedBranch(selected));
  };

  return (
    <div className={styles['branch-selector']}>
      <select onChange={changeBranch} value={selectedBranch?.branchCode}>
        <option value="">-- please select --</option>
        {branches &&
          branches.map((branch: BranchModel, i: number) => {
            return (
              <option key={i} value={branch.branchCode}>
                {branch.branchName}
              </option>
            );
          })}
      </select>
    </div>
  );
};
