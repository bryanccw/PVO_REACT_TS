import { Routes, Route } from 'react-router-dom';
import { AdminMenu } from './menus';
import styles from './Admin.module.scss';
import { BranchSetup, RaceSetup, PaymentModeSetup, ProductCategorySetup } from './admin-setup';
import { UsersSetup } from './general-setup';

export const AdminHome = () => {
  return (
    <div className={styles['admimPortal']}>
      <AdminMenu />

      <div className={styles['adminContent']}>
        <Routes>
          <Route path="/general-setup/users" element={<UsersSetup />} />
          <Route path="/admin-setup/branch" element={<BranchSetup />} />
          <Route path="/admin-setup/race" element={<RaceSetup />} />
          <Route path="/admin-setup/payment-mode" element={<PaymentModeSetup />} />
          <Route path="/admin-setup/product-category" element={<ProductCategorySetup />} />
        </Routes>
      </div>
    </div>
  );
};
