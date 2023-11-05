import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DynamicObjectInterface } from '../../sdk/type';
import styles from './Admin.module.scss';

interface RenderTree {
  id: string;
  name: string;
  url?: string;
  children?: readonly RenderTree[];
}

export const AdminMenu = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();

  //const [openNodes, setOpenNodes] = useState<any[]>([]);

  const menus: RenderTree = {
    id: 'root',
    name: t('framework.menu.admin'),
    children: [
      {
        id: 'general-setup',
        name: t('admin.general'),
        children: [
          {
            id: 'general-users',
            name: t('admin.users.title'),
            url: '/admin/general-setup/users',
          },
        ],
      },
      {
        id: 'master-setup',
        name: t('admin.masterSetup'),
        children: [
          {
            id: 'admin-setup-branch',
            name: t('admin.branch.title'),
            url: '/admin/admin-setup/branch',
          },
          {
            id: 'admin-setup-payment-mode',
            name: t('admin.paymentMode.title'),
            url: '/admin/admin-setup/payment-mode',
          },
          {
            id: 'admin-setup-race',
            name: t('admin.race.title'),
            url: '/admin/admin-setup/race',
          },
          {
            id: 'admin-setup-product-category',
            name: t('admin.productCategory.title'),
            url: '/admin/admin-setup/product-category',
          },
        ],
      },
    ],
  };

  const nav = (e: DynamicObjectInterface, menu: RenderTree) => {
    if (!menu?.children && menu?.url) {
      navigate(menu.url);
    }
  };
  const renderTree = (nodes: RenderTree) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={nodes.name}
      onClick={e => nav(e, nodes)}
      className={styles['tree-item']}
    >
      {Array.isArray(nodes.children) ? nodes.children.map(node => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <div className={styles['portalMenus']}>
      <TreeView
        aria-label="rich object"
        className="www"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={['root']}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      >
        {renderTree(menus)}
      </TreeView>
    </div>
  );
};
